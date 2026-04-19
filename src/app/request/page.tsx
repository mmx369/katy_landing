import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Оставить заявку - Decode Research",
  description:
    "Опишите бизнес-задачу, и мы предложим подход, сроки и формат исследования.",
  path: "/request",
});

export default function RequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Оставить заявку"
        title="Короткий бриф - четкий план исследования"
        description="Чем конкретнее контекст, тем точнее и быстрее мы сможем предложить рабочий формат проекта."
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <Card glass>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  Расскажите о задаче
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-strong)]">
                  Форма включает ключевые вопросы по бизнес-проблеме, гипотезам,
                  аудитории и срокам. Это помогает сразу собрать корректный
                  исследовательский контур.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
              <Card>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  Что получите после заявки
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted-strong)]">
                  <li className="rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3">
                    Предварительный подход и дизайн исследования
                  </li>
                  <li className="rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3">
                    Оценку сроков и состава этапов
                  </li>
                  <li className="rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3">
                    Рекомендации по объему и формату работ
                  </li>
                </ul>
              </Card>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
