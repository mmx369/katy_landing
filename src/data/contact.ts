export const contactInfo = {
  email: "e.savastenko@mail.ru",
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
    expertise: ["CJM", "Сегментации", "Бренд-стратегия", "15+ лет в ритейле"],
    photo: "/team/pict_1.jpg",
    photoPosition: "50% 34%",
  },
  {
    name: "Манульская Ксения",
    role: "Социолог, методолог",
    expertise: ["UX", "Качественные исследования", "Исследовательский дизайн"],
    photo: "/team/pict_2.jpg",
    photoScale: 1.03,
    photoPosition: "50% 30%",
  },
  {
    name: "Абдаллах Лейла",
    role: "Социолог",
    expertise: ["CustDev", "JTBD", "Качественные исследования"],
    photo: "/team/pict_3.jpg",
    photoScale: 0.92,
    photoPosition: "50% 20%",
  },
  {
    name: "Шакирова Рената",
    role: "Социолог",
    expertise: ["HR-исследования", "Развитие продукта", "Образовательные проекты"],
    photo: "/team/pict_4.jpg",
    photoScale: 0.9,
    photoPosition: "50% 14%",
  },
];
