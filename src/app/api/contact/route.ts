import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import {
  COMPANY_MAX_LENGTH,
  CONTACT_MAX_LENGTH,
  MIN_COMPANY_LENGTH,
  MIN_NAME_LENGTH,
  MIN_TASK_LENGTH,
  NAME_MAX_LENGTH,
  TASK_MAX_LENGTH,
  isValidContact,
  isValidEmail,
  normalizeValue,
} from "@/lib/contact-validation";

interface ContactPayload {
  name: string;
  company?: string;
  task: string;
  contact: string;
  variant: "request" | "contact";
  companyWebsite?: string;
}

const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_INTERVAL_MS = 8 * 1000;
const DUPLICATE_WINDOW_MS = 30 * 60 * 1000;

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "sharklasers.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "getnada.com",
  "trashmail.com",
  "dispostable.com",
  "maildrop.cc",
  "emailondeck.com",
  "fakeinbox.com",
]);

const ipRateLimit = new Map<string, { count: number; windowStart: number; lastRequestAt: number }>();
const recentSubmissions = new Map<string, number>();

function isValidPayload(payload: unknown): payload is ContactPayload {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const candidate = payload as Partial<ContactPayload>;
  return (
    (candidate.variant === "request" || candidate.variant === "contact") &&
    typeof candidate.name === "string" &&
    typeof candidate.task === "string" &&
    typeof candidate.contact === "string" &&
    (candidate.companyWebsite === undefined || typeof candidate.companyWebsite === "string")
  );
}

function getEmailDomain(value: string) {
  const normalized = value.toLowerCase().trim();
  const atIndex = normalized.lastIndexOf("@");
  if (atIndex < 0) {
    return "";
  }

  return normalized.slice(atIndex + 1);
}

function isDisposableEmail(value: string) {
  if (!isValidEmail(value)) {
    return false;
  }

  return DISPOSABLE_EMAIL_DOMAINS.has(getEmailDomain(value));
}

function hasEnoughLetters(value: string, minLetters: number) {
  const letters = value.match(/[A-Za-zА-Яа-яЁё]/g);
  return (letters?.length ?? 0) >= minLetters;
}

function hasTooManyLinks(value: string) {
  const links = value.match(/https?:\/\/|www\./gi);
  return (links?.length ?? 0) > 1;
}

function hasLongRepeatingFragment(value: string) {
  return /(.)\1{7,}/.test(value);
}

function extractClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = ipRateLimit.get(ip);

  if (!current || now - current.windowStart > RATE_WINDOW_MS) {
    ipRateLimit.set(ip, { count: 1, windowStart: now, lastRequestAt: now });
    return false;
  }

  if (now - current.lastRequestAt < MIN_INTERVAL_MS) {
    current.lastRequestAt = now;
    return true;
  }

  current.count += 1;
  current.lastRequestAt = now;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

function buildSubmissionFingerprint(ip: string, contact: string, task: string) {
  return createHash("sha256")
    .update(`${ip}|${contact.toLowerCase()}|${task.toLowerCase().replace(/\s+/g, " ")}`)
    .digest("hex");
}

function isDuplicateSubmission(fingerprint: string) {
  const now = Date.now();
  const seenAt = recentSubmissions.get(fingerprint);

  if (seenAt && now - seenAt < DUPLICATE_WINDOW_MS) {
    return true;
  }

  recentSubmissions.set(fingerprint, now);
  return false;
}

function cleanupMemoryStores() {
  const now = Date.now();

  for (const [ip, bucket] of ipRateLimit.entries()) {
    if (now - bucket.windowStart > RATE_WINDOW_MS * 2) {
      ipRateLimit.delete(ip);
    }
  }

  for (const [fingerprint, seenAt] of recentSubmissions.entries()) {
    if (now - seenAt > DUPLICATE_WINDOW_MS) {
      recentSubmissions.delete(fingerprint);
    }
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    cleanupMemoryStores();

    const body: unknown = await request.json();

    if (!isValidPayload(body)) {
      return NextResponse.json({ error: "Некорректный формат данных." }, { status: 400 });
    }

    const clientIp = extractClientIp(request);
    if (checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Слишком много запросов. Попробуйте отправить форму чуть позже." },
        { status: 429 }
      );
    }

    const payload = {
      ...body,
      name: normalizeValue(body.name),
      company: normalizeValue(body.company ?? ""),
      task: body.task.trim(),
      contact: normalizeValue(body.contact),
      companyWebsite: normalizeValue(body.companyWebsite ?? ""),
    };

    if (payload.companyWebsite.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (
      payload.name.length < MIN_NAME_LENGTH ||
      payload.name.length > NAME_MAX_LENGTH ||
      payload.task.length < MIN_TASK_LENGTH ||
      payload.task.length > TASK_MAX_LENGTH ||
      payload.contact.length > CONTACT_MAX_LENGTH ||
      !isValidContact(payload.contact) ||
      isDisposableEmail(payload.contact) ||
      !hasEnoughLetters(payload.name, 2) ||
      !hasEnoughLetters(payload.task, 8) ||
      hasLongRepeatingFragment(payload.name) ||
      hasLongRepeatingFragment(payload.task) ||
      hasTooManyLinks(payload.task) ||
      (payload.variant === "request" &&
        (payload.company.length < MIN_COMPANY_LENGTH ||
          payload.company.length > COMPANY_MAX_LENGTH ||
          !hasEnoughLetters(payload.company, 2) ||
          hasLongRepeatingFragment(payload.company)))
    ) {
      return NextResponse.json({ error: "Заполните поля формы корректно." }, { status: 400 });
    }

    const fingerprint = buildSubmissionFingerprint(clientIp, payload.contact, payload.task);
    if (isDuplicateSubmission(fingerprint)) {
      return NextResponse.json(
        { error: "Похожая заявка уже отправлена недавно. Дождитесь ответа или уточните детали." },
        { status: 429 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
    const recipient = process.env.CONTACT_RECEIVER_EMAIL ?? smtpFrom;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom || !recipient) {
      return NextResponse.json(
        { error: "Почтовый сервер не настроен. Проверьте SMTP переменные окружения." },
        { status: 500 }
      );
    }

    const transport = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subjectPrefix = payload.variant === "request" ? "Новая заявка" : "Новое сообщение";
    const companyLine =
      payload.variant === "request"
        ? `<p><strong>Компания:</strong> ${escapeHtml(payload.company || "Не указана")}</p>`
        : "";

    await transport.sendMail({
      from: smtpFrom,
      to: recipient,
      replyTo: payload.contact,
      subject: `${subjectPrefix} с сайта Decode Research`,
      text: [
        `${subjectPrefix} с сайта Decode Research`,
        `Имя: ${payload.name}`,
        payload.variant === "request" ? `Компания: ${payload.company || "Не указана"}` : "",
        `Контакт: ${payload.contact}`,
        "",
        "Задача:",
        payload.task,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>${subjectPrefix} с сайта Decode Research</h2>
        <p><strong>Имя:</strong> ${escapeHtml(payload.name)}</p>
        ${companyLine}
        <p><strong>Контакт:</strong> ${escapeHtml(payload.contact)}</p>
        <p><strong>Тип формы:</strong> ${payload.variant === "request" ? "Оставить заявку" : "Контакты"}</p>
        <p><strong>Задача:</strong></p>
        <p>${escapeHtml(payload.task).replaceAll("\n", "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Не удалось отправить сообщение. Попробуйте еще раз." },
      { status: 500 }
    );
  }
}
