import { FadeIn } from "@/components/motion/fade-in";
import { SectionIntro } from "@/components/sections/section-intro";
import { SectionContainer } from "@/components/ui/section-container";

const aboutPoints = [
  "Работаем на стыке маркетинга, продукта и пользовательского опыта.",
  "Говорим с бизнесом на одном языке и связываем выводы с управленческими решениями.",
  "Не просто анализируем поведение, а трансформируем исследование в действия.",
];

export function AboutSlideSection() {
  return (
    <section id="about" className="scroll-mt-24 py-12 sm:scroll-mt-28 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <SectionIntro
            eyebrow="О нас"
            title="Решаем бизнес-задачи через исследования."
            description="Мы - небольшая команда опытных исследователей, которая помогает бизнесу понимать своих клиентов, продукт и рынок, чтобы принимать точные решения без лишней бюрократии."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.65fr_1fr]">
            <article className="glass-card-l2 rounded-3xl p-6 sm:p-8">
              <ul className="space-y-3 text-[16px] leading-relaxed text-[var(--color-midnight-soft)]">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6C5CE7]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-muted-strong)]">
                Работаем быстро, глубоко и без лишней бюрократии.
              </p>
            </article>

            <div className="grid gap-4">
              <article className="surface-panel rounded-3xl p-6">
                <p className="text-lg leading-relaxed text-[#6C5CE7]">
                  Помогаем компаниям понимать своих клиентов, продукты и рынки и
                  превращать инсайты в управленческие решения.
                </p>
                <p className="text-[17px] leading-relaxed text-[var(--color-muted-strong)]">
                  Каждый проект ведут опытные исследователи, а senior-специалисты
                  лично участвуют на всех этапах.
                </p>
              </article>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
