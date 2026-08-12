"use client";

import { useState } from "react";
import Link from "next/link";
import { programs, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const tutor = (data.get("tutor") as string)?.trim();
    const edad = (data.get("edad") as string)?.trim();
    const tel = (data.get("tel") as string)?.trim();
    const preocupa = (data.get("preocupa") as string)?.trim();
    const servicio = (data.get("servicio") as string)?.trim();

    const msg =
      `¡Hola Sinapsyc! 🌟 Quiero agendar una primera cita de valoración.\n\n` +
      `👤 Tutor(a): ${tutor || "-"}\n` +
      `🧒 Edad del niño(a): ${edad || "-"}\n` +
      `📞 Contacto: ${tel || "-"}\n` +
      `💬 Lo que me preocupa: ${preocupa || "-"}\n` +
      (servicio && servicio !== "" ? `✨ Servicio de interés: ${servicio}\n` : "");

    setSent(true);
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-2xl border-2 border-teal-100 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none transition focus:border-teal-400 focus:bg-white";
  const label = "mb-1.5 block font-display text-sm font-600 text-ink";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={label} htmlFor="tutor">
          Nombre del tutor(a) <span className="text-bubble-500">*</span>
        </label>
        <input id="tutor" name="tutor" required className={field} placeholder="Tu nombre completo" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="edad">
            Edad del niño(a) <span className="text-bubble-500">*</span>
          </label>
          <input id="edad" name="edad" required className={field} placeholder="Ej. 3 años" />
        </div>
        <div>
          <label className={label} htmlFor="tel">
            Número de contacto <span className="text-bubble-500">*</span>
          </label>
          <input
            id="tel"
            name="tel"
            type="tel"
            required
            className={field}
            placeholder="10 dígitos"
          />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="preocupa">
          ¿Qué te preocupa? <span className="text-bubble-500">*</span>
        </label>
        <textarea
          id="preocupa"
          name="preocupa"
          required
          rows={3}
          className={field}
          placeholder="Cuéntanos brevemente lo que has observado en tu pequeño(a)…"
        />
      </div>

      <div>
        <label className={label} htmlFor="servicio">
          Servicio de interés <span className="font-400 text-ink-soft">(opcional)</span>
        </label>
        <select id="servicio" name="servicio" className={field} defaultValue="">
          <option value="">Aún no lo sé / me gustaría orientación</option>
          {programs.map((p) => (
            <option key={p.slug} value={p.title}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 rounded-2xl bg-teal-50 p-4 text-sm leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          name="consent"
          className="mt-0.5 h-5 w-5 shrink-0 accent-teal-500"
        />
        <span>
          He leído y acepto el{" "}
          <Link href="/aviso-de-privacidad" className="font-700 text-teal-600 underline">
            Aviso de Privacidad
          </Link>
          . <span className="text-bubble-500">*</span>
        </span>
      </label>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-display text-lg font-600 text-ink shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Enviar por WhatsApp
      </button>

      <p className="text-center text-sm text-ink-soft">
        {sent
          ? "¡Gracias! Se abrió WhatsApp con tu mensaje listo para enviar. 💛"
          : `Tu mensaje se enviará por WhatsApp al ${site.phoneDisplay}. Nuestro equipo se pondrá en contacto contigo para orientarte.`}
      </p>
    </form>
  );
}
