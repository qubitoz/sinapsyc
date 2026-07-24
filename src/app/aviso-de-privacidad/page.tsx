import type { Metadata } from "next";
import { Container } from "@/components/ui";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Protección de Datos",
  description:
    "Aviso de privacidad de Sinapsyc, centro de neurodesarrollo infantil en Guadalajara. Conoce cómo protegemos los datos personales de tu familia y tus derechos ARCO.",
  alternates: { canonical: "/aviso-de-privacidad" },
  robots: { index: true, follow: true },
};

const UPDATED = "23 de julio de 2026";

export default function AvisoPrivacidadPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Aviso de Privacidad", path: "/aviso-de-privacidad" },
        ])}
      />
      <PageHero
        eyebrow="Aspectos legales"
        emoji="🔒"
        title="Aviso de Privacidad"
        subtitle="Tu confianza es lo más valioso que nos das. Aquí te explicamos, con claridad, cómo cuidamos los datos personales de tu familia."
        tint="teal"
      />

      <section className="py-14 sm:py-16">
        <Container>
          <article className="prose-sinapsyc mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-lg shadow-teal-900/5 sm:p-12">
            <p className="text-sm font-700 text-teal-600">
              Última actualización: {UPDATED}
            </p>

            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>Sinapsyc — Neurodesarrollo Infantil</strong> (en adelante,
              «Sinapsyc»), con domicilio en {site.address.street},{" "}
              {site.address.colony}, {site.address.city}, {site.address.zip},
              México, es responsable del tratamiento de los datos personales que
              nos proporcionas, conforme a la{" "}
              <strong>
                Ley Federal de Protección de Datos Personales en Posesión de los
                Particulares (LFPDPPP)
              </strong>
              , su Reglamento y demás normativa aplicable en México.
            </p>

            <h2>2. Datos personales que recabamos</h2>
            <p>
              A través de nuestros formularios de contacto y admisión, de
              WhatsApp o de manera presencial, podemos recabar:
            </p>
            <ul>
              <li>
                <strong>Del padre, madre o tutor:</strong> nombre, teléfono de
                contacto y, en su caso, correo electrónico.
              </li>
              <li>
                <strong>Del menor:</strong> nombre, edad o fecha de nacimiento,
                escuela y la información sobre su desarrollo, salud, conducta o
                diagnóstico que decidas compartirnos.
              </li>
            </ul>
            <p>
              La información sobre el desarrollo y la salud del menor constituye{" "}
              <strong>datos personales sensibles</strong>. Por ello, solo la
              tratamos con tu consentimiento expreso, la utilizamos
              exclusivamente para fines de orientación y atención terapéutica, y
              la resguardamos con especial cuidado y confidencialidad.
            </p>

            <h2>3. Finalidades del tratamiento</h2>
            <p>Utilizamos tus datos para las siguientes finalidades primarias:</p>
            <ul>
              <li>Dar respuesta a tus solicitudes de información y contacto.</li>
              <li>Agendar y dar seguimiento a citas de valoración y terapias.</li>
              <li>Integrar el expediente terapéutico del menor.</li>
              <li>Orientarte durante el proceso de admisión.</li>
            </ul>
            <p>
              De manera secundaria, y solo si nos lo autorizas, podremos
              contactarte para compartirte información sobre nuestros servicios y
              actividades.
            </p>

            <h2>4. Fotografías y videos de menores</h2>
            <p>
              Las fotografías y videos de niñas y niños que aparecen en este
              sitio web y en nuestras redes sociales se publican únicamente con
              la <strong>autorización previa, expresa y por escrito</strong> de
              sus padres o tutores. Si deseas revocar dicha autorización, puedes
              solicitarlo en cualquier momento escribiendo a{" "}
              <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> y
              retiraremos el material correspondiente.
            </p>

            <h2>5. Transferencias de datos</h2>
            <p>
              No vendemos, rentamos ni transferimos tus datos personales a
              terceros. Solo podríamos compartir información con otros
              profesionales de la salud o con la escuela del menor{" "}
              <strong>cuando tú lo solicites o lo autorices expresamente</strong>
              , o cuando exista una obligación legal.
            </p>

            <h2>6. Derechos ARCO y revocación del consentimiento</h2>
            <p>
              Tienes derecho a <strong>A</strong>cceder, <strong>R</strong>
              ectificar y <strong>C</strong>ancelar tus datos personales, así
              como a <strong>O</strong>ponerte a su tratamiento o revocar el
              consentimiento que nos hayas otorgado. Para ejercer estos
              derechos, envía tu solicitud a:
            </p>
            <blockquote>
              📧 <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
              <br />
              Indicando: nombre completo, dato de contacto, relación con el
              menor (en su caso) y el derecho que deseas ejercer.
            </blockquote>
            <p>
              Responderemos a tu solicitud en un plazo máximo de 20 días
              hábiles, conforme a la LFPDPPP.
            </p>

            <h2>7. Medidas de seguridad</h2>
            <p>
              Implementamos medidas administrativas, técnicas y físicas
              razonables para proteger tus datos contra daño, pérdida,
              alteración o acceso no autorizado.
            </p>

            <h2>8. Uso de WhatsApp y sitios de terceros</h2>
            <p>
              Nuestros formularios generan un mensaje que se envía a través de{" "}
              <strong>WhatsApp</strong>, servicio operado por Meta Platforms,
              cuyo tratamiento de datos se rige por sus propias políticas de
              privacidad. Asimismo, este sitio puede enlazar a servicios de
              terceros (como Google Maps o redes sociales) con políticas
              propias.
            </p>

            <h2>9. Cookies</h2>
            <p>
              Este sitio no utiliza cookies de rastreo publicitario. Solo se
              emplean tecnologías estrictamente necesarias para su
              funcionamiento.
            </p>

            <h2>10. Cambios a este aviso</h2>
            <p>
              Cualquier modificación a este aviso de privacidad se publicará en
              esta misma página, indicando la fecha de su última actualización.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
