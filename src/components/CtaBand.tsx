import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { Button, Container, WhatsAppIcon } from "./ui";
import Reveal from "./Reveal";

export default function CtaBand({
  title = "Agenda tu primera cita de valoración",
  text = "Da el primer paso hoy. Recibe un beneficio especial al iniciar tu proceso con nosotros y descubre, de la mano de nuestro equipo, todo el potencial que tu pequeño lleva dentro.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-teal-400 via-teal-500 to-sky-brand-500 px-6 py-14 text-center shadow-2xl shadow-teal-500/30 sm:px-14">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sun-300/30 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-bubble-300/30 blur-2xl" aria-hidden />
          <Image
            src="/img/mascot-owl.jpg"
            alt=""
            width={120}
            height={120}
            aria-hidden
            className="absolute -bottom-4 left-6 hidden h-28 w-28 animate-bob rounded-full object-cover ring-4 ring-white/40 md:block"
          />
          <Image
            src="/img/mascot-bunny.jpg"
            alt=""
            width={120}
            height={120}
            aria-hidden
            className="absolute -top-2 right-8 hidden h-24 w-24 animate-float rounded-full object-cover ring-4 ring-white/40 md:block"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-sm font-700 text-white backdrop-blur">
              🎁 Beneficio especial de bienvenida
            </span>
            <h2 className="mt-5 font-display text-3xl font-700 leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
              {text}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink(
                  "¡Hola Sinapsyc! Quiero agendar mi primera cita de valoración y conocer el beneficio de bienvenida."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-display text-lg font-600 text-teal-600 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Escríbenos por WhatsApp
              </a>
              <Button href="/contacto" variant="outline" size="lg" className="border-white/70 text-white hover:bg-white/15">
                Llenar formulario
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
