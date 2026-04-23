import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { SiteLogo } from "@/components/brand/site-logo";
import { SectionContainer } from "@/components/ui/section-container";
import { contactInfo, teamMembers } from "@/data/contact";

export function TeamContactsSection() {
  return (
    <section className="py-12 sm:py-20">
      <SectionContainer>
        <FadeIn>
          <header className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Команда и контакты
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
              Команда, с которой вы работаете напрямую
            </h2>
          </header>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="surface-panel glass-card-l2 card-interactive rounded-3xl p-6">
                <div className="group relative mb-5 aspect-square w-full overflow-hidden rounded-[24px] bg-[linear-gradient(145deg,rgba(244,245,248,0.94),rgba(228,231,236,0.9))] [box-shadow:inset_0_2px_5px_rgba(255,255,255,0.5),inset_0_-7px_14px_rgba(110,116,128,0.25),inset_7px_0_12px_rgba(255,255,255,0.16),inset_-7px_0_12px_rgba(114,121,135,0.18),0_16px_28px_rgba(36,44,62,0.16)]">
                  <div className="absolute inset-[10px] overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1))]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain contrast-105 transition duration-500 group-hover:brightness-105"
                      style={{
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_56%,rgba(17,27,52,0.28)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.06)_24%,rgba(255,255,255,0)_44%)]" />
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] border-2 border-[rgba(238,240,244,0.95)] [box-shadow:inset_0_2px_4px_rgba(255,255,255,0.45),inset_0_-4px_8px_rgba(109,116,128,0.3),0_3px_10px_rgba(225,229,236,0.45)]" />
                  <div className="pointer-events-none absolute inset-[6px] rounded-[18px] border border-[rgba(232,235,241,0.88)] [box-shadow:inset_0_1px_2px_rgba(255,255,255,0.32)]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-midnight)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">{member.role}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted-strong)]">
                  {member.expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="glass-card-l2 flex min-h-[420px] flex-col items-center justify-center rounded-3xl p-6 text-center">
              <div className="mb-4 p-1">
                <SiteLogo withSignature linked={false} variant="full" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-midnight)]">
                Decode Research
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted-strong)]">
                <li>
                  Email:{" "}
                  <a href={`mailto:${contactInfo.email}`} className="font-medium text-[var(--color-midnight)]">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  Тел:{" "}
                  <a href="tel:+79652963249" className="font-medium text-[var(--color-midnight)]">
                    {contactInfo.phone}
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </FadeIn>
      </SectionContainer>
    </section>
  );
}
