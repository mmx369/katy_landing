import { Card } from "@/components/ui/card";
import type { SolutionSection } from "@/data/solutions";

interface SolutionSectionCardProps {
  section: SolutionSection;
}

export function SolutionSectionCard({ section }: SolutionSectionCardProps) {
  return (
    <Card className="p-0">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div className="border-b border-[var(--color-border)] p-6 lg:border-b-0 lg:border-r">
          <h2 className="text-[30px] font-semibold leading-[1.06] text-[#D10010] sm:text-[36px] sm:leading-[1.02]">
            {section.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-strong)]">
            {section.summary}
          </p>
        </div>

        <div className="border-b border-[var(--color-border)] p-6 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Какие задачи закрываем
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--color-muted-strong)]">
            {section.businessTasks.map((task) => (
              <li key={task} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {section.methods.map((method) => (
              <span
                key={method}
                className="chip-pill max-w-full rounded-full px-2.5 py-1 text-center text-[11px] leading-tight sm:px-3 sm:text-xs"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Что получаете
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--color-midnight-soft)]">
            {section.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-violet)]" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
