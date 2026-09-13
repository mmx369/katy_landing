import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionSectionCard } from "@/components/sections/solution-section-card";
import { SectionContainer } from "@/components/ui/section-container";
import { commonContent } from "@/data/common";
import { pageContent } from "@/data/pages";
import { solutionSections } from "@/data/solutions";
import { getLocale } from "@/lib/get-locale";
import { buildMetadata } from "@/lib/seo";

const PATH = "/research-solutions";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { researchSolutions } = pageContent[locale];

  return buildMetadata({
    title: researchSolutions.title,
    description: researchSolutions.description,
    locale,
    path: PATH,
  });
}

export default async function ResearchSolutionsPage() {
  const locale = await getLocale();
  const { researchSolutions } = pageContent[locale];
  const labels = commonContent[locale].solutions;

  return (
    <>
      <PageHero
        eyebrow={researchSolutions.eyebrow}
        title={researchSolutions.heroTitle}
        description={researchSolutions.heroDescription}
      />

      <section className="pb-12 sm:pb-20">
        <SectionContainer>
          <FadeIn>
            <nav
              aria-label={labels.directionsNavLabel}
              className="surface-panel rounded-3xl p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {labels.directionsLabel}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {solutionSections[locale].map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="chip-pill flex items-center rounded-full px-3.5 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>

          <div className="mt-4 space-y-4">
            {solutionSections[locale].map((section, index) => (
              <FadeIn key={section.id}>
                <SolutionSectionCard section={section} index={index} labels={labels} />
              </FadeIn>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
