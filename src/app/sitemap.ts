import type { MetadataRoute } from "next";

import { defaultLocale, locales, localeMeta } from "@/lib/i18n";
import { localeUrl, siteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/research-solutions",
  "/marketplaces",
  "/knowledge-base",
  "/contacts",
  "/request",
  "/privacy",
  "/personal-data-consent",
] as const;

const lastModified = new Date("2026-08-24T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  return routes.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [localeMeta[locale].hrefLang, localeUrl(route, locale)])
    );

    return locales.map((locale) => ({
      url: localeUrl(route, locale),
      lastModified,
      alternates: {
        languages: { ...languages, "x-default": localeUrl(route, defaultLocale) },
      },
    }));
  });
}
