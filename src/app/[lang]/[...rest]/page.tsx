import { notFound } from "next/navigation";

/**
 * An unmatched path never enters the [lang] subtree on its own, so Next answers it with its
 * built-in bare 404 instead of the localized one. This catch-all pulls such paths in and hands
 * them to [lang]/not-found.tsx, which renders inside the site layout.
 */
export default function CatchAllPage(): never {
  notFound();
}
