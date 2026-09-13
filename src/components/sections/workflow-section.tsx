import { ArrowRight } from "lucide-react";
import { Fragment } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/data/home";
import { getLocale } from "@/lib/get-locale";

export async function WorkflowSection() {
  const { workflow } = homeContent[await getLocale()];

  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {workflow.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                {workflow.title}
              </h2>
            </div>
            <p className="hidden max-w-md text-right text-sm leading-relaxed text-[#8B7EFF] lg:block">
              {workflow.motto.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </p>
          </div>

          <div className="relative mt-10">
            <div className="grid gap-4 lg:grid-cols-4">
            {workflow.steps.map((step) => (
              <article key={step.number} className="glass-card-l2 relative z-10 rounded-3xl p-5 sm:p-6">
                <div className="min-h-[158px]">
                  <p className="text-5xl font-semibold leading-none text-[rgba(79,70,229,0.14)] sm:text-6xl">
                    {step.number}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold leading-[0.95] tracking-[-0.02em] text-[var(--color-midnight)] sm:text-[34px]">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-2 flex h-6 items-center gap-2">
                  <span className="h-[2px] flex-1 rounded-full bg-[rgba(108,92,231,0.32)]" />
                  <ArrowRight size={18} className="text-[rgba(108,92,231,0.78)]" />
                </div>
                <p className="mt-6 text-lg font-medium leading-relaxed text-[var(--color-midnight)] sm:text-xl">
                  {step.stage}:
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-[var(--color-muted-strong)]">
                  {step.description}
                </p>
              </article>
            ))}
            </div>
          </div>

          <p className="mt-8 text-right text-xl leading-relaxed text-[var(--color-midnight)]">
            <span className="text-[var(--color-muted)]">{workflow.optionalLabel}</span>{" "}
            {workflow.optionalLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
