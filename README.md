# Decode Research - лендинг

Лендинг маркетингового исследовательского агентства на Next.js (App Router), TypeScript и Tailwind CSS.

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
npm test
npm run build
```

Тесты запускаются встроенным раннером Node (`node --test`), отдельных зависимостей не требуют.
Файлы тестов - `src/**/*.test.mts`.

## Отправка заявок на email

Формы `Оставить заявку` и `Контакты` отправляют данные через `POST /api/contact` (Route Handler) на SMTP.

1. Скопируйте `.env.example` в `.env.local`
2. Заполните SMTP-переменные:

```bash
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=465
SMTP_USER=<ящик оператора>
SMTP_PASS=<пароль приложения>
SMTP_FROM=<ящик оператора>
CONTACT_RECEIVER_EMAIL=<ящик оператора>
```

После этого отправка из форм уходит на `CONTACT_RECEIVER_EMAIL`.

**Требование 152-ФЗ.** Политика обработки персональных данных (`/privacy`) называет единственным
обработчиком почты «Яндекс 360 для бизнеса». Все три адреса должны быть в домене оператора на
Яндекс 360 и на территории РФ. Смена почтового провайдера требует правки текста Политики.

Антиспам-лимиты (`ipRateLimit`, `recentSubmissions` в `src/app/api/contact/route.ts`) хранятся
в памяти процесса и рассчитаны на одноинстансный деплой. При рестарте они обнуляются, а при
запуске нескольких инстансов перестают работать - в этом случае лимиты нужно вынести в общее хранилище.

IP клиента берётся из `X-Real-IP`, который проставляет nginx перед приложением. Если фронтящий
прокси меняется, этот заголовок надо перепроверить - иначе лимиты обходятся подменой заголовка.

## Согласие на обработку персональных данных

Форма не отправляется без отметки согласия. Версия согласия хранится в `consentVersion`
(`src/data/legal.ts`) и сверяется на сервере: при расхождении заявка отклоняется с просьбой
обновить страницу. В письмо попадают факт согласия, серверное время по Москве и версия.

При изменении текста согласия в `src/data/legal.ts` версию нужно поднять.

## Структура проекта

```text
src/
  app/
    page.tsx
    research-solutions/page.tsx
    marketplaces/page.tsx
    knowledge-base/page.tsx
    contacts/page.tsx
    request/page.tsx
    privacy/page.tsx
    personal-data-consent/page.tsx
    api/contact/route.ts
  components/
    brand/
    forms/
    layout/
    motion/
    sections/
    ui/
  data/
    contact.ts
    home.ts
    knowledge.ts
    legal.ts
    marketplace.ts
    navigation.ts
    solutions.ts
  lib/
    contact-validation.ts
    seo.ts
  types/
    content.ts
```

## Как расширять

- Контент секций хранится в `src/data/*` - можно добавлять новые карточки и блоки без изменения UI-логики.
- Каталог решений масштабируется через `solutionSections` в `src/data/solutions.ts`.
- База знаний масштабируется через `knowledgeMethodTiles` в `src/data/knowledge.ts`.
- Юридические тексты - `src/data/legal.ts`, обе страницы рендерит `components/sections/legal-document.tsx`.
- Правила валидации формы общие для клиента и сервера - `src/lib/contact-validation.ts`.
- Базовые SEO-параметры страниц централизованы через `buildMetadata` в `src/lib/seo.ts`.
- HTTP-заголовки безопасности задаются в `next.config.ts`.
