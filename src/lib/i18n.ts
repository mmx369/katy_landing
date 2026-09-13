export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];

/** Russian is served from the site root, so its paths carry no locale prefix. */
export const defaultLocale: Locale = "ru";

interface LocaleMeta {
  /** Shown in the language switcher menu. */
  name: string;
  /** Shown on the switcher trigger on wide screens. */
  short: string;
  htmlLang: string;
  ogLocale: string;
  hrefLang: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ru: { name: "Русский", short: "RU", htmlLang: "ru", ogLocale: "ru_RU", hrefLang: "ru-RU" },
  en: { name: "English", short: "EN", htmlLang: "en", ogLocale: "en_US", hrefLang: "en-US" },
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

/** Turns a locale-neutral path ("/contacts", "/#about") into the URL for a given locale. */
export function localizePath(path: string, locale: Locale): string {
  const [pathname, hash] = path.split("#");
  const suffix = hash === undefined ? "" : `#${hash}`;

  if (locale === defaultLocale) {
    return `${pathname}${suffix}`;
  }

  const normalized = pathname === "/" ? "" : pathname;
  return `/${locale}${normalized}${suffix}`;
}

/** Inverse of localizePath for a browser pathname: "/en/contacts" -> "/contacts". */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");

  if (!isLocale(first)) {
    return pathname;
  }

  return rest.length > 0 ? `/${rest.join("/")}` : "/";
}
