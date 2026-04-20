import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { contactInfo } from "@/data/contact";
import { buildMetadata, siteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = buildMetadata({
  title: "Decode Research - маркетинговое исследовательское агентство",
  description:
    "Маркетинговое исследовательское агентство Decode Research: сегментации, тестирование коммуникаций, CX-исследования, CustDev и аудит карточек для маркетплейсов.",
});

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
            url: siteUrl,
            inLanguage: "ru-RU",
          },
        ]
      : []),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-surface)] text-[var(--color-midnight)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative min-h-screen overflow-x-clip">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
