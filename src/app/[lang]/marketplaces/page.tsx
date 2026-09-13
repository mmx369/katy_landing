import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { marketplaceContent } from "@/data/marketplace";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

const PATH = "/marketplaces";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { marketplaces } = pageContent[locale];

  return buildMetadata({
    title: marketplaces.title,
    description: marketplaces.description,
    locale,
    path: PATH,
  });
}

export default async function MarketplacesPage() {
  const locale = await getLocale();
  const { hero, blocks, swipeHint, ctaLabel } = marketplaceContent[locale];

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <section className="pb-12 pt-5 sm:pb-20 sm:pt-10">
        <SectionContainer>
          <FadeIn>
            <div className="space-y-6">
              {blocks.map((block) => (
                <Card key={block.sectionTitle} className="p-0">
                  <div className="border-b border-[var(--color-border)] px-6 py-4 sm:px-8">
                    <p className="text-sm text-[var(--color-muted)]">
                      {block.sectionLabel}
                      <span className="mx-2 text-[var(--color-border-strong)]">/</span>
                      <span className="font-semibold text-[var(--color-midnight)]">
                        {block.sectionTitle}
                      </span>
                    </p>
                  </div>

                  <div className="px-6 py-6 sm:px-8">
                    <div className="space-y-3 text-[17px] leading-relaxed text-[var(--color-midnight-soft)]">
                      {block.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-2.5 text-sm text-[var(--color-muted-strong)]">
                      {block.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 border-t border-[var(--color-border)] pt-6">
                      <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                        {block.caseTitle}
                      </h2>
                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-muted-strong)]">
                        {block.caseSummary.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-midnight-soft)]">
                        {block.caseNotes.map((note) => (
                          <li key={note} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-violet)]" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="group relative mt-6 overflow-hidden rounded-2xl border border-[rgba(108,92,231,0.18)] bg-white shadow-[0_14px_36px_rgba(22,30,58,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(108,92,231,0.3)] hover:shadow-[0_22px_54px_rgba(22,30,58,0.18)]">
                      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.28),rgba(255,255,255,0)_42%,rgba(108,92,231,0.08))] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="overflow-x-auto overflow-y-hidden sm:overflow-hidden">
                        <div className="min-w-[560px] overflow-hidden sm:min-w-0">
                          <Image
                            src={block.imageSrc}
                            alt={block.imageAlt}
                            width={1800}
                            height={1000}
                            className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.008]"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-[var(--color-muted)] sm:hidden">{swipeHint}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={localizePath("/request", locale)}
                className="w-full text-center sm:mx-auto sm:w-auto"
              >
                {ctaLabel}
              </Button>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
