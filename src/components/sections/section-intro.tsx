interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "mobile-center";
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : align === "mobile-center"
        ? "mx-auto text-center lg:mx-0 lg:text-left"
        : "text-left";

  return (
    <header className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-[var(--color-midnight)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted-strong)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
