import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { localizePath } from "@/lib/i18n";

export default async function NotFound() {
  const locale = await getLocale();
  const { notFound } = pageContent[locale];

  return (
    <>
      <PageHero
        eyebrow={notFound.eyebrow}
        title={notFound.heroTitle}
        description={notFound.heroDescription}
      />
      <section className="pb-12 sm:pb-20">
        <SectionContainer>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={localizePath("/", locale)} className="w-full text-center sm:w-auto">
              {notFound.homeLabel}
            </Button>
            <Button
              href={localizePath("/contacts", locale)}
              variant="secondary"
              className="w-full text-center sm:w-auto"
            >
              {notFound.contactsLabel}
            </Button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
