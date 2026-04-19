import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";

interface CtaSectionProps {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export function CTASection({
  title,
  description,
  actionLabel,
  actionHref,
}: CtaSectionProps) {
  return (
    <section className="py-12 sm:py-24">
      <SectionContainer>
        <div className="glass-panel rounded-3xl border-[rgba(108,92,231,0.24)] bg-[linear-gradient(140deg,rgba(255,255,255,0.52),rgba(245,246,255,0.34))] p-8 shadow-[0_28px_64px_rgba(20,30,60,0.16),inset_0_1px_0_rgba(255,255,255,0.78)] sm:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Оставить заявку
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-strong)]">
              {description}
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Опишите задачу - предложим подход, сроки и формат исследования.
            </p>
            <div className="mt-7">
              <Button
                href={actionHref}
                className="w-full text-center shadow-[0_12px_34px_rgba(99,102,241,0.44)] sm:w-auto"
              >
                {actionLabel}
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
