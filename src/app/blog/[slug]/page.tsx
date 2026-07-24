import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/ui";
import CtaBand from "@/components/CtaBand";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, getPost, getPostSlugs, formatDate } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        {/* header */}
        <header className="relative overflow-hidden bg-gradient-to-br from-teal-100 via-cream to-bubble-100">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <Container className="relative py-12 sm:py-16">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm font-700 text-teal-600"
            >
              ← Volver al blog
            </Link>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-sm font-600 text-ink-soft">
                {post.category && (
                  <span className="rounded-full bg-white/80 px-3 py-1 text-teal-600">
                    {post.category}
                  </span>
                )}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTime} min de lectura</span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-700 leading-tight text-ink sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
              <p className="mt-4 text-sm font-600 text-teal-600">
                Por {post.author}
              </p>
            </div>
          </Container>
        </header>

        {post.cover && (
          <Container className="relative -mt-2">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-white p-3 shadow-xl shadow-teal-900/5">
              <Image
                src={post.cover}
                alt={post.title}
                width={1280}
                height={720}
                priority
                className="w-full rounded-[22px]"
              />
            </div>
          </Container>
        )}

        <Container className="py-12 sm:py-16">
          <div className="prose-sinapsyc mx-auto max-w-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="pb-4">
          <Container>
            <h2 className="text-center font-display text-2xl font-600 text-ink">
              Sigue leyendo
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
