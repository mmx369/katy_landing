import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import { consentVersion } from "@/data/legal";
import {
  isValidCompany,
  isValidContact,
  isValidEmail,
  isValidName,
  isValidTask,
  normalizeValue,
} from "@/lib/contact-validation";

interface ContactPayload {
  name: string;
  company: string;
  task: string;
  contact: string;
  variant: "request" | "contact";
  companyWebsite?: string;
  consent: boolean;
  consentVersion: string;
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
    typeof candidate.company === "string" &&
    typeof candidate.task === "string" &&
    typeof candidate.contact === "string" &&
    typeof candidate.consent === "boolean" &&
    typeof candidate.consentVersion === "string" &&
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

// The nginx in front of this app overwrites X-Real-IP with the socket address, so it is the only
// header a client cannot forge. X-Forwarded-For is appended to, which makes its last entry trusted.
function extractClientIp(request: Request) {
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const entries = forwardedFor.split(",");
    return entries[entries.length - 1]?.trim() || "unknown";
  }

  return "unknown";
}

function isCrossSiteRequest(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") {
    return true;
  }

  const origin = request.headers.get("origin");
  if (!origin) {
    return false;
  }

  try {
    return new URL(origin).host !== request.headers.get("host");
  } catch {
    return true;
  }
}

function readErrorField(error: unknown, key: "code" | "responseCode" | "command") {
  if (typeof error !== "object" || error === null || !(key in error)) {
    return undefined;
  }

  const value = Reflect.get(error, key);
  return typeof value === "string" || typeof value === "number" ? value : undefined;
}

// Structured fields only: SMTP error messages can echo the submitted address back.
function logDeliveryFailure(error: unknown) {
  console.error("[contact] Заявка не отправлена", {
    name: error instanceof Error ? error.name : "UnknownError",
    code: readErrorField(error, "code"),
    responseCode: readErrorField(error, "responseCode"),
    command: readErrorField(error, "command"),
  });
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

// Built once per process: a fresh transport on every submission adds a needless SMTP handshake.
let mailer: { transport: ReturnType<typeof nodemailer.createTransport>; from: string; to: string } | null = null;

function getMailer() {
  if (mailer) {
    return mailer;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTACT_RECEIVER_EMAIL ?? from;

  if (!host || !Number.isFinite(port) || !user || !pass || !from || !to) {
    return null;
  }

  mailer = {
    transport: nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: true,
      auth: { user, pass },
      // Nodemailer waits two minutes by default; a blocked outbound port would hang the request.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    }),
    from,
    to,
  };

  return mailer;
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

    if (isCrossSiteRequest(request)) {
      return NextResponse.json({ error: "Некорректный источник запроса." }, { status: 403 });
    }

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

    if (!payload.consent) {
      return NextResponse.json(
        { error: "Отметьте согласие на обработку персональных данных." },
        { status: 400 }
      );
    }

    if (payload.consentVersion !== consentVersion) {
      return NextResponse.json(
        { error: "Текст согласия обновился. Обновите страницу и отправьте заявку еще раз." },
        { status: 409 }
      );
    }

    if (
      !isValidName(payload.name) ||
      !isValidCompany(payload.company) ||
      !isValidTask(payload.task) ||
      !isValidContact(payload.contact)
    ) {
      return NextResponse.json({ error: "Заполните поля формы корректно." }, { status: 400 });
    }

    if (isDisposableEmail(payload.contact)) {
      return NextResponse.json(
        { error: "Укажите рабочий адрес электронной почты или телефон." },
        { status: 400 }
      );
    }

    const fingerprint = buildSubmissionFingerprint(clientIp, payload.contact, payload.task);
    if (isDuplicateSubmission(fingerprint)) {
      return NextResponse.json(
        { error: "Похожая заявка уже отправлена недавно. Дождитесь ответа или уточните детали." },
        { status: 429 }
      );
    }

    const mailer = getMailer();
    if (!mailer) {
      console.error("[contact] SMTP не настроен: проверьте переменные окружения");
      return NextResponse.json(
        { error: "Не удалось отправить сообщение. Попробуйте еще раз." },
        { status: 500 }
      );
    }

    const replyToAddress = isValidEmail(payload.contact) ? payload.contact : undefined;
    const subjectPrefix = payload.variant === "request" ? "Новая заявка" : "Новое сообщение";
    const consentedAt = new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Europe/Moscow",
      dateStyle: "long",
      timeStyle: "medium",
    }).format(new Date());
    const companyLine = payload.company
      ? `<p><strong>Компания:</strong> ${escapeHtml(payload.company)}</p>`
      : "";
    await mailer.transport.sendMail({
      from: mailer.from,
      to: mailer.to,
      ...(replyToAddress ? { replyTo: replyToAddress } : {}),
      subject: `${subjectPrefix} с сайта Decode Research`,
      text: [
        `${subjectPrefix} с сайта Decode Research`,
        `Имя: ${payload.name}`,
        payload.company ? `Компания: ${payload.company}` : "",
        `Контакт: ${payload.contact}`,
        "",
        "Согласие на обработку персональных данных: Да",
        `Дата и время согласия: ${consentedAt} (МСК)`,
        `Версия согласия: ${consentVersion}`,
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
        <p><strong>Согласие на обработку персональных данных:</strong> Да</p>
        <p><strong>Дата и время согласия:</strong> ${escapeHtml(consentedAt)} (МСК)</p>
        <p><strong>Версия согласия:</strong> ${escapeHtml(consentVersion)}</p>
        <p><strong>Задача:</strong></p>
        <p>${escapeHtml(payload.task).replaceAll("\n", "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    logDeliveryFailure(error);

    return NextResponse.json(
      { error: "Не удалось отправить сообщение. Попробуйте еще раз." },
      { status: 500 }
    );
  }
}
