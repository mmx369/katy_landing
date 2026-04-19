import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className, glass = false }: CardProps) {
  return (
    <article
      className={`${glass ? "glass-panel" : "surface-panel glass-card-l2"} card-interactive rounded-3xl p-6 md:p-7 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
