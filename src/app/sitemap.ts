import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

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

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
