import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { commonContent } from "@/data/common";
import { consentVersion } from "@/data/legal";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { buildMetadata } from "@/lib/seo";

const PATH = "/request";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { request } = pageContent[locale];

  return buildMetadata({
    title: request.title,
    description: request.description,
    locale,
    path: PATH,
  });
}

export default async function RequestPage() {
  const locale = await getLocale();
  const { request } = pageContent[locale];

  return (
    <>
      <PageHero
        eyebrow={request.eyebrow}
        title={request.heroTitle}
        description={request.heroDescription}
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <Card glass>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  {request.formTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-strong)]">
                  {request.formDescription}
                </p>
                <div className="mt-6">
                  <ContactForm
                    locale={locale}
                    labels={commonContent[locale].form}
                    consentVersion={consentVersion}
                  />
                </div>
              </Card>
              <Card>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  {request.benefitsTitle}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted-strong)]">
                  {request.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
