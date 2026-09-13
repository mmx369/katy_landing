import Link from "next/link";

import type { LegalSection } from "@/types/content";

interface LegalDocumentProps {
  revision: string;
  sections: LegalSection[];
  /** Rendered only for locales whose text is an unofficial translation of the Russian original. */
  notice?: { text: string; linkLabel: string; href: string } | null;
  children?: React.ReactNode;
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text} className="mt-3 first:mt-0">
          {text}
        </p>
      ))}
    </>
  );
}

export function LegalDocument({ revision, sections, notice, children }: LegalDocumentProps) {
  return (
    <article className="surface-panel max-w-[70ch] rounded-2xl p-6 text-[15px] leading-relaxed text-[var(--color-muted-strong)] sm:p-8">
      <p className="chip-pill inline-flex rounded-full px-3 py-1 text-xs font-semibold">
        {revision}
      </p>

      {notice ? (
        <p className="mt-5 rounded-xl border border-[rgba(108,92,231,0.24)] bg-[var(--color-note)] px-4 py-3 text-sm">
          {notice.text}{" "}
          <Link
            href={notice.href}
            className="font-medium text-[var(--color-accent-indigo)] underline underline-offset-2"
          >
            {notice.linkLabel}
          </Link>
          .
        </p>
      ) : null}

      {sections.map((section, index) => (
        <section key={section.title ?? index} className={index === 0 ? "mt-6" : "mt-8"}>
          {section.title ? (
            <h2 className="text-lg font-semibold text-[var(--color-midnight)]">{section.title}</h2>
          ) : null}

          <div className={section.title ? "mt-3" : undefined}>
            {section.paragraphs ? <Paragraphs items={section.paragraphs} /> : null}

            {section.list ? (
              <ul className="mt-3 space-y-2">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-indigo)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.afterList ? (
              <div className="mt-3">
                <Paragraphs items={section.afterList} />
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {children}
    </article>
  );
}
