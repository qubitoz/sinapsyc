"use client";

import { useState } from "react";
import Link from "next/link";
import { programs, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

const field =
  "w-full rounded-2xl border-2 border-teal-100 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none transition focus:border-teal-400 focus:bg-white";
const label = "mb-1.5 block font-display text-sm font-600 text-ink";
const opt = <span className="font-400 text-ink-soft">(opcional)</span>;

export default function AdmissionForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = (k: string) => ((data.get(k) as string) ?? "").trim();

    const maybe = (emoji: string, tag: string, key: string) =>
      v(key) ? `${emoji} ${tag}: ${v(key)}` : null;

    const lines: (string | null)[] = [
      "¡Hola Sinapsyc! 📋 Quiero iniciar el *proceso de admisión*.",
      "",
      "— *Sobre mi pequeño(a)* —",
      `🧒 Nombre: ${v("nino") || "-"}`,
      `🎂 Edad / fecha de nacimiento: ${v("edad") || "-"}`,
      maybe("🏫", "Escuela", "escuela"),
      maybe("🩺", "Diagnóstico o valoración previa", "diagnostico"),
      maybe("🧩", "Terapias previas", "terapias"),
      "",
      "— *Sobre mí* —",
      `👤 Tutor(a): ${v("tutor") || "-"} (${v("parentesco") || "tutor"})`,
      `📞 Teléfono: ${v("tel") || "-"}`,
      "",
      "— *Lo que nos trae aquí* —",
      `💬 Principal preocupación: ${v("preocupa") || "-"}`,
      maybe("✨", "Servicio de interés", "servicio"),
      maybe("🕘", "Horario preferido", "horario"),
      maybe("📣", "Nos conoció por", "conociste"),
      "",
      "✅ Acepto el Aviso de Privacidad de Sinapsyc.",
    ];

    const msg = lines.filter((l): l is string => l !== null).join("\n");
    setSent(true);
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Sobre el niño */}
      <fieldset className="space-y-4">
        <legend className="mb-2 flex items-center gap-2 font-display text-lg font-600 text-teal-600">
          🧒 Sobre tu pequeño(a)
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="nino">
              Nombre del niño(a) <span className="text-bubble-500">*</span>
            </label>
            <input id="nino" name="nino" required className={field} placeholder="Su nombre" />
          </div>
          <div>
            <label className={label} htmlFor="edad">
              Edad o fecha de nacimiento <span className="text-bubble-500">*</span>
            </label>
            <input id="edad" name="edad" required className={field} placeholder="Ej. 3 años / 12-05-2023" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="escuela">
              Escuela o kínder {opt}
            </label>
            <input id="escuela" name="escuela" className={field} placeholder="Nombre de la escuela" />
          </div>
          <div>
            <label className={label} htmlFor="diagnostico">
              Diagnóstico o valoración previa {opt}
            </label>
            <input id="diagnostico" name="diagnostico" className={field} placeholder="Ej. TEA, TDAH, ninguno…" />
          </div>
        </div>
        <div>
          <label className={label} htmlFor="terapias">
            ¿Ha recibido terapias antes? {opt}
          </label>
          <input id="terapias" name="terapias" className={field} placeholder="Ej. lenguaje 6 meses, ninguna…" />
        </div>
      </fieldset>

      {/* Sobre el tutor */}
      <fieldset className="space-y-4">
        <legend className="mb-2 flex items-center gap-2 font-display text-lg font-600 text-sky-brand-600">
          👤 Sobre ti
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label className={label} htmlFor="tutor">
              Nombre del tutor(a) <span className="text-bubble-500">*</span>
            </label>
            <input id="tutor" name="tutor" required className={field} placeholder="Tu nombre completo" />
          </div>
          <div>
            <label className={label} htmlFor="parentesco">
              Parentesco
            </label>
            <select id="parentesco" name="parentesco" className={field} defaultValue="Mamá">
              <option>Mamá</option>
              <option>Papá</option>
              <option>Abuelo(a)</option>
              <option>Tutor(a) legal</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
        <div>
          <label className={label} htmlFor="tel">
            Teléfono de contacto <span className="text-bubble-500">*</span>
          </label>
          <input id="tel" name="tel" type="tel" required className={field} placeholder="10 dígitos" />
        </div>
      </fieldset>

      {/* Motivo */}
      <fieldset className="space-y-4">
        <legend className="mb-2 flex items-center gap-2 font-display text-lg font-600 text-bubble-600">
          💛 Lo que los trae aquí
        </legend>
        <div>
          <label className={label} htmlFor="preocupa">
            ¿Qué te preocupa o qué te gustaría trabajar?{" "}
            <span className="text-bubble-500">*</span>
          </label>
          <textarea
            id="preocupa"
            name="preocupa"
            required
            rows={4}
            className={field}
            placeholder="Cuéntanos con confianza lo que has observado…"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={label} htmlFor="servicio">
              Servicio de interés {opt}
            </label>
            <select id="servicio" name="servicio" className={field} defaultValue="">
              <option value="">Me gustaría orientación</option>
              {programs.map((p) => (
                <option key={p.slug} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="horario">
              Horario preferido {opt}
            </label>
            <select id="horario" name="horario" className={field} defaultValue="">
              <option value="">Indistinto</option>
              <option>Mañana (9:00–13:00)</option>
              <option>Tarde (13:00–19:00)</option>
              <option>Sábado (9:00–12:00)</option>
            </select>
          </div>
          <div>
            <label className={label} htmlFor="conociste">
              ¿Cómo nos conociste? {opt}
            </label>
            <select id="conociste" name="conociste" className={field} defaultValue="">
              <option value="">Prefiero no decir</option>
              <option>Google</option>
              <option>Recomendación</option>
              <option>Redes sociales</option>
              <option>Mi pediatra / especialista</option>
              <option>La escuela de mi hijo(a)</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Consentimiento */}
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
          </Link>{" "}
          y autorizo el tratamiento de los datos aquí proporcionados, incluida
          la información sobre el desarrollo de mi hijo(a), para fines de
          orientación y atención terapéutica.{" "}
          <span className="text-bubble-500">*</span>
        </span>
      </label>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-display text-lg font-600 text-ink shadow-lg shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Enviar solicitud por WhatsApp
      </button>

      <p className="text-center text-sm text-ink-soft">
        {sent
          ? "¡Gracias! Se abrió WhatsApp con tu solicitud lista para enviar. 💛"
          : `Tu solicitud se enviará por WhatsApp al ${site.phoneDisplay}. Nuestro equipo te contactará para confirmar tu cita de valoración.`}
      </p>
    </form>
  );
}
