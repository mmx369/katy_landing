import type { Locale } from "@/lib/i18n";

export interface MethodList {
  intro: string;
  items: string[];
}

export interface ResearchMethod {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  indicators?: MethodList;
  note?: string;
  usage?: MethodList;
}

export interface SolutionSection {
  id: string;
  title: string;
  summary?: string;
  methods: ResearchMethod[];
}

const ru: SolutionSection[] = [
  {
    id: "market-opportunities",
    title: "Понять рынок и найти возможности",
    summary:
      "Исследования, позволяющие определить, кто ваши клиенты, какие у них потребности и где находятся точки роста бизнеса.",
    methods: [
      {
        id: "segmentation",
        title: "Сегментация",
        paragraphs: [
          "Сегментация нужна, чтобы разделить рынок или клиентскую базу на группы потребителей, сходные по потребностям, поведению, мотивации или ценности для бизнеса. В отличие от классификации по полу, возрасту или доходу, сегментация строится на поиске факторов, которые действительно объясняют различия в покупательском поведении и определяют реакцию аудитории на продукт, цену, коммуникацию или сервис.",
          "Сегментация строится на базе ценностных или мотивационных характеристик с применением многомерных статистических методов (кластерный анализ, факторный анализ). Это позволяет выявлять естественные группы потребителей на основании массива количественных данных, а не экспертных предположений.",
        ],
        usage: {
          intro: "Сегментационное исследование будет полезно, если необходимо:",
          items: [
            "определить наиболее перспективные целевые аудитории",
            "понять, чем отличаются разные группы клиентов",
            "понять, кому и как продавать продукт",
            "адаптировать маркетинговые коммуникации под разные аудитории",
            "сформировать персонализированное ценностное предложение",
            "оптимизировать продуктовую линейку",
            "выяснить, как доработать продукт под новую аудиторию",
          ],
        },
      },
      {
        id: "custdev",
        title: "CustDev (Customer Development)",
        paragraphs: [
          "CustDev (Customer Development) нужен при работе с продуктом, чтобы понять реальный опыт пользователей, их потребности, мотивы принятия решений и факторы выбора. Метод основан на проведении глубинных интервью и позволяет исследовать не декларируемые предпочтения, а фактическое поведение человека, его опыт взаимодействия с существующими решениями и контекст возникновения потребности.",
          "Ключевой особенностью CustDev является анализ уже произошедших событий, а не гипотетических намерений. Интервью строится вокруг прошлого опыта пользователя: как возникла проблема, какие альтернативы рассматривались, почему было принято решение, что вызвало неудовлетворенность и какие компромиссы пришлось принять. Такой подход значительно снижает влияние когнитивных искажений и рационализации ответов.",
        ],
        usage: {
          intro: "CustDev рекомендуется проводить, если необходимо:",
          items: [
            "понять реальные потребности пользователей",
            "выяснить, почему клиенты не покупают продукт",
            "уточнить ценность предложения (Value Proposition)",
            "разработать новый продукт или сервис",
            "найти новые возможности для развития продукта",
            "улучшить потребительскую воронку",
          ],
        },
      },
      {
        id: "jtbd",
        title: "JTBD (Jobs To Be Done)",
        paragraphs: [
          "JTBD (Jobs To Be Done) позволяет понять, какие задачи есть у потребителя в конкретной жизненной ситуации, какие решения ему могут в этом помочь и как он хочет их решить. Люди не покупают продукты как таковые - они «нанимают» их для достижения определенного результата. Поэтому объектом исследования становится не сам потребитель и не продукт, а работа (job), которую потребителю необходимо выполнить.",
          "Исследование реконструирует процесс принятия решения: событие-триггер, существующие альтернативы, факторы сопротивления изменениям, ожидаемые результаты и компромиссы, на которые готов пойти потребитель. Такой подход позволяет выявить причины поведения, а не только его проявления.",
        ],
        usage: {
          intro: "JTBD особенно эффективен, если необходимо:",
          items: [
            "понять, какую задачу пользователь решает с помощью продукта",
            "определить причины выбора между конкурентами",
            "разработать новый продукт или сервис",
            "найти незакрытые потребности рынка",
            "выявить альтернативные сценарии использования продукта",
            "определить направления инновационного развития",
            "сформировать позиционирование, основанное на ценности для пользователя",
          ],
        },
      },
      {
        id: "dilemmas",
        title: "Метод дилемм",
        paragraphs: [
          "Метод дилемм помогает изучать глубинные установки и модели поведения в ситуациях неопределенности. Он эффективен, когда нужно понять, как человек действует в конфликте интересов: между ценой и качеством, привычкой и инновацией, этикой и удобством. Респонденту предлагают гипотетическую спорную ситуацию без верного ответа. Его выбор и обоснование раскрывают истинные ценности и логику принятия решений. Главный плюс - минимизация социально желательных ответов.",
        ],
        usage: {
          intro: "Метод дилемм эффективен, если вам нужно:",
          items: [
            "понять, как пользователи принимают сложные решения",
            "определить реальные критерии выбора",
            "исследовать компромиссы между характеристиками продукта",
            "выявить скрытые мотивы покупки",
            "определить относительную важность различных преимуществ продукта",
          ],
        },
      },
    ],
  },
  {
    id: "strong-brand",
    title: "Сделать сильный бренд",
    summary:
      "Исследования, позволяющие построить конкурентное позиционирование, измерить силу бренда и повысить эффективность маркетинговых коммуникаций.",
    methods: [
      {
        id: "bht",
        title: "BHT (Brand Health Tracking)",
        paragraphs: [
          "BHT (Brand Health Tracking) - мониторинг здоровья бренда, позволяющий оценивать динамику ключевых показателей бренда и своевременно выявлять изменения в восприятии потребителей. Как правило, измеряют ряд показателей знания, привлекательности, заметности бренда и рекламы: знание с подсказкой, намерение использовать или отказаться, привлекательность бренда и рекламы, имидж бренда, воронку бренда.",
          "В основе BHT лежит концепция измерения капитала бренда (Brand Equity), согласно которой сила бренда определяется не только уровнем знания, но и качеством сформированных ассоциаций, лояльностью потребителей, готовностью рассматривать бренд при выборе и другими показателями, определяющими его долгосрочную конкурентоспособность.",
        ],
        indicators: {
          intro: "В рамках Brand Health Tracking обычно измеряются:",
          items: [
            "спонтанное и подсказанное знание бренда (Brand Awareness)",
            "рассмотрение бренда при выборе (Consideration)",
            "пользование брендом (Usage)",
            "предпочтение бренда и намерение покупки",
            "лояльность и готовность рекомендовать бренд (NPS)",
            "имиджевые характеристики бренда",
            "Brand Equity и показатели силы бренда",
          ],
        },
        usage: {
          intro: "Бренд-трекинг рекомендуется проводить, если необходимо:",
          items: [
            "регулярно отслеживать положение бренда на рынке",
            "контролировать положение бренда на рынке и оценивать его силу",
            "сравнивать бренд с основными конкурентами",
            "измерять влияние маркетинговой активности",
            "своевременно выявлять негативные изменения восприятия бренда",
          ],
        },
      },
      {
        id: "creative-testing",
        title: "Тестирование креатива (Creative Testing)",
        paragraphs: [
          "Тестирование креатива - комплекс исследовательских методик, предназначенных для оценки эффективности рекламных материалов до их запуска или в ходе рекламной кампании. Основная задача исследования - определить, насколько коммуникация достигает поставленных маркетинговых целей: привлекает внимание, правильно интерпретируется целевой аудиторией, формирует необходимое восприятие бренда и стимулирует желаемое поведение потребителей.",
          "В зависимости от целей исследования могут оцениваться отдельные элементы рекламы (ключевое сообщение, визуальный образ, персонажи, упаковка, слоган, призыв к действию) или коммуникация в целом.",
        ],
        usage: {
          intro: "Исследование креатива необходимо, если требуется:",
          items: [
            "выбрать наиболее эффективную рекламную концепцию",
            "проверить понятность рекламного сообщения",
            "оценить привлекательность визуальных материалов",
            "снизить риск запуска неэффективной коммуникации",
          ],
        },
      },
      {
        id: "perception-maps",
        title: "Карты восприятия",
        paragraphs: [
          "Метод визуализации данных, основанный на анализе соответствий (Correspondence Analysis). Позволяет определить, какие объекты, бренды, характеристики или сегменты потребителей статистически связаны между собой, а какие, напротив, существенно различаются. Результатом исследования становится карта, на которой расстояние между объектами отражает степень их статистической близости: чем ближе расположены точки, тем сильнее связь между ними.",
        ],
        usage: {
          intro: "Анализ соответствий рекомендуется использовать, если необходимо:",
          items: [
            "понять, как потребители воспринимают конкурентные бренды",
            "определить, какие характеристики наиболее тесно связаны с каждым брендом",
            "построить карту позиционирования рынка",
            "исследовать взаимосвязь между сегментами аудитории и их предпочтениями",
            "выявить потенциальные возможности для репозиционирования бренда",
          ],
        },
      },
      {
        id: "bpf",
        title: "BPF (Brand Position Fit)",
        paragraphs: [
          "Метод позволяет сопоставить образное восприятие брендов и оценить, насколько реальное восприятие бренда соответствует его целевому позиционированию и насколько бренд смог отстроиться от конкурентов в сознании потребителей. В основе методики лежит психометрический метод семантического дифференциала Чарльза Осгуда. Бренд оценивается по ряду биполярных шкал, представляющих собой пары противоположных характеристик, например: «современный - устаревший», «надежный - ненадежный», «премиальный - массовый». Это позволяет измерить не рациональные оценки, а структуру восприятия и эмоциональный образ объекта в сознании потребителей.",
          "Полученные оценки формируют многомерный профиль восприятия бренда, который затем сравнивают как с конкурентами, так и с желаемым позиционированием.",
        ],
        usage: {
          intro: "Метод особенно полезен, если необходимо:",
          items: [
            "оценить имидж бренда",
            "измерить соответствие воспринимаемого образа стратегическому позиционированию",
            "сравнить восприятие собственного бренда и конкурентов",
            "проверить соответствие позиционирования ожиданиям аудитории",
            "оценить влияние рекламной кампании на образ бренда",
            "исследовать восприятие упаковки или дизайна",
          ],
        },
      },
    ],
  },
  {
    id: "product-demand",
    title: "Создать востребованный продукт",
    summary:
      "Методы, помогающие разрабатывать продукты, востребованные рынком, принимать продуктовые решения на основе данных и снижать риск неудачного запуска.",
    methods: [
      {
        id: "kano",
        title: "Метод Кано",
        paragraphs: [
          "Метод Кано позволяет определить, каким образом отдельные характеристики продукта влияют на готовность купить продукт. В основе метода лежит концепция, согласно которой связь между качеством продукта и удовлетворенностью клиента носит нелинейный характер: не все характеристики одинаково ценны для потребителя. Одни являются обязательными и воспринимаются как само собой разумеющиеся, другие оказывают среднее влияние на привлекательность, третьи способны вызывать эффект «приятного удивления» и формировать конкурентное преимущество, а четвертые, напротив, могут оттолкнуть от использования.",
          "Каждая характеристика оценивается на понятность, функциональность (присутствие) и дисфункциональность (отсутствие). Анализ комбинаций ответов позволяет классифицировать каждую фичу продукта как обязательную (Must-be), базовую (Performance), привлекательную (Attractive), безразличную (Indifferent) или нежелательную (Reverse).",
        ],
        usage: {
          intro: "Метод Кано применяется, если необходимо:",
          items: [
            "определить приоритеты разработки новых функций",
            "понять, какие характеристики продукта действительно важны пользователям",
            "избежать разработки невостребованных функций",
            "найти характеристики, способные создать WOW-эффект и выделить продукт среди конкурентов",
            "удалить из продукта фичи, которые работают как барьеры",
          ],
        },
      },
      {
        id: "mvp-testing",
        title: "Тестирование MVP",
        paragraphs: [
          "Тестирование MVP (Minimum Viable Product) - оценка минимально жизнеспособной версии продукта, предназначенная для проверки ключевых продуктовых гипотез до начала полномасштабной разработки. В отличие от оценки готового продукта, исследование MVP направлено на подтверждение того, что предлагаемое решение действительно решает значимую проблему пользователя, обладает ценностью для целевой аудитории и имеет потенциал для дальнейшего развития.",
          "В ходе исследования анализируется не только общее отношение пользователей к продукту, но и востребованность отдельных функций, понятность ценностного предложения, соответствие пользовательским ожиданиям, возникающие барьеры и сценарии использования. Результаты позволяют определить, какие гипотезы подтвердились, какие требуют доработки, а от каких следует отказаться, существенно сокращая затраты на последующую разработку.",
        ],
        usage: {
          intro: "Исследование MVP особенно полезно, если необходимо:",
          items: [
            "проверить жизнеспособность продуктовой идеи",
            "подтвердить ключевые гипотезы",
            "определить минимально необходимый функционал",
            "собрать обратную связь от первых пользователей",
            "определить направления дальнейшего развития продукта",
          ],
        },
      },
      {
        id: "psm",
        title: "PSM (Price Sensitivity Meter)",
        subtitle: "Оценка ценовой эластичности",
        paragraphs: [
          "PSM (Price Sensitivity Meter) - метод исследования ценовой чувствительности потребителей, разработанный голландским экономистом Питером Ван Вестендорпом. Он позволяет определить диапазон цен, который воспринимается потребителями как приемлемый, а также выявить психологические границы, при которых цена начинает восприниматься как слишком низкая (вызывающая сомнения в качестве) или слишком высокая (снижающая готовность к покупке).",
          "Методика основана на четырех вопросах, позволяющих определить пороги восприятия цены: когда товар кажется слишком дорогим, дорогим, дешевым и слишком дешевым. На основе распределения ответов строятся кривые, точки пересечения которых позволяют определить оптимальную цену и диапазон приемлемых цен. PSM особенно эффективен при запуске новых продуктов, выходе в новые категории и оценке ценовых ожиданий потребителей, когда отсутствуют данные о фактическом покупательском поведении.",
        ],
        usage: {
          intro: "Метод рекомендуется использовать, если необходимо:",
          items: [
            "подготовить продукт к выходу на новый рынок",
            "скорректировать ценовую стратегию",
            "оценить реакцию рынка на изменение цены",
            "найти баланс между воспринимаемой ценностью продукта и его стоимостью",
          ],
        },
      },
      {
        id: "turf",
        title: "Оптимизация ассортимента (TURF-анализ)",
        paragraphs: [
          "TURF-анализ - аналитический метод, позволяющий определить, какое сочетание продуктов обеспечивает максимальный охват целевой аудитории при минимальном количестве вариантов. Метод широко используется при оптимизации продуктовых линеек.",
          "В основе метода лежит анализ перекрытия предпочтений различных групп потребителей. В отличие от простой оценки популярности отдельных характеристик, TURF учитывает, что одна и та же аудитория может выбирать несколько вариантов одновременно. Поэтому задача исследования заключается не в поиске наиболее популярного элемента, а в подборе комбинации, которая охватывает максимальное число уникальных потребителей. Такой подход позволяет оптимизировать ассортимент без потери потенциального спроса и рационально распределять ресурсы компании.",
        ],
        usage: {
          intro: "TURF-анализ рекомендуется использовать, если необходимо:",
          items: [
            "выбрать оптимальный набор новых продуктов для запуска",
            "определить наиболее эффективный набор вкусов, упаковок или SKU",
            "оценить потенциальный охват различных комбинаций продуктов",
            "оптимизировать ассортимент без существенной потери покупателей",
            "определить приоритет выхода продуктов",
          ],
        },
      },
    ],
  },
  {
    id: "customer-experience",
    title: "Улучшить клиентский опыт",
    summary:
      "Методы оценки клиентского опыта, качества взаимодействия и факторов, влияющих на удовлетворенность и лояльность клиентов.",
    methods: [
      {
        id: "nps",
        title: "NPS (Net Promoter Score)",
        paragraphs: [
          "NPS (Net Promoter Score) - метрика, оценивающая уровень лояльности к бренду. Метод основан на оценке готовности клиента рекомендовать компанию по шкале от 0 до 10. Потребители делятся на 3 категории: критики (оценки от 0 до 6), нейтралы (оценки 7-8) и промоутеры (оценки 9-10). Уровень лояльности оценивается как разница между долей промоутеров и критиков бренда.",
          "Практическая ценность исследования заключается не только в расчете самого индекса, но и в анализе причин выставленной оценки. Поэтому NPS всегда сопровождается открытыми вопросами, позволяющими выявить факторы формирования лояльности, определить драйверы рекомендаций, причины неудовлетворенности и приоритетные направления улучшения клиентского опыта. Наиболее информативным NPS становится при регулярном мониторинге и сравнении с конкурентным окружением.",
        ],
        usage: {
          intro: "Исследование NPS рекомендуется проводить, если необходимо:",
          items: [
            "измерить уровень клиентской лояльности",
            "понять, какие улучшения нужны клиенту",
            "оценить эффективность изменений в сервисе",
            "сократить отток",
            "определить, почему одни регионы и филиалы работают продуктивнее других",
            "увеличить доходность от клиентов",
          ],
        },
      },
      {
        id: "cx-metrics",
        title: "Метрики клиентского опыта: CSAT, CSI и CES",
        paragraphs: [
          "CSI (Customer Satisfaction Index) - метод оценки удовлетворенности продуктом. Клиент должен оценить, насколько ему понравился продукт по шкале от 1 до 5. Иногда можно применять 7- или 10-балльную шкалу. Итоговый показатель рассчитывается как средняя оценка или как доля удовлетворенных клиентов - в зависимости от выбранной системы измерения.",
          "CSAT (Customer Satisfaction Score) - служит для оценки конкретного опыта взаимодействия с компанией. Респонденту задается вопрос «Насколько Вы удовлетворены...?» с привязкой к конкретному событию: покупкой, доставкой, обращением в службу поддержки, посещением магазина или другим взаимодействием. Оценка особенно полезна для оперативного контроля качества отдельных этапов обслуживания и выявления ситуаций, в которых ожидания клиента не были оправданы.",
          "CES (Customer Effort Score) - метрика, оценивающая, насколько легко клиенту было решить свою задачу. Вопрос формулируется вокруг усилий, например: «Насколько легко Вам было решить свой вопрос?» или «Насколько легко Вам было оформить заказ?». CES измеряет не удовлетворенность результатом, а простоту самого процесса взаимодействия.",
        ],
      },
      {
        id: "cjm",
        title: "CJM (Customer Journey Map)",
        paragraphs: [
          "CJM (Customer Journey Map) - метод исследования клиентского опыта, позволяющий реконструировать полный путь взаимодействия пользователя с компанией, продуктом или сервисом. В отличие от описания внутренних бизнес-процессов, CJM отражает последовательность действий клиента, его цели, ожидания, эмоции и решения на каждом этапе взаимодействия. Метод позволяет взглянуть на продукт глазами пользователя и выявить причины, по которым клиент принимает решение продолжить взаимодействие или отказаться от него.",
          "В ходе исследования анализируются точки контакта, сценарии поведения, драйверы выбора, возникающие барьеры, эмоциональная динамика и факторы, влияющие на переход между этапами клиентского пути. Благодаря этому CJM становится не просто визуальной схемой, а инструментом поиска системных проблем клиентского опыта и определения приоритетов для развития продукта, сервиса и коммуникаций.",
        ],
        usage: {
          intro: "Построение CJM рекомендуется, если необходимо:",
          items: [
            "улучшить качество сервиса",
            "выявить причины потери пользователей на разных этапах воронки",
            "определить точки роста клиентского опыта",
            "повысить конверсию между этапами взаимодействия",
            "синхронизировать работу маркетинга, продукта и клиентского сервиса",
            "сформировать рекомендации по улучшению клиентского опыта (CX) и оптимизации бизнес-процессов",
          ],
        },
      },
      {
        id: "ui-research",
        title: "UI-исследования (User Interface)",
        paragraphs: [
          "UI-исследования (User Interface) направлены на оценку качества пользовательского интерфейса цифрового продукта. В отличие от UX-исследований, которые анализируют пользовательский опыт в целом, UI-исследования фокусируются на эффективности отдельных элементов интерфейса: навигации, структуре экранов, визуальной иерархии, читаемости, расположении элементов управления и качестве визуальной коммуникации. Основная задача исследования - определить, насколько интерфейс помогает пользователю быстро и без ошибок выполнять целевые действия.",
          "Исследование может проводиться как на этапе проектирования интерфейса, так и после запуска продукта. Комплексный подход позволяет выявить не только очевидные ошибки проектирования, но и скрытые барьеры, влияющие на конверсию, скорость выполнения задач и субъективное восприятие удобства продукта.",
        ],
        usage: {
          intro: "UI-исследования рекомендуется проводить, если необходимо:",
          items: [
            "оценить удобство интерфейса",
            "найти причины низкой конверсии",
            "проверить новую версию дизайна",
            "выявить ошибки навигации",
            "повысить скорость выполнения пользовательских сценариев",
          ],
        },
      },
    ],
  },
  {
    id: "decision-measurement",
    title: "Измерить и обосновать решения",
    methods: [
      {
        id: "likert",
        title: "Шкала Лайкерта (Likert Scale)",
        paragraphs: [
          "Шкала Лайкерта позволяет измерять установки, мнения и отношения потребителей, которые невозможно измерить напрямую. Метод представляет собой совокупность утверждений, каждое из которых отражает различные аспекты исследуемого предмета. Респондент последовательно оценивает степень согласия по шкале (например, от 1 до 5). Полученный интегральный показатель рассматривается как количественная оценка исследуемой характеристики - удовлетворенности, доверия, вовлеченности, отношения к бренду, инновационности продукта или любой другой латентной переменной.",
          "Например, необходимо измерить доверие к бренду. Вместо одного вопроса респонденту предлагается серия утверждений: «Я доверяю этому бренду», «Этот бренд выполняет свои обещания», «Этот бренд честен со своими покупателями», «Я уверен в качестве продукции бренда», «Я бы продолжил пользоваться этим брендом». Каждое утверждение измеряет одну грань конструкта «доверие». Использование нескольких утверждений, описывающих исследуемый предмет, позволяет получать надежные и статистически устойчивые показатели отношения к объекту исследования.",
        ],
        note: "В маркетинговых исследованиях термин «шкала Лайкерта» часто ошибочно используют для обозначения любого вопроса с оценкой по шкале 1-5 или 1-7. С методологической точки зрения это некорректно. Классическая шкала Лайкерта - это серия взаимосвязанных утверждений, измеряющих один латентный конструкт, а итоговым результатом является суммарный или нормированный индекс по всей шкале, а не оценка отдельного вопроса.",
        usage: {
          intro: "Метод особенно полезен, если необходимо:",
          items: [
            "количественно измерить отношение потребителей",
            "оценить сложные характеристики, которые невозможно измерить одним вопросом (например, доверие, удовлетворенность, воспринимаемое качество, инновационность или эмоциональную привязанность)",
            "сравнить уровень отношения различных сегментов аудитории",
            "отслеживать динамику изменений отношения потребителей во времени",
          ],
        },
      },
      {
        id: "cognitive-testing",
        title: "Когнитивное тестирование",
        paragraphs: [
          "Когнитивное тестирование - это метод, который проверяет, как клиенты понимают текстовый креатив: слоганы, ценностное предложение, рекламные посылы, названия. Например, название продукта «мультиверт» может пониматься как устройство, у которого несколько скоростей, а не как устройство, которое может и крутить, и сверлить, и пилить, и перемешивать. Некоторые термины могут быть не до конца понятны или клиенты вкладывают в них свои смыслы, что может стать причиной плохих продаж. Мы проверяем не только отдельные формулировки, но и целостное восприятие концепции.",
        ],
        usage: {
          intro: "Когнитивное тестирование эффективно, если вам нужно:",
          items: [
            "протестировать инструкции или рекламные материалы",
            "исключить неоднозначные формулировки",
            "убедиться, что не возникает неожиданных ассоциаций, которые искажают задуманный образ",
            "оценить, как клиент расшифровывает дизайн и описание",
          ],
        },
      },
    ],
  },
];

const en: typeof ru = [
  {
    id: "market-opportunities",
    title: "Understand the market and find opportunities",
    summary:
      "Research that shows who your customers are, what they need and where the growth points of the business lie.",
    methods: [
      {
        id: "segmentation",
        title: "Segmentation",
        paragraphs: [
          "Segmentation divides a market or a customer base into groups of consumers who are similar in their needs, behaviour, motivation or value to the business. Unlike a classification by gender, age or income, segmentation is built on finding the factors that genuinely explain differences in purchasing behaviour and determine how an audience reacts to the product, the price, the communication or the service.",
          "Segmentation is built on value-based or motivational characteristics using multivariate statistical methods (cluster analysis, factor analysis). This makes it possible to identify natural consumer groups from a body of quantitative data rather than from expert assumptions.",
        ],
        usage: {
          intro: "A segmentation study is useful when you need to:",
          items: [
            "identify the most promising target audiences",
            "understand how different customer groups differ",
            "understand whom to sell the product to and how",
            "adapt marketing communications to different audiences",
            "build a personalised value proposition",
            "optimise the product range",
            "find out how to adapt the product for a new audience",
          ],
        },
      },
      {
        id: "custdev",
        title: "CustDev (Customer Development)",
        paragraphs: [
          "CustDev (Customer Development) is used in product work to understand users' real experience, their needs, decision-making motives and choice factors. The method is based on in-depth interviews and examines not declared preferences but a person's actual behaviour, their experience with existing solutions and the context in which the need arises.",
          "The key feature of CustDev is that it analyses events that have already happened rather than hypothetical intentions. The interview is built around the user's past experience: how the problem arose, which alternatives were considered, why the decision was made, what caused dissatisfaction and which trade-offs had to be accepted. This approach significantly reduces the influence of cognitive biases and rationalised answers.",
        ],
        usage: {
          intro: "CustDev is recommended when you need to:",
          items: [
            "understand users' real needs",
            "find out why customers do not buy the product",
            "refine the value proposition",
            "develop a new product or service",
            "find new opportunities for product development",
            "improve the consumer funnel",
          ],
        },
      },
      {
        id: "jtbd",
        title: "JTBD (Jobs To Be Done)",
        paragraphs: [
          "JTBD (Jobs To Be Done) reveals what tasks a consumer faces in a specific life situation, which solutions can help and how they want to solve them. People do not buy products as such - they “hire” them to achieve a particular outcome. The object of the research is therefore neither the consumer nor the product, but the job the consumer needs to get done.",
          "The study reconstructs the decision-making process: the trigger event, the existing alternatives, the forces resisting change, the expected outcomes and the trade-offs the consumer is prepared to accept. This approach uncovers the reasons behind behaviour, not just its manifestations.",
        ],
        usage: {
          intro: "JTBD is particularly effective when you need to:",
          items: [
            "understand which job the user solves with the product",
            "identify the reasons behind a choice between competitors",
            "develop a new product or service",
            "find unmet market needs",
            "uncover alternative product usage scenarios",
            "determine directions for innovation",
            "build positioning based on value to the user",
          ],
        },
      },
      {
        id: "dilemmas",
        title: "The dilemma method",
        paragraphs: [
          "The dilemma method helps study deep attitudes and behavioural patterns in situations of uncertainty. It works when you need to understand how a person acts in a conflict of interests: between price and quality, habit and innovation, ethics and convenience. The respondent is offered a hypothetical contested situation with no right answer. Their choice and its justification reveal their true values and decision-making logic. The main advantage is that socially desirable answers are minimised.",
        ],
        usage: {
          intro: "The dilemma method is effective when you need to:",
          items: [
            "understand how users make difficult decisions",
            "identify the real criteria behind a choice",
            "examine trade-offs between product characteristics",
            "uncover hidden purchase motives",
            "determine the relative importance of different product benefits",
          ],
        },
      },
    ],
  },
  {
    id: "strong-brand",
    title: "Build a strong brand",
    summary:
      "Research that lets you build competitive positioning, measure brand strength and make marketing communications more effective.",
    methods: [
      {
        id: "bht",
        title: "BHT (Brand Health Tracking)",
        paragraphs: [
          "BHT (Brand Health Tracking) monitors brand health, tracking how key brand indicators change over time and detecting shifts in consumer perception early. It typically measures a set of awareness, appeal and salience indicators for both the brand and its advertising: prompted awareness, intention to use or reject, brand and advertising appeal, brand image and the brand funnel.",
          "BHT rests on the concept of brand equity, according to which brand strength is determined not only by awareness, but also by the quality of the associations formed, consumer loyalty, willingness to consider the brand when choosing and other indicators that define its long-term competitiveness.",
        ],
        indicators: {
          intro: "Brand Health Tracking usually measures:",
          items: [
            "spontaneous and prompted brand awareness",
            "consideration of the brand when choosing",
            "brand usage",
            "brand preference and purchase intention",
            "loyalty and willingness to recommend the brand (NPS)",
            "brand image attributes",
            "brand equity and brand strength indicators",
          ],
        },
        usage: {
          intro: "Brand tracking is recommended when you need to:",
          items: [
            "monitor the brand's market position on a regular basis",
            "keep the brand's market position under control and assess its strength",
            "compare the brand with its main competitors",
            "measure the impact of marketing activity",
            "detect negative shifts in brand perception early",
          ],
        },
      },
      {
        id: "creative-testing",
        title: "Creative testing",
        paragraphs: [
          "Creative testing is a set of research techniques for evaluating the effectiveness of advertising materials before launch or during a campaign. Its main purpose is to determine how well the communication achieves its marketing goals: whether it attracts attention, is interpreted correctly by the target audience, builds the intended brand perception and prompts the desired consumer behaviour.",
          "Depending on the objectives, the study may evaluate individual elements of the advertising (the key message, the visual, the characters, the packaging, the slogan, the call to action) or the communication as a whole.",
        ],
        usage: {
          intro: "Creative testing is needed when you have to:",
          items: [
            "choose the most effective advertising concept",
            "check that the advertising message is clear",
            "assess the appeal of the visual materials",
            "reduce the risk of launching ineffective communication",
          ],
        },
      },
      {
        id: "perception-maps",
        title: "Perception maps",
        paragraphs: [
          "A data visualisation method based on correspondence analysis. It shows which objects, brands, attributes or consumer segments are statistically related and which, conversely, differ substantially. The result is a map on which the distance between objects reflects their statistical proximity: the closer the points, the stronger the relationship between them.",
        ],
        usage: {
          intro: "Correspondence analysis is recommended when you need to:",
          items: [
            "understand how consumers perceive competing brands",
            "determine which attributes are most closely associated with each brand",
            "build a market positioning map",
            "examine the relationship between audience segments and their preferences",
            "identify potential opportunities for brand repositioning",
          ],
        },
      },
      {
        id: "bpf",
        title: "BPF (Brand Position Fit)",
        paragraphs: [
          "The method compares how brands are perceived as images and assesses how far the actual perception of a brand matches its target positioning and how well the brand has differentiated itself from competitors in consumers' minds. It is based on Charles Osgood's psychometric semantic differential. The brand is rated on a series of bipolar scales made up of pairs of opposite attributes, for example “modern - outdated”, “reliable - unreliable”, “premium - mass market”. This measures not rational assessments but the structure of perception and the emotional image of the object in consumers' minds.",
          "The resulting ratings form a multidimensional brand perception profile, which is then compared both with competitors and with the desired positioning.",
        ],
        usage: {
          intro: "The method is especially useful when you need to:",
          items: [
            "assess the brand image",
            "measure how far the perceived image matches the strategic positioning",
            "compare the perception of your own brand with that of competitors",
            "check that the positioning matches audience expectations",
            "assess the impact of an advertising campaign on the brand image",
            "study the perception of packaging or design",
          ],
        },
      },
    ],
  },
  {
    id: "product-demand",
    title: "Create a product in demand",
    summary:
      "Methods that help develop products the market wants, make product decisions based on data and reduce the risk of an unsuccessful launch.",
    methods: [
      {
        id: "kano",
        title: "The Kano model",
        paragraphs: [
          "The Kano model shows how individual product features affect willingness to buy. It rests on the idea that the link between product quality and customer satisfaction is non-linear: not all features are equally valuable to the consumer. Some are mandatory and taken for granted, others have a moderate effect on appeal, others still can create a “pleasant surprise” effect and build competitive advantage, while a fourth group can actively put people off.",
          "Each feature is assessed for clarity, functionality (its presence) and dysfunctionality (its absence). Analysing the combinations of answers classifies every product feature as Must-be, Performance, Attractive, Indifferent or Reverse.",
        ],
        usage: {
          intro: "The Kano model is applied when you need to:",
          items: [
            "set priorities for developing new features",
            "understand which product characteristics genuinely matter to users",
            "avoid developing features nobody wants",
            "find the characteristics that can create a wow effect and set the product apart from competitors",
            "remove the features that act as barriers",
          ],
        },
      },
      {
        id: "mvp-testing",
        title: "MVP testing",
        paragraphs: [
          "MVP (Minimum Viable Product) testing evaluates the minimum viable version of a product in order to validate the key product hypotheses before full-scale development begins. Unlike an evaluation of a finished product, MVP research aims to confirm that the proposed solution really does solve a meaningful user problem, holds value for the target audience and has the potential to be developed further.",
          "The study analyses not only users' overall attitude to the product, but also demand for individual features, the clarity of the value proposition, the fit with user expectations, the barriers that arise and the usage scenarios. The results show which hypotheses have been confirmed, which need refinement and which should be abandoned, substantially reducing the cost of subsequent development.",
        ],
        usage: {
          intro: "MVP research is especially useful when you need to:",
          items: [
            "test whether a product idea is viable",
            "confirm the key hypotheses",
            "define the minimum necessary functionality",
            "collect feedback from the first users",
            "determine the directions for further product development",
          ],
        },
      },
      {
        id: "psm",
        title: "PSM (Price Sensitivity Meter)",
        subtitle: "Measuring price elasticity",
        paragraphs: [
          "PSM (Price Sensitivity Meter) is a method for researching consumer price sensitivity developed by the Dutch economist Peter Van Westendorp. It determines the price range consumers perceive as acceptable and reveals the psychological thresholds at which a price starts to feel too low (raising doubts about quality) or too high (reducing willingness to buy).",
          "The technique is based on four questions that establish price perception thresholds: when the product seems too expensive, expensive, cheap and too cheap. The distribution of answers produces curves whose intersections identify the optimal price and the range of acceptable prices. PSM is particularly effective when launching new products, entering new categories and assessing consumer price expectations, where no data on actual purchasing behaviour exists.",
        ],
        usage: {
          intro: "The method is recommended when you need to:",
          items: [
            "prepare a product for entering a new market",
            "adjust the pricing strategy",
            "assess how the market will react to a price change",
            "find the balance between the perceived value of the product and its price",
          ],
        },
      },
      {
        id: "turf",
        title: "Range optimisation (TURF analysis)",
        paragraphs: [
          "TURF analysis is an analytical method that determines which combination of products delivers the maximum reach of the target audience with the smallest number of options. It is widely used to optimise product lines.",
          "The method analyses the overlap between the preferences of different consumer groups. Unlike a simple popularity assessment of individual attributes, TURF takes into account that the same audience may choose several options at once. The task is therefore not to find the single most popular item, but to select the combination that reaches the largest number of unique consumers. This makes it possible to optimise the range without losing potential demand and to allocate company resources sensibly.",
        ],
        usage: {
          intro: "TURF analysis is recommended when you need to:",
          items: [
            "choose the optimal set of new products to launch",
            "determine the most effective set of flavours, pack formats or SKUs",
            "assess the potential reach of different product combinations",
            "optimise the range without losing a significant share of buyers",
            "set the launch priority for products",
          ],
        },
      },
    ],
  },
  {
    id: "customer-experience",
    title: "Improve the customer experience",
    summary:
      "Methods for assessing the customer experience, the quality of interaction and the factors that drive customer satisfaction and loyalty.",
    methods: [
      {
        id: "nps",
        title: "NPS (Net Promoter Score)",
        paragraphs: [
          "NPS (Net Promoter Score) is a metric that measures brand loyalty. The method is based on the customer's willingness to recommend the company on a scale from 0 to 10. Consumers fall into 3 categories: detractors (scores 0 to 6), passives (scores 7-8) and promoters (scores 9-10). The loyalty level is the difference between the share of promoters and the share of detractors.",
          "The practical value of the study lies not only in calculating the index itself, but in analysing the reasons behind the score. NPS is therefore always accompanied by open questions that reveal the factors shaping loyalty, the drivers of recommendation, the causes of dissatisfaction and the priority areas for improving the customer experience. NPS becomes most informative when it is tracked regularly and compared with the competitive environment.",
        ],
        usage: {
          intro: "An NPS study is recommended when you need to:",
          items: [
            "measure the level of customer loyalty",
            "understand which improvements customers want",
            "assess the effectiveness of changes in service",
            "reduce churn",
            "understand why some regions and branches perform better than others",
            "increase revenue per customer",
          ],
        },
      },
      {
        id: "cx-metrics",
        title: "Customer experience metrics: CSAT, CSI and CES",
        paragraphs: [
          "CSI (Customer Satisfaction Index) measures satisfaction with a product. The customer rates how much they liked the product on a scale from 1 to 5; a 7- or 10-point scale is sometimes used. The final figure is calculated either as an average score or as the share of satisfied customers, depending on the measurement system chosen.",
          "CSAT (Customer Satisfaction Score) evaluates a specific experience of interacting with the company. The respondent is asked “How satisfied are you with…?” in relation to a particular event: a purchase, a delivery, a support request, a store visit or another interaction. It is especially useful for the day-to-day quality control of individual service stages and for spotting situations where customer expectations were not met.",
          "CES (Customer Effort Score) measures how easy it was for the customer to get their task done. The question is framed around effort, for example: “How easy was it to resolve your issue?” or “How easy was it to place your order?”. CES measures not satisfaction with the outcome, but how simple the interaction itself was.",
        ],
      },
      {
        id: "cjm",
        title: "CJM (Customer Journey Map)",
        paragraphs: [
          "CJM (Customer Journey Map) is a customer experience research method that reconstructs the full path of a user's interaction with a company, product or service. Unlike a description of internal business processes, a CJM reflects the sequence of the customer's actions, their goals, expectations, emotions and decisions at every stage of the interaction. The method lets you look at the product through the user's eyes and identify why a customer decides to continue the interaction or to abandon it.",
          "The study analyses touchpoints, behavioural scenarios, choice drivers, the barriers that arise, emotional dynamics and the factors that influence the transition between stages of the journey. This turns the CJM into more than a visual diagram: it becomes a tool for finding systemic customer experience problems and setting priorities for the development of product, service and communications.",
        ],
        usage: {
          intro: "Building a CJM is recommended when you need to:",
          items: [
            "improve service quality",
            "identify why users are lost at different stages of the funnel",
            "determine the growth points of the customer experience",
            "increase conversion between interaction stages",
            "align the work of marketing, product and customer service",
            "produce recommendations for improving the customer experience (CX) and optimising business processes",
          ],
        },
      },
      {
        id: "ui-research",
        title: "UI research (User Interface)",
        paragraphs: [
          "UI research (User Interface) evaluates the quality of a digital product's user interface. Unlike UX research, which analyses the user experience as a whole, UI research focuses on the effectiveness of individual interface elements: navigation, screen structure, visual hierarchy, legibility, the placement of controls and the quality of visual communication. Its main purpose is to determine how well the interface helps the user complete target actions quickly and without errors.",
          "The research can be carried out both at the interface design stage and after the product has launched. A comprehensive approach reveals not only obvious design mistakes but also hidden barriers that affect conversion, task completion speed and the subjective sense of how convenient the product is.",
        ],
        usage: {
          intro: "UI research is recommended when you need to:",
          items: [
            "assess how convenient the interface is",
            "find the reasons behind low conversion",
            "validate a new version of the design",
            "identify navigation errors",
            "speed up the completion of user scenarios",
          ],
        },
      },
    ],
  },
  {
    id: "decision-measurement",
    title: "Measure and justify decisions",
    methods: [
      {
        id: "likert",
        title: "The Likert scale",
        paragraphs: [
          "The Likert scale measures consumer attitudes, opinions and dispositions that cannot be measured directly. The method is a set of statements, each reflecting a different aspect of the subject under study. The respondent rates their degree of agreement with each one on a scale (for example, from 1 to 5). The resulting composite figure is treated as a quantitative measure of the characteristic being studied - satisfaction, trust, engagement, attitude to the brand, product innovativeness or any other latent variable.",
          "Suppose you need to measure trust in a brand. Instead of a single question, the respondent is given a series of statements: “I trust this brand”, “This brand keeps its promises”, “This brand is honest with its customers”, “I am confident in the quality of the brand's products”, “I would keep using this brand”. Each statement measures one facet of the construct of trust. Using several statements to describe the subject under study yields reliable and statistically robust measures of attitude towards it.",
        ],
        note: "In marketing research the term “Likert scale” is often used incorrectly for any question rated on a 1-5 or 1-7 scale. Methodologically this is wrong. A classic Likert scale is a series of interrelated statements measuring one latent construct, and the final result is a summed or normalised index across the whole scale, not the score on a single question.",
        usage: {
          intro: "The method is especially useful when you need to:",
          items: [
            "measure consumer attitudes quantitatively",
            "assess complex characteristics that cannot be captured by a single question (for example trust, satisfaction, perceived quality, innovativeness or emotional attachment)",
            "compare attitude levels across different audience segments",
            "track how consumer attitudes change over time",
          ],
        },
      },
      {
        id: "cognitive-testing",
        title: "Cognitive testing",
        paragraphs: [
          "Cognitive testing is a method that checks how customers understand text-based creative: slogans, the value proposition, advertising messages and names. A product named “multivert”, for example, may be understood as a device with several speeds rather than one that can turn, drill, saw and mix. Some terms may not be fully clear, or customers may read their own meanings into them, and that can be the reason behind poor sales. We test not only individual wordings but also how the concept is perceived as a whole.",
        ],
        usage: {
          intro: "Cognitive testing works when you need to:",
          items: [
            "test instructions or advertising materials",
            "eliminate ambiguous wording",
            "make sure no unexpected associations arise that distort the intended image",
            "assess how the customer decodes the design and the description",
          ],
        },
      },
    ],
  },
];

export const solutionSections: Record<Locale, SolutionSection[]> = { ru, en };
