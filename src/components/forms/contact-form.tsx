"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { consentVersion } from "@/data/legal";
import {
  COMPANY_MAX_LENGTH,
  CONTACT_MAX_LENGTH,
  MIN_NAME_LENGTH,
  MIN_TASK_LENGTH,
  NAME_MAX_LENGTH,
  TASK_MAX_LENGTH,
  isValidCompany,
  isValidContact,
} from "@/lib/contact-validation";

interface ContactFormProps {
  variant?: "request" | "contact";
}

interface FormState {
  name: string;
  company: string;
  task: string;
  contact: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  task: "",
  contact: "",
};

export function ContactForm({ variant = "request" }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentTouched, setConsentTouched] = useState(false);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    company: false,
    task: false,
    contact: false,
  });
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = useMemo(() => {
    return {
      name: form.name.trim().length < MIN_NAME_LENGTH,
      company: !isValidCompany(form.company),
      task: form.task.trim().length < MIN_TASK_LENGTH || form.task.trim().length > TASK_MAX_LENGTH,
      contact: form.contact.trim().length > CONTACT_MAX_LENGTH || !isValidContact(form.contact),
    };
  }, [form]);

  const hasErrors = Object.values(errors).some(Boolean) || !consentGiven;

  const handleChange = (field: keyof FormState, value: string) => {
    setSent(false);
    setSubmitError(null);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setTouched({
      name: true,
      company: true,
      task: true,
      contact: true,
    });
    setConsentTouched(true);
    setSubmitError(null);

    if (hasErrors) {
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          variant,
          companyWebsite,
          consent: true,
          consentVersion,
        }),
      });

      if (!response.ok) {
        const responseBody = (await response.json()) as { error?: string };
        setSubmitError(responseBody.error ?? "Не удалось отправить заявку. Попробуйте позже.");
        return;
      }

      setSent(true);
      setForm(initialState);
      setConsentGiven(false);
      setConsentTouched(false);
      setTouched({
        name: false,
        company: false,
        task: false,
        contact: false,
      });
    } catch {
      setSubmitError("Ошибка сети. Проверьте интернет и попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showConsentError = consentTouched && !consentGiven;

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-[var(--color-border-strong)] bg-white/86 px-4 py-3 text-sm text-[var(--color-midnight)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          htmlFor="companyWebsite"
          aria-hidden="true"
        >
          Company website
        </label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          value={companyWebsite}
          onChange={(event) => setCompanyWebsite(event.target.value)}
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="name">
          Как вас зовут
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          onChange={(event) => handleChange("name", event.target.value)}
          className={inputClassName}
          placeholder="Например, Анна"
          autoComplete="name"
          maxLength={NAME_MAX_LENGTH}
          required
        />
        {touched.name && errors.name ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">
            Укажите имя, чтобы мы могли обратиться корректно.
          </p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="company">
          Компания
          <span className="ml-1.5 font-normal text-[var(--color-muted-strong)]">- необязательно</span>
        </label>
        <input
          id="company"
          name="company"
          value={form.company}
          onBlur={() => setTouched((prev) => ({ ...prev, company: true }))}
          onChange={(event) => handleChange("company", event.target.value)}
          className={inputClassName}
          placeholder="Название компании"
          autoComplete="organization"
          maxLength={COMPANY_MAX_LENGTH}
        />
        {touched.company && errors.company ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">
            Название компании слишком короткое или слишком длинное.
          </p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="task">
          Опишите вашу задачу
        </label>
        <textarea
          id="task"
          name="task"
          value={form.task}
          onBlur={() => setTouched((prev) => ({ ...prev, task: true }))}
          onChange={(event) => handleChange("task", event.target.value)}
          className={`${inputClassName} min-h-34 resize-y`}
          placeholder="Что случилось? В чем бизнес-проблема? Что нужно изучить? Какие есть гипотезы? Какая аудитория? В какие сроки нужен результат?"
          maxLength={TASK_MAX_LENGTH}
          required
        />
        {touched.task && errors.task ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">
            Добавьте чуть больше контекста, чтобы мы предложили точный подход.
          </p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="contact">
          Как с вами связаться
        </label>
        <input
          id="contact"
          name="contact"
          value={form.contact}
          onBlur={() => setTouched((prev) => ({ ...prev, contact: true }))}
          onChange={(event) => handleChange("contact", event.target.value)}
          className={inputClassName}
          placeholder="Укажите телефон или email"
          autoComplete="email"
          maxLength={CONTACT_MAX_LENGTH}
          required
        />
        {touched.contact && errors.contact ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">
            Нужен корректный контакт, чтобы мы могли быстро вернуться с ответом.
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="consent"
          className={`flex cursor-pointer items-start gap-3 rounded-2xl border bg-white/86 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-colors motion-reduce:transition-none ${
            showConsentError
              ? "border-[var(--color-error)]"
              : "border-[var(--color-border-strong)] hover:border-[rgba(108,92,231,0.42)]"
          }`}
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={consentGiven}
            onChange={(event) => {
              setSent(false);
              setSubmitError(null);
              setConsentGiven(event.target.checked);
            }}
            onBlur={() => setConsentTouched(true)}
            aria-invalid={showConsentError}
            aria-describedby="consent-error"
            className="peer sr-only"
            required
          />
          <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[7px] border border-[var(--color-border-strong)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-150 motion-reduce:transition-none [&_svg]:opacity-0 [&_svg]:transition-opacity [&_svg]:duration-150 peer-checked:border-transparent peer-checked:bg-[linear-gradient(135deg,#6c5ce7_0%,#7b61ff_100%)] peer-checked:shadow-[0_4px_10px_rgba(108,92,231,0.32)] peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-focus)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--color-surface)]">
            <Check size={13} strokeWidth={3.5} className="text-white" />
          </span>
          <span className="text-sm leading-relaxed text-[var(--color-muted-strong)]">
            Я даю{" "}
            <Link
              href="/personal-data-consent"
              onClick={(event) => event.stopPropagation()}
              className="font-medium text-[var(--color-accent-indigo)] underline decoration-[rgba(79,70,229,0.35)] underline-offset-2 transition-colors hover:text-[var(--color-accent-violet)] hover:decoration-[rgba(124,58,237,0.55)] motion-reduce:transition-none"
            >
              согласие на обработку персональных данных
            </Link>{" "}
            в соответствии с{" "}
            <Link
              href="/privacy"
              onClick={(event) => event.stopPropagation()}
              className="font-medium text-[var(--color-accent-indigo)] underline decoration-[rgba(79,70,229,0.35)] underline-offset-2 transition-colors hover:text-[var(--color-accent-violet)] hover:decoration-[rgba(124,58,237,0.55)] motion-reduce:transition-none"
            >
              Политикой обработки персональных данных
            </Link>
            .
          </span>
        </label>
        {showConsentError ? (
          <p id="consent-error" className="mt-2 text-xs text-[var(--color-error)]">
            Отметьте согласие, чтобы отправить заявку.
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={isSubmitting || hasErrors}
          className="w-full text-center sm:w-auto"
        >
          {isSubmitting ? "Отправляем..." : "Отправить заявку"}
        </Button>
        <p className="text-xs text-[var(--color-muted)]">Обычно отвечаем в течение дня.</p>
      </div>

      {sent ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Спасибо. Заявка отправлена, мы свяжемся с вами в ближайшее время.
        </p>
      ) : null}
      {submitError ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
