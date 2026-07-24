import { site, programs, faqs, type Program } from "./site";
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
    audience: {
      "@type": "PatientAudience",
      audienceType: "Padres y madres de niños de 0 a 8 años",
      suggestedMinAge: 0,
      suggestedMaxAge: 8,
    },
    availableService: programs.map((p) => ({
      "@type": "MedicalTherapy",
      name: p.title,
      url: `${site.url}/programas/${p.slug}`,
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
      "@type": "PatientAudience",
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
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-MX",
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    ...(post.cover
      ? { image: { "@type": "ImageObject", url: `${site.url}${post.cover}` } }
      : {}),
    author: { "@type": "Organization", name: post.author ?? site.name, url: site.url },
    publisher: { "@id": ORG_ID },
    articleSection: post.category,
    keywords: post.tags?.join(", "),
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
      "@type": "PatientAudience",
      audienceType: "Padres de niños de 0 a 8 años",
    },
  };
}
