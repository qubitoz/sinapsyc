"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { foto, type Photo } from "@/lib/site";
import { clsx } from "@/lib/clsx";

export default function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = photos.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % n), 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, n]);

  return (
    <div
      className="relative overflow-hidden rounded-[36px] bg-ink shadow-2xl shadow-teal-900/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/8]">
        {photos.map((p, i) => (
          <Image
            key={p.name}
            src={foto(p.name)}
            alt={p.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className={clsx(
              "object-cover transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 sm:p-7">
          <p className="font-display text-lg font-600 text-white drop-shadow sm:text-xl">
            {photos[index].alt}
          </p>
        </div>
      </div>

      {/* Área táctil de 24px alrededor de cada punto (mínimo accesible). */}
      <div className="absolute bottom-2 right-3 flex sm:bottom-4 sm:right-6">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la foto ${i + 1}`}
            className="group flex h-6 items-center justify-center px-1.5"
          >
            <span
              className={clsx(
                "block h-2.5 rounded-full transition-all",
                i === index
                  ? "w-7 bg-white"
                  : "w-2.5 bg-white/50 group-hover:bg-white/80"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
