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
                <div className="group relative mb-5 h-48 w-full overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),rgba(245,246,255,0.45))] shadow-[0_14px_34px_rgba(20,30,60,0.16)]">
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `scale(${member.photoScale ?? 1})`,
                      transformOrigin: "center",
                    }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover grayscale contrast-105 transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
                      style={{
                        objectPosition: member.photoPosition ?? "50% 30%",
                      }}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.28))]" />
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
