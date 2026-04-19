"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  COMPANY_MAX_LENGTH,
  CONTACT_MAX_LENGTH,
  MIN_COMPANY_LENGTH,
  MIN_NAME_LENGTH,
  MIN_TASK_LENGTH,
  NAME_MAX_LENGTH,
  TASK_MAX_LENGTH,
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
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    company: false,
    task: false,
    contact: false,
  });
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isContactVariant = variant === "contact";

  const errors = useMemo(() => {
    return {
      name: form.name.trim().length < MIN_NAME_LENGTH,
      company:
        !isContactVariant &&
        (form.company.trim().length < MIN_COMPANY_LENGTH || form.company.trim().length > COMPANY_MAX_LENGTH),
      task: form.task.trim().length < MIN_TASK_LENGTH || form.task.trim().length > TASK_MAX_LENGTH,
      contact: form.contact.trim().length > CONTACT_MAX_LENGTH || !isValidContact(form.contact),
    };
  }, [form, isContactVariant]);

  const hasErrors = Object.values(errors).some(Boolean);

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
        }),
      });

      if (!response.ok) {
        const responseBody = (await response.json()) as { error?: string };
        setSubmitError(responseBody.error ?? "Не удалось отправить заявку. Попробуйте позже.");
        return;
      }

      setSent(true);
      setForm(initialState);
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

      {!isContactVariant ? (
        <div>
          <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="company">
            Компания
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
            required
          />
          {touched.company && errors.company ? (
            <p className="mt-2 text-xs text-[var(--color-error)]">
              Укажите компанию или проект.
            </p>
          ) : null}
        </div>
      ) : null}

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
