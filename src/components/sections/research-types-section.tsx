import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";

const qualitativeItems = [
  "Глубинные интервью, фокус-группы",
  "CustDev, JTBD (поведенческие потребности и привычки)",
  "Этнография, дневники",
];

const quantitativeItems = [
  "Сегментации",
  "Тесты, BHT, воронка",
  "Онлайн-опросы (массовые и узкие сегменты)",
  "Метрики клиентского здоровья (NPS, CSI, лояльность и удовлетворенность)",
];

export function ResearchTypesSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="glass-card-l2 rounded-3xl border-[rgba(108,92,231,0.2)] p-6 sm:p-8 lg:h-full">
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                Качественные исследования
              </h2>
              <p className="mt-5 text-2xl leading-snug text-[var(--color-midnight)]">
                Отвечаем на вопрос <span className="gradient-text">почему</span> и
                строим гипотезы
              </p>
              <ul className="mt-6 space-y-2.5 text-[17px] leading-relaxed text-[#374151]">
                {qualitativeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-panel rounded-3xl p-6 sm:p-8 lg:h-full">
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                Количественные исследования
              </h2>
              <p className="mt-5 text-2xl leading-snug text-[var(--color-midnight)]">
                Оцениваем <span className="gradient-text">сколько</span>,
                проверяем гипотезы, следим за динамикой
              </p>
              <ul className="mt-6 space-y-2.5 text-[17px] leading-relaxed text-[#374151]">
                {quantitativeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
