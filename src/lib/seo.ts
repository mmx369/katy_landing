import type { Metadata } from "next";

import { defaultLocale, locales, localeMeta, localizePath, type Locale } from "@/lib/i18n";

const DEFAULT_SITE_URL = "https://decode-research.ru";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

interface PageMetadataProps {
  title: string;
  description: string;
  locale: Locale;
  /** Locale-neutral route, e.g. "/contacts". */
  path?: string;
  noIndex?: boolean;
}

export function localeUrl(path: string, locale: Locale) {
  return `${siteUrl}${localizePath(path, locale)}`;
}

function buildLanguageAlternates(path: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [localeMeta[locale].hrefLang, localeUrl(path, locale)])
  );

  return { ...languages, "x-default": localeUrl(path, defaultLocale) };
}

export function buildMetadata({
  title,
  description,
  locale,
  path = "/",
  noIndex = false,
}: PageMetadataProps): Metadata {
  const canonical = localeUrl(path, locale);

  const openGraph = {
    title,
    description,
    siteName: "Decode Research",
    locale: localeMeta[locale].ogLocale,
    alternateLocale: locales.filter((item) => item !== locale).map((item) => localeMeta[item].ogLocale),
    type: "website" as const,
    url: canonical,
    ...(siteUrl
      ? {
          images: [
            {
              url: `${siteUrl}/og-decode.png`,
              width: 1200,
              height: 630,
              alt: "Decode Research",
            },
          ],
        }
      : {}),
  };

  const twitter = {
    card: (siteUrl ? "summary_large_image" : "summary") as "summary_large_image" | "summary",
    title,
    description,
    ...(siteUrl ? { images: [`${siteUrl}/og-decode.png`] } : {}),
  };

  return {
    ...(metadataBase ? { metadataBase } : {}),
    title,
    description,
    applicationName: "Decode Research",
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path),
    },
    openGraph,
    twitter,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
