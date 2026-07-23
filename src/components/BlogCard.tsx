import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
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
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-700 text-teal-600 shadow-sm backdrop-blur">
            {post.category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-600 text-ink-soft">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} min de lectura</span>
        </div>
        <h3 className="font-display text-xl font-600 leading-snug text-ink transition-colors group-hover:text-teal-600">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-700 text-teal-600">
          Leer artículo
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
