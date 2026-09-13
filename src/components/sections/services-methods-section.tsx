import { ArrowRight, Compass, HeartHandshake, type LucideIcon, Package, Ruler, Target } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionIntro } from "@/components/sections/section-intro";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/data/home";
import { solutionSections } from "@/data/solutions";
import { getLocale } from "@/lib/get-locale";
import { localizePath } from "@/lib/i18n";

const sectionIcons: Record<string, LucideIcon> = {
  "market-opportunities": Compass,
  "strong-brand": Target,
  "product-demand": Package,
  "customer-experience": HeartHandshake,
  "decision-measurement": Ruler,
};

export async function ServicesMethodsSection() {
  const locale = await getLocale();
  const { services } = homeContent[locale];

  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <SectionIntro eyebrow={services.eyebrow} title={services.title} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionSections[locale].map((section, idx) => {
              const Icon = sectionIcons[section.id] ?? Compass;

              return (
                <article
                  key={section.id}
                  className={`glass-card-l2 services-method-card flex h-full flex-col rounded-3xl p-5 sm:p-6 ${idx === 0 ? "border-[rgba(108,92,231,0.24)]" : ""}`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="glass-chip-l3 services-method-icon rounded-xl p-2.5">
                      <Icon size={27} className="text-[#2F3445]" />
                    </div>
                    <h3 className="services-method-title text-xl font-semibold text-[var(--color-midnight)] sm:text-2xl">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-2.5 text-[16px] leading-relaxed text-[#5A6172]">
                    {section.methods.map((method) => (
                      <li key={method.id} className="services-method-item flex items-start gap-3">
                        <span className="services-method-bullet mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                        <span>{method.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <div className="services-method-divider h-px" />
                  </div>
                </article>
              );
            })}

            <Link
              href={localizePath("/research-solutions", locale)}
              className="glass-card-l2 services-method-card flex h-full flex-col justify-between rounded-3xl p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)] sm:p-6"
            >
              <p className="text-xl font-semibold leading-snug text-[var(--color-midnight)] sm:text-2xl">
                {services.linkTitle}
              </p>
              <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-indigo)]">
                {services.linkLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
