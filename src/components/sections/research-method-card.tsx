"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import type { CommonContent } from "@/data/common";
import type { MethodList, ResearchMethod } from "@/data/solutions";

interface ResearchMethodCardProps {
  method: ResearchMethod;
  labels: CommonContent["solutions"];
}

function MethodListBlock({ list, label }: { list: MethodList; label?: string }) {
  return (
    <div>
      {label ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-indigo)]">
          {label}
        </p>
      ) : null}
      <p className={`text-[15px] leading-relaxed text-[var(--color-muted-strong)] ${label ? "mt-2" : ""}`}>
        {list.intro}
      </p>
      <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[var(--color-midnight-soft)]">
        {list.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-violet)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ResearchMethodCard({ method, labels }: ResearchMethodCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const [lead, ...restParagraphs] = method.paragraphs;

  return (
    <article className="glass-card-l2 flex h-full flex-col rounded-2xl border-[rgba(108,92,231,0.16)] p-5 sm:p-6">
      <div>
        <h3 className="text-lg font-semibold leading-snug text-[var(--color-midnight)] sm:text-xl">
          {method.title}
        </h3>
        {method.subtitle ? (
          <p className="mt-1 text-sm text-[var(--color-accent-plum)]">{method.subtitle}</p>
        ) : null}
      </div>

      <p
        className={`mt-4 text-[15px] leading-relaxed text-[var(--color-muted-strong)] ${
          isOpen ? "" : "line-clamp-4"
        }`}
      >
        {lead}
      </p>

      <div
        id={panelId}
        inert={!isOpen}
        className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 space-y-4 overflow-hidden pt-4">
          {restParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[15px] leading-relaxed text-[var(--color-muted-strong)]"
            >
              {paragraph}
            </p>
          ))}

          {method.indicators ? <MethodListBlock list={method.indicators} /> : null}

          {method.note ? (
            <div className="rounded-2xl bg-[var(--color-note)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-plum)]">
                {labels.noteLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-midnight-soft)]">
                {method.note}
              </p>
            </div>
          ) : null}

          {method.usage ? <MethodListBlock list={method.usage} label={labels.usageLabel} /> : null}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="mt-auto flex cursor-pointer items-center gap-1.5 self-start pt-5 text-sm font-semibold text-[var(--color-accent-indigo)] transition hover:text-[var(--color-accent-violet)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
      >
        {isOpen ? labels.collapse : labels.expand}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </article>
  );
}
