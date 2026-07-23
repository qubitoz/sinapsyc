import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
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
