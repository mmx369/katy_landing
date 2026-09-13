import type { Locale } from "@/lib/i18n";

export interface KnowledgeMethodTile {
  id: string;
  method: string;
  focus: string;
  description: string;
  businessEffect: string;
}

// Для добавления новой плашки просто добавьте объект в этот массив в каждой локали.
const ru: KnowledgeMethodTile[] = [
  {
    id: "segmentation",
    method: "Сегментации",
    focus: "Структура аудитории и приоритеты роста",
    description:
      "Выделяем рабочие сегменты с разной мотивацией, барьерами и потенциалом выручки.",
    businessEffect:
      "Позволяет точнее настроить оффер, коммуникацию и продуктовые приоритеты.",
  },
  {
    id: "custdev",
    method: "CustDev",
    focus: "Понимание реального контекста клиента",
    description:
      "Проводим глубинные интервью, чтобы проверить гипотезы и выявить реальные сценарии выбора.",
    businessEffect:
      "Снижает риск запуска решений, которые выглядят логично внутри команды, но не нужны рынку.",
  },
  {
    id: "jtbd",
    method: "JTBD",
    focus: "Задачи, ради которых выбирают продукт",
    description:
      "Определяем, какую работу клиент нанимает продукт выполнять и какие альтернативы он сравнивает.",
    businessEffect:
      "Помогает формулировать сильное позиционирование и дорожную карту развития продукта.",
  },
  {
    id: "nps",
    method: "NPS",
    focus: "Лояльность и риск оттока",
    description:
      "Измеряем готовность рекомендовать и разбираем причины критики, нейтральности и поддержки.",
    businessEffect:
      "Показывает, где теряется клиентская ценность и какие изменения ускорят рост удержания.",
  },
  {
    id: "kano",
    method: "KANO",
    focus: "Приоритет функциональности",
    description:
      "Оцениваем, какие функции воспринимаются как обязательные, какие приятно удивляют, а какие не влияют на выбор.",
    businessEffect:
      "Позволяет инвестировать в те доработки, которые дают максимальный эффект для удовлетворенности.",
  },
  {
    id: "cjm",
    method: "CJM",
    focus: "Путь клиента и точки потерь",
    description:
      "Картируем путь клиента от первого касания до повторного контакта и выявляем ключевые барьеры.",
    businessEffect:
      "Дает прикладной план улучшений в опыте, который влияет на конверсию и повторные покупки.",
  },
];

const en: typeof ru = [
  {
    id: "segmentation",
    method: "Segmentation",
    focus: "Audience structure and growth priorities",
    description:
      "We identify workable segments with distinct motivation, barriers and revenue potential.",
    businessEffect:
      "Lets you tune the offer, the communication and product priorities far more precisely.",
  },
  {
    id: "custdev",
    method: "CustDev",
    focus: "Understanding the customer's real context",
    description:
      "We run in-depth interviews to test hypotheses and uncover the real scenarios behind a choice.",
    businessEffect:
      "Reduces the risk of launching solutions that look logical inside the team but the market does not need.",
  },
  {
    id: "jtbd",
    method: "JTBD",
    focus: "The jobs a product is chosen for",
    description:
      "We determine what job the customer hires the product to do and which alternatives they compare.",
    businessEffect:
      "Helps you articulate strong positioning and a product development roadmap.",
  },
  {
    id: "nps",
    method: "NPS",
    focus: "Loyalty and churn risk",
    description:
      "We measure willingness to recommend and unpack the reasons behind criticism, neutrality and support.",
    businessEffect:
      "Shows where customer value is lost and which changes will accelerate retention growth.",
  },
  {
    id: "kano",
    method: "KANO",
    focus: "Feature prioritisation",
    description:
      "We assess which features are seen as must-haves, which delight, and which do not affect the choice at all.",
    businessEffect:
      "Lets you invest in the improvements that deliver the greatest effect on satisfaction.",
  },
  {
    id: "cjm",
    method: "CJM",
    focus: "The customer journey and its drop-off points",
    description:
      "We map the journey from first touch to repeat contact and identify the key barriers.",
    businessEffect:
      "Delivers an applicable experience improvement plan that affects conversion and repeat purchases.",
  },
];

export const knowledgeMethodTiles: Record<Locale, KnowledgeMethodTile[]> = { ru, en };
