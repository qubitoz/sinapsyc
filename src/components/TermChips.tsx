import Link from "next/link";
import { slugify, type Term } from "@/lib/blog";
import { clsx } from "@/lib/clsx";

/** Chip de categoría (enlace al archivo de esa categoría). */
export function CategoryChip({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/categoria/${slugify(category)}`}
      className={clsx(
        "inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-700 text-teal-600 transition-colors hover:bg-teal-200",
        className
      )}
    >
      {category}
    </Link>
  );
}

/** Lista de etiquetas enlazadas a su archivo. */
export function TagChips({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  if (!tags.length) return null;
  return (
    <ul className={clsx("flex flex-wrap gap-2", className)}>
      {tags.map((t) => (
        <li key={t}>
          <Link
            href={`/blog/etiqueta/${slugify(t)}`}
            className="inline-flex items-center rounded-full bg-cream-deep px-3 py-1.5 text-[13px] font-600 text-ink-soft ring-1 ring-black/[0.04] transition-colors hover:bg-bubble-100 hover:text-bubble-600"
          >
            #{t}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Barra de navegación por categorías, con la activa resaltada. */
export function CategoryBar({
  categories,
  activeSlug,
}: {
  categories: Term[];
  activeSlug?: string;
}) {
  return (
    <nav aria-label="Categorías del blog">
      <ul className="flex flex-wrap items-center justify-center gap-2">
        <li>
          <Link
            href="/blog"
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-700 transition-colors",
              !activeSlug
                ? "bg-teal-500 text-white shadow-md shadow-teal-500/25"
                : "bg-white text-ink-soft ring-1 ring-black/[0.04] hover:bg-teal-50 hover:text-teal-600"
            )}
          >
            Todos
          </Link>
        </li>
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/blog/categoria/${c.slug}`}
              className={clsx(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-700 transition-colors",
                activeSlug === c.slug
                  ? "bg-teal-500 text-white shadow-md shadow-teal-500/25"
                  : "bg-white text-ink-soft ring-1 ring-black/[0.04] hover:bg-teal-50 hover:text-teal-600"
              )}
            >
              {c.name}
              <span
                className={clsx(
                  "rounded-full px-1.5 text-[11px]",
                  activeSlug === c.slug ? "bg-white/25" : "bg-cream-deep"
                )}
              >
                {c.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
