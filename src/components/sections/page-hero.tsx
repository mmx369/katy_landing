import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="relative py-12 sm:py-24">
      <SectionContainer>
        <FadeIn>
          <div className="surface-panel max-w-4xl rounded-3xl p-6 sm:p-10">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 break-words font-serif text-3xl leading-[1.12] text-[var(--color-midnight)] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-muted-strong)] sm:text-lg">
              {description}
            </p>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
