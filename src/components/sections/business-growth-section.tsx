import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";

const growthTasks = [
  "Поиск правильных сегментов и точек роста продаж",
  "Оптимизация клиентского пути",
  "Улучшение пользовательского опыта",
  "Разработка и проверка продуктовых гипотез",
  "Оценка новых идей и концепций",
  "Понимание потребностей и мотивации клиентов",
];

export function BusinessGrowthSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <article className="glass-card-l2 rounded-3xl p-6 sm:p-8">
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                Глубокое понимание клиентов - быстрые бизнес-результаты
              </h2>
              <div className="mt-5 h-px w-24 bg-[linear-gradient(90deg,rgba(108,92,231,0.55),rgba(108,92,231,0))]" />
              <p className="mt-7 text-xl font-medium leading-relaxed text-[var(--color-midnight)]">
                Мы работаем с задачами роста и развития бизнеса:
              </p>
              <ul className="mt-4 space-y-2.5 text-[17px] leading-relaxed text-[#374151]">
                {growthTasks.map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-lg leading-relaxed text-[var(--color-accent-violet)]">
                Каждое исследование заканчивается не отчетом, а рекомендациями.
              </p>
            </article>

            <div className="grid gap-4">
              <article className="surface-panel rounded-3xl p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  В чем наша ценность
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[var(--color-midnight)]">
                  Мы не просто проводим исследования - мы помогаем бизнесу находить
                  ответы на ключевые вопросы.
                </p>
              </article>

              <article className="rounded-3xl border border-[rgba(255,255,255,0.25)] bg-[linear-gradient(140deg,rgba(11,18,32,0.98),rgba(26,35,56,0.96))] p-6 text-white shadow-[0_22px_55px_rgba(2,6,23,0.42)]">
                <p className="text-sm leading-relaxed text-white/95">
                  Фокус не на отчете, а на решениях, которые можно внедрять сразу
                  после исследования.
                </p>
              </article>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
