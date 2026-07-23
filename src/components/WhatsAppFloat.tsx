"use client";

import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(
        "¡Hola Sinapsyc! Me gustaría más información y agendar una primera cita de valoración."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${site.phoneDisplay}`}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-[#25D366]/40 transition-all hover:pr-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-display font-600 transition-all duration-300 group-hover:max-w-[180px] sm:inline">
        ¡Escríbenos!
      </span>
    </a>
  );
}
