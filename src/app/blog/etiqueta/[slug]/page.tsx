import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TagChips } from "@/components/TermChips";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { getTags, getPostsByTag, findTerm } from "@/lib/blog";

export function generateStaticParams() {
  return getTags().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = findTerm(getTags(), slug);
  if (!term) return { title: "Etiqueta" };
  const title = `${term.name} | Artículos de Sinapsyc`;
  const description = `Todo lo que hemos escrito sobre ${term.name.toLowerCase()}: ${
    term.count
  } ${term.count === 1 ? "artículo" : "artículos"} para familias, del centro de neurodesarrollo infantil Sinapsyc.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/etiqueta/${term.slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/etiqueta/${term.slug}`,
      images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tags = getTags();
  const term = findTerm(tags, slug);
  if (!term) notFound();

  const posts = getPostsByTag(slug);
  const related = tags.filter((t) => t.slug !== slug).slice(0, 12);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: `#${term.name}`, path: `/blog/etiqueta/${term.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema(
            `${term.name} — Artículos de Sinapsyc`,
            `Artículos etiquetados con ${term.name}.`,
            `/blog/etiqueta/${term.slug}`,
            posts
          ),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        eyebrow="Etiqueta"
        emoji="🏷️"
        title={`#${term.name}`}
        subtitle={`${term.count} ${
          term.count === 1 ? "artículo habla" : "artículos hablan"
        } de este tema.`}
        tint="sun"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={crumbs} className="mb-8" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5">
            <h2 className="font-display text-xl font-600 text-ink">
              Explora otros temas
            </h2>
            <TagChips tags={related.map((t) => t.name)} className="mt-4" />
            <p className="mt-5 text-sm text-ink-soft">
              O vuelve al{" "}
              <Link href="/blog" className="font-700 text-teal-600 underline">
                blog completo
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
