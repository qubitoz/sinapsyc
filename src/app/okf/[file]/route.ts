import { site, programs, faqs, approach } from "@/lib/site";
import { getAllPosts, getPost } from "@/lib/blog";

export const dynamic = "force-static";

const STAMP = "2026-07-23";

type OkfDoc = { frontmatter: Record<string, string>; body: string };

function render(doc: OkfDoc): string {
  const fm = Object.entries(doc.frontmatter)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `---\n${fm}\n---\n\n${doc.body}\n`;
}

function serviceFile(slug: string): OkfDoc | null {
  const p = programs.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    frontmatter: {
      type: "MedicalTherapy",
      title: p.title,
      description: p.short,
      resource: `${site.url}/programas/${p.slug}`,
      tags: `[neurodesarrollo, terapia-infantil]`,
      timestamp: STAMP,
    },
    body: [
      `# ${p.title}`,
      "",
      p.paragraphs.join("\n\n"),
      "",
      p.cert ? `**Certificación:** ${p.cert}\n` : "",
      `## Cómo puede ayudar`,
      p.benefits.map((b) => `- ${b}`).join("\n"),
      "",
      `Dirigido a niños de 0 a 8 años. Ofrecido por [Sinapsyc](./sinapsyc.md) como parte de su [enfoque interdisciplinario](./enfoque.md). Para agendar, ver [Ubicación y contacto](./ubicacion.md).`,
    ].join("\n"),
  };
}

function blogFile(slug: string): OkfDoc | null {
  const post = getPost(slug);
  if (!post) return null;
  return {
    frontmatter: {
      type: "Article",
      title: post.title,
      description: post.excerpt,
      resource: `${site.url}/blog/${post.slug}`,
      tags: `[${(post.tags ?? []).join(", ")}]`,
      timestamp: post.date.slice(0, 10),
    },
    body: `# ${post.title}\n\n${post.content}\n\n---\nPublicado por [Sinapsyc](./sinapsyc.md).`,
  };
}

function buildDocs(): Record<string, OkfDoc> {
  const docs: Record<string, OkfDoc> = {};
  const posts = getAllPosts();

  docs["index.md"] = {
    frontmatter: {
      type: "Collection",
      title: `${site.name} — Bundle de conocimiento (OKF)`,
      description: site.description,
      resource: site.url,
      timestamp: STAMP,
    },
    body: [
      `# ${site.name} — Open Knowledge Format`,
      "",
      `> ${site.description}`,
      "",
      `Centro de neurodesarrollo infantil en Guadalajara, Jalisco. Lema: «${site.slogan}».`,
      "",
      `## Archivos del bundle`,
      `- [Sinapsyc (la organización)](./sinapsyc.md)`,
      `- [Nuestro enfoque](./enfoque.md)`,
      `- [Preguntas frecuentes](./preguntas.md)`,
      `- [Ubicación y contacto](./ubicacion.md)`,
      "",
      `### Terapias`,
      programs.map((p) => `- [${p.title}](./servicio-${p.slug}.md)`).join("\n"),
      "",
      `### Artículos`,
      posts.map((p) => `- [${p.title}](./blog-${p.slug}.md)`).join("\n"),
    ].join("\n"),
  };

  docs["sinapsyc.md"] = {
    frontmatter: {
      type: "Organization",
      title: site.name,
      description: site.description,
      resource: site.url,
      tags: `[neurodesarrollo, guadalajara, terapia-infantil]`,
      timestamp: STAMP,
    },
    body: [
      `# ${site.name}`,
      "",
      `Somos un centro de neurodesarrollo infantil formado por profesionales especializados. Acompañamos familias y potenciamos el desarrollo y bienestar de cada niño de 0 a 8 años.`,
      "",
      `- **Certificaciones:** Integración Sensorial (Ayres Sensory Integration® / CLASI); Alimentación (SOS® — Sequential Oral Sensory).`,
      `- **Población:** niños de 0 a 8 años y sus familias.`,
      `- **Enfoque:** integral e interdisciplinario. Ver [Nuestro enfoque](./enfoque.md).`,
      `- **Contacto:** WhatsApp ${site.phoneDisplay}. No se requiere referencia médica.`,
      "",
      `Ofrecemos ${programs.length} terapias — ver el [índice](./index.md).`,
    ].join("\n"),
  };

  docs["enfoque.md"] = {
    frontmatter: {
      type: "Article",
      title: "Nuestro enfoque",
      description:
        "Proceso integral e interdisciplinario centrado en el niño y la familia.",
      resource: `${site.url}/enfoque`,
      timestamp: STAMP,
    },
    body: [
      `# Nuestro enfoque`,
      "",
      `En [Sinapsyc](./sinapsyc.md) trabajamos desde un enfoque integral e interdisciplinario centrado en el niño y la familia. El proceso:`,
      "",
      approach
        .map((s) => `${s.step}. **${s.title}** — ${s.text}`)
        .join("\n"),
    ].join("\n"),
  };

  docs["preguntas.md"] = {
    frontmatter: {
      type: "FAQ",
      title: "Preguntas frecuentes",
      description: "Respuestas para familias sobre terapia infantil.",
      resource: `${site.url}/preguntas-frecuentes`,
      timestamp: STAMP,
    },
    body: [
      `# Preguntas frecuentes`,
      "",
      faqs
        .map((f) => `## ${f.q}\n\n${f.a.join("\n\n")}`)
        .join("\n\n"),
    ].join("\n"),
  };

  docs["ubicacion.md"] = {
    frontmatter: {
      type: "Place",
      title: "Ubicación y contacto",
      description: `${site.address.street}, ${site.address.colony}, ${site.address.city}.`,
      resource: `${site.url}/ubicacion`,
      timestamp: STAMP,
    },
    body: [
      `# Ubicación y contacto`,
      "",
      `- **Dirección:** ${site.address.street}, ${site.address.colony}, ${site.address.city}, ${site.address.zip}.`,
      `- **WhatsApp / Teléfono:** ${site.phoneDisplay}`,
      `- **Horario:** ${site.hours.map((h) => `${h.d} ${h.h}`).join("; ")}.`,
      "",
      `Para agendar una primera cita de valoración, contacta por WhatsApp. Más sobre [Sinapsyc](./sinapsyc.md).`,
    ].join("\n"),
  };

  for (const p of programs) docs[`servicio-${p.slug}.md`] = serviceFile(p.slug)!;
  for (const post of posts) docs[`blog-${post.slug}.md`] = blogFile(post.slug)!;

  return docs;
}

export function generateStaticParams() {
  return Object.keys(buildDocs()).map((file) => ({ file }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;
  const docs = buildDocs();
  const doc = docs[file];
  if (!doc) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(render(doc), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
