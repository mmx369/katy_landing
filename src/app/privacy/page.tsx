import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { SectionContainer } from "@/components/ui/section-container";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Политика конфиденциальности - Decode Research",
  description: "Базовая политика обработки данных и контактная информация.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Правовая информация"
        title="Политика конфиденциальности"
        description="Мы бережно относимся к данным и используем их только для связи по вашему запросу."
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <article className="surface-panel max-w-4xl rounded-2xl p-6 text-sm leading-relaxed text-[var(--color-muted-strong)] sm:p-8">
            <p>
              Отправляя заявку через формы сайта, вы соглашаетесь на обработку
              предоставленных контактных данных для обратной связи и обсуждения
              исследовательской задачи.
            </p>
            <p className="mt-4">
              Мы не передаем персональные данные третьим лицам и не используем их
              в целях, не связанных с вашим обращением. По запросу вы можете
              уточнить, исправить или удалить предоставленную информацию.
            </p>
          </article>
        </SectionContainer>
      </section>
    </>
  );
}
