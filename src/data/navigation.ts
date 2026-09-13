import type { Locale } from "@/lib/i18n";
import type { NavItem } from "@/types/content";

/** The nav entry whose submenu the layout fills with research directions. */
export const RESEARCH_SOLUTIONS_HREF = "/research-solutions";

/** Hrefs are locale-neutral: the header runs them through localizePath. */
const ru: NavItem[] = [
  { label: "О нас", href: "/#about" },
  { label: "Исследовательские решения", href: RESEARCH_SOLUTIONS_HREF },
  { label: "Маркетплейсы", href: "/marketplaces" },
  { label: "База знаний", href: "/knowledge-base" },
  { label: "Контакты", href: "/contacts" },
];

const en: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Research solutions", href: RESEARCH_SOLUTIONS_HREF },
  { label: "Marketplaces", href: "/marketplaces" },
  { label: "Knowledge base", href: "/knowledge-base" },
  { label: "Contacts", href: "/contacts" },
];

export const navigationItems: Record<Locale, NavItem[]> = { ru, en };
