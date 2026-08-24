import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/sections/legal-document";
import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { consentSections, consentVersion, legalRevision } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Согласие на обработку персональных данных - Decode Research",
  description:
    "Текст согласия на обработку персональных данных, которое пользователь дает при отправке формы обратной связи на сайте decode-research.ru.",
  path: "/personal-data-consent",
});

export default function PersonalDataConsentPage() {
  return (
    <>
      <PageHero
        eyebrow="Правовая информация"
        title="Согласие на обработку персональных данных"
        description="Этот текст подтверждается отметкой в форме обратной связи перед отправкой заявки."
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <LegalDocument revision={legalRevision} sections={consentSections}>
            <p className="mt-8 rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm">
              Версия согласия: {consentVersion}. Она фиксируется вместе с датой и временем при
              каждой отправке формы. Полный порядок обработки описан в{" "}
              <Link
                href="/privacy"
                className="text-[var(--color-accent-indigo)] underline underline-offset-2"
              >
                Политике обработки персональных данных
              </Link>
              .
            </p>
          </LegalDocument>
        </SectionContainer>
      </section>
    </>
  );
}
