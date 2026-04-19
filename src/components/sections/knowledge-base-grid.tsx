import { Card } from "@/components/ui/card";
import { knowledgeMethodTiles } from "@/data/knowledge";

export function KnowledgeBaseGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {knowledgeMethodTiles.map((tile) => (
        <Card
          key={tile.id}
          glass
          className="min-h-[260px] border-[rgba(108,92,231,0.16)] bg-[linear-gradient(145deg,rgba(255,255,255,0.58),rgba(255,255,255,0.22))]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Методика
          </p>
          <h3 className="mt-3 text-3xl font-semibold leading-none tracking-[-0.02em] text-[var(--color-midnight)] sm:text-4xl">
            {tile.method}
          </h3>
          <p className="mt-4 text-sm font-medium text-[var(--color-accent-indigo)]">
            {tile.focus}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-strong)]">
            {tile.description}
          </p>
          <div className="mt-5 rounded-xl border border-[rgba(108,92,231,0.16)] bg-white/70 px-3 py-2 text-sm text-[var(--color-midnight-soft)]">
            {tile.businessEffect}
          </div>
        </Card>
      ))}
    </div>
  );
}
