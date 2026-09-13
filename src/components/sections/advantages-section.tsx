import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/data/home";
import { getLocale } from "@/lib/get-locale";

export async function AdvantagesSection() {
  const { advantages } = homeContent[await getLocale()];

  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_1.45fr_1.1fr]">
            <article className="rounded-3xl border border-[rgba(255,255,255,0.2)] bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(30,41,59,0.9))] p-6 text-white shadow-[0_24px_60px_rgba(2,6,23,0.35)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                {advantages.helpLabel}
              </p>
              <ul className="mt-5 space-y-2.5 text-[16px] leading-relaxed text-white/90">
                {advantages.helpItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B7EFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[16px] leading-relaxed text-white/75">{advantages.helpNote}</p>
            </article>

            <article className="glass-card-l2 rounded-3xl p-6 sm:p-7">
              <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
                {advantages.title}
              </h2>
              <div className="mt-5 space-y-4">
                {advantages.details.map((item) => (
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
                {advantages.principlesLabel}
              </p>
              <ul className="mt-5 space-y-2.5 text-[16px] leading-relaxed text-[var(--color-muted-strong)]">
                {advantages.principles.map((item) => (
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
