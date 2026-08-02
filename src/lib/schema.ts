import { site, programs, faqs, googleRating, googleReviews, type Program } from "./site";
import type { PostMeta, Post } from "./blog";

// Stable @id anchors on the canonical domain
const ORG_ID = `${site.url}/#organization`;
const CLINIC_ID = `${site.url}/#clinic`;
const WEBSITE_ID = `${site.url}/#website`;
const LOGO_ID = `${site.url}/#logo`;

const GEO = { lat: 20.7041077, lng: -103.341098 };

const SAME_AS = [
  site.social.facebook,
  site.social.instagram,
  "https://www.google.com/maps/place/Sinapsyc/data=!4m2!3m1!1s0x0:0x258b9ada80a4e79",
].filter(Boolean);

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street.replace("#", "No. "),
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    postalCode: site.address.zip.replace("C.P. ", ""),
    addressCountry: "MX",
  };
}

function openingHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ];
}

/** The primary business entity — a pediatric neurodevelopment clinic.
 *  Modeled as MedicalClinic (a LocalBusiness subtype) so it is eligible for
 *  local business rich results while carrying medical semantics. */
export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": CLINIC_ID,
    name: site.name,
    alternateName: "Sinapsyc Neurodesarrollo Infantil",
    description: site.description,
    slogan: site.slogan,
    url: site.url,
    telephone: "+52-33-3461-0814",
    email: site.email,
    image: `${site.url}/img/hero-scene.jpg`,
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${site.url}/img/logo-sinapsyc.png`,
      caption: `${site.name} — ${site.tagline}`,
    },
    priceRange: "$$",
    currenciesAccepted: "MXN",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasMap: SAME_AS.find((s) => s.includes("maps")),
    openingHoursSpecification: openingHours(),
    sameAs: SAME_AS,
    areaServed: [
      { "@type": "City", name: "Guadalajara" },
      { "@type": "City", name: "Zapopan" },
      { "@type": "AdministrativeArea", name: "Zona Metropolitana de Guadalajara" },
    ],
    knowsLanguage: ["es-MX"],
    medicalSpecialty: ["Pediatric", "Physiotherapy", "SpeechPathology"],
    // ParentAudience es el tipo correcto para "padres de niños de 0 a 8":
    // childMinAge/childMaxAge describen a los hijos, no a la audiencia.
    audience: {
      "@type": "ParentAudience",
      audienceType: "Padres y madres de niños de 0 a 8 años",
      childMinAge: 0,
      childMaxAge: 8,
    },
    availableService: programs.map((p) => ({
      "@type": "MedicalTherapy",
      name: p.title,
      url: `${site.url}/programas/${p.slug}`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleRating.value,
      reviewCount: googleRating.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: googleReviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody: r.text,
    })),
    parentOrganization: { "@id": ORG_ID },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${site.url}/img/logo-sinapsyc.png`,
    },
    description: site.description,
    sameAs: SAME_AS,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-33-3461-0814",
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "es-MX",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

/** A single therapy modeled as a MedicalTherapy provided by the clinic. */
export function serviceSchema(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalTherapy", "Service"],
    name: program.title,
    url: `${site.url}/programas/${program.slug}`,
    description: program.paragraphs.join(" "),
    image: `${site.url}${program.image}`,
    serviceType: program.title,
    category: "Neurodesarrollo infantil",
    provider: { "@id": CLINIC_ID },
    areaServed: { "@type": "City", name: "Guadalajara" },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Niños de 0 a 8 años",
      suggestedMinAge: 0,
      suggestedMaxAge: 8,
    },
    ...(program.cert ? { additionalType: "https://schema.org/MedicalProcedure" } : {}),
  };
}

export function faqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
    })),
  };
}

export function blogPostingSchema(post: Post | PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${site.url}/blog/${post.slug}#article`,
    // Google recorta el headline de los rich results cerca de 110 caracteres.
    headline: post.title.slice(0, 110),
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-MX",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${post.slug}`,
    },
    ...(post.cover
      ? {
          image: {
            "@type": "ImageObject",
            url: `${site.url}${post.cover}`,
            width: 1280,
            height: 720,
          },
        }
      : {}),
    author: { "@type": "Organization", name: post.author ?? site.name, url: site.url },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@type": "Blog", "@id": `${site.url}/blog#blog`, name: `Blog de ${site.name}` },
    about: { "@id": CLINIC_ID },
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    timeRequired: `PT${post.readingTime}M`,
  };
}

/** El blog completo, con sus artículos como entradas. */
export function blogSchema(posts: PostMeta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/blog#blog`,
    name: `Blog de ${site.name}`,
    description:
      "Artículos sobre neurodesarrollo infantil para familias: lenguaje, integración sensorial, conducta, alimentación y aprendizaje.",
    url: `${site.url}/blog`,
    inLanguage: "es-MX",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${site.url}/blog/${p.slug}#article`,
      headline: p.title.slice(0, 110),
      description: p.excerpt,
      datePublished: p.date,
      url: `${site.url}/blog/${p.slug}`,
      articleSection: p.category,
      ...(p.cover ? { image: `${site.url}${p.cover}` } : {}),
    })),
  };
}

/** Página de archivo (categoría o etiqueta) con la lista de artículos. */
export function collectionPageSchema(
  name: string,
  description: string,
  path: string,
  posts: PostMeta[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${site.url}${path}`,
    inLanguage: "es-MX",
    isPartOf: { "@type": "Blog", "@id": `${site.url}/blog#blog` },
    publisher: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };
}

export function medicalWebPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url: `${site.url}${path}`,
    inLanguage: "es-MX",
    about: { "@id": CLINIC_ID },
    audience: {
      "@type": "ParentAudience",
      audienceType: "Padres de niños de 0 a 8 años",
      childMinAge: 0,
      childMaxAge: 8,
    },
  };
}
