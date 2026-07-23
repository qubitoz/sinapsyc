"use client";

import { useEffect, useState, useCallback } from "react";
import { testimonials } from "@/lib/site";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
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
          {testimonials.map((t, i) => {
            const c = colorMap[t.color];
            return (
              <figure
                key={i}
                className="w-full shrink-0 px-1"
                aria-hidden={i !== index}
              >
                <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-8 text-center shadow-xl shadow-teal-900/5 sm:p-10">
                  <div className={clsx("mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-3xl", c.bgSoft)}>
                    <span className={c.text}>❝</span>
                  </div>
                  <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className={clsx("font-display text-lg font-600", c.text)}>
                      {t.name}
                    </p>
                    <p className="text-sm text-ink-soft">{t.role}</p>
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
          aria-label="Testimonio anterior"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
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
          aria-label="Siguiente testimonio"
        >
          ›
        </button>
      </div>
    </div>
  );
}
