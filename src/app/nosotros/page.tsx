import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Acerca de Nosotros",
  description:
    "Sinapsyc es un centro de neurodesarrollo infantil en Guadalajara. Acompañamos familias y potenciamos el desarrollo y bienestar de cada niño con atención personalizada.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  { icon: "🫶", title: "Acompañamiento cercano", text: "Caminamos de la mano con cada familia, con calidez y compromiso en todo el proceso.", color: "teal" as const },
  { icon: "🧠", title: "Especialización", text: "Profesionales especialistas en cada área, con formación avalada por estándares internacionales.", color: "sky" as const },
  { icon: "🌱", title: "Mirada integral", text: "Vemos al niño en su totalidad y en los entornos donde crece: casa, escuela y comunidad.", color: "sun" as const },
  { icon: "✨", title: "El juego como motor", text: "Creemos que jugar es aprender. Cada actividad tiene una intención terapéutica.", color: "bubble" as const },
];

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema(
            "Acerca de Nosotros — Sinapsyc",
            "Centro de neurodesarrollo infantil en Guadalajara con atención personalizada.",
            "/nosotros"
          ),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Nosotros", path: "/nosotros" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Acerca de nosotros"
        emoji="🌟"
        title="Un equipo con un mismo propósito"
        subtitle="Acompañar familias y potenciar el desarrollo y bienestar de cada niño."
        tint="teal"
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rotate-3 rounded-[44px] bg-sun-100" aria-hidden />
              <div className="relative overflow-hidden rounded-[44px] bg-white p-4 shadow-2xl shadow-teal-500/10">
                <Image
                  src="/img/about-family.jpg"
                  alt="Familia acompañada por Sinapsyc"
                  width={1000}
                  height={750}
                  className="w-full rounded-[32px]"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading
                align="left"
                eyebrow="Quiénes somos"
                eyebrowClass="bg-teal-100 text-teal-600"
                title="Somos un centro de neurodesarrollo infantil"
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  Estamos formados por profesionales especializados que trabajan
                  con un mismo propósito: acompañar familias y potenciar el
                  desarrollo y bienestar de cada niño.
                </p>
                <p>
                  Para nosotros, la familia es parte esencial del proceso.
                  Caminamos de la mano con padres, escuela y otros profesionales
                  para construir juntos un entorno que impulse las habilidades y
                  fortalezas de cada niño.
                </p>
                <p>
                  Sinapsyc ofrece acompañamiento y compromiso por medio de una
                  atención personalizada, garantizando un espacio{" "}
                  <strong className="text-teal-600">cálido y seguro</strong> para
                  cada niño.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Slogan band */}
      <section className="py-6">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-bubble-300 via-bubble-500 to-sun-400 px-6 py-14 text-center shadow-2xl shadow-bubble-500/20">
            <p className="font-display text-sm font-700 uppercase tracking-wider text-white/80">
              Nuestro lema
            </p>
            <p className="mx-auto mt-3 max-w-2xl font-display text-3xl font-700 leading-tight text-white sm:text-4xl">
              «Abrazamos infancias, iluminamos caminos»
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Lo que nos mueve"
            eyebrowClass="bg-sky-brand-100 text-sky-brand-600"
            title="Nuestros valores"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const c = colorMap[v.color];
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="h-full rounded-[28px] bg-white p-6 text-center shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03]">
                    <span className={clsx("mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl", c.bgSoft)}>
                      {v.icon}
                    </span>
                    <h3 className={clsx("mt-4 font-display text-lg font-600", c.text)}>{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="pb-4">
        <Container>
          <Reveal className="rounded-[36px] bg-white p-8 shadow-lg shadow-teal-900/5 sm:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <span className="text-4xl" aria-hidden>🏅</span>
                <div>
                  <h3 className="font-display text-xl font-600 text-teal-600">
                    Integración Sensorial
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    Equipo certificado por la Asociación Mexicana de Integración
                    Sensorial, con formación avalada por CLASI (Ayres Sensory
                    Integration®).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl" aria-hidden>🍎</span>
                <div>
                  <h3 className="font-display text-xl font-600 text-bubble-600">
                    Terapia de Alimentación
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    Equipo certificado en el enfoque SOS (Sequential Oral Sensory
                    Approach to Feeding®), basado en estándares internacionales.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
