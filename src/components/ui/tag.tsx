import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  active?: boolean;
}

export function Tag({ children, active = false }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition ${
        active
          ? "border-[var(--color-accent-indigo)] bg-[var(--color-accent-indigo)] text-white"
          : "chip-pill"
      }`}
    >
      {children}
    </span>
  );
}
