"use client";

import { useState } from "react";
import { Faq } from "@/lib/site";
import { clsx } from "@/lib/clsx";

export default function FaqAccordion({
  items,
  defaultOpen = -1,
}: {
  items: Faq[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={clsx(
              "overflow-hidden rounded-3xl bg-white shadow-md shadow-teal-900/5 ring-1 transition-colors",
              isOpen ? "ring-teal-200" : "ring-black/[0.03]"
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-600 text-ink">
                {item.q}
              </span>
              <span
                className={clsx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-700 transition-all",
                  isOpen
                    ? "rotate-45 bg-teal-500 text-white"
                    : "bg-teal-100 text-teal-600"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 px-6 pb-6 text-[15px] leading-relaxed text-ink-soft">
                  {item.a.map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
