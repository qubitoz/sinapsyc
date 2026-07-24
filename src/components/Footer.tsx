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
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Sinapsyc"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream/80 transition hover:bg-sky-brand-500 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Sinapsyc"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream/80 transition hover:bg-bubble-500 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 01-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.35-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52.01-4.76.07-1.08.05-1.67.23-2.06.38-.52.2-.89.44-1.28.83-.39.39-.63.76-.83 1.28-.15.39-.33.98-.38 2.06-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.08.23 1.67.38 2.06.2.52.44.89.83 1.28.39.39.76.63 1.28.83.39.15.98.33 2.06.38 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.08-.05 1.67-.23 2.06-.38.52-.2.89-.44 1.28-.83.39-.39.63-.76.83-1.28.15-.39.33-.98.38-2.06.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.08-.23-1.67-.38-2.06-.2-.52-.44-.89-.83-1.28a3.44 3.44 0 00-1.28-.83c-.39-.15-.98-.33-2.06-.38-1.24-.06-1.61-.07-4.76-.07zm0 3.06a4.94 4.94 0 110 9.88 4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.23-2.02a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z" />
              </svg>
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de Sinapsyc"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream/80 transition hover:bg-[#FF0000] hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
              </svg>
            </a>
          </div>
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
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/aviso-de-privacidad" className="hover:text-white">
              Aviso de Privacidad
            </Link>
            <span aria-hidden>·</span>
            <Link href="/terminos" className="hover:text-white">
              Términos y Condiciones
            </Link>
            <span aria-hidden>·</span>
            <p>Hecho con cariño para las infancias 💛</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
