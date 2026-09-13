import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { commonContent } from "@/data/common";
import { contactContent, contactInfo } from "@/data/contact";
import { consentVersion } from "@/data/legal";
import { pageContent } from "@/data/pages";
import { getLocale } from "@/lib/get-locale";
import { buildMetadata } from "@/lib/seo";

const PATH = "/contacts";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { contacts } = pageContent[locale];

  return buildMetadata({
    title: contacts.title,
    description: contacts.description,
    locale,
    path: PATH,
  });
}

export default async function ContactsPage() {
  const locale = await getLocale();
  const { contacts } = pageContent[locale];
  const phoneHref = `tel:${contactInfo.phone.replace(/\D/g, "")}`;

  return (
    <>
      <PageHero
        eyebrow={contacts.eyebrow}
        title={contacts.heroTitle}
        description={contacts.heroDescription}
      />
      <section className="pb-12 pt-4 sm:pb-20">
        <SectionContainer>
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
              <Card>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  {contacts.infoTitle}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-[var(--color-muted-strong)]">
                  <li>
                    {contacts.emailLabel}{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-medium text-[var(--color-midnight)]"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    {contacts.phoneLabel}{" "}
                    <a
                      href={phoneHref}
                      className="font-medium text-[var(--color-midnight)]"
                    >
                      {contactInfo.phone}
                    </a>
                  </li>
                </ul>
                <p className="mt-5 text-sm text-[var(--color-muted)]">
                  {contactContent[locale].responseTime}
                </p>
              </Card>
              <Card glass>
                <h2 className="text-2xl font-semibold text-[var(--color-midnight)]">
                  {contacts.formTitle}
                </h2>
                <p className="mt-3 text-sm text-[var(--color-muted-strong)]">
                  {contacts.formDescription}
                </p>
                <div className="mt-6">
                  <ContactForm
                    variant="contact"
                    locale={locale}
                    labels={commonContent[locale].form}
                    consentVersion={consentVersion}
                  />
                </div>
              </Card>
            </div>
          </FadeIn>
        </SectionContainer>
      </section>
    </>
  );
}
