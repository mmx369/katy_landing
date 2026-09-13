import type { Locale } from "@/lib/i18n";

export interface MarketplaceCaseBlock {
  sectionLabel: string;
  sectionTitle: string;
  intro: string[];
  bullets: string[];
  caseTitle: string;
  caseSummary: string[];
  caseNotes: string[];
  imageSrc: string;
  imageAlt: string;
}

const ru = {
  hero: {
    eyebrow: "Маркетплейсы",
    title: "Маркетплейсы: аудит и сессии восприятия карточек",
    description:
      "Два прикладных формата работы: аудит карточек и сессии восприятия. Оба помогают понять, что мешает покупке, и перевести выводы в конкретные доработки карточки.",
  },
  swipeHint: "Свайпните изображение влево/вправо, чтобы рассмотреть детали.",
  ctaLabel: "Обсудить карточки на маркетплейсах",
  blocks: [
    {
      sectionLabel: "Маркетплейсы",
      sectionTitle: "Аудит карточек",
      intro: [
        "Карточки анализируют опытные исследователи, которые изучили сотни товаров и поведение покупателей на маркетплейсах.",
        "Мы заранее понимаем, как именно пользователь выбирает товар и на что обращает внимание в первые секунды.",
        "Смотрим на карточку глазами покупателя и оцениваем, насколько быстро и понятно доносится ключевая информация.",
        "На основе анализа даем конкретные рекомендации: что изменить в баннере и карусели, чтобы карточка лучше читалась и попадала в ожидания.",
        "Такая доработка повышает вовлечение в карточку и увеличивает конверсию в просмотр и добавление в корзину.",
      ],
      bullets: [
        "Фокус на первых секундах восприятия карточки",
        "Проверка иерархии смыслов в баннере и карусели",
        "Рекомендации по структуре и формулировкам",
      ],
      caseTitle: "Кейс",
      caseSummary: [
        "Карточка выглядит красиво, но покупателю критически важно понять, когда давать следующую таблетку и как быстро действует препарат.",
        "Пока ответа на этот вопрос нет в первых экранах, пользователь не может принять решение и уходит дальше.",
      ],
      caseNotes: [
        "Критичная информация должна быть в первых 2–3 слайдах.",
        "Вторичные факты (состав, страна и т.п.) переносятся ниже по структуре.",
      ],
      imageSrc: "/marketplaces/audit-case-detail.png",
      imageAlt: "Кейс аудита карточки товара на маркетплейсе",
    },
    {
      sectionLabel: "Маркетплейсы",
      sectionTitle: "Сессии восприятия карточек",
      intro: [
        "Проводим сессии восприятия в реальном времени: проходим с покупателями вашу карточку и карточки ближайших конкурентов.",
        "Фиксируем, как считывается информация: что понятно сразу, что вызывает вопросы и чего не хватает для решения о покупке.",
        "Получаем живую реакцию пользователя: где теряется внимание, какие блоки не работают, а какая информация критична.",
        "По итогам выдаем конкретный список доработок: что убрать, что изменить и что добавить.",
      ],
      bullets: [
        "Сравнение восприятия вашей карточки и конкурентов",
        "Живые реакции и барьеры покупки по шагам",
        "Конкретный список правок для роста конверсии",
      ],
      caseTitle: "Кейс",
      caseSummary: [
        "Покупателю непонятно, что за прибор и зачем он нужен: ключевая польза не считывается в первых блоках.",
        "Часть формулировок звучит размыто, из-за этого карточка не ведет к уверенному решению о покупке.",
      ],
      caseNotes: [
        "Упростить первый экран и назвать продукт понятным языком.",
        "Убрать неочевидные тезисы и поднять ключевые преимущества выше по карточке.",
      ],
      imageSrc: "/marketplaces/perception-case-detail.png",
      imageAlt: "Кейс сессии восприятия карточки товара",
    },
  ] as MarketplaceCaseBlock[],
};

const en: typeof ru = {
  hero: {
    eyebrow: "Marketplaces",
    title: "Marketplaces: product page audits and perception sessions",
    description:
      "Two applied formats: product page audits and perception sessions. Both reveal what stands in the way of a purchase and translate the findings into specific changes to the listing.",
  },
  swipeHint: "Swipe the image left or right to see the details.",
  ctaLabel: "Discuss your marketplace listings",
  blocks: [
    {
      sectionLabel: "Marketplaces",
      sectionTitle: "Product page audit",
      intro: [
        "Listings are reviewed by experienced researchers who have studied hundreds of products and the behaviour of marketplace shoppers.",
        "We already know how a user chooses a product and what they notice in the first few seconds.",
        "We look at the listing through the buyer's eyes and assess how quickly and clearly the key information comes across.",
        "Based on the analysis we give concrete recommendations: what to change in the banner and the carousel so that the listing reads better and matches expectations.",
        "These changes increase engagement with the listing and lift conversion to views and add-to-cart.",
      ],
      bullets: [
        "Focus on the first seconds of perception",
        "A check of the meaning hierarchy in the banner and the carousel",
        "Recommendations on structure and wording",
      ],
      caseTitle: "Case",
      caseSummary: [
        "The listing looks attractive, but the buyer critically needs to know when to take the next tablet and how fast the medicine works.",
        "Until that answer appears on the first screens, the user cannot decide and moves on.",
      ],
      caseNotes: [
        "Critical information belongs in the first 2–3 slides.",
        "Secondary facts (composition, country of origin and so on) move further down the structure.",
      ],
      imageSrc: "/marketplaces/audit-case-detail.png",
      imageAlt: "Case study of a marketplace product page audit",
    },
    {
      sectionLabel: "Marketplaces",
      sectionTitle: "Listing perception sessions",
      intro: [
        "We run perception sessions in real time: we walk buyers through your listing and those of your closest competitors.",
        "We record how the information is read: what is clear immediately, what raises questions and what is missing for a purchase decision.",
        "We capture live user reactions: where attention is lost, which blocks do not work and which information is critical.",
        "As a result we deliver a specific list of changes: what to remove, what to change and what to add.",
      ],
      bullets: [
        "A comparison of how your listing and competitors' listings are perceived",
        "Live reactions and purchase barriers step by step",
        "A specific list of edits to lift conversion",
      ],
      caseTitle: "Case",
      caseSummary: [
        "The buyer cannot tell what the device is or why they need it: the key benefit is not readable in the first blocks.",
        "Some of the wording sounds vague, so the listing does not lead to a confident purchase decision.",
      ],
      caseNotes: [
        "Simplify the first screen and name the product in plain language.",
        "Remove the non-obvious claims and move the key benefits higher up the listing.",
      ],
      imageSrc: "/marketplaces/perception-case-detail.png",
      imageAlt: "Case study of a product listing perception session",
    },
  ],
};

export type MarketplaceContent = typeof ru;

export const marketplaceContent: Record<Locale, MarketplaceContent> = { ru, en };
