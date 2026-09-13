import type { Locale } from "@/lib/i18n";
import type { LegalSection } from "@/types/content";

export const operator = {
  inn: "773208586915",
  ogrnip: "324774600143848",
  email: "ask@decode-research.ru",
  website: "decode-research.ru",
};

/** Bumped whenever the consent wording changes; recorded with every submission. */
export const consentVersion = "2026-08-24";

/** Shown above a legal document that is only an unofficial translation of the Russian original. */
interface TranslationNotice {
  text: string;
  linkLabel: string;
}

const ru = {
  operatorLegalName: "Индивидуальный предприниматель Савастенко Екатерина Сергеевна",
  revision: "Редакция от 24 августа 2026 года",
  translationNotice: null as TranslationNotice | null,
  privacySections: [
    {
      title: "1. Общие положения",
      paragraphs: [
        "Настоящая Политика определяет порядок обработки и защиты персональных данных Индивидуальным предпринимателем Савастенко Екатериной Сергеевной, ИНН 773208586915, ОГРНИП 324774600143848 (далее — Оператор).",
        "Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и распространяется на персональные данные, получаемые Оператором через сайт decode-research.ru.",
      ],
    },
    {
      title: "2. Какие персональные данные обрабатываются",
      paragraphs: ["При использовании формы обратной связи Оператор может обрабатывать:"],
      list: [
        "имя",
        "наименование компании (если указано пользователем)",
        "номер телефона",
        "адрес электронной почты",
        "сведения, самостоятельно указанные пользователем в поле «Опишите вашу задачу»",
      ],
      afterList: [
        "Оператор не осуществляет целенаправленный сбор специальных категорий персональных данных и биометрических персональных данных через форму обратной связи.",
      ],
    },
    {
      title: "3. Цели обработки",
      paragraphs: ["Персональные данные обрабатываются для:"],
      list: [
        "приема и обработки обращения пользователя",
        "обратной связи с пользователем",
        "уточнения задачи пользователя",
        "подготовки и направления предложения по услугам Оператора",
        "дальнейшего взаимодействия по обращению пользователя",
      ],
      afterList: [
        "Данные, полученные через форму обратной связи, не используются для рекламных рассылок без соответствующего законного основания.",
      ],
    },
    {
      title: "4. Правовые основания обработки",
      paragraphs: [
        "Оператор обрабатывает персональные данные на основании Федерального закона № 152-ФЗ «О персональных данных», согласия субъекта персональных данных и иных предусмотренных законодательством Российской Федерации оснований.",
        "Текст согласия, предоставляемого пользователем при отправке формы обратной связи, размещен на странице decode-research.ru/personal-data-consent.",
      ],
    },
    {
      title: "5. Порядок обработки",
      paragraphs: [
        "Персональные данные, указанные пользователем в форме на сайте decode-research.ru, передаются Оператору посредством электронной почты и используются для обработки обращения и обратной связи.",
        "Оператор может осуществлять сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, блокирование, удаление и уничтожение персональных данных.",
        "Обработка осуществляется с использованием средств автоматизации и без их использования.",
        "Доступ к персональным данным предоставляется только лицам, которым он необходим для достижения целей обработки.",
      ],
    },
    {
      title: "6. Срок обработки и хранения",
      paragraphs: [
        "Персональные данные обрабатываются до достижения целей обработки либо до отзыва субъектом согласия, если отсутствуют иные законные основания для продолжения обработки.",
        "После достижения целей обработки персональные данные уничтожаются в порядке и сроки, предусмотренные законодательством Российской Федерации.",
        "Если в результате обращения возникают договорные отношения, необходимые сведения могут храниться в течение сроков, установленных законодательством Российской Федерации.",
        "В случае отзыва согласия Оператор прекращает обработку персональных данных и уничтожает их в срок, не превышающий 30 дней с даты поступления отзыва, если отсутствуют иные законные основания для продолжения обработки.",
      ],
    },
    {
      title: "7. Передача персональных данных",
      paragraphs: [
        "Для приема, отправки и хранения электронных сообщений Оператор использует сервис «Яндекс 360 для бизнеса», предоставляемый ООО «ЯНДЕКС».",
        "В связи с использованием сервиса персональные данные могут обрабатываться ООО «ЯНДЕКС» в объеме, необходимом для предоставления услуг электронной почты.",
        "Оператор не распространяет персональные данные и не предоставляет их третьим лицам для самостоятельного использования, кроме случаев, предусмотренных законодательством Российской Федерации.",
        "Трансграничная передача персональных данных Оператором не осуществляется.",
      ],
    },
    {
      title: "8. Защита персональных данных",
      paragraphs: [
        "Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, изменения, уничтожения, блокирования, копирования, предоставления, распространения и иных неправомерных действий.",
        "Оператором назначено лицо, ответственное за организацию обработки персональных данных. Обращения по вопросам обработки персональных данных направляются на ask@decode-research.ru.",
      ],
    },
    {
      title: "9. Права пользователя",
      paragraphs: ["Субъект персональных данных вправе:"],
      list: [
        "получить информацию об обработке своих персональных данных",
        "потребовать их уточнения",
        "потребовать прекращения обработки, блокирования или удаления в предусмотренных законом случаях",
        "отозвать согласие на обработку персональных данных",
        "осуществлять иные права, предусмотренные законодательством Российской Федерации",
      ],
      afterList: [
        "Для реализации своих прав пользователь может направить обращение на ask@decode-research.ru.",
        "Оператор рассматривает обращение и направляет ответ в течение 10 рабочих дней с даты его получения. Указанный срок может быть продлен не более чем на 5 рабочих дней с уведомлением заявителя о причинах продления.",
      ],
    },
    {
      title: "10. Файлы cookie и аналитика",
      paragraphs: [
        "Сайт может использовать технические файлы cookie, необходимые для его работы.",
        "На дату настоящей редакции Политики системы веб-аналитики и рекламные технологии сбора данных о посетителях на сайте не используются. В случае их подключения соответствующие сведения будут внесены в настоящую Политику.",
        "Пользователь может ограничить использование cookie в настройках браузера. Ограничение технически необходимых cookie может повлиять на работу сайта.",
      ],
    },
    {
      title: "11. Заключительные положения",
      paragraphs: [
        "Актуальная версия настоящей Политики размещается на сайте decode-research.ru.",
        "Оператор вправе изменять Политику в случае изменения законодательства, используемых технологий или порядка обработки персональных данных.",
      ],
    },
  ] as LegalSection[],
  consentSections: [
    {
      paragraphs: [
        "Я свободно, своей волей и в своем интересе даю согласие Индивидуальному предпринимателю Савастенко Екатерине Сергеевне, ИНН 773208586915, ОГРНИП 324774600143848 (далее — Оператор), на обработку моих персональных данных, предоставленных через форму обратной связи на сайте decode-research.ru.",
        "Цель обработки: прием и обработка моего обращения, уточнение задачи, подготовка предложения по услугам Оператора и осуществление обратной связи со мной.",
        "Перечень персональных данных:",
      ],
      list: [
        "имя",
        "наименование компании",
        "номер телефона и/или адрес электронной почты",
        "сведения, самостоятельно указанные мной в поле «Опишите вашу задачу»",
      ],
      afterList: [
        "Я даю согласие на сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, блокирование, удаление и уничтожение указанных персональных данных.",
        "Обработка может осуществляться с использованием средств автоматизации и без их использования.",
        "Для приема и хранения обращений Оператор использует сервис «Яндекс 360 для бизнеса», предоставляемый ООО «ЯНДЕКС».",
        "Согласие действует до достижения целей обработки либо до его отзыва мной, если отсутствуют иные предусмотренные законом основания для продолжения обработки.",
        "Я могу отозвать согласие путем направления обращения на электронную почту ask@decode-research.ru.",
        "Устанавливая отметку в поле согласия на сайте и нажимая кнопку «Отправить заявку», я подтверждаю предоставление настоящего согласия и ознакомление с Политикой в отношении обработки персональных данных.",
      ],
    },
  ] as LegalSection[],
};

const en: typeof ru = {
  operatorLegalName: "Sole proprietor Ekaterina Sergeevna Savastenko",
  revision: "Version of 24 August 2026",
  translationNotice: {
    text: "This English text is provided for information only. The legally binding document is the Russian original; in case of any discrepancy the Russian wording prevails.",
    linkLabel: "Open the Russian version",
  },
  privacySections: [
    {
      title: "1. General provisions",
      paragraphs: [
        "This Policy defines how personal data is processed and protected by sole proprietor Ekaterina Sergeevna Savastenko, TIN 773208586915, OGRNIP 324774600143848 (hereinafter — the Operator).",
        "The Policy has been drawn up in accordance with Federal Law No. 152-FZ of 27 July 2006 “On Personal Data” and applies to personal data received by the Operator through the decode-research.ru website.",
      ],
    },
    {
      title: "2. Which personal data is processed",
      paragraphs: ["When the contact form is used, the Operator may process:"],
      list: [
        "name",
        "company name (if provided by the user)",
        "phone number",
        "email address",
        "information entered by the user in the “Describe your task” field",
      ],
      afterList: [
        "The Operator does not deliberately collect special categories of personal data or biometric personal data through the contact form.",
      ],
    },
    {
      title: "3. Purposes of processing",
      paragraphs: ["Personal data is processed in order to:"],
      list: [
        "receive and handle the user's enquiry",
        "communicate with the user",
        "clarify the user's task",
        "prepare and send a proposal for the Operator's services",
        "continue the interaction regarding the user's enquiry",
      ],
      afterList: [
        "Data received through the contact form is not used for marketing mailings without an appropriate legal basis.",
      ],
    },
    {
      title: "4. Legal grounds for processing",
      paragraphs: [
        "The Operator processes personal data on the basis of Federal Law No. 152-FZ “On Personal Data”, the consent of the data subject and other grounds provided for by the legislation of the Russian Federation.",
        "The text of the consent given by the user when submitting the contact form is published at decode-research.ru/personal-data-consent.",
      ],
    },
    {
      title: "5. Processing procedure",
      paragraphs: [
        "Personal data entered by the user in the form on decode-research.ru is transmitted to the Operator by email and used to handle the enquiry and to reply to the user.",
        "The Operator may collect, record, systematise, accumulate, store, update, retrieve, use, block, delete and destroy personal data.",
        "Processing is carried out both with and without the use of automation.",
        "Access to personal data is granted only to those persons who need it to achieve the purposes of processing.",
      ],
    },
    {
      title: "6. Processing and retention periods",
      paragraphs: [
        "Personal data is processed until the purposes of processing are achieved or until the data subject withdraws consent, unless there are other legal grounds for continuing the processing.",
        "Once the purposes of processing have been achieved, personal data is destroyed in the manner and within the periods provided for by the legislation of the Russian Federation.",
        "If the enquiry results in a contractual relationship, the necessary information may be retained for the periods established by the legislation of the Russian Federation.",
        "If consent is withdrawn, the Operator stops processing the personal data and destroys it within no more than 30 days from the date the withdrawal is received, unless there are other legal grounds for continuing the processing.",
      ],
    },
    {
      title: "7. Transfer of personal data",
      paragraphs: [
        "To receive, send and store email messages the Operator uses the “Yandex 360 for Business” service provided by Yandex LLC.",
        "Because this service is used, personal data may be processed by Yandex LLC to the extent necessary to provide email services.",
        "The Operator does not disseminate personal data and does not provide it to third parties for their own use, except in the cases provided for by the legislation of the Russian Federation.",
        "The Operator does not carry out any cross-border transfer of personal data.",
      ],
    },
    {
      title: "8. Protection of personal data",
      paragraphs: [
        "The Operator takes the necessary legal, organisational and technical measures to protect personal data against unlawful or accidental access, alteration, destruction, blocking, copying, provision, dissemination and other unlawful actions.",
        "The Operator has appointed a person responsible for organising the processing of personal data. Enquiries about the processing of personal data should be sent to ask@decode-research.ru.",
      ],
    },
    {
      title: "9. User rights",
      paragraphs: ["The data subject has the right to:"],
      list: [
        "obtain information about the processing of their personal data",
        "request that it be updated",
        "request that processing be stopped, or that the data be blocked or deleted, in the cases provided for by law",
        "withdraw consent to the processing of personal data",
        "exercise other rights provided for by the legislation of the Russian Federation",
      ],
      afterList: [
        "To exercise these rights the user may send an enquiry to ask@decode-research.ru.",
        "The Operator reviews the enquiry and sends a reply within 10 business days from the date it is received. This period may be extended by no more than 5 business days, with the applicant being notified of the reasons for the extension.",
      ],
    },
    {
      title: "10. Cookies and analytics",
      paragraphs: [
        "The website may use technical cookies that are necessary for it to operate.",
        "As at the date of this version of the Policy, no web analytics systems or advertising technologies for collecting visitor data are used on the website. Should any be introduced, the corresponding information will be added to this Policy.",
        "The user may restrict the use of cookies in their browser settings. Restricting technically necessary cookies may affect how the website works.",
      ],
    },
    {
      title: "11. Final provisions",
      paragraphs: [
        "The current version of this Policy is published on decode-research.ru.",
        "The Operator may amend the Policy in the event of changes in legislation, in the technologies used or in the personal data processing procedure.",
      ],
    },
  ],
  consentSections: [
    {
      paragraphs: [
        "Freely, of my own will and in my own interest, I give my consent to sole proprietor Ekaterina Sergeevna Savastenko, TIN 773208586915, OGRNIP 324774600143848 (hereinafter — the Operator), to process my personal data submitted through the contact form on decode-research.ru.",
        "Purpose of processing: receiving and handling my enquiry, clarifying my task, preparing a proposal for the Operator's services and communicating with me.",
        "List of personal data:",
      ],
      list: [
        "name",
        "company name",
        "phone number and/or email address",
        "information I enter myself in the “Describe your task” field",
      ],
      afterList: [
        "I consent to the collection, recording, systematisation, accumulation, storage, updating, retrieval, use, blocking, deletion and destruction of the personal data listed above.",
        "Processing may be carried out both with and without the use of automation.",
        "To receive and store enquiries the Operator uses the “Yandex 360 for Business” service provided by Yandex LLC.",
        "This consent is valid until the purposes of processing are achieved or until I withdraw it, unless there are other legal grounds for continuing the processing.",
        "I may withdraw this consent by sending an enquiry to ask@decode-research.ru.",
        "By ticking the consent checkbox on the website and pressing the “Send request” button, I confirm that I give this consent and that I have read the Personal Data Processing Policy.",
      ],
    },
  ],
};

export type LegalContent = typeof ru;

export const legalContent: Record<Locale, LegalContent> = { ru, en };
