import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { contactInfo } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Контакты - Decode Research",
  description:
    "Свяжитесь с Decode Research: обсудим маркетинговое исследование, задачи бренда, продукта, CX или маркетплейсов и предложим формат проекта.",
  path: "/contacts",
});

export default function ContactsPage() {
  const phoneHref = `tel:${contactInfo.phone.replace(/\D/g, "")}`;

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Обсудим задачу и подберем формат исследования"
        description="Расскажите о контексте бизнеса и текущем вопросе. Мы предложим подход, сроки и формат взаимодействия."
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              <Card>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  Контактная информация
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted-strong)]">
                  <li>
                    Email:{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-medium text-[var(--color-midnight)]"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    Телефон:{" "}
                    <a
                      href={phoneHref}
                      className="font-medium text-[var(--color-midnight)]"
                    >
                      {contactInfo.phone}
                    </a>
                  </li>
                </ul>
                <p className="mt-5 text-sm text-[var(--color-muted)]">
                  {contactInfo.responseTime}
                </p>
              </Card>
              <Card glass>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  Форма обратной связи
                </h2>
                <p className="mt-3 text-sm text-[var(--color-muted-strong)]">
                  Опишите контекст задачи, а мы вернемся с первым предложением по
                  исследовательскому дизайну.
                </p>
                <div className="mt-6">
                  <ContactForm variant="contact" />
                </div>
              </Card>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
