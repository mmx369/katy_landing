import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { isLocale, type Locale } from "@/lib/i18n";

/**
 * Reads the `[lang]` root segment, so any Server Component can get the locale without prop
 * drilling. Unsupported values 404 instead of falling back to a language the visitor did not ask
 * for. Not available in Client Components, Server Actions or Route Handlers.
 */
export async function getLocale(): Promise<Locale> {
  const value = await lang();

  if (!isLocale(value)) {
    notFound();
  }

  return value;
}
