import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/ui";
import CtaBand from "@/components/CtaBand";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CategoryChip, TagChips } from "@/components/TermChips";
import {
  getPost,
  getPostSlugs,
  getRelatedPosts,
  formatDate,
  slugify,
} from "@/lib/blog";
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
  const desc =
    post.excerpt.length > 160 ? post.excerpt.slice(0, 157).trimEnd() + "…" : post.excerpt;
  return {
    title: { absolute: post.seoTitle ?? post.title },
    description: desc,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: desc,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: post.cover
        ? [{ url: post.cover, width: 1280, height: 720, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: desc,
      images: post.cover ? [post.cover] : undefined,
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

  // Relacionados por etiquetas compartidas, no por orden de publicación.
  const related = getRelatedPosts(post, 3);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    ...(post.category
      ? [
          {
            name: post.category,
            path: `/blog/categoria/${slugify(post.category)}`,
          },
        ]
      : []),
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[blogPostingSchema(post), breadcrumbSchema(crumbs)]} />

      <article>
        {/* header */}
        <header className="relative overflow-hidden bg-gradient-to-br from-teal-100 via-cream to-bubble-100">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
          <Container className="relative py-12 sm:py-16">
            <Breadcrumbs items={crumbs} className="mb-6" />
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-sm font-600 text-ink-soft">
                {post.category && <CategoryChip category={post.category} />}
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

          {/* Pie del artículo: temas y salida hacia el resto del sitio */}
          <div className="mx-auto mt-12 max-w-2xl border-t border-teal-100 pt-8">
            {post.tags && post.tags.length > 0 && (
              <>
                <h2 className="font-display text-lg font-600 text-ink">
                  Temas de este artículo
                </h2>
                <TagChips tags={post.tags} className="mt-3" />
              </>
            )}
            <div className="mt-8 rounded-3xl bg-teal-50 p-6">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                ¿Te quedaste con dudas sobre tu pequeño? Conoce{" "}
                <Link href="/programas" className="font-700 text-teal-600 underline">
                  nuestros programas
                </Link>
                , revisa las{" "}
                <Link
                  href="/preguntas-frecuentes"
                  className="font-700 text-teal-600 underline"
                >
                  preguntas frecuentes
                </Link>{" "}
                o{" "}
                <Link href="/contacto" className="font-700 text-teal-600 underline">
                  agenda una primera cita de valoración
                </Link>
                .
              </p>
            </div>
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
