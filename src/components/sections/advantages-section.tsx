import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";

const helpItems = [
  "Быстро разобраться в поведении клиентов",
  "Проверить гипотезы перед запуском",
  "Найти точки роста продукта и продаж",
  "Принять обоснованные решения",
];

const advantageDetails = [
  {
    title: "Скорость принятия решения",
    text: "Вы общаетесь с владельцем и senior-экспертами напрямую.",
  },
  {
    title: "Гибкость",
    text: "Пересобираем дизайн исследования под новые вводные в процессе проекта.",
  },
  {
    title: "Экономия",
    text: "Вы платите за экспертизу и результат, без лишних уровней процессов.",
  },
  {
    title: "Итог",
    text: "Сильная методология и человеческая коммуникация: с нами спокойно и надежно.",
  },
];

const principles = [
  "Быстро запускаем исследования",
  "Гибко подстраиваемся под задачи",
  "Работаем без шаблонов",
  "Глубоко анализируем данные",
  "Всегда даем прикладные выводы",
  "Вы работаете напрямую с исполнителями, без лишних звеньев",
];

export function AdvantagesSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_1.45fr_1.1fr]">
            <article className="rounded-3xl border border-[rgba(255,255,255,0.2)] bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))] p-6 text-white shadow-[0_24px_60px_rgba(2,6,23,0.35)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                Мы поможем вам
              </p>
              <ul className="mt-5 space-y-2.5 text-[16px] leading-relaxed text-white/90">
                {helpItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B7EFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[16px] leading-relaxed text-white/75">
                Готовы подключиться на любом этапе — от идеи до оптимизации.
              </p>
            </article>

            <article className="glass-card-l2 rounded-3xl p-6 sm:p-7">
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                Наши преимущества
              </h2>
              <div className="mt-5 space-y-4">
                {advantageDetails.map((item) => (
                  <div key={item.title}>
                    <p className="text-[17px] font-semibold leading-snug text-[var(--color-midnight)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[16px] leading-relaxed text-[var(--color-muted-strong)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-panel rounded-3xl p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Принципы работы
              </p>
              <ul className="mt-5 space-y-2.5 text-[16px] leading-relaxed text-[var(--color-muted-strong)]">
                {principles.map((item) => (
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
