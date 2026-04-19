import type { Metadata } from "next";

const baseUrl = "https://decode.agency";

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({
  title,
  description,
  path = "/",
}: PageMetadataProps): Metadata {
  const canonical = `${baseUrl}${path}`;

  return {
    title,
    description,
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Decode Research",
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
