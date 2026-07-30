"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { GlossaryTerm } from "@/lib/glossary";
import { clsx } from "@/lib/clsx";

type Pos = { top: number; left: number; width: number; arrow: number; below: boolean };

const GAP = 10;
const MARGIN = 16;

export default function Termino({
  term,
  children,
}: {
  term: GlossaryTerm;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<Pos | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Posiciona el popover en coordenadas fijas para que nunca lo recorte
  // un contenedor con overflow ni se salga de la pantalla.
  useLayoutEffect(() => {
    if (!open) return;

    const place = () => {
      const btn = btnRef.current;
      const pop = popRef.current;
      if (!btn || !pop) return;

      const r = btn.getBoundingClientRect();
      const vw = document.documentElement.clientWidth;
      const vh = document.documentElement.clientHeight;

      const width = Math.min(360, vw - MARGIN * 2);
      const height = pop.offsetHeight;

      const below = r.top < height + GAP + MARGIN && r.bottom + height + GAP < vh;
      const top = below ? r.bottom + GAP : r.top - height - GAP;

      const anchor = r.left + r.width / 2;
      const left = Math.min(Math.max(anchor - width / 2, MARGIN), vw - width - MARGIN);

      setPos({ top, left, width, arrow: anchor - left, below });
    };

    place();
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!btnRef.current?.contains(t) && !popRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        className={clsx(
          "cursor-help rounded-sm font-600 text-ink underline decoration-teal-400 decoration-dotted decoration-2 underline-offset-4",
          "transition-colors hover:text-teal-600 hover:decoration-teal-500",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
          open && "text-teal-600 decoration-teal-500"
        )}
      >
        {children}
        <span
          aria-hidden
          className="ml-1 inline-flex h-4 w-4 translate-y-[-1px] items-center justify-center rounded-full bg-teal-100 align-middle text-[10px] font-700 leading-none text-teal-600"
        >
          i
        </span>
        <span className="sr-only"> — ver explicación</span>
      </button>

      {/* El popover va en un portal: dentro del <p> sería HTML inválido
          y quedaría a merced de contenedores con overflow. */}
      {open &&
        createPortal(
        <div
          ref={popRef}
          id={id}
          role="dialog"
          aria-label={term.title}
          style={
            pos
              ? { top: pos.top, left: pos.left, width: pos.width }
              : { top: -9999, left: -9999, width: 360 }
          }
          className="fixed z-[90] rounded-2xl bg-white p-5 text-left shadow-2xl shadow-teal-900/20 ring-1 ring-teal-100"
        >
          {pos && (
            <span
              aria-hidden
              style={{ left: pos.arrow }}
              className={clsx(
                "absolute h-3 w-3 -translate-x-1/2 rotate-45 bg-white",
                pos.below
                  ? "-top-1.5 border-l border-t border-teal-100"
                  : "-bottom-1.5 border-b border-r border-teal-100"
              )}
            />
          )}
          <p className="font-display text-base font-600 text-teal-600">{term.title}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{term.body}</p>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              btnRef.current?.focus();
            }}
            className="mt-3 font-display text-sm font-600 text-ink-soft hover:text-teal-600"
          >
            Cerrar
          </button>
        </div>,
          document.body
        )}
    </>
  );
}
