import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import PageHero from "@/components/PageHero";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { galleryPhotos, eventPhotos, videos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galería: Nuestro Espacio, Terapias y Momentos",
  description:
    "Un vistazo a nuestro espacio, las terapias y los momentos especiales que vivimos con las familias en Sinapsyc, Guadalajara. Fotos y videos reales del centro.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  const imageGallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Galería de Sinapsyc",
    url: `${site.url}/galeria`,
    associatedMedia: galleryPhotos.slice(0, 12).map((p) => ({
      "@type": "ImageObject",
      contentUrl: `${site.url}/fotos/${p.name}.jpg`,
      caption: p.alt,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          imageGallery,
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Galería", path: "/galeria" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Vida en Sinapsyc"
        emoji="📸"
        title="Un vistazo a nuestro día a día"
        subtitle="Cada foto es un pedacito de lo que vivimos: juego, aprendizaje, logros y mucho cariño. Así se ve crecer en un espacio cálido y seguro."
        tint="sun"
      />

      {/* Espacio y terapias */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nuestro espacio y terapias"
            eyebrowClass="bg-teal-100 text-teal-600"
            title="El corazón de Sinapsyc"
            subtitle="Salas sensoriales, columpios, murales y materiales pensados para que cada niño disfrute su proceso."
          />
          <div className="mt-12">
            <PhotoGallery photos={galleryPhotos} variant="masonry" />
          </div>
        </Container>
      </section>

      {/* Videos */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="En movimiento"
            eyebrowClass="bg-sky-brand-100 text-sky-brand-600"
            title="Videos de nuestras actividades"
            subtitle="Dale play y conoce cómo se vive la terapia y la diversión en Sinapsyc."
          />
          <div className="mt-12">
            <VideoGallery videos={videos} />
          </div>
        </Container>
      </section>

      {/* Eventos */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Momentos especiales"
            eyebrowClass="bg-bubble-100 text-bubble-600"
            title="Celebramos cada ocasión"
            subtitle="Halloween, el Día Mundial de Concienciación del Autismo, fiestas de verano y reconocimientos: momentos que nos unen como comunidad."
          />
          <div className="mt-12">
            <Reveal>
              <PhotoGallery photos={eventPhotos} variant="grid" />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
