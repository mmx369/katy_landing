import type { Metadata } from "next";

import { AdvantagesSection } from "@/components/sections/advantages-section";
import { AboutSlideSection } from "@/components/sections/about-slide-section";
import { BusinessGrowthSection } from "@/components/sections/business-growth-section";
import { CTASection } from "@/components/sections/cta-section";
import { ExpertiseCategoriesSection } from "@/components/sections/expertise-categories-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ResearchTypesSection } from "@/components/sections/research-types-section";
import { ServicesMethodsSection } from "@/components/sections/services-methods-section";
import { TeamContactsSection } from "@/components/sections/team-contacts-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { homeContent } from "@/data/home";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { site } = pageContent[locale];

  return buildMetadata({ title: site.title, description: site.description, locale, path: "/" });
}

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <>
      <HeroSection locale={locale} content={homeContent[locale].hero} />
      <AboutSlideSection />
      <BusinessGrowthSection />
      <ResearchTypesSection />
      <ServicesMethodsSection />
      <WorkflowSection />
      <AdvantagesSection />
      <ExpertiseCategoriesSection />
      <TeamContactsSection />
      <CTASection />
    </>
  );
}
