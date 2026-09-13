import type { Locale } from "@/lib/i18n";

const ru = {
  site: {
    title: "Decode Research - маркетинговое исследовательское агентство",
    description:
      "Маркетинговое исследовательское агентство Decode Research: сегментации, тестирование коммуникаций, CX-исследования, CustDev и аудит карточек для маркетплейсов.",
  },
  researchSolutions: {
    title: "Исследовательские решения - Decode Research",
    description:
      "Направления и методы маркетинговых исследований: сегментация, CustDev, JTBD, BHT, тестирование креатива, метод Кано, PSM, TURF-анализ, NPS, CJM, UI-исследования - что дает каждый метод и когда его стоит применять.",
    eyebrow: "Исследовательские решения",
    heroTitle: "Исследовательские решения для роста бизнеса",
    heroDescription:
      "Пять направлений: понять рынок, построить сильный бренд, создать востребованный продукт, улучшить клиентский опыт и обосновать решения. Для каждого метода - как он работает и когда его стоит применять.",
  },
  marketplaces: {
    title: "Маркетплейсы - Decode Research",
    description:
      "Аудит карточек и сессии восприятия для маркетплейсов: выявляем барьеры покупки, улучшаем структуру карточки и повышаем конверсию.",
  },
  knowledgeBase: {
    title: "База знаний - Decode Research",
    description:
      "База знаний Decode Research по маркетинговым исследованиям: сегментации, CustDev, JTBD, NPS, CJM, бренд, клиентский опыт и маркетплейсы.",
    eyebrow: "База знаний",
    heroTitle: "Методики, с которыми мы решаем бизнес-задачи",
    heroDescription: "Сегментации, CustDev, JTBD, NPS, KANO и CJM.",
  },
  contacts: {
    title: "Контакты - Decode Research",
    description:
      "Свяжитесь с Decode Research: обсудим маркетинговое исследование, задачи бренда, продукта, CX или маркетплейсов и предложим формат проекта.",
    eyebrow: "Контакты",
    heroTitle: "Обсудим задачу и подберем формат исследования",
    heroDescription:
      "Расскажите о контексте бизнеса и текущем вопросе. Мы предложим подход, сроки и формат взаимодействия.",
    infoTitle: "Контактная информация",
    emailLabel: "Email:",
    phoneLabel: "Телефон:",
    formTitle: "Форма обратной связи",
    formDescription:
      "Опишите контекст задачи, а мы вернемся с первым предложением по исследовательскому дизайну.",
  },
  request: {
    title: "Оставить заявку - Decode Research",
    description:
      "Оставьте заявку на маркетинговое исследование: опишите задачу, а команда Decode Research предложит подход, сроки и формат проекта.",
    eyebrow: "Оставить заявку",
    heroTitle: "Короткий бриф - четкий план исследования",
    heroDescription:
      "Чем конкретнее контекст, тем точнее и быстрее мы сможем предложить рабочий формат проекта.",
    formTitle: "Расскажите о задаче",
    formDescription:
      "Форма включает ключевые вопросы по бизнес-проблеме, гипотезам, аудитории и срокам. Это помогает сразу собрать корректный исследовательский контур.",
    benefitsTitle: "Что получите после заявки",
    benefits: [
      "Предварительный подход и дизайн исследования",
      "Оценку сроков и состава этапов",
      "Рекомендации по объему и формату работ",
    ],
  },
  privacy: {
    title: "Политика обработки персональных данных - Decode Research",
    description:
      "Политика в отношении обработки персональных данных ИП Савастенко Е. С.: цели, правовые основания, сроки хранения и права субъекта персональных данных.",
    eyebrow: "Правовая информация",
    heroTitle: "Политика в отношении обработки персональных данных",
    heroDescription:
      "Как Оператор обрабатывает и защищает персональные данные, полученные через сайт decode-research.ru.",
    operatorTitle: "Оператор",
    operatorNameLabel: "Наименование",
    innLabel: "ИНН:",
    ogrnipLabel: "ОГРНИП:",
    emailLabel: "Email:",
    websiteLabel: "Сайт:",
  },
  notFound: {
    title: "Страница не найдена - Decode Research",
    description: "Такой страницы на сайте Decode Research нет.",
    eyebrow: "Ошибка 404",
    heroTitle: "Страница не найдена",
    heroDescription:
      "Возможно, адрес набран с ошибкой или страница была перемещена. Вернитесь на главную или напишите нам.",
    homeLabel: "На главную",
    contactsLabel: "Контакты",
  },
  consent: {
    title: "Согласие на обработку персональных данных - Decode Research",
    description:
      "Текст согласия на обработку персональных данных, которое пользователь дает при отправке формы обратной связи на сайте decode-research.ru.",
    eyebrow: "Правовая информация",
    heroTitle: "Согласие на обработку персональных данных",
    heroDescription: "Этот текст подтверждается отметкой в форме обратной связи перед отправкой заявки.",
    versionLabel: "Версия согласия:",
    versionNote:
      "Она фиксируется вместе с датой и временем при каждой отправке формы. Полный порядок обработки описан в",
    policyLinkLabel: "Политике обработки персональных данных",
  },
};

const en: typeof ru = {
  site: {
    title: "Decode Research - marketing research agency",
    description:
      "Decode Research, a marketing research agency: segmentation, communication testing, CX research, CustDev and marketplace listing audits.",
  },
  researchSolutions: {
    title: "Research solutions - Decode Research",
    description:
      "Directions and methods of marketing research: segmentation, CustDev, JTBD, BHT, creative testing, the Kano model, PSM, TURF analysis, NPS, CJM and UI research - what each method delivers and when to apply it.",
    eyebrow: "Research solutions",
    heroTitle: "Research solutions for business growth",
    heroDescription:
      "Five directions: understand the market, build a strong brand, create a product in demand, improve the customer experience and justify decisions. For every method - how it works and when it is worth applying.",
  },
  marketplaces: {
    title: "Marketplaces - Decode Research",
    description:
      "Listing audits and perception sessions for marketplaces: we identify purchase barriers, improve the structure of the listing and lift conversion.",
  },
  knowledgeBase: {
    title: "Knowledge base - Decode Research",
    description:
      "The Decode Research knowledge base on marketing research: segmentation, CustDev, JTBD, NPS, CJM, brand, customer experience and marketplaces.",
    eyebrow: "Knowledge base",
    heroTitle: "The methods we use to solve business problems",
    heroDescription: "Segmentation, CustDev, JTBD, NPS, KANO and CJM.",
  },
  contacts: {
    title: "Contacts - Decode Research",
    description:
      "Get in touch with Decode Research: we will discuss your marketing research, brand, product, CX or marketplace task and propose a project format.",
    eyebrow: "Contacts",
    heroTitle: "Let's discuss your task and choose a research format",
    heroDescription:
      "Tell us about your business context and the question at hand. We will propose an approach, timing and a way of working together.",
    infoTitle: "Contact information",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
    formTitle: "Contact form",
    formDescription:
      "Describe the context of your task and we will come back with a first proposal for the research design.",
  },
  request: {
    title: "Submit a request - Decode Research",
    description:
      "Submit a marketing research request: describe your task and the Decode Research team will propose an approach, timing and project format.",
    eyebrow: "Submit a request",
    heroTitle: "A short brief - a clear research plan",
    heroDescription:
      "The more specific the context, the faster and more precisely we can propose a project format that works.",
    formTitle: "Tell us about your task",
    formDescription:
      "The form covers the key questions about the business problem, hypotheses, audience and timing. That lets us outline the right research scope straight away.",
    benefitsTitle: "What you get after the request",
    benefits: [
      "A preliminary approach and research design",
      "An estimate of timing and project stages",
      "Recommendations on the scope and format of the work",
    ],
  },
  privacy: {
    title: "Personal Data Processing Policy - Decode Research",
    description:
      "The personal data processing policy of sole proprietor E. S. Savastenko: purposes, legal grounds, retention periods and the rights of the data subject.",
    eyebrow: "Legal information",
    heroTitle: "Personal Data Processing Policy",
    heroDescription:
      "How the Operator processes and protects personal data received through the decode-research.ru website.",
    operatorTitle: "Operator",
    operatorNameLabel: "Name",
    innLabel: "TIN (INN):",
    ogrnipLabel: "OGRNIP:",
    emailLabel: "Email:",
    websiteLabel: "Website:",
  },
  notFound: {
    title: "Page not found - Decode Research",
    description: "There is no such page on the Decode Research website.",
    eyebrow: "Error 404",
    heroTitle: "Page not found",
    heroDescription:
      "The address may contain a typo, or the page may have been moved. Go back to the home page or get in touch with us.",
    homeLabel: "Go to home page",
    contactsLabel: "Contacts",
  },
  consent: {
    title: "Consent to the processing of personal data - Decode Research",
    description:
      "The text of the consent to the processing of personal data that a user gives when submitting the contact form on decode-research.ru.",
    eyebrow: "Legal information",
    heroTitle: "Consent to the processing of personal data",
    heroDescription: "This text is confirmed by the checkbox in the contact form before a request is sent.",
    versionLabel: "Consent version:",
    versionNote:
      "It is recorded together with the date and time on every form submission. The full processing procedure is described in the",
    policyLinkLabel: "Personal Data Processing Policy",
  },
};

export type PageContent = typeof ru;

export const pageContent: Record<Locale, PageContent> = { ru, en };
