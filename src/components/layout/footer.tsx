import Link from "next/link";

import { SiteLogo } from "@/components/brand/site-logo";
import { SectionContainer } from "@/components/ui/section-container";
import { contactInfo } from "@/data/contact";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const phoneHref = `tel:${contactInfo.phone.replace(/\D/g, "")}`;

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] py-12">
      <SectionContainer>
        <div className="grid gap-8 text-center md:grid-cols-[1.2fr_1fr_1fr] md:text-left">
          <div>
            <SiteLogo withSignature variant="full" />
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-muted-strong)] md:mx-0">
              Исследовательское агентство для компаний, которым нужны глубокие
              инсайты и решения, применимые в бизнесе.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Разделы
            </h2>
            <ul className="mt-4 space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-muted-strong)] transition hover:text-[var(--color-midnight)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Контакты
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted-strong)]">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[var(--color-midnight)]">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={phoneHref} className="hover:text-[var(--color-midnight)]">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://${contactInfo.website}`}
                  className="hover:text-[var(--color-midnight)]"
                >
                  {contactInfo.website}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-midnight)]">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
