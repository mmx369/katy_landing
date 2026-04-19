import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedBackgroundBlobs } from "@/components/sections/animated-background-blobs";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { homeHero, homeMetrics } from "@/data/home";

export function HeroSection() {
  return (
    <section className="hero-stage relative overflow-hidden pb-14 pt-8 sm:pb-24 sm:pt-14">
      <AnimatedBackgroundBlobs />
      <SectionContainer>
        <FadeIn>
          <div className="hero-card relative isolate overflow-hidden p-5 sm:p-10 lg:min-h-[520px] lg:p-12">
            <div className="hero-photo-layer hidden lg:block" />
            <div className="hero-overlay" aria-hidden="true" />
            <div className="hero-glow hidden lg:block" aria-hidden="true" />
            <div className="relative z-20 flex max-w-3xl flex-col gap-5 lg:max-w-[52%]">
              <div className="hero-main-card rounded-3xl p-6 sm:p-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Бюро маркетинговых исследований
                </p>
                <h1 className="font-serif text-3xl leading-[1.08] tracking-[-0.022em] text-[var(--color-midnight)] sm:text-5xl lg:text-[3.4rem]">
                  {homeHero.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted-strong)] sm:text-lg">
                  {homeHero.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {homeHero.actions.map((action) => (
                    <Button
                      key={action.href}
                      href={action.href}
                      variant={action.variant ?? "primary"}
                      className="w-full text-center sm:w-auto"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>

              <dl className="grid gap-3 sm:grid-cols-3">
                {homeMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="hero-stat-card rounded-2xl p-4"
                  >
                    <dt className="text-xl font-semibold text-[var(--color-midnight)]">{metric.value}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                      {metric.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
