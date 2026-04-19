import type { Metadata } from "next";

import { KnowledgeBaseGrid } from "@/components/sections/knowledge-base-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "База знаний - Decode Research",
  description:
    "Материалы агентства: исследования, бренд, клиентский опыт, маркетплейсы и продукт.",
  path: "/knowledge-base",
});

export default function KnowledgeBasePage() {
  return (
    <>
      <PageHero
        eyebrow="База знаний"
        title="Методики, с которыми мы решаем бизнес-задачи"
        description="Сегментации, CustDev, JTBD, NPS, KANO и CJM."
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <KnowledgeBaseGrid />
        </SectionContainer>
      </section>
    </>
  );
}
