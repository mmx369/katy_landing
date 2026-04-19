import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { SiteLogo } from "@/components/brand/site-logo";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { contactInfo, teamMembers } from "@/data/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Контакты - Decode Research",
  description: "Свяжитесь с командой Decode Research и обсудите исследовательскую задачу.",
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

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <Card className="h-full text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                  <SiteLogo withSignature linked={false} variant="full" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-strong)]">
                  Вы работаете напрямую с исследовательской командой - без лишних
                  менеджерских прослоек.
                </p>
              </Card>

              {teamMembers.map((member) => (
                <Card key={member.name} className="h-full">
                  <div className="group relative mb-5 h-44 w-full overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(245,246,255,0.45))] shadow-[0_14px_34px_rgba(20,30,60,0.16)]">
                    <div
                      className="absolute inset-0"
                      style={{
                        transform: `scale(${member.photoScale ?? 1})`,
                        transformOrigin: "center",
                      }}
                    >
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover grayscale contrast-105 transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
                        style={{
                          objectPosition: member.photoPosition ?? "50% 30%",
                        }}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.28))]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-midnight)]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{member.role}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted-strong)]">
                    {member.expertise.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
