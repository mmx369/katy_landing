import { FadeIn } from "@/components/motion/fade-in";
import { SectionContainer } from "@/components/ui/section-container";
import { homeContent, type HomeContent } from "@/data/home";
import { getLocale } from "@/lib/get-locale";

type ResearchTypeCard = HomeContent["researchTypes"]["qualitative"];

function TypeCard({ card, className }: { card: ResearchTypeCard; className: string }) {
  return (
    <article className={`rounded-3xl p-6 sm:p-8 lg:h-full ${className}`}>
      <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
        {card.title}
      </h2>
      <p className="mt-5 text-2xl leading-snug text-[var(--color-midnight)]">
        {card.leadBefore}
        <span className="gradient-text">{card.leadAccent}</span>
        {card.leadAfter}
      </p>
      <ul className="mt-6 space-y-2.5 text-[17px] leading-relaxed text-[#374151]">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export async function ResearchTypesSection() {
  const { researchTypes } = homeContent[await getLocale()];

  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="grid gap-4 lg:grid-cols-2">
            <TypeCard
              card={researchTypes.qualitative}
              className="glass-card-l2 border-[rgba(108,92,231,0.2)]"
            />
            <TypeCard card={researchTypes.quantitative} className="surface-panel" />
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
