import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/legal-document";
import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { legalContent, operator } from "@/data/legal";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { defaultLocale, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

const PATH = "/privacy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { privacy } = pageContent[locale];

  return buildMetadata({
    title: privacy.title,
    description: privacy.description,
    locale,
    path: PATH,
  });
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  const { privacy } = pageContent[locale];
  const legal = legalContent[locale];

  return (
    <>
      <PageHero
        eyebrow={privacy.eyebrow}
        title={privacy.heroTitle}
        description={privacy.heroDescription}
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <LegalDocument
            revision={legal.revision}
            sections={legal.privacySections}
            notice={
              legal.translationNotice
                ? { ...legal.translationNotice, href: localizePath(PATH, defaultLocale) }
                : null
            }
          >
            <section className="mt-8 rounded-xl border border-[var(--color-border)] bg-white/70 p-5">
              <h2 className="text-lg font-semibold text-[var(--color-midnight)]">
                {privacy.operatorTitle}
              </h2>
              <dl className="mt-3 space-y-2">
                <div>
                  <dt className="sr-only">{privacy.operatorNameLabel}</dt>
                  <dd>{legal.operatorLegalName}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">{privacy.innLabel}</dt>
                  <dd>{operator.inn}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">{privacy.ogrnipLabel}</dt>
                  <dd>{operator.ogrnip}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">{privacy.emailLabel}</dt>
                  <dd>
                    <a
                      href={`mailto:${operator.email}`}
                      className="text-[var(--color-accent-indigo)] underline underline-offset-2"
                    >
                      {operator.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">{privacy.websiteLabel}</dt>
                  <dd>{operator.website}</dd>
                </div>
              </dl>
            </section>
          </LegalDocument>
        </SectionContainer>
      </section>
    </>
  );
}
