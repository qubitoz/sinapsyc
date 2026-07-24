"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { foto, type Photo } from "@/lib/site";
import { clsx } from "@/lib/clsx";

export default function PhotoGallery({
  photos,
  variant = "masonry",
}: {
  photos: Photo[];
  variant?: "masonry" | "grid";
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((i) =>
        i === null ? i : (i + dir + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <>
      <div
        className={clsx(
          variant === "masonry"
            ? "columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4"
            : "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {photos.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setOpen(i)}
            className={clsx(
              "group relative block w-full overflow-hidden rounded-3xl bg-teal-100 shadow-md shadow-teal-900/5 ring-1 ring-black/[0.03] transition-transform hover:-translate-y-1",
              variant === "masonry" ? "break-inside-avoid" : "aspect-square"
            )}
            aria-label={`Ampliar foto: ${p.alt}`}
          >
            <Image
              src={foto(p.name)}
              alt={p.alt}
              width={800}
              height={800}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={clsx(
                "w-full transition-transform duration-500 group-hover:scale-105",
                variant === "grid" && "h-full object-cover"
              )}
            />
            <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <span className="p-3 text-left text-xs font-600 text-white">{p.alt}</span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25"
            aria-label="Cerrar"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25 sm:left-6"
            aria-label="Anterior"
          >
            ‹
          </button>
          <figure className="max-h-[86vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={foto(photos[open].name)}
              alt={photos[open].alt}
              width={1400}
              height={1400}
              className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-cream/90">
              {photos[open].alt} · {open + 1}/{photos.length}
            </figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25 sm:right-6"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
