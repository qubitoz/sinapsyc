import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  /** Título corto para la etiqueta <title> (Google corta cerca de 60). */
  seoTitle?: string;
  date: string; // ISO
  excerpt: string;
  cover?: string;
  author?: string;
  category?: string;
  tags?: string[];
  readingTime: number;
};

export type Post = PostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readingTimeOf(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post | null {
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdPath)
    ? mdPath
    : path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    seoTitle: data.seoTitle,
    date: data.date
      ? new Date(data.date).toISOString()
      : new Date().toISOString(),
    excerpt: data.excerpt ?? "",
    cover: data.cover,
    author: data.author ?? "Equipo Sinapsyc",
    category: data.category ?? "Neurodesarrollo",
    tags: data.tags ?? [],
    readingTime: readingTimeOf(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const p = getPost(slug);
      if (!p) return null;
      // omit content for list
      const { content: _content, ...meta } = p;
      void _content;
      return meta;
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ---------------- Taxonomía: categorías y etiquetas ---------------- */

/** Convierte "Integración Sensorial" en "integracion-sensorial". */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type Term = { name: string; slug: string; count: number };

function collect(values: (string | undefined)[]): Term[] {
  const bySlug = new Map<string, Term>();
  for (const v of values) {
    if (!v) continue;
    const slug = slugify(v);
    const existing = bySlug.get(slug);
    if (existing) existing.count += 1;
    else bySlug.set(slug, { name: v, slug, count: 1 });
  }
  return [...bySlug.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name, "es")
  );
}

export function getCategories(): Term[] {
  return collect(getAllPosts().map((p) => p.category));
}

export function getTags(): Term[] {
  return collect(getAllPosts().flatMap((p) => p.tags ?? []));
}

export function getPostsByCategory(slug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category && slugify(p.category) === slug);
}

export function getPostsByTag(slug: string): PostMeta[] {
  return getAllPosts().filter((p) =>
    (p.tags ?? []).some((t) => slugify(t) === slug)
  );
}

export function findTerm(terms: Term[], slug: string): Term | undefined {
  return terms.find((t) => t.slug === slug);
}

/**
 * Artículos relacionados: primero los que comparten más etiquetas y, si hacen
 * falta, se completa con los más recientes de la misma categoría.
 */
export function getRelatedPosts(post: PostMeta, limit = 3): PostMeta[] {
  const tags = new Set((post.tags ?? []).map(slugify));
  const others = getAllPosts().filter((p) => p.slug !== post.slug);

  const scored = others
    .map((p) => ({
      post: p,
      shared: (p.tags ?? []).filter((t) => tags.has(slugify(t))).length,
      sameCategory: p.category === post.category ? 1 : 0,
    }))
    .filter((s) => s.shared > 0 || s.sameCategory > 0)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        b.sameCategory - a.sameCategory ||
        +new Date(b.post.date) - +new Date(a.post.date)
    )
    .map((s) => s.post);

  const picked = scored.slice(0, limit);
  if (picked.length < limit) {
    for (const p of others) {
      if (picked.length >= limit) break;
      if (!picked.some((x) => x.slug === p.slug)) picked.push(p);
    }
  }
  return picked;
}

/** Artículos que llevan cualquiera de las etiquetas dadas. */
export function getPostsByTags(names: string[], limit = 3): PostMeta[] {
  const wanted = new Set(names.map(slugify));
  return getAllPosts()
    .filter((p) => (p.tags ?? []).some((t) => wanted.has(slugify(t))))
    .slice(0, limit);
}
