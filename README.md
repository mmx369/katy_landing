# Insightframe Landing

Премиальный лендинг маркетингового исследовательского агентства на Next.js (App Router), TypeScript и Tailwind CSS.

## Стек

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (минимальная анимация reveal/background)
- Lucide Icons

## Запуск

```bash
npm install
npm run dev
```

Production-проверка:

```bash
npm run lint
npm run build
```

## Отправка заявок на email

Формы `Оставить заявку` и `Контакты` отправляют данные через `POST /api/contact` (Route Handler) на SMTP.

1. Скопируйте `.env.example` в `.env.local`
2. Заполните SMTP-переменные:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=mailer@example.com
SMTP_PASS=your_password_here
SMTP_FROM="Decode Research <mailer@example.com>"
CONTACT_RECEIVER_EMAIL=e.savastenko@mail.ru
```

После этого отправка из форм уходит на `CONTACT_RECEIVER_EMAIL`.

## Структура проекта

```text
src/
  app/
    page.tsx
    about/page.tsx
    research-solutions/page.tsx
    marketplaces/page.tsx
    knowledge-base/page.tsx
    contacts/page.tsx
    request/page.tsx
    privacy/page.tsx
  components/
    forms/
    layout/
    motion/
    sections/
    ui/
  data/
    about.ts
    contact.ts
    home.ts
    knowledge.ts
    marketplace.ts
    navigation.ts
    solutions.ts
  lib/
    seo.ts
  types/
    content.ts
```

## Как расширять

- Контент секций хранится в `src/data/*` - можно добавлять новые карточки и блоки без изменения UI-логики.
- Каталог методик масштабируется через `methodCards` в `src/data/solutions.ts`.
- База знаний масштабируется через `knowledgeArticles` в `src/data/knowledge.ts`.
- Базовые SEO-параметры страниц централизованы через `buildMetadata` в `src/lib/seo.ts`.
