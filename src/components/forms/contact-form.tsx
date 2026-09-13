"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CommonContent } from "@/data/common";
import { localizePath, type Locale } from "@/lib/i18n";
import {
  COMPANY_MAX_LENGTH,
  CONTACT_MAX_LENGTH,
  NAME_MAX_LENGTH,
  TASK_MAX_LENGTH,
  isValidCompany,
  isValidContact,
  isValidName,
  isValidTask,
} from "@/lib/contact-validation";

interface ContactFormProps {
  locale: Locale;
  labels: CommonContent["form"];
  consentVersion: string;
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

// A proxy in front of the app answers with HTML on 502/504, so the body is not always JSON.
async function readErrorMessage(response: Response, labels: CommonContent["form"]) {
  try {
    const body: unknown = await response.json();
    if (body && typeof body === "object" && "error" in body && typeof body.error === "string") {
      return body.error;
    }
  } catch {
    // Fall through to the status-based message below.
  }

  return response.status >= 500 ? labels.serverUnavailable : labels.sendFailed;
}

export function ContactForm({
  locale,
  labels,
  consentVersion,
  variant = "request",
}: ContactFormProps) {
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
      name: !isValidName(form.name),
      company: !isValidCompany(form.company),
      task: !isValidTask(form.task),
      contact: !isValidContact(form.contact),
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
        signal: AbortSignal.timeout(30_000),
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          variant,
          locale,
          companyWebsite,
          consent: true,
          consentVersion,
        }),
      });

      if (!response.ok) {
        setSubmitError(await readErrorMessage(response, labels));
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
    } catch (error) {
      setSubmitError(
        error instanceof DOMException && error.name === "TimeoutError"
          ? labels.timeout
          : labels.networkError
      );
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
          {labels.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          onChange={(event) => handleChange("name", event.target.value)}
          className={inputClassName}
          placeholder={labels.namePlaceholder}
          autoComplete="name"
          maxLength={NAME_MAX_LENGTH}
          required
        />
        {touched.name && errors.name ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">{labels.nameError}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="company">
          {labels.companyLabel}
          <span className="ml-1.5 font-normal text-[var(--color-muted-strong)]">
            {labels.companyOptional}
          </span>
        </label>
        <input
          id="company"
          name="company"
          value={form.company}
          onBlur={() => setTouched((prev) => ({ ...prev, company: true }))}
          onChange={(event) => handleChange("company", event.target.value)}
          className={inputClassName}
          placeholder={labels.companyPlaceholder}
          autoComplete="organization"
          maxLength={COMPANY_MAX_LENGTH}
        />
        {touched.company && errors.company ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">{labels.companyError}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="task">
          {labels.taskLabel}
        </label>
        <textarea
          id="task"
          name="task"
          value={form.task}
          onBlur={() => setTouched((prev) => ({ ...prev, task: true }))}
          onChange={(event) => handleChange("task", event.target.value)}
          className={`${inputClassName} min-h-34 resize-y`}
          placeholder={labels.taskPlaceholder}
          maxLength={TASK_MAX_LENGTH}
          required
        />
        {touched.task && errors.task ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">{labels.taskError}</p>
        ) : null}
      </div>

      <div>
        <label className="text-sm font-medium text-[var(--color-midnight)]" htmlFor="contact">
          {labels.contactLabel}
        </label>
        <input
          id="contact"
          name="contact"
          value={form.contact}
          onBlur={() => setTouched((prev) => ({ ...prev, contact: true }))}
          onChange={(event) => handleChange("contact", event.target.value)}
          className={inputClassName}
          placeholder={labels.contactPlaceholder}
          autoComplete="email"
          maxLength={CONTACT_MAX_LENGTH}
          required
        />
        {touched.contact && errors.contact ? (
          <p className="mt-2 text-xs text-[var(--color-error)]">{labels.contactError}</p>
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
            {labels.consentBefore}
            <Link
              href={localizePath("/personal-data-consent", locale)}
              onClick={(event) => event.stopPropagation()}
              className="font-medium text-[var(--color-accent-indigo)] underline decoration-[rgba(79,70,229,0.35)] underline-offset-2 transition-colors hover:text-[var(--color-accent-violet)] hover:decoration-[rgba(124,58,237,0.55)] motion-reduce:transition-none"
            >
              {labels.consentLinkLabel}
            </Link>
            {labels.consentMiddle}
            <Link
              href={localizePath("/privacy", locale)}
              onClick={(event) => event.stopPropagation()}
              className="font-medium text-[var(--color-accent-indigo)] underline decoration-[rgba(79,70,229,0.35)] underline-offset-2 transition-colors hover:text-[var(--color-accent-violet)] hover:decoration-[rgba(124,58,237,0.55)] motion-reduce:transition-none"
            >
              {labels.consentPolicyLabel}
            </Link>
            {labels.consentAfter}
          </span>
        </label>
        {showConsentError ? (
          <p id="consent-error" className="mt-2 text-xs text-[var(--color-error)]">
            {labels.consentError}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full text-center sm:w-auto"
        >
          {isSubmitting ? labels.submitting : labels.submit}
        </Button>
        <p className="text-xs text-[var(--color-muted)]">{labels.responseHint}</p>
      </div>

      <div role="status" aria-live="polite">
        {sent ? (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {labels.success}
          </p>
        ) : null}
      </div>
      <div role="alert" aria-live="assertive">
        {submitError ? (
          <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {submitError}
          </p>
        ) : null}
      </div>
    </form>
  );
}
