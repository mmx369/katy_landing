import { FadeIn } from "@/components/motion/fade-in";
import { SectionIntro } from "@/components/sections/section-intro";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent } from "@/data/home";
import { getLocale } from "@/lib/get-locale";

export async function AboutSlideSection() {
  const { about } = homeContent[await getLocale()];

  return (
    <section id="about" className="scroll-mt-24 py-12 sm:scroll-mt-28 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <SectionIntro
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
            <article className="glass-card-l2 rounded-3xl p-6 sm:p-8">
              <ul className="space-y-3 text-[16px] leading-relaxed text-[var(--color-midnight-soft)]">
                {about.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C5CE7]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-muted-strong)]">
                {about.note}
              </p>
            </article>

            <div className="grid gap-4">
              <article className="surface-panel rounded-3xl p-6">
                <p className="text-lg leading-relaxed text-[#6C5CE7]">{about.highlight}</p>
                <p className="text-[17px] leading-relaxed text-[var(--color-muted-strong)]">
                  {about.subnote}
                </p>
              </article>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
