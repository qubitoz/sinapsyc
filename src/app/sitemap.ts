import type { MetadataRoute } from "next";
import { site, programs } from "@/lib/site";
import { getAllPosts, getCategories, getTags } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/nosotros",
    "/enfoque",
    "/programas",
    "/admision",
    "/galeria",
    "/preguntas-frecuentes",
    "/blog",
    "/ubicacion",
    "/contacto",
    "/aviso-de-privacidad",
    "/terminos",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const programRoutes = programs.map((p) => ({
    url: `${base}/programas/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Archivos de taxonomía: son páginas indexables que agrupan el contenido.
  const categoryRoutes = getCategories().map((c) => ({
    url: `${base}/blog/categoria/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const tagRoutes = getTags().map((t) => ({
    url: `${base}/blog/etiqueta/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.4,
  }));

  return [
    ...staticRoutes,
    ...programRoutes,
    ...postRoutes,
    ...categoryRoutes,
    ...tagRoutes,
  ];
}
