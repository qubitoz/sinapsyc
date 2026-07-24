"use client";

import { useEffect, useState, useCallback } from "react";
import { googleReviews, googleRating, site } from "@/lib/site";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={clsx("h-4 w-4", i <= Math.round(value) ? "text-sun-400" : "text-teal-100")}
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = googleReviews.length;

  const go = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <div>
      {/* Google rating header */}
      <a
        href={site.googleProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mb-8 flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3 shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.04] transition-transform hover:-translate-y-0.5"
      >
        <GoogleG className="h-7 w-7" />
        <span className="flex items-center gap-2">
          <span className="font-display text-2xl font-700 text-ink">
            {googleRating.value.toFixed(1)}
          </span>
          <Stars value={googleRating.value} />
        </span>
        <span className="hidden text-sm font-600 text-ink-soft sm:inline">
          {googleRating.count} reseñas en Google
        </span>
      </a>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {googleReviews.map((r, i) => {
              const c = colorMap[r.color];
              return (
                <figure key={i} className="w-full shrink-0 px-1" aria-hidden={i !== index}>
                  <div className="mx-auto flex min-h-[300px] max-w-2xl flex-col rounded-[32px] bg-white p-8 text-center shadow-xl shadow-teal-900/5 sm:p-10">
                    <div className="mb-4 flex items-center justify-center gap-3">
                      <Stars value={5} />
                      <GoogleG className="h-5 w-5" />
                    </div>
                    <blockquote className="flex-1 text-[17px] leading-relaxed text-ink sm:text-lg">
                      «{r.text}»
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-center gap-3">
                      <span className={clsx("flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-700 text-white", c.bgSolid)}>
                        {r.author.charAt(0)}
                      </span>
                      <span className="text-left">
                        <span className="block font-display font-600 text-ink">
                          {r.author}
                        </span>
                        <span className="text-xs text-ink-soft">
                          {r.localGuide ? "Local Guide · " : ""}Reseña de Google
                        </span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <button
            onClick={() => go(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-soft shadow-md transition hover:text-teal-600"
            aria-label="Reseña anterior"
          >
            ‹
          </button>
          <div className="flex flex-wrap justify-center gap-2">
            {googleReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ir a la reseña ${i + 1}`}
                className={clsx(
                  "h-2.5 rounded-full transition-all",
                  i === index ? "w-7 bg-teal-500" : "w-2.5 bg-teal-200 hover:bg-teal-300"
                )}
              />
            ))}
          </div>
          <button
            onClick={() => go(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-soft shadow-md transition hover:text-teal-600"
            aria-label="Siguiente reseña"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
