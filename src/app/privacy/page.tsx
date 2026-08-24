import type { Metadata } from "next";

import { LegalDocument } from "@/components/sections/legal-document";
import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { legalRevision, operator, privacyPolicySections } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Политика обработки персональных данных - Decode Research",
  description:
    "Политика в отношении обработки персональных данных ИП Савастенко Е. С.: цели, правовые основания, сроки хранения и права субъекта персональных данных.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Правовая информация"
        title="Политика в отношении обработки персональных данных"
        description="Как Оператор обрабатывает и защищает персональные данные, полученные через сайт decode-research.ru."
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <LegalDocument revision={legalRevision} sections={privacyPolicySections}>
            <section className="mt-8 rounded-xl border border-[var(--color-border)] bg-white/70 p-5">
              <h2 className="text-lg font-semibold text-[var(--color-midnight)]">Оператор</h2>
              <dl className="mt-3 space-y-2">
                <div>
                  <dt className="sr-only">Наименование</dt>
                  <dd>{operator.legalName}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">ИНН:</dt>
                  <dd>{operator.inn}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">ОГРНИП:</dt>
                  <dd>{operator.ogrnip}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">Email:</dt>
                  <dd>
                    <a
                      href={`mailto:${operator.email}`}
                      className="text-[var(--color-accent-indigo)] underline underline-offset-2"
                    >
                      {operator.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-[var(--color-midnight)]">Сайт:</dt>
                  <dd>{operator.website}</dd>
                </div>
              </dl>
            </section>
          </LegalDocument>
        </SectionContainer>
      </section>
    </>
  );
}
