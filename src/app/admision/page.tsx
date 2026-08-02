import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import AdmissionForm from "@/components/AdmissionForm";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Admisión: Inicia el Proceso de tu Hijo",
  description:
    "Conoce el proceso de admisión de Sinapsyc y llena la solicitud en línea. Sin referencia médica: te contactamos para agendar la primera cita.",
  alternates: { canonical: "/admision" },
};

const steps = [
  {
    n: "1",
    title: "Envía tu solicitud",
    text: "Llena el formulario de esta página. Se enviará por WhatsApp, nuestro medio principal, con toda tu información ordenada.",
    color: "teal" as const,
  },
  {
    n: "2",
    title: "Te contactamos",
    text: "Nuestro equipo te escribe para resolver tus dudas y agendar la primera cita de valoración en el horario que mejor les acomode.",
    color: "sky" as const,
  },
  {
    n: "3",
    title: "Primera cita de valoración",
    text: "Una entrevista guiada contigo para conocer la historia de desarrollo de tu hijo, sus fortalezas y los objetivos de tu familia.",
    color: "sun" as const,
  },
  {
    n: "4",
    title: "Plan e inicio de terapias",
    text: "Con los resultados, diseñamos un plan individualizado y comienza el acompañamiento, con seguimiento continuo.",
    color: "bubble" as const,
  },
];

export default function AdmisionPage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPageSchema(
            "Admisión — Sinapsyc",
            "Proceso de admisión y solicitud en línea del centro de neurodesarrollo infantil Sinapsyc.",
            "/admision"
          ),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Admisión", path: "/admision" },
          ]),
        ]}
      />
      <PageHero
        crumbs={[{ name: "Inicio", path: "/" }, { name: "Admisión", path: "/admision" }]}
        eyebrow="Admisión"
        emoji="🌱"
        title="Iniciar es más sencillo de lo que imaginas"
        subtitle="No necesitas referencia médica ni tener todas las respuestas. Llena la solicitud y nuestro equipo te acompaña desde el primer mensaje."
        tint="sun"
      />

      {/* Proceso */}
      <section className="py-14 sm:py-16">
        <Container>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <Reveal as="li" key={s.n} delay={i * 80}>
                  <div className="h-full rounded-[28px] bg-white p-6 shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03]">
                    <span className={clsx("flex h-12 w-12 items-center justify-center rounded-2xl font-display text-xl font-700 text-white", c.bgSolid)}>
                      {s.n}
                    </span>
                    <h2 className={clsx("mt-4 font-display text-lg font-600", c.text)}>
                      {s.title}
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Formulario */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
            <Reveal>
              <div className="rounded-[36px] bg-white p-7 shadow-xl shadow-teal-900/5 sm:p-9">
                <h2 className="font-display text-2xl font-600 text-ink">
                  Solicitud de admisión
                </h2>
                <p className="mt-2 text-[15px] text-ink-soft">
                  Entre más nos compartas, mejor podremos orientarte. Al enviar,
                  se abrirá WhatsApp con tu solicitud ya formateada. 💛
                </p>
                <div className="mt-6">
                  <AdmissionForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-6">
              <div className="overflow-hidden rounded-[32px] bg-white p-3 shadow-lg shadow-teal-900/5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image
                    src="/fotos/terapia_bebe_cuna_azul.jpg"
                    alt="Terapeuta de Sinapsyc acompañando a un bebé en su valoración"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[32px] bg-teal-500 p-7 text-white shadow-xl shadow-teal-500/20">
                <span className="text-3xl" aria-hidden>🎁</span>
                <h3 className="mt-3 font-display text-xl font-600">
                  Beneficio de bienvenida
                </h3>
                <p className="mt-2 text-white/90">
                  Al iniciar tu proceso con nosotros recibes un beneficio
                  especial. Pregúntanos por él al enviar tu solicitud.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-7 shadow-lg shadow-teal-900/5">
                <h3 className="font-display text-lg font-600 text-ink">
                  ¿Prefieres escribirnos directo?
                </h3>
                <a
                  href={waLink("¡Hola Sinapsyc! Me gustaría información sobre el proceso de admisión.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-display font-600 text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {site.phoneDisplay}
                </a>
                <p className="mt-4 text-sm text-ink-soft">
                  También puedes revisar nuestras{" "}
                  <Link href="/preguntas-frecuentes" className="font-700 text-teal-600 underline">
                    preguntas frecuentes
                  </Link>{" "}
                  o conocer{" "}
                  <Link href="/enfoque" className="font-700 text-teal-600 underline">
                    cómo trabajamos
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
