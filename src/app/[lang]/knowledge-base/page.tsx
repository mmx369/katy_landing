import type { Metadata } from "next";

import { KnowledgeBaseGrid } from "@/components/sections/knowledge-base-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { buildMetadata } from "@/lib/seo";

const PATH = "/knowledge-base";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { knowledgeBase } = pageContent[locale];

  return buildMetadata({
    title: knowledgeBase.title,
    description: knowledgeBase.description,
    locale,
    path: PATH,
  });
}

export default async function KnowledgeBasePage() {
  const { knowledgeBase } = pageContent[await getLocale()];

  return (
    <>
      <PageHero
        eyebrow={knowledgeBase.eyebrow}
        title={knowledgeBase.heroTitle}
        description={knowledgeBase.heroDescription}
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <KnowledgeBaseGrid />
        </SectionContainer>
      </section>
    </>
  );
}
