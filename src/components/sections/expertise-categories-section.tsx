import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";

const expertiseCategories = [
  { number: "1", title: "Банки" },
  { number: "2", title: "Страхование" },
  { number: "3", title: "Онлайн-сервисы" },
  { number: "4", title: "Телеком" },
  { number: "5", title: "Ритейл" },
] as const;

export function ExpertiseCategoriesSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10">
            <header className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Категорийная экспертиза
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                Какие категории мы понимаем лучше всего
              </h2>
            </header>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseCategories.map((item) => (
                <article
                  key={item.number}
                  className="glass-card-l2 relative overflow-hidden rounded-2xl border-[rgba(108,92,231,0.18)] p-4 sm:p-5"
                >
                  <span className="pointer-events-none absolute right-3 top-0 select-none text-7xl font-semibold leading-none text-[rgba(79,70,229,0.14)] sm:text-8xl">
                    {item.number}
                  </span>
                  <p className="relative z-10 mt-6 text-xl font-semibold text-[var(--color-midnight)] sm:mt-8 sm:text-2xl">
                    {item.title}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
