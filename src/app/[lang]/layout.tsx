import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { commonContent } from "@/data/common";
import { contactInfo } from "@/data/contact";
import { navigationItems, RESEARCH_SOLUTIONS_HREF } from "@/data/navigation";
import { pageContent } from "@/data/pages";
import { solutionSections } from "@/data/solutions";
import { getLocale } from "@/lib/get-locale";
import { localeMeta, locales } from "@/lib/i18n";
import { buildMetadata, localeUrl, siteUrl } from "@/lib/seo";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { site } = pageContent[locale];

  return buildMetadata({ title: site.title, description: site.description, locale });
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  // Only the direction titles reach the client, not the whole research catalogue.
  const navItems = navigationItems[locale].map((item) =>
    item.href === RESEARCH_SOLUTIONS_HREF
      ? {
          ...item,
          submenu: solutionSections[locale].map((section) => ({
            label: section.title,
            href: `${RESEARCH_SOLUTIONS_HREF}#${section.id}`,
          })),
        }
      : item
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Decode Research",
        ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/logo-decode-full.png` } : {}),
        email: contactInfo.email,
        telephone: contactInfo.phone,
      },
      ...(siteUrl
        ? [
            {
              "@type": "WebSite",
              name: "Decode Research",
              url: localeUrl("/", locale),
              inLanguage: localeMeta[locale].hrefLang,
            },
          ]
        : []),
    ],
  };

  return (
    <html lang={localeMeta[locale].htmlLang} className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-surface)] text-[var(--color-midnight)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
        />
        <div className="relative min-h-screen overflow-x-clip">
          <Header locale={locale} items={navItems} labels={commonContent[locale].header} />
          <main>{children}</main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
