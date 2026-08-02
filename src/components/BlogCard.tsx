import Link from "next/link";
import Image from "next/image";
import { formatDate, slugify, type PostMeta } from "@/lib/blog";

/**
 * La tarjeta no puede ser un solo <a> porque la categoría es otro enlace
 * (anidar anclas es HTML inválido). Se usa el patrón de "enlace extendido":
 * el título cubre toda la tarjeta con un ::after y la categoría queda encima.
 */
export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-teal-100">
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {post.category && (
          <Link
            href={`/blog/categoria/${slugify(post.category)}`}
            className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-700 text-teal-600 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-teal-700"
          >
            {post.category}
          </Link>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-600 text-ink-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} min de lectura</span>
        </div>

        <h3 className="font-display text-xl font-600 leading-snug text-ink transition-colors group-hover:text-teal-600">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:z-10 after:content-[''] focus:outline-none focus-visible:underline"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-700 text-teal-600">
          Leer artículo
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </article>
  );
}
