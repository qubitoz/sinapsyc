import Link from "next/link";
import Image from "next/image";
import { nav, programs, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-cream">
      {/* wavy top */}
      <div className="absolute inset-x-0 -top-px text-cream" aria-hidden>
        <svg viewBox="0 0 1440 60" className="h-[40px] w-full" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-10 pt-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-cream/95 px-3 py-2">
            <Image
              src="/img/logo-sinapsyc.png"
              alt="Sinapsyc"
              width={160}
              height={100}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {site.description}
          </p>
          <p className="mt-4 font-display text-lg text-sun-300">
            «{site.slogan}»
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-teal-200">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-bubble-300">Programas</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {programs.slice(0, 7).map((p) => (
              <li key={p.slug}>
                <Link href={`/programas/${p.slug}`} className="hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/programas" className="font-700 text-sun-300 hover:text-white">
                Ver todos →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-sun-300">Contacto</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/75">
            <p>
              {site.address.street}
              <br />
              {site.address.colony}
              <br />
              {site.address.city} · {site.address.zip}
            </p>
            <p className="pt-2">
              {site.hours.map((h) => (
                <span key={h.d} className="block">
                  <span className="text-cream/90">{h.d}:</span> {h.h}
                </span>
              ))}
            </p>
          </address>
          <a
            href={waLink("¡Hola Sinapsyc! Me gustaría agendar una cita.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-display font-600 text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name} · Neurodesarrollo Infantil.
            Todos los derechos reservados.
          </p>
          <p>Hecho con cariño para las infancias 💛</p>
        </div>
      </div>
    </footer>
  );
}
