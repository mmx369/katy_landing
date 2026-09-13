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

## Локализация (ru / en)

Сайт двуязычный. Русский - локаль по умолчанию и отдается без префикса, чтобы сохранить уже
проиндексированные адреса; английский живет под `/en`.

| Запрос | Что происходит |
| --- | --- |
| `/contacts` | `src/proxy.ts` переписывает на `/ru/contacts` |
| `/en/contacts` | отдается как есть |
| `/ru/contacts` | 308 на `/contacts`, чтобы не было двух URL одной страницы |

- Список локалей, `localizePath`/`stripLocale` и подписи языков - `src/lib/i18n.ts`.
- В серверных компонентах локаль берется через `getLocale()` (`src/lib/get-locale.ts`) поверх
  `next/root-params`, без прокидывания пропсов. Клиентским компонентам (шапка, форма, карточка
  метода) локаль и нужный срез словаря передаются пропсами, иначе в JS-бандл попали бы оба языка.
  В Route Handlers `next/root-params` недоступен, поэтому форма шлет `locale` в теле запроса.
- Словари лежат в `src/data/*` и экспортируются как `Record<Locale, T>`, где форма выводится из
  русской версии (`typeof ru`). За счет этого **пропущенный или лишний ключ в `en` ломает `tsc`**.
  Порядок и число элементов в массивах компилятор не видит - это проверяет
  `src/data/dictionaries.test.mts` вместе с проверкой, что в английской локали не осталось кириллицы.
- Переключатель языка - `src/components/layout/language-switcher.tsx` (шапка на десктопе,
  бургер-меню на мобильных).
- 404: несуществующий путь сам по себе не попадает в сегмент `[lang]`, и Next отдал бы свою
  служебную страницу без шапки. Поэтому есть catch-all `src/app/[lang]/[...rest]/page.tsx`, который
  вызывает `notFound()` и тем самым отдает локализованный `src/app/[lang]/not-found.tsx`.
- Автоперенаправления по `Accept-Language` нет: язык выбирается только переключателем, поисковик
  ориентируется на `hreflang`.
- Английские версии `/privacy` и `/personal-data-consent` - информационный перевод. Юридическую
  силу имеет русский текст, об этом сообщает плашка в начале документа.

## Структура проекта

```text
src/
  app/
    [lang]/
      layout.tsx
      page.tsx
      research-solutions/page.tsx
      marketplaces/page.tsx
      knowledge-base/page.tsx
      contacts/page.tsx
      request/page.tsx
      privacy/page.tsx
      personal-data-consent/page.tsx
    api/contact/route.ts
    robots.ts
    sitemap.ts
  proxy.ts
  components/
    brand/
    forms/
    layout/
    motion/
    sections/
    ui/
  data/
    common.ts
    contact.ts
    home.ts
    knowledge.ts
    legal.ts
    marketplace.ts
    navigation.ts
    pages.ts
    solutions.ts
  lib/
    contact-validation.ts
    get-locale.ts
    i18n.ts
    seo.ts
  types/
    content.ts
```

## Как расширять

- Контент секций хранится в `src/data/*` - можно добавлять новые карточки и блоки без изменения UI-логики.
  Любая правка текста делается сразу в обеих локалях одного файла, иначе не соберется типизация.
- Каталог исследовательских решений масштабируется через `solutionSections` в `src/data/solutions.ts`:
  направление содержит методы, метод - описание, необязательный блок показателей, сноску «Важно» и список
  «Когда стоит использовать метод». Из этих же данных собирается блок услуг на главной, поэтому направления
  и методы правятся только в одном месте.
- База знаний масштабируется через `knowledgeMethodTiles` в `src/data/knowledge.ts`.
- Юридические тексты - `src/data/legal.ts`, обе страницы рендерит `components/sections/legal-document.tsx`.
- Правила валидации формы общие для клиента и сервера - `src/lib/contact-validation.ts`.
- Базовые SEO-параметры страниц централизованы через `buildMetadata` в `src/lib/seo.ts`: он же
  проставляет canonical и `hreflang` для обеих локалей.
- Новый роут добавляется в `src/app/[lang]/` и в список `routes` в `src/app/sitemap.ts`.
- HTTP-заголовки безопасности задаются в `next.config.ts`.
