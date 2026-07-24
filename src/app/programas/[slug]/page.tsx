import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Pill, WhatsAppIcon } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { programs, waLink } from "@/lib/site";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Programa" };
  return {
    title: program.title,
    description: program.short,
    alternates: { canonical: `/programas/${program.slug}` },
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const c = colorMap[program.color];
  const others = programs.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(program),
          medicalWebPageSchema(program.title, program.short, `/programas/${program.slug}`),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Programas", path: "/programas" },
            { name: program.title, path: `/programas/${program.slug}` },
          ]),
        ]}
      />
      <section className={clsx("relative overflow-hidden", c.bgSoft)}>
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <Link
              href="/programas"
              className={clsx("mb-5 inline-flex items-center gap-1 text-sm font-700", c.text)}
            >
              ← Todos los programas
            </Link>
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                {program.emoji}
              </span>
              <Pill className={clsx(c.chipBg)}>Terapia · 0 a 8 años</Pill>
            </div>
            <h1 className="mt-5 font-display text-4xl font-700 leading-tight text-ink sm:text-5xl">
              {program.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              {program.short}
            </p>
            <div className="mt-7">
              <a
                href={waLink(
                  `¡Hola Sinapsyc! Me interesa la ${program.title} para mi hijo(a). Me gustaría agendar una cita.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-display text-lg font-600 text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Agenda una cita
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-[40px] bg-white p-4 shadow-2xl shadow-black/5">
              <Image
                src={program.image}
                alt={program.title}
                width={800}
                height={800}
                priority
                className="w-full rounded-[28px]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="space-y-5">
              <h2 className={clsx("font-display text-2xl font-600", c.text)}>
                ¿En qué consiste?
              </h2>
              {program.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}

              {program.cert && (
                <div className={clsx("mt-6 flex gap-4 rounded-3xl p-6", c.bgSoft)}>
                  <span className="text-3xl" aria-hidden>
                    🏅
                  </span>
                  <div>
                    <p className={clsx("font-display font-600", c.text)}>
                      Certificación especializada
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                      {program.cert}
                    </p>
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[32px] bg-white p-7 shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03]">
                <h3 className="font-display text-xl font-600 text-ink">
                  Cómo puede ayudar
                </h3>
                <ul className="mt-5 space-y-3">
                  {program.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className={clsx("mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white", c.bgSolid)}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-[15px] font-600 text-ink-soft">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-teal-100 pt-6">
                  <p className="text-sm text-ink-soft">
                    ¿Tienes dudas sobre si esta terapia es para tu hijo?
                  </p>
                  <Button href="/contacto" variant="primary" className="mt-3 w-full">
                    Solicita orientación
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="pb-4">
        <Container>
          <h2 className="text-center font-display text-2xl font-600 text-ink">
            Otros programas que pueden interesarte
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((p) => {
              const oc = colorMap[p.color];
              return (
                <Link
                  key={p.slug}
                  href={`/programas/${p.slug}`}
                  className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-md shadow-teal-900/5 ring-1 ring-black/[0.03] transition-transform hover:-translate-y-1"
                >
                  <span className={clsx("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl", oc.bgSoft)}>
                    {p.emoji}
                  </span>
                  <span className={clsx("font-display font-600", oc.text)}>
                    {p.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
