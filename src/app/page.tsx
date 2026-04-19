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
import { homeCta } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSlideSection />
      <BusinessGrowthSection />
      <ResearchTypesSection />
      <ServicesMethodsSection />
      <WorkflowSection />
      <AdvantagesSection />
      <ExpertiseCategoriesSection />
      <TeamContactsSection />
      <CTASection
        title={homeCta.title}
        description={homeCta.description}
        actionLabel={homeCta.actionLabel}
        actionHref={homeCta.actionHref}
      />
    </>
  );
}
