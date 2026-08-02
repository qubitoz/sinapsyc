import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso del Sitio",
  description:
    "Términos y condiciones de uso del sitio web de Sinapsyc, centro de neurodesarrollo infantil en Guadalajara, Jalisco, México.",
  alternates: { canonical: "/terminos" },
};

const UPDATED = "23 de julio de 2026";

export default function TerminosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Términos y Condiciones", path: "/terminos" },
        ])}
      />
      <PageHero
        crumbs={[{ name: "Inicio", path: "/" }, { name: "Términos y Condiciones", path: "/terminos" }]}
        eyebrow="Aspectos legales"
        emoji="📄"
        title="Términos y Condiciones"
        subtitle="Las reglas claras también son una forma de cuidar. Estos son los términos de uso de nuestro sitio web."
        tint="sky"
      />

      <section className="py-14 sm:py-16">
        <Container>
          <article className="prose-sinapsyc mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5 sm:p-12">
            <p className="text-sm font-700 text-sky-brand-600">
              Última actualización: {UPDATED}
            </p>

            <h2>1. Aceptación</h2>
            <p>
              Al acceder y utilizar el sitio web de{" "}
              <strong>Sinapsyc — Neurodesarrollo Infantil</strong> aceptas los
              presentes términos y condiciones. Si no estás de acuerdo con
              ellos, te pedimos no utilizar el sitio.
            </p>

            <h2>2. Carácter informativo del contenido</h2>
            <p>
              El contenido de este sitio —incluyendo el blog, las descripciones
              de programas y las preguntas frecuentes— tiene fines{" "}
              <strong>exclusivamente informativos y de orientación general</strong>.
              No constituye un diagnóstico, tratamiento ni consejo médico o
              terapéutico. Cada niño es único: ante cualquier inquietud sobre el
              desarrollo de tu hijo, busca una valoración profesional
              personalizada.
            </p>

            <h2>3. Citas y comunicación</h2>
            <p>
              Los formularios del sitio generan mensajes que se envían por
              WhatsApp a nuestro equipo. El envío de un formulario{" "}
              <strong>no constituye por sí mismo una cita confirmada</strong>;
              nuestro equipo te contactará para confirmar disponibilidad,
              horarios y condiciones del servicio.
            </p>

            <h2>4. Propiedad intelectual</h2>
            <p>
              El nombre Sinapsyc, el logotipo, los textos, las ilustraciones,
              fotografías y demás contenidos de este sitio están protegidos por
              la normativa de propiedad intelectual y son propiedad de Sinapsyc
              o se utilizan con autorización. No está permitida su reproducción
              o uso comercial sin consentimiento previo y por escrito.
            </p>

            <h2>5. Imágenes de menores</h2>
            <p>
              Las imágenes de niñas y niños publicadas en este sitio cuentan con
              autorización de sus padres o tutores. Queda estrictamente
              prohibida su descarga, reproducción o uso por terceros.
            </p>

            <h2>6. Enlaces a terceros</h2>
            <p>
              Este sitio enlaza a servicios de terceros (WhatsApp, Google Maps,
              redes sociales). Sinapsyc no es responsable del contenido ni de
              las políticas de dichos servicios.
            </p>

            <h2>7. Limitación de responsabilidad</h2>
            <p>
              Procuramos que la información del sitio sea correcta y esté
              actualizada; sin embargo, no garantizamos la ausencia de errores u
              omisiones, ni la disponibilidad ininterrumpida del sitio.
            </p>

            <h2>8. Privacidad</h2>
            <p>
              El tratamiento de tus datos personales se rige por nuestro{" "}
              <a href="/aviso-de-privacidad">Aviso de Privacidad</a>.
            </p>

            <h2>9. Legislación aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de los Estados Unidos
              Mexicanos. Para cualquier controversia, las partes se someten a la
              jurisdicción de los tribunales competentes de Guadalajara,
              Jalisco.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Para cualquier duda sobre estos términos, escríbenos a{" "}
              <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> o
              por WhatsApp al {site.phoneDisplay}.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
