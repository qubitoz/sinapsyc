import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog sobre Neurodesarrollo Infantil",
  description:
    "Artículos y recursos sobre neurodesarrollo infantil, lenguaje, integración sensorial y consejos para acompañar el desarrollo de tu hijo.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Blog de ${site.name}`,
    url: `${site.url}/blog`,
    inLanguage: "es-MX",
    publisher: { "@id": `${site.url}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          blogSchema,
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        emoji="📖"
        title="Recursos para acompañarte"
        subtitle="Información clara y cálida sobre el neurodesarrollo infantil, pensada para las familias. Publicamos contenido nuevo cada mes."
        tint="bubble"
      />

      <section className="py-16 sm:py-20">
        <Container>
          {posts.length === 0 ? (
            <div className="mx-auto max-w-md rounded-[32px] bg-white p-10 text-center shadow-lg">
              <span className="text-5xl">🌱</span>
              <h2 className="mt-4 font-display text-xl font-600 text-ink">
                Muy pronto, nuevos artículos
              </h2>
              <p className="mt-2 text-ink-soft">
                Estamos preparando contenido con mucho cariño. Vuelve pronto.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
