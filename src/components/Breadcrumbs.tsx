import Link from "next/link";
import { clsx } from "@/lib/clsx";

export type Crumb = { name: string; path: string };

/**
 * Migas de pan visibles. El schema BreadcrumbList se emite aparte con
 * `breadcrumbSchema()`; aquí se cubre la parte visible para el usuario y el
 * enlazado interno hacia las secciones padre.
 */
export default function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Ruta de navegación" className={clsx("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-soft">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-teal-300">
                  /
                </span>
              )}
              {last ? (
                <span className="font-600 text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="font-600 transition-colors hover:text-teal-600"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
