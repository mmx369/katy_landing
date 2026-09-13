import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/sections/legal-document";
import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { consentVersion, legalContent } from "@/data/legal";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { defaultLocale, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

const PATH = "/personal-data-consent";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { consent } = pageContent[locale];

  return buildMetadata({
    title: consent.title,
    description: consent.description,
    locale,
    path: PATH,
  });
}

export default async function PersonalDataConsentPage() {
  const locale = await getLocale();
  const { consent } = pageContent[locale];
  const legal = legalContent[locale];

  return (
    <>
      <PageHero
        eyebrow={consent.eyebrow}
        title={consent.heroTitle}
        description={consent.heroDescription}
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <LegalDocument
            revision={legal.revision}
            sections={legal.consentSections}
            notice={
              legal.translationNotice
                ? { ...legal.translationNotice, href: localizePath(PATH, defaultLocale) }
                : null
            }
          >
            <p className="mt-8 rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm">
              {consent.versionLabel} {consentVersion}. {consent.versionNote}{" "}
              <Link
                href={localizePath("/privacy", locale)}
                className="text-[var(--color-accent-indigo)] underline underline-offset-2"
              >
                {consent.policyLinkLabel}
              </Link>
              .
            </p>
          </LegalDocument>
        </SectionContainer>
      </section>
    </>
  );
}
