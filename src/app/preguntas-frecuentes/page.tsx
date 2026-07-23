import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Resolvemos las dudas más comunes de las familias sobre terapia infantil, señales de alerta, autismo, TDAH, lenguaje, alimentación y la primera cita de valoración.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="Preguntas frecuentes"
        emoji="💬"
        title="Resolvemos tus dudas con calma"
        subtitle="Sabemos que como mamá o papá surgen muchas preguntas. Aquí respondemos las más comunes. Si necesitas más orientación, estamos a un mensaje de distancia."
        tint="bubble"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <FaqAccordion items={faqs} defaultOpen={0} />
        </Container>
      </section>

      <CtaBand
        title="¿Tienes otra pregunta?"
        text="Con gusto te orientamos. Escríbenos por WhatsApp y con mucho cariño resolveremos todas tus dudas sobre el desarrollo de tu pequeño."
      />
    </>
  );
}
