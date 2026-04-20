import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { SectionIntro } from "@/components/sections/section-intro";
import { SolutionSectionCard } from "@/components/sections/solution-section-card";
import { SectionContainer } from "@/components/ui/section-container";
import { solutionSections } from "@/data/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Исследовательские решения - Decode Research",
  description:
    "Маркетинговые исследования для роста бизнеса: сегментации, исследования бренда и коммуникаций, CX и клиентский опыт с практическими рекомендациями.",
  path: "/research-solutions",
});

export default function ResearchSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Исследовательские решения"
        title="Исследовательские решения для роста бизнеса"
        description="Три направления работы: сегментации, бренд и продвижение, взаимодействие с клиентом. Для каждого - задачи, методы и практический результат."
      />

      <section className="py-10 sm:py-14">
        <SectionContainer>
          <FadeIn>
            <SectionIntro
              title="Три ключевых направления исследовательских решений"
              align="mobile-center"
            />

            <div className="mt-8 space-y-4">
              {solutionSections.map((section) => (
                <SolutionSectionCard key={section.id} section={section} />
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
