import { site, programs, faqs } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const body = `# ${site.name}

> ${site.description}
> Lema: «${site.slogan}». Atención a niños de 0 a 8 años en Guadalajara, Jalisco (México).

Sinapsyc es un centro de neurodesarrollo infantil interdisciplinario. El equipo está
certificado en Integración Sensorial (Ayres Sensory Integration® / CLASI) y en el
enfoque de alimentación SOS® (Sequential Oral Sensory). El medio de contacto principal
es WhatsApp (${site.phoneDisplay}). No se requiere referencia médica para agendar.

## Páginas principales
- [Inicio](${site.url}/): visión general del centro y sus servicios.
- [Nosotros](${site.url}/nosotros): quiénes somos, valores y certificaciones.
- [Nuestro Enfoque](${site.url}/enfoque): proceso de valoración e intervención paso a paso.
- [Programas](${site.url}/programas): índice de las ${programs.length} terapias.
- [Preguntas Frecuentes](${site.url}/preguntas-frecuentes): ${faqs.length} respuestas para familias.
- [Blog](${site.url}/blog): artículos sobre neurodesarrollo infantil.
- [Ubicación](${site.url}/ubicacion): dirección, mapa y horarios.
- [Agenda tu cita](${site.url}/contacto): formulario de primera cita de valoración.

## Programas y terapias
${programs.map((p) => `- [${p.title}](${site.url}/programas/${p.slug}): ${p.short}`).join("\n")}

## Artículos del blog
${posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}): ${p.excerpt}`).join("\n")}

## Datos de contacto
- WhatsApp / Teléfono: ${site.phoneDisplay}
- Dirección: ${site.address.street}, ${site.address.colony}, ${site.address.city}, ${site.address.zip}
- Horario: Lunes a viernes 9:00–19:00, Sábados 9:00–12:00.

## Recursos para agentes
- [Bundle OKF (Open Knowledge Format)](${site.url}/okf/index.md): contenido del sitio como conceptos enlazados.
- [Sitemap](${site.url}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
