import { Scale, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";
import { trustItems } from "@/data/home";

const icons = [Scale, Workflow, ShieldCheck, Sparkles];

export function TrustSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <header className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Доверие и подход
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
              Работаем спокойно, глубоко и прозрачно
            </h2>
          </header>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {trustItems.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article
                  key={item.title}
                  className="surface-panel rounded-2xl p-6 transition duration-300 hover:shadow-[0_18px_45px_rgba(27,31,62,0.12)]"
                >
                  <Icon
                    size={18}
                    className="text-[var(--color-accent-plum)]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-midnight)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-strong)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
