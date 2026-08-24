import type { TeamMember } from "@/types/content";

export const contactInfo = {
  email: "ask@decode-research.ru",
  phone: "+7 (965) 296-32-49",
  website: "decode-research.ru",
  responseTime: "Обычно отвечаем в течение одного рабочего дня.",
};

export const teamMembers: TeamMember[] = [
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
    expertise: ["Социолог", "8+ лет: количественные опросы G2C и B2C", "Развитие продукта, маркетплейсы"],
    photo: "/team/pict_4.jpg",
  },
];
