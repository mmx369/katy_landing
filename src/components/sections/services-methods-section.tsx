import { BarChart3, Target, Users2 } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionIntro } from "@/components/sections/section-intro";
import { SectionContainer } from "@/components/ui/section-container";

const serviceCards = [
  {
    title: "Продукт и развитие",
    items: ["Сегментации", "CustDev, JTBD, продуктовые исследования", "Оценка концепций"],
    Icon: BarChart3,
  },
  {
    title: "Клиенты и поведение",
    items: [
      "Исследование поведения пользователей",
      "CJM / карты пользовательского опыта",
      "UX / пользовательский опыт",
    ],
    Icon: Users2,
  },
  {
    title: "Бренд",
    items: ["BHT, исследования восприятия бренда", "Проверка позиционирования", "Оценка рекламы и продвижения"],
    Icon: Target,
  },
] as const;

export function ServicesMethodsSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <SectionIntro
            eyebrow="Наши услуги"
            title="Понятные методы для сложных задач."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {serviceCards.map((card, idx) => (
              <article
                key={card.title}
                className={`glass-card-l2 services-method-card flex h-full flex-col rounded-3xl p-5 sm:p-6 ${idx === 0 ? "border-[rgba(108,92,231,0.24)]" : ""}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="glass-chip-l3 services-method-icon rounded-xl p-2.5">
                    <card.Icon size={27} className="text-[#2F3445]" />
                  </div>
                  <h3 className="services-method-title text-2xl font-semibold text-[var(--color-midnight)] sm:text-[30px]">
                    {card.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-2.5 text-[16px] leading-relaxed text-[#5A6172]">
                  {card.items.map((item) => (
                    <li key={item} className="services-method-item flex items-start gap-3">
                      <span className="services-method-bullet mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <div className="services-method-divider h-px" />
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
