"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/lib/site";
import { clsx } from "@/lib/clsx";
import { WhatsAppIcon } from "./ui";

// El header omite Inicio (accesible desde el logo) y Preguntas
// (excerpt en el home + enlace directo en el footer).
const headerNav = nav.filter(
  (n) => n.href !== "/" && n.href !== "/preguntas-frecuentes"
);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/90 shadow-md shadow-teal-900/5 backdrop-blur-md"
          : "bg-cream/60 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Sinapsyc inicio">
          {/* Logo horizontal (≈5:1): alto contenido para no invadir el menú. */}
          <Image
            src="/img/logo-sinapsyc.png"
            alt="Sinapsyc — Neurodesarrollo Infantil"
            width={1200}
            height={239}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {headerNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "rounded-full px-3.5 py-2 text-[15px] font-700 transition-colors",
                    active
                      ? "bg-teal-100 text-teal-600"
                      : "text-ink-soft hover:bg-teal-50 hover:text-teal-600"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={waLink(
              "¡Hola Sinapsyc! Me gustaría agendar una primera cita de valoración."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-display font-600 text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agenda tu cita
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-teal-600 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={clsx(
                "absolute left-0 h-0.5 w-5 rounded bg-current transition-all",
                open ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "absolute left-0 h-0.5 w-5 rounded bg-current transition-all",
                open ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-teal-100 bg-cream transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[520px]" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {headerNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "block rounded-2xl px-4 py-3 text-lg font-700",
                    active
                      ? "bg-teal-100 text-teal-600"
                      : "text-ink-soft hover:bg-teal-50"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href={waLink(
                "¡Hola Sinapsyc! Me gustaría agendar una primera cita de valoración."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 font-display font-600 text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agenda tu cita por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
