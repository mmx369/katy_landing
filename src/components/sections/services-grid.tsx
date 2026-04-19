import { Card } from "@/components/ui/card";
import type { FeatureItem } from "@/types/content";

interface ServicesGridProps {
  items: FeatureItem[];
}

export function ServicesGrid({ items }: ServicesGridProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="glass-card-l2 floating-soft">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--color-midnight-soft)]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
