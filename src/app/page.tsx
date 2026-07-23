import Image from "next/image";
import Link from "next/link";
import { Button, Container, Pill, SectionHeading, WhatsAppIcon } from "@/components/ui";
import Reveal from "@/components/Reveal";
import ProgramCard from "@/components/ProgramCard";
import Testimonials from "@/components/Testimonials";
import BlogCard from "@/components/BlogCard";
import CtaBand from "@/components/CtaBand";
import { approach, programs, waLink } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-bubble-100 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sky-brand-100 blur-3xl" aria-hidden />

        <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <Reveal>
              <Pill className="bg-sun-100 text-sun-500">
                🧠 Centro de Neurodesarrollo Infantil · Guadalajara
              </Pill>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-700 leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                Abrazamos infancias,{" "}
                <span className="relative whitespace-nowrap text-teal-500">
                  iluminamos
                  <svg className="absolute -bottom-2 left-0 w-full text-sun-400" viewBox="0 0 200 12" fill="none" aria-hidden>
                    <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                caminos
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Imagina a tu pequeño floreciendo, ganando confianza y descubriendo
                todo su potencial. En Sinapsyc acompañamos a las familias y
                potenciamos el desarrollo y bienestar de cada niño de{" "}
                <strong className="text-teal-600">0 a 8 años</strong>, con un
                equipo de profesionales especializados.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(
                    "¡Hola Sinapsyc! Me gustaría agendar una primera cita de valoración."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 font-display text-lg font-600 text-white shadow-lg shadow-teal-500/30 transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Agenda tu primera cita
                </a>
                <Button href="/programas" variant="outline" size="lg">
                  Ver nuestros programas
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-600 text-ink-soft">
                <span className="flex items-center gap-2">
                  <Check /> Atención personalizada
                </span>
                <span className="flex items-center gap-2">
                  <Check /> Equipo certificado
                </span>
                <span className="flex items-center gap-2">
                  <Check /> Espacio cálido y seguro
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero art */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute inset-0 -rotate-3 rounded-[48px] bg-gradient-to-br from-teal-200 to-sky-brand-100" aria-hidden />
              <div className="relative overflow-hidden rounded-[48px] bg-white p-4 shadow-2xl shadow-teal-500/10">
                <Image
                  src="/img/hero-scene.jpg"
                  alt="Amigos animales de Sinapsyc jugando"
                  width={1280}
                  height={720}
                  priority
                  className="w-full rounded-[36px]"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bubble-100 text-2xl">💛</span>
                <div>
                  <p className="font-display text-lg font-700 leading-none text-ink">+100</p>
                  <p className="text-xs text-ink-soft">familias acompañadas</p>
                </div>
              </div>
              <div className="absolute -right-4 top-6 animate-bob rounded-2xl bg-white px-4 py-2 text-sm font-700 text-teal-600 shadow-lg">
                0–8 años ✨
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- MISSION ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[40px] bg-white px-6 py-12 shadow-xl shadow-teal-900/5 sm:px-14">
            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
              <Image
                src="/img/mascot-fox.jpg"
                alt=""
                aria-hidden
                width={200}
                height={200}
                className="mx-auto h-36 w-36 animate-float rounded-full object-cover md:h-44 md:w-44"
              />
              <div className="text-center md:text-left">
                <SectionHeading
                  align="left"
                  eyebrow="Quiénes somos"
                  eyebrowClass="bg-teal-100 text-teal-600"
                  title="La familia es parte esencial del proceso"
                />
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                  Somos un centro de neurodesarrollo infantil formado por
                  profesionales especializados que trabajan con un mismo
                  propósito. Caminamos de la mano con padres, escuela y otros
                  profesionales para construir juntos un entorno que impulse las
                  habilidades y fortalezas de cada niño.
                </p>
                <div className="mt-6">
                  <Button href="/nosotros" variant="primary">
                    Conoce más sobre nosotros
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="py-6">
        <Container>
          <SectionHeading
            eyebrow="Por qué elegirnos"
            eyebrowClass="bg-bubble-100 text-bubble-600"
            title="Un acompañamiento cálido, cercano y profesional"
            subtitle="Todo lo que hacemos gira alrededor de una idea: que cada niño y cada familia se sientan comprendidos, seguros y acompañados."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🤝", title: "Atención personalizada", text: "Cada niño es único. Diseñamos un plan a la medida de sus fortalezas y necesidades.", color: "teal" as const },
              { icon: "🎓", title: "Equipo certificado", text: "Formación avalada por estándares internacionales (Ayres SI®, SOS®).", color: "sky" as const },
              { icon: "🧩", title: "Enfoque integral", text: "Trabajamos de forma interdisciplinaria y coordinada entre áreas.", color: "sun" as const },
              { icon: "🫂", title: "Espacio cálido y seguro", text: "Un lugar donde jugar es aprender y cada logro se celebra.", color: "bubble" as const },
            ].map((f, i) => {
              const c = colorMap[f.color];
              return (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="h-full rounded-[28px] bg-white p-6 shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03] transition-transform hover:-translate-y-1">
                    <span className={clsx("flex h-14 w-14 items-center justify-center rounded-2xl text-3xl", c.bgSoft)}>
                      {f.icon}
                    </span>
                    <h3 className={clsx("mt-4 font-display text-lg font-600", c.text)}>{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- PROGRAMS ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nuestros programas"
            eyebrowClass="bg-sky-brand-100 text-sky-brand-600"
            title="Intervenciones pensadas para edades tempranas"
            subtitle="Todas nuestras intervenciones están dirigidas a niños de 0 a 8 años, a través del juego y actividades adaptadas a cada etapa."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/programas" variant="primary" size="lg">
              Ver los {programs.length} programas
            </Button>
          </div>
        </Container>
      </section>

      {/* ---------------- APPROACH ---------------- */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nuestro enfoque"
            eyebrowClass="bg-teal-100 text-teal-600"
            title="Un camino claro, paso a paso"
            subtitle="Desde la primera cita hasta el seguimiento continuo, te acompañamos en cada etapa del proceso."
          />
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-8 hidden h-1 rounded-full bg-gradient-to-r from-teal-300 via-sun-300 to-bubble-300 lg:block" aria-hidden />
            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {approach.map((s, i) => {
                const c = colorMap[s.color];
                return (
                  <Reveal as="li" key={s.step} delay={i * 90} className="relative text-center">
                    <div className={clsx("relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-700 text-white shadow-lg", c.bgSolid)}>
                      {s.step}
                    </div>
                    <h3 className={clsx("mt-4 font-display text-lg font-600", c.text)}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
          <div className="mt-12 text-center">
            <Button href="/enfoque" variant="outline">
              Descubre cómo trabajamos
            </Button>
          </div>
        </Container>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Familias que confían en nosotros"
            eyebrowClass="bg-sun-100 text-sun-500"
            title="Historias que nos llenan el corazón"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </Container>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CtaBand />

      {/* ---------------- BLOG ---------------- */}
      {posts.length > 0 && (
        <section className="py-6 pb-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                align="left"
                eyebrow="Blog"
                eyebrowClass="bg-bubble-100 text-bubble-600"
                title="Recursos para acompañarte"
              />
              <Link href="/blog" className="font-display font-600 text-teal-600 hover:text-teal-700">
                Ver todo el blog →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function Check() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-white" aria-hidden>
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}
