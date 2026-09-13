import type { Locale } from "@/lib/i18n";
import type { HeroAction, MetricItem } from "@/types/content";

const ru = {
  hero: {
    eyebrow: "Бюро маркетинговых исследований",
    title: "Исследования, которые помогают принимать уверенные бизнес-решения",
    description:
      "Погружаемся в контекст компании, глубоко изучаем потребителя и переводим инсайты в конкретные шаги роста: от продукта и коммуникаций до клиентского опыта.",
    actions: [
      { label: "Оставить заявку", href: "/request", variant: "primary" },
      { label: "Исследовательские решения", href: "/research-solutions", variant: "secondary" },
    ] as HeroAction[],
    metrics: [
      { value: "120+", label: "проектов в B2C и B2B категориях" },
      { value: "14", label: "лет совокупного опыта исследовательской команды" },
      { value: "72 ч", label: "среднее время до первого пакета инсайтов" },
    ] as MetricItem[],
  },
  about: {
    eyebrow: "О нас",
    title: "Решаем бизнес-задачи через исследования.",
    description:
      "Мы - небольшая команда опытных исследователей, которая помогает бизнесу понимать своих клиентов, продукт и рынок, чтобы принимать точные решения без лишней бюрократии.",
    points: [
      "Работаем на стыке маркетинга, продукта и пользовательского опыта.",
      "Говорим с бизнесом на одном языке и связываем выводы с управленческими решениями.",
      "Не просто анализируем поведение, а трансформируем исследование в действия.",
    ],
    note: "Работаем быстро, глубоко и без лишней бюрократии.",
    highlight:
      "Помогаем компаниям понимать своих клиентов, продукты и рынки и превращать инсайты в управленческие решения.",
    subnote:
      "Каждый проект ведут опытные исследователи, а senior-специалисты лично участвуют на всех этапах.",
  },
  businessGrowth: {
    title: "Глубокое понимание клиентов - быстрые бизнес-результаты",
    lead: "Мы работаем с задачами роста и развития бизнеса:",
    tasks: [
      "Поиск правильных сегментов и точек роста продаж",
      "Оптимизация клиентского пути",
      "Улучшение пользовательского опыта",
      "Разработка и проверка продуктовых гипотез",
      "Оценка новых идей и концепций",
      "Понимание потребностей и мотивации клиентов",
    ],
    outcome: "Каждое исследование заканчивается не отчетом, а рекомендациями.",
    valueLabel: "В чем наша ценность",
    valueText:
      "Мы не просто проводим исследования - мы помогаем бизнесу находить ответы на ключевые вопросы.",
    focusText:
      "Фокус не на отчете, а на решениях, которые можно внедрять сразу после исследования.",
  },
  researchTypes: {
    qualitative: {
      title: "Качественные исследования",
      leadBefore: "Отвечаем на вопрос ",
      leadAccent: "почему",
      leadAfter: " и строим гипотезы",
      items: [
        "Глубинные интервью, фокус-группы",
        "CustDev, JTBD, метод дилемм (реальные потребности и логика выбора)",
        "Когнитивное тестирование формулировок и названий",
        "Этнография, дневники",
      ],
    },
    quantitative: {
      title: "Количественные исследования",
      leadBefore: "Оцениваем ",
      leadAccent: "сколько",
      leadAfter: ", проверяем гипотезы, следим за динамикой",
      items: [
        "Сегментация",
        "BHT, тестирование креатива, воронка бренда",
        "Метод Кано, PSM, TURF-анализ",
        "Онлайн-опросы (массовые и узкие сегменты)",
        "Метрики клиентского опыта (NPS, CSAT, CSI, CES)",
      ],
    },
  },
  services: {
    eyebrow: "Наши услуги",
    title: "Понятные методы для сложных задач.",
    linkTitle: "Как работает каждый метод и когда его применять",
    linkLabel: "Смотреть исследовательские решения",
  },
  workflow: {
    eyebrow: "Как мы работаем",
    title: "Прозрачно, быстро и четко",
    motto: [
      "Мы не продаем метод — мы подбираем решение под задачу.",
      "Наша цель — помочь вам принять правильное решение.",
    ],
    steps: [
      {
        number: "1",
        title: "Вы ставите задачу",
        stage: "Бриф и погружение",
        description: "Задаем правильные вопросы, уточняем бизнес-задачу и контекст решений.",
      },
      {
        number: "2",
        title: "Вы говорите OK",
        stage: "Дизайн",
        description: "Подбираем метод, согласуем сроки, формат и реалистичный бюджет.",
      },
      {
        number: "3",
        title: "Вы не переживаете",
        stage: "Поле",
        description: "Быстро собираем данные и глубоко анализируем, чтобы не терять смысл.",
      },
      {
        number: "4",
        title: "Вы принимаете решение",
        stage: "Выводы",
        description: "Даем практические рекомендации для действий и внедрения.",
      },
    ],
    optionalLabel: "Опционально:",
    optionalLines: ["воркшоп с вашей командой", "для внедрения результатов."],
  },
  advantages: {
    helpLabel: "Мы поможем вам",
    helpItems: [
      "Быстро разобраться в поведении клиентов",
      "Проверить гипотезы перед запуском",
      "Найти точки роста продукта и продаж",
      "Принять обоснованные решения",
    ],
    helpNote: "Готовы подключиться на любом этапе — от идеи до оптимизации.",
    title: "Наши преимущества",
    details: [
      {
        title: "Скорость принятия решения",
        text: "Вы общаетесь с владельцем и senior-экспертами напрямую.",
      },
      {
        title: "Гибкость",
        text: "Пересобираем дизайн исследования под новые вводные в процессе проекта.",
      },
      {
        title: "Экономия",
        text: "Вы платите за экспертизу и результат, без лишних уровней процессов.",
      },
      {
        title: "Итог",
        text: "Сильная методология и человеческая коммуникация: с нами спокойно и надежно.",
      },
    ],
    principlesLabel: "Принципы работы",
    principles: [
      "Быстро запускаем исследования",
      "Гибко подстраиваемся под задачи",
      "Работаем без шаблонов",
      "Глубоко анализируем данные",
      "Всегда даем прикладные выводы",
      "Вы работаете напрямую с исполнителями, без лишних звеньев",
    ],
  },
  expertise: {
    eyebrow: "Категорийная экспертиза",
    title: "Какие категории мы понимаем лучше всего",
    categories: [
      { number: "1", title: "Банки" },
      { number: "2", title: "Страхование" },
      { number: "3", title: "Онлайн-сервисы" },
      { number: "4", title: "Телеком" },
      { number: "5", title: "Ритейл" },
    ],
  },
  team: {
    eyebrow: "Команда и контакты",
    title: "Команда, с которой вы работаете напрямую",
    emailLabel: "Email:",
    phoneLabel: "Тел:",
  },
  cta: {
    eyebrow: "Оставить заявку",
    title: "Обсудим задачу и предложим рабочий исследовательский дизайн",
    description:
      "Опишите контекст бизнеса, ограничения и цель. Предложим подход, сроки и формат исследования без лишней бюрократии.",
    hint: "Опишите задачу - предложим подход, сроки и формат исследования.",
    actionLabel: "Оставить заявку",
    actionHref: "/request",
  },
};

const en: typeof ru = {
  hero: {
    eyebrow: "Marketing research bureau",
    title: "Research that helps you make confident business decisions",
    description:
      "We immerse ourselves in your company's context, study your customers in depth and turn insight into concrete growth steps: from product and communications to customer experience.",
    actions: [
      { label: "Submit a request", href: "/request", variant: "primary" },
      { label: "Research solutions", href: "/research-solutions", variant: "secondary" },
    ],
    metrics: [
      { value: "120+", label: "projects across B2C and B2B categories" },
      { value: "14", label: "years of combined research team experience" },
      { value: "72 h", label: "average time to the first set of insights" },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "We solve business problems through research.",
    description:
      "We are a small team of experienced researchers helping businesses understand their customers, product and market, so they can make precise decisions without unnecessary bureaucracy.",
    points: [
      "We work where marketing, product and user experience meet.",
      "We speak the language of business and tie findings to management decisions.",
      "We do more than analyse behaviour - we turn research into action.",
    ],
    note: "We work fast, we go deep, and we skip the bureaucracy.",
    highlight:
      "We help companies understand their customers, products and markets, and turn insight into management decisions.",
    subnote:
      "Every project is led by experienced researchers, with senior specialists personally involved at every stage.",
  },
  businessGrowth: {
    title: "Deep customer understanding - fast business results",
    lead: "We work on business growth and development tasks:",
    tasks: [
      "Finding the right segments and sales growth points",
      "Optimising the customer journey",
      "Improving the user experience",
      "Developing and validating product hypotheses",
      "Evaluating new ideas and concepts",
      "Understanding customer needs and motivation",
    ],
    outcome: "Every study ends with recommendations, not with a report.",
    valueLabel: "Where our value lies",
    valueText:
      "We do more than run research - we help businesses find answers to the questions that matter.",
    focusText:
      "The focus is not on the report, but on decisions you can implement right after the study.",
  },
  researchTypes: {
    qualitative: {
      title: "Qualitative research",
      leadBefore: "We answer the question ",
      leadAccent: "why",
      leadAfter: " and build hypotheses",
      items: [
        "In-depth interviews, focus groups",
        "CustDev, JTBD, the dilemma method (real needs and the logic of choice)",
        "Cognitive testing of wording and names",
        "Ethnography, diaries",
      ],
    },
    quantitative: {
      title: "Quantitative research",
      leadBefore: "We measure ",
      leadAccent: "how much",
      leadAfter: ", test hypotheses and track the dynamics",
      items: [
        "Segmentation",
        "BHT, creative testing, the brand funnel",
        "Kano model, PSM, TURF analysis",
        "Online surveys (mass audiences and narrow segments)",
        "Customer experience metrics (NPS, CSAT, CSI, CES)",
      ],
    },
  },
  services: {
    eyebrow: "Our services",
    title: "Clear methods for complex problems.",
    linkTitle: "How each method works and when to apply it",
    linkLabel: "View research solutions",
  },
  workflow: {
    eyebrow: "How we work",
    title: "Transparent, fast and precise",
    motto: [
      "We do not sell a method — we choose the solution that fits the task.",
      "Our goal is to help you make the right decision.",
    ],
    steps: [
      {
        number: "1",
        title: "You set the task",
        stage: "Brief and immersion",
        description:
          "We ask the right questions and clarify the business task and the decision context.",
      },
      {
        number: "2",
        title: "You say OK",
        stage: "Design",
        description: "We select the method and agree on timing, format and a realistic budget.",
      },
      {
        number: "3",
        title: "You stop worrying",
        stage: "Fieldwork",
        description: "We collect data fast and analyse it deeply, so nothing meaningful is lost.",
      },
      {
        number: "4",
        title: "You make the decision",
        stage: "Findings",
        description: "We give practical recommendations for action and implementation.",
      },
    ],
    optionalLabel: "Optional:",
    optionalLines: ["a workshop with your team", "to put the findings to work."],
  },
  advantages: {
    helpLabel: "We will help you",
    helpItems: [
      "Understand customer behaviour quickly",
      "Validate hypotheses before launch",
      "Find growth points for product and sales",
      "Make well-grounded decisions",
    ],
    helpNote: "We are ready to join at any stage — from the idea to optimisation.",
    title: "Our advantages",
    details: [
      {
        title: "Speed of decision-making",
        text: "You talk to the owner and senior experts directly.",
      },
      {
        title: "Flexibility",
        text: "We rebuild the research design around new inputs during the project.",
      },
      {
        title: "Cost efficiency",
        text: "You pay for expertise and results, without extra layers of process.",
      },
      {
        title: "The result",
        text: "Strong methodology and human communication: working with us is calm and dependable.",
      },
    ],
    principlesLabel: "How we work",
    principles: [
      "We launch research quickly",
      "We adapt flexibly to the task",
      "We work without templates",
      "We analyse data deeply",
      "We always deliver applicable conclusions",
      "You work directly with the people doing the research, with no middle links",
    ],
  },
  expertise: {
    eyebrow: "Category expertise",
    title: "The categories we understand best",
    categories: [
      { number: "1", title: "Banking" },
      { number: "2", title: "Insurance" },
      { number: "3", title: "Online services" },
      { number: "4", title: "Telecom" },
      { number: "5", title: "Retail" },
    ],
  },
  team: {
    eyebrow: "Team and contacts",
    title: "The team you work with directly",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
  },
  cta: {
    eyebrow: "Submit a request",
    title: "Let's discuss your task and propose a research design that works",
    description:
      "Describe your business context, constraints and goal. We will propose an approach, timing and research format without unnecessary bureaucracy.",
    hint: "Describe the task - we will propose an approach, timing and research format.",
    actionLabel: "Submit a request",
    actionHref: "/request",
  },
};

export type HomeContent = typeof ru;

export const homeContent: Record<Locale, HomeContent> = { ru, en };
