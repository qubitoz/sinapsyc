import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { programs, site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Programas y Terapias Infantiles (0–8 años)",
  description:
    "Terapia ocupacional, integración sensorial, lenguaje, física, alimentación y más. Programas de neurodesarrollo para niños de 0 a 8 años en Guadalajara.",
  alternates: { canonical: "/programas" },
};

export default function ProgramasPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Programas de neurodesarrollo infantil de Sinapsyc",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${site.url}/programas/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          itemList,
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Programas", path: "/programas" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Nuestros programas"
        emoji="🌈"
        title="Terapias y programas para cada etapa"
        subtitle="Intervenciones especializadas para niños de 0 a 8 años. A través del juego y actividades adaptadas, potenciamos las habilidades de cada pequeño."
        tint="sky"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿No sabes qué terapia necesita tu hijo?"
        text="No te preocupes: en la primera cita de valoración identificamos las áreas que requieren apoyo y te orientamos con claridad. Solo tienes que dar el primer paso."
      />
    </>
  );
}
