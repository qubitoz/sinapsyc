import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CategoryBar } from "@/components/TermChips";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { getCategories, getPostsByCategory, findTerm } from "@/lib/blog";

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = findTerm(getCategories(), slug);
  if (!term) return { title: "Categoría" };
  const title = `${term.name} | Blog de Neurodesarrollo Infantil`;
  const description = `Artículos sobre ${term.name.toLowerCase()} para familias: ${term.count} ${
    term.count === 1 ? "publicación" : "publicaciones"
  } del equipo de Sinapsyc, centro de neurodesarrollo infantil en Guadalajara.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/categoria/${term.slug}` },
    openGraph: {
      title,
      description,
      url: `/blog/categoria/${term.slug}`,
      images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = getCategories();
  const term = findTerm(categories, slug);
  if (!term) notFound();

  const posts = getPostsByCategory(slug);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: term.name, path: `/blog/categoria/${term.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          collectionPageSchema(
            `${term.name} — Blog de Sinapsyc`,
            `Artículos sobre ${term.name.toLowerCase()}.`,
            `/blog/categoria/${term.slug}`,
            posts
          ),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        eyebrow="Categoría"
        emoji="📚"
        title={term.name}
        subtitle={`${term.count} ${
          term.count === 1 ? "artículo" : "artículos"
        } para acompañarte en este tema.`}
        tint="bubble"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={crumbs} className="mb-8" />
          <CategoryBar categories={categories} activeSlug={term.slug} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
