import type { Locale } from "@/lib/i18n";
import type { TeamMember } from "@/types/content";

export const contactInfo = {
  email: "ask@decode-research.ru",
  phone: "+7 (965) 296-32-49",
  website: "decode-research.ru",
};

const ru = {
  responseTime: "Обычно отвечаем в течение одного рабочего дня.",
  team: [
    {
      name: "Савастенко Екатерина",
      role: "Основатель и визионер",
      expertise: [
        "Социолог, 15+ лет в FinTech",
        "Банки, страхование, телеком",
        "Бренд, сегментации, стратегия, B2B",
      ],
      photo: "/team/pict_1.jpg",
    },
    {
      name: "Мануильская Ксения",
      role: "Архитектор исследований",
      expertise: [
        "Социолог, к. с. н., коуч ICF",
        "20+ лет социокультурных исследований",
        "NPS, лояльность",
      ],
      photo: "/team/pict_2.jpg",
    },
    {
      name: "Абдаллах Лейла",
      role: "Ловец инсайтов",
      expertise: ["Социолог, качественные исследования", "5+ лет опыта", "CustDev, JTBD, CJM"],
      photo: "/team/pict_3.jpg",
    },
    {
      name: "Шакирова Рената",
      role: "Статистический алхимик",
      expertise: [
        "Социолог",
        "8+ лет: количественные опросы G2C и B2C",
        "Развитие продукта, маркетплейсы",
      ],
      photo: "/team/pict_4.jpg",
    },
  ] as TeamMember[],
};

const en: typeof ru = {
  responseTime: "We usually reply within one business day.",
  team: [
    {
      name: "Ekaterina Savastenko",
      role: "Founder and visionary",
      expertise: [
        "Sociologist, 15+ years in FinTech",
        "Banking, insurance, telecom",
        "Brand, segmentation, strategy, B2B",
      ],
      photo: "/team/pict_1.jpg",
    },
    {
      name: "Kseniya Manuilskaya",
      role: "Research architect",
      expertise: [
        "Sociologist, PhD, ICF coach",
        "20+ years of sociocultural research",
        "NPS, loyalty",
      ],
      photo: "/team/pict_2.jpg",
    },
    {
      name: "Leila Abdallah",
      role: "Insight hunter",
      expertise: ["Sociologist, qualitative research", "5+ years of experience", "CustDev, JTBD, CJM"],
      photo: "/team/pict_3.jpg",
    },
    {
      name: "Renata Shakirova",
      role: "Statistical alchemist",
      expertise: [
        "Sociologist",
        "8+ years: quantitative G2C and B2C surveys",
        "Product development, marketplaces",
      ],
      photo: "/team/pict_4.jpg",
    },
  ],
};

export type ContactContent = typeof ru;

export const contactContent: Record<Locale, ContactContent> = { ru, en };
