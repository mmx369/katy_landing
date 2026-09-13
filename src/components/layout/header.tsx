"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { SiteLogo } from "@/components/brand/site-logo";
import { LanguageOptions, LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import type { CommonContent } from "@/data/common";
import { localizePath, stripLocale, type Locale } from "@/lib/i18n";
import type { NavItem } from "@/types/content";

type HeaderLabels = CommonContent["header"];

interface HeaderProps {
  locale: Locale;
  items: NavItem[];
  labels: HeaderLabels;
}

/** Keeps the menu open while the cursor travels from the trigger down to the list. */
const CLOSE_DELAY_MS = 150;

const navPillClassName =
  "nav-pill flex items-center gap-1 whitespace-nowrap px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]";

function DesktopNavItem({
  item,
  locale,
  isActive,
}: {
  item: NavItem;
  locale: Locale;
  isActive: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const open = () => {
    cancelClose();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const linkClassName = `${navPillClassName} ${
    isActive ? "nav-pill-active font-semibold" : "hover:text-[var(--color-accent-violet)]"
  }`;

  if (!item.submenu) {
    return (
      <Link
        href={localizePath(item.href, locale)}
        aria-current={isActive ? "page" : undefined}
        className={linkClassName}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onFocus={open}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <Link
        href={localizePath(item.href, locale)}
        aria-current={isActive ? "page" : undefined}
        aria-expanded={isOpen}
        className={linkClassName}
      >
        {item.label}
        <ChevronDown
          size={13}
          aria-hidden="true"
          className={`transition-transform duration-200 motion-reduce:transition-none ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            aria-label={item.label}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="submenu-panel absolute left-0 top-full z-50 mt-2 w-max min-w-full max-w-[24rem] rounded-2xl p-2"
          >
            {item.submenu.map((child, index) => (
              <li key={child.href}>
                <Link
                  href={localizePath(child.href, locale)}
                  onClick={() => setIsOpen(false)}
                  className="submenu-item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--color-midnight-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                >
                  <span className="submenu-index text-[11px] font-semibold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 whitespace-nowrap">{child.label}</span>
                  <ArrowRight size={14} aria-hidden="true" className="submenu-arrow" />
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({
  item,
  locale,
  isActive,
  labels,
  onNavigate,
}: {
  item: NavItem;
  locale: Locale;
  isActive: boolean;
  labels: HeaderLabels;
  onNavigate: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const submenuId = `submenu-${item.href.replace(/\W+/g, "-")}`;

  const plateClassName = `rounded-xl border px-3 py-2 font-medium transition-all ${
    isActive
      ? "nav-plate-active pl-4 font-semibold"
      : "border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.62)] shadow-[0_6px_14px_rgba(20,30,60,0.05)] hover:bg-[rgba(108,92,231,0.14)] hover:text-[var(--color-accent-violet)]"
  }`;

  if (!item.submenu) {
    return (
      <Link
        href={localizePath(item.href, locale)}
        onClick={onNavigate}
        aria-current={isActive ? "page" : undefined}
        className={`block ${plateClassName}`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <div className={`flex items-stretch gap-1 ${plateClassName}`}>
        <Link
          href={localizePath(item.href, locale)}
          onClick={onNavigate}
          aria-current={isActive ? "page" : undefined}
          className="flex-1"
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={submenuId}
          aria-label={`${isOpen ? labels.closeSubmenu : labels.openSubmenu}: ${item.label}`}
          className="-my-2 -mr-3 flex w-10 shrink-0 cursor-pointer items-center justify-center rounded-r-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
        >
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-200 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen ? (
        <ul id={submenuId} className="mt-1.5 space-y-1 pl-3">
          {item.submenu.map((child) => (
            <li key={child.href}>
              <Link
                href={localizePath(child.href, locale)}
                onClick={onNavigate}
                className="block rounded-lg border border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.46)] px-3 py-1.5 leading-snug transition-colors motion-reduce:transition-none hover:bg-[rgba(108,92,231,0.14)] hover:text-[var(--color-accent-violet)]"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Header({ locale, items, labels }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = stripLocale(usePathname());

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    const [path] = href.split("#");
    const route = path.replace(/\/$/, "") || "/";

    return route === "/" ? pathname === "/" : pathname === route || pathname.startsWith(`${route}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.65)] shadow-[0_10px_30px_rgba(30,40,80,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-[18px]">
      <SectionContainer className="py-1.5">
        <div className="flex min-h-[60px] items-center justify-between gap-3">
          <SiteLogo
            size="xs"
            variant="full"
            priority
            onNavigate={closeMenu}
            href={localizePath("/", locale)}
            label={labels.logoLabel}
          />
          <nav
            className="hidden items-center gap-0.5 text-sm font-medium text-[var(--color-midnight-soft)] xl:flex"
            aria-label={labels.navLabel}
          >
            {items.map((item) => (
              <DesktopNavItem
                key={item.href}
                item={item}
                locale={locale}
                isActive={isActive(item.href)}
              />
            ))}
          </nav>
          <div className="hidden items-center gap-2.5 xl:flex">
            <LanguageSwitcher currentLocale={locale} label={labels.languageLabel} />
            <Button
              href={localizePath("/request", locale)}
              className="whitespace-nowrap px-4 py-2.5 text-sm"
            >
              {labels.ctaLabel}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[rgba(255,255,255,0.76)] bg-[rgba(255,255,255,0.72)] text-[var(--color-midnight-soft)] shadow-[0_8px_18px_rgba(20,30,60,0.08)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] xl:hidden"
            aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
            aria-controls="mobile-main-menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {isMenuOpen ? (
          <nav
            id="mobile-main-menu"
            className="mt-2 rounded-2xl border border-[rgba(255,255,255,0.58)] bg-[rgba(255,255,255,0.54)] p-2 text-sm text-[var(--color-midnight-soft)] shadow-[0_10px_24px_rgba(20,30,60,0.09),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-[12px] xl:hidden"
            aria-label={labels.mobileNavLabel}
          >
            <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
              {items.map((item) => (
                <MobileNavItem
                  key={`mobile-${item.href}`}
                  item={item}
                  locale={locale}
                  isActive={isActive(item.href)}
                  labels={labels}
                  onNavigate={closeMenu}
                />
              ))}
            </div>
            <div className="mt-2 border-t border-[rgba(255,255,255,0.7)] pt-2">
              <LanguageOptions
                currentLocale={locale}
                label={labels.languageLabel}
                onNavigate={closeMenu}
              />
            </div>
          </nav>
        ) : null}
      </SectionContainer>
    </header>
  );
}
