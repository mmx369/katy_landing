import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionSectionCard } from "@/components/sections/solution-section-card";
import { SectionContainer } from "@/components/ui/section-container";
import { solutionSections } from "@/data/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Исследовательские решения - Decode Research",
  description:
    "Направления и методы маркетинговых исследований: сегментация, CustDev, JTBD, BHT, тестирование креатива, метод Кано, PSM, TURF-анализ, NPS, CJM, UI-исследования - что дает каждый метод и когда его стоит применять.",
  path: "/research-solutions",
});

export default function ResearchSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Исследовательские решения"
        title="Исследовательские решения для роста бизнеса"
        description="Пять направлений: понять рынок, построить сильный бренд, создать востребованный продукт, улучшить клиентский опыт и обосновать решения. Для каждого метода - как он работает и когда его стоит применять."
      />

      <section className="pb-12 sm:pb-20">
        <SectionContainer>
          <FadeIn>
            <nav
              aria-label="Направления исследований"
              className="surface-panel rounded-3xl p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Направления
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {solutionSections.map((section) => (
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
            {solutionSections.map((section, index) => (
              <FadeIn key={section.id}>
                <SolutionSectionCard section={section} index={index} />
              </FadeIn>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
