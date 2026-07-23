import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ubicación",
  description:
    "Encuéntranos en Juan Zubarán #1990, Col. Jardines Alcalde, Guadalajara, Jalisco. Horarios y contacto de Sinapsyc.",
};

export default function UbicacionPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery
  )}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    site.mapsQuery
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Ubicación"
        emoji="📍"
        title="Te esperamos en Guadalajara"
        subtitle="Un espacio cálido y seguro pensado para las infancias. Ven a conocernos."
        tint="sky"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            {/* Info */}
            <Reveal className="space-y-5">
              <div className="rounded-[32px] bg-white p-7 shadow-lg shadow-teal-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-2xl">📍</span>
                <h2 className="mt-4 font-display text-xl font-600 text-ink">Dirección</h2>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  {site.address.street}
                  <br />
                  {site.address.colony}
                  <br />
                  {site.address.city}
                  <br />
                  {site.address.zip}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 font-display font-600 text-white transition-transform hover:-translate-y-0.5"
                >
                  Cómo llegar →
                </a>
              </div>

              <div className="rounded-[32px] bg-white p-7 shadow-lg shadow-teal-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-100 text-2xl">🕘</span>
                <h2 className="mt-4 font-display text-xl font-600 text-ink">Horario de atención</h2>
                <ul className="mt-2 space-y-1.5 text-ink-soft">
                  {site.hours.map((h) => (
                    <li key={h.d} className="flex justify-between gap-4">
                      <span className="font-600 text-ink">{h.d}</span>
                      <span>{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[32px] bg-[#25D366] p-7 text-white shadow-lg shadow-[#25D366]/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-xl font-600">Escríbenos</h2>
                <p className="mt-1 text-white/90">Nuestro medio de comunicación principal.</p>
                <a
                  href={waLink("¡Hola Sinapsyc! Me gustaría más información.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display font-600 text-[#128C4B] transition-transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={120}>
              <div className="h-full min-h-[420px] overflow-hidden rounded-[36px] bg-white p-3 shadow-xl shadow-teal-900/5">
                <iframe
                  title="Ubicación de Sinapsyc"
                  src={mapSrc}
                  className="h-full min-h-[400px] w-full rounded-[26px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
