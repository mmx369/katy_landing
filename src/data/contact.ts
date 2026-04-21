export const contactInfo = {
  email: "ask@decode-research.ru",
  phone: "+7 (965) 296-32-49",
  website: "decode-research.ru",
  responseTime: "Обычно отвечаем в течение одного рабочего дня.",
};

export interface TeamMember {
  name: string;
  role: string;
  expertise: string[];
  photo: string;
  photoPosition?: string;
  photoScale?: number;
}

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
    photoPosition: "50% 34%",
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
    photoScale: 1.03,
    photoPosition: "50% 30%",
  },
  {
    name: "Абдаллах Лейла",
    role: "Ловец инсайтов",
    expertise: ["Социолог, качественные исследования", "5+ лет опыта", "CustDev, JTBD, CJM"],
    photo: "/team/pict_3.jpg",
    photoScale: 0.92,
    photoPosition: "50% 20%",
  },
  {
    name: "Шакирова Рената",
    role: "Статистический алхимик",
    expertise: ["Социолог", "8+ лет: количественные опросы G2C и B2C", "Развитие продукта, маркетплейсы"],
    photo: "/team/pict_4.jpg",
    photoScale: 0.9,
    photoPosition: "50% 14%",
  },
];
