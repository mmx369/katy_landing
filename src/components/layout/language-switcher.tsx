"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { locales, localeMeta, localizePath, stripLocale, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
}

const STAR_PATH =
  "M0,-1L0.225,-0.309L0.951,-0.309L0.363,0.118L0.588,0.809L0,0.382L-0.588,0.809L-0.363,0.118L-0.951,-0.309L-0.225,-0.309Z";

const US_STAR_POSITIONS = [2.4, 4.8, 7.2].flatMap((x) => [2.15, 4.3, 6.45].map((y) => ({ x, y })));

function FlagIcon({ locale }: { locale: Locale }) {
  return (
    <svg
      viewBox="0 0 24 16"
      aria-hidden="true"
      className="h-[14px] w-[21px] shrink-0 rounded-[3px] shadow-[0_1px_2px_rgba(20,30,60,0.28)]"
    >
      {locale === "ru" ? (
        <>
          <rect width="24" height="16" fill="#ffffff" />
          <rect y="5.333" width="24" height="5.333" fill="#0039a6" />
          <rect y="10.666" width="24" height="5.334" fill="#d52b1e" />
        </>
      ) : (
        <>
          <rect width="24" height="16" fill="#b22234" />
          {[1, 3, 5, 7, 9, 11].map((band) => (
            <rect key={band} y={band * (16 / 13)} width="24" height={16 / 13} fill="#ffffff" />
          ))}
          <rect width="9.6" height={(7 * 16) / 13} fill="#3c3b6e" />
          {US_STAR_POSITIONS.map(({ x, y }) => (
            <path
              key={`${x}-${y}`}
              d={STAR_PATH}
              fill="#ffffff"
              transform={`translate(${x} ${y}) scale(0.85)`}
            />
          ))}
        </>
      )}
      <rect
        width="24"
        height="16"
        rx="1.5"
        fill="none"
        stroke="rgba(20,30,60,0.18)"
        strokeWidth="1"
      />
    </svg>
  );
}

function useLocaleOptions(currentLocale: Locale) {
  const basePath = stripLocale(usePathname());

  return locales.map((locale) => ({
    locale,
    href: localizePath(basePath, locale),
    isCurrent: locale === currentLocale,
    ...localeMeta[locale],
  }));
}

/** Full-width rows for the mobile menu, where there is room for the language name. */
export function LanguageOptions({
  currentLocale,
  label,
  onNavigate,
}: LanguageSwitcherProps & { onNavigate?: () => void }) {
  const options = useLocaleOptions(currentLocale);

  return (
    <ul className="grid grid-cols-2 gap-1.5" aria-label={label}>
      {options.map((option) => (
        <li key={option.locale}>
          <Link
            href={option.href}
            hrefLang={option.htmlLang}
            onClick={onNavigate}
            aria-current={option.isCurrent ? "true" : undefined}
            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 font-medium transition-all ${
              option.isCurrent
                ? "nav-plate-active pl-4 font-semibold"
                : "border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.62)] shadow-[0_6px_14px_rgba(20,30,60,0.05)] hover:bg-[rgba(108,92,231,0.14)] hover:text-[var(--color-accent-violet)]"
            }`}
          >
            <FlagIcon locale={option.locale} />
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Compact trigger for the desktop header: flag only until there is room for the language code. */
export function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const options = useLocaleOptions(currentLocale);
  const current = options.find((option) => option.isCurrent) ?? options[0];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`${label}: ${current.name}`}
        className="chip-pill flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-semibold text-[var(--color-midnight-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
      >
        <FlagIcon locale={current.locale} />
        {current.short}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            role="menu"
            aria-label={label}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.97 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="glass-panel absolute right-0 top-[calc(100%+0.5rem)] z-50 w-44 origin-top-right rounded-2xl p-1.5"
          >
            {options.map((option) => (
              <li key={option.locale} role="none">
                <Link
                  role="menuitem"
                  href={option.href}
                  hrefLang={option.htmlLang}
                  onClick={() => setIsOpen(false)}
                  aria-current={option.isCurrent ? "true" : undefined}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] ${
                    option.isCurrent
                      ? "font-semibold text-[var(--color-accent-indigo)]"
                      : "text-[var(--color-midnight-soft)] hover:bg-[rgba(108,92,231,0.12)] hover:text-[var(--color-accent-violet)]"
                  }`}
                >
                  <FlagIcon locale={option.locale} />
                  <span className="flex-1">{option.name}</span>
                  {option.isCurrent ? <Check size={14} aria-hidden="true" /> : null}
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
