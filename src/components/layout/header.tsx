"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { SiteLogo } from "@/components/brand/site-logo";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.65)] shadow-[0_10px_30px_rgba(30,40,80,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[18px]">
      <SectionContainer className="py-1.5">
        <div className="flex min-h-[60px] items-center justify-between gap-4">
          <div onClick={closeMenu}>
            <SiteLogo size="xs" variant="mark" addEcodeText />
          </div>
          <nav
            className="hidden items-center gap-8 text-sm font-medium text-[var(--color-midnight-soft)] lg:flex"
            aria-label="Основная навигация"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--color-accent-violet)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button
              href="/request"
              className="px-5 py-2.5 text-sm"
            >
              Оставить заявку
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.76)] bg-[rgba(255,255,255,0.72)] text-[var(--color-midnight-soft)] shadow-[0_8px_18px_rgba(20,30,60,0.08)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] lg:hidden"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-controls="mobile-main-menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {isMenuOpen ? (
          <nav
            id="mobile-main-menu"
            className="mt-2 rounded-2xl border border-[rgba(255,255,255,0.58)] bg-[rgba(255,255,255,0.54)] p-2 text-sm text-[var(--color-midnight-soft)] shadow-[0_10px_24px_rgba(20,30,60,0.09),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[12px] lg:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
              {navigationItems.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl border border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.62)] px-3 py-2 font-medium shadow-[0_6px_14px_rgba(20,30,60,0.05)] transition-all hover:bg-[rgba(108,92,231,0.14)] hover:text-[var(--color-accent-violet)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </SectionContainer>
    </header>
  );
}
