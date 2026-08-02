import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { faqs, programs } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Terapia Infantil",
  description:
    "Resolvemos las dudas más comunes de las familias sobre terapia infantil, señales de alerta, autismo, TDAH, lenguaje, alimentación y la primera cita de valoración.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Preguntas Frecuentes", path: "/preguntas-frecuentes" },
          ]),
        ]}
      />
      <PageHero
        crumbs={[{ name: "Inicio", path: "/" }, { name: "Preguntas Frecuentes", path: "/preguntas-frecuentes" }]}
        eyebrow="Preguntas frecuentes"
        emoji="💬"
        title="Resolvemos tus dudas con calma"
        subtitle="Sabemos que como mamá o papá surgen muchas preguntas. Aquí respondemos las más comunes. Si necesitas más orientación, estamos a un mensaje de distancia."
        tint="bubble"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <FaqAccordion items={faqs} defaultOpen={0} />

          {/* Salida hacia los programas: muchas dudas terminan en "¿cuál necesita?" */}
          <div className="mx-auto mt-14 max-w-3xl rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5 sm:p-10">
            <h2 className="font-display text-xl font-600 text-ink">
              Conoce nuestros programas
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Cada terapia explica a quién acompaña y cómo puede ayudar.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programas/${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-cream-deep px-4 py-2 text-sm font-600 text-ink-soft ring-1 ring-black/[0.04] transition-colors hover:bg-teal-100 hover:text-teal-600"
                  >
                    <span aria-hidden>{p.emoji}</span>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              ¿Aún tienes dudas? Lee el{" "}
              <Link href="/blog" className="font-700 text-teal-600 underline">
                blog
              </Link>{" "}
              o{" "}
              <Link href="/admision" className="font-700 text-teal-600 underline">
                inicia tu proceso de admisión
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Tienes otra pregunta?"
        text="Con gusto te orientamos. Escríbenos por WhatsApp y con mucho cariño resolveremos todas tus dudas sobre el desarrollo de tu pequeño."
      />
    </>
  );
}
