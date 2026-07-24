import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { approach } from "@/lib/site";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nuestro Enfoque",
  description:
    "Un enfoque integral e interdisciplinario centrado en el niño y la familia. Conoce cómo trabajamos de la mano con padres, escuelas y profesionales de la salud.",
  alternates: { canonical: "/enfoque" },
};

const faqEnfoque = [
  {
    q: "¿Participan con la familia y especialistas?",
    a: [
      "En Sinapsyc consideramos que la familia es parte esencial del proceso terapéutico. Trabajamos de manera cercana con padres y cuidadores, brindando acompañamiento, estrategias y herramientas que favorezcan la participación del niño dentro de su vida cotidiana.",
      "Además, promovemos el trabajo colaborativo con escuelas, médicos y otros profesionales involucrados, buscando generar objetivos compartidos y una intervención integral y coordinada.",
    ],
    color: "sky" as const,
  },
];

export default function EnfoquePage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema(
            "Nuestro Enfoque — Sinapsyc",
            "Enfoque integral e interdisciplinario centrado en el niño y la familia.",
            "/enfoque"
          ),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Nuestro Enfoque", path: "/enfoque" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Nuestro enfoque"
        emoji="🧩"
        title="Integral, interdisciplinario y centrado en la familia"
        subtitle="Comprendemos que cada niño presenta necesidades, fortalezas y objetivos únicos. Por eso brindamos una atención personalizada dentro de sus contextos cotidianos."
        tint="teal"
      />

      {/* Philosophy */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Cómo trabajamos"
                eyebrowClass="bg-teal-100 text-teal-600"
                title="El desarrollo ocurre en los entornos donde el niño crece"
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  En Sinapsyc trabajamos desde un enfoque integral e
                  interdisciplinario centrado en el niño y la familia. Buscamos
                  favorecer su participación, bienestar y desarrollo dentro de sus
                  contextos cotidianos.
                </p>
                <p>
                  Nuestro trabajo se basa en la colaboración entre diferentes
                  disciplinas terapéuticas, la familia, la escuela y otros
                  profesionales, entendiendo que el desarrollo ocurre dentro de los
                  entornos significativos donde se desenvuelve cada niño.
                </p>
                <p>
                  Creemos en el acompañamiento cercano, el trabajo en equipo y la
                  construcción de{" "}
                  <strong className="text-teal-600">estrategias funcionales</strong>{" "}
                  que puedan trasladarse a la vida diaria.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-[44px] bg-white p-4 shadow-2xl shadow-teal-500/10">
                <Image
                  src="/img/approach-path.jpg"
                  alt="El camino de acompañamiento de Sinapsyc"
                  width={1280}
                  height={720}
                  className="w-full rounded-[32px]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process timeline */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="El proceso"
            eyebrowClass="bg-sun-100 text-sun-500"
            title="De la valoración al seguimiento continuo"
            subtitle="Un camino claro donde la familia es parte activa desde el primer momento."
          />

          <ol className="mt-14 space-y-6">
            {approach.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <Reveal as="li" key={s.step} delay={i * 70}>
                  <div className="flex flex-col gap-5 rounded-[32px] bg-cream p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
                    <div className={clsx("flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-2xl font-700 text-white shadow-lg", c.bgSolid)}>
                      {s.step}
                    </div>
                    <div>
                      <h3 className={clsx("font-display text-xl font-600", c.text)}>
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                        {s.text}
                      </p>
                    </div>
                    {i < approach.length - 1 && (
                      <span className="hidden text-3xl text-teal-300 sm:ml-auto sm:block" aria-hidden>
                        ↓
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-full bg-teal-50 px-6 py-4 text-center font-display text-sm font-600 text-teal-600 sm:text-base">
            <span>Cita de valoración</span>
            <Arrow />
            <span>Evaluación</span>
            <Arrow />
            <span>Resultados y objetivos</span>
            <Arrow />
            <span>Intervención</span>
            <Arrow />
            <span>Seguimiento continuo</span>
          </Reveal>
        </Container>
      </section>

      {/* Family participation */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqEnfoque.map((f) => {
              const c = colorMap[f.color];
              return (
                <Reveal key={f.q}>
                  <div className={clsx("rounded-[32px] p-8 sm:p-10", c.bgSoft)}>
                    <h3 className={clsx("font-display text-2xl font-600", c.text)}>
                      {f.q}
                    </h3>
                    <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                      {f.a.map((p, k) => (
                        <p key={k}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal>
              <div className="rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5 sm:p-10">
                <h3 className="font-display text-2xl font-600 text-teal-600">
                  ¿Cómo es el proceso de valoración y las terapias en Sinapsyc?
                </h3>
                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                  <p>
                    El proceso inicia con una primera cita de valoración dirigida a
                    padres, con la intención de conocer la historia de desarrollo de
                    cada niño, incluso desde el embarazo, así como comprender sus
                    fortalezas, necesidades y los objetivos de cada familia.
                  </p>
                  <p>
                    Al finalizar esta primera cita, la especialista podrá orientarles
                    sobre las áreas que requieran atención y el tipo de intervención
                    más adecuado. Posteriormente se realiza una valoración directa del
                    niño desde el área correspondiente, con observación clínica,
                    actividades específicas y diferentes herramientas de evaluación.
                  </p>
                  <p>
                    Una vez concluido este proceso, se comparte un informe de
                    resultados con la familia, explicando de manera clara los hallazgos
                    y los objetivos terapéuticos a corto, mediano y largo plazo. A
                    partir de ello, se inicia un plan de intervención individualizado,
                    acompañado de seguimiento continuo y reevaluaciones periódicas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Arrow() {
  return (
    <span className="text-teal-300" aria-hidden>
      →
    </span>
  );
}
