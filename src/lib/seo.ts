import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://decode-research.ru";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetadataProps): Metadata {
  const canonical = siteUrl ? `${siteUrl}${path}` : undefined;

  const openGraph = {
    title,
    description,
    siteName: "Decode Research",
    locale: "ru_RU",
    type: "website" as const,
    ...(canonical ? { url: canonical } : {}),
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
    ...(canonical
      ? {
          alternates: {
            canonical,
          },
        }
      : {}),
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
