import Link from "next/link";

import { SiteLogo } from "@/components/brand/site-logo";
import { SectionContainer } from "@/components/ui/section-container";
import { commonContent } from "@/data/common";
import { contactInfo } from "@/data/contact";
import { navigationItems } from "@/data/navigation";
import { localizePath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const { footer, header } = commonContent[locale];
  const phoneHref = `tel:${contactInfo.phone.replace(/\D/g, "")}`;
  const websiteHref = contactInfo.website.startsWith("http")
    ? contactInfo.website
    : `https://${contactInfo.website}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] py-12">
      <SectionContainer>
        <div className="grid gap-8 text-center md:grid-cols-[1.2fr_1fr_1fr] md:text-left">
          <div>
            <SiteLogo variant="full" href={localizePath("/", locale)} label={header.logoLabel} />
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-muted-strong)] md:mx-0">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {footer.sectionsTitle}
            </h2>
            <ul className="mt-4 space-y-2">
              {navigationItems[locale].map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizePath(item.href, locale)}
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
              {footer.contactsTitle}
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
                  href={websiteHref}
                  className="hover:text-[var(--color-midnight)]"
                >
                  {contactInfo.website}
                </a>
              </li>
              <li>
                <Link
                  href={localizePath("/privacy", locale)}
                  className="hover:text-[var(--color-midnight)]"
                >
                  {footer.privacyLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-4 text-center text-xs text-[var(--color-muted)]">
          <p>{`© ${currentYear} Decode Research. ${footer.rights}`}</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
