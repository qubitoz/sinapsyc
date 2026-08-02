import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CategoryBar, TagChips } from "@/components/TermChips";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";
import { getAllPosts, getCategories, getTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog sobre Neurodesarrollo Infantil",
  description:
    "Artículos y recursos sobre neurodesarrollo infantil, lenguaje, integración sensorial y consejos para acompañar el desarrollo de tu hijo.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();
  const tags = getTags();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <JsonLd data={[blogSchema(posts), breadcrumbSchema(crumbs)]} />
      <PageHero
        eyebrow="Blog"
        emoji="📖"
        title="Recursos para acompañarte"
        subtitle="Información clara y cálida sobre el neurodesarrollo infantil, pensada para las familias. Publicamos contenido nuevo cada mes."
        tint="bubble"
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={crumbs} className="mb-8" />

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
            <>
              <CategoryBar categories={categories} />

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 80}>
                    <BlogCard post={post} />
                  </Reveal>
                ))}
              </div>

              {/* Nube de etiquetas: enlaza cada tema con su archivo */}
              <Reveal className="mt-16 rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5 sm:p-10">
                <h2 className="font-display text-xl font-600 text-ink">
                  Explora por tema
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  Encuentra rápido lo que te interesa.
                </p>
                <TagChips tags={tags.map((t) => t.name)} className="mt-5" />
                <p className="mt-6 text-sm text-ink-soft">
                  ¿Buscas orientación personalizada?{" "}
                  <Link href="/contacto" className="font-700 text-teal-600 underline">
                    Agenda una primera cita
                  </Link>{" "}
                  o conoce{" "}
                  <Link href="/programas" className="font-700 text-teal-600 underline">
                    nuestros programas
                  </Link>
                  .
                </p>
              </Reveal>
            </>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
