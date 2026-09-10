import { ResearchMethodCard } from "@/components/sections/research-method-card";
import type { SolutionSection } from "@/data/solutions";

interface SolutionSectionCardProps {
  section: SolutionSection;
  index: number;
}

export function SolutionSectionCard({ section, index }: SolutionSectionCardProps) {
  return (
    <section
      id={section.id}
      className="surface-panel relative overflow-hidden rounded-3xl p-5 scroll-mt-24 sm:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-0 select-none text-7xl font-semibold leading-none text-[rgba(79,70,229,0.1)] sm:right-8 sm:text-8xl"
      >
        {index + 1}
      </span>

      <header className="relative max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Направление
        </p>
        <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
          {section.title}
        </h2>
        {section.summary ? (
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-strong)] sm:text-lg">
            {section.summary}
          </p>
        ) : null}
      </header>

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {section.methods.map((method) => (
          <ResearchMethodCard key={method.id} method={method} />
        ))}
      </div>
    </section>
  );
}
