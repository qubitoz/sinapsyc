import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Agenda tu cita",
  description:
    "Agenda tu primera cita de valoración en Sinapsyc y recibe un beneficio especial al iniciar tu proceso. Estamos en Guadalajara, Jalisco.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda tu cita"
        emoji="📅"
        title="Da el primer paso hoy"
        subtitle="Agenda tu primera cita de valoración y recibe un beneficio especial al iniciar tu proceso con nosotros. Nuestro equipo se pondrá en contacto contigo para orientarte."
        tint="sun"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            {/* Form */}
            <Reveal>
              <div className="rounded-[36px] bg-white p-7 shadow-xl shadow-teal-900/5 sm:p-9">
                <h2 className="font-display text-2xl font-600 text-ink">
                  Cuéntanos sobre tu pequeño
                </h2>
                <p className="mt-2 text-[15px] text-ink-soft">
                  Completa el formulario y lo enviaremos por WhatsApp, nuestro medio
                  de comunicación principal. Así podremos responderte más rápido. 💛
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* Aside */}
            <Reveal delay={120} className="space-y-6">
              <div className="rounded-[32px] bg-teal-500 p-8 text-white shadow-xl shadow-teal-500/20">
                <span className="text-3xl" aria-hidden>🎁</span>
                <h3 className="mt-3 font-display text-xl font-600">
                  Beneficio de bienvenida
                </h3>
                <p className="mt-2 text-white/90">
                  Recibe un beneficio especial al iniciar tu proceso con nosotros.
                  Pregúntanos por él al agendar tu primera cita.
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5">
                <h3 className="font-display text-xl font-600 text-ink">
                  Comunícate directamente
                </h3>
                <a
                  href={waLink(
                    "¡Hola Sinapsyc! Me gustaría agendar una primera cita de valoración."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-3 rounded-2xl bg-[#25D366]/10 p-4 transition hover:bg-[#25D366]/15"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display font-600 text-ink">WhatsApp</span>
                    <span className="text-sm text-ink-soft">{site.phoneDisplay}</span>
                  </span>
                </a>

                <div className="mt-4 rounded-2xl bg-cream p-4">
                  <p className="font-display font-600 text-ink">Horario de atención</p>
                  {site.hours.map((h) => (
                    <p key={h.d} className="mt-1 text-sm text-ink-soft">
                      <span className="font-600 text-ink">{h.d}:</span> {h.h}
                    </p>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl bg-cream p-4">
                  <p className="font-display font-600 text-ink">Dónde estamos</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {site.address.street}, {site.address.colony},<br />
                    {site.address.city}, {site.address.zip}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
