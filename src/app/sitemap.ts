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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return [];
  }

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
