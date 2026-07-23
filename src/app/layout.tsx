import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Neurodesarrollo Infantil en Guadalajara`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "neurodesarrollo infantil",
    "terapia infantil Guadalajara",
    "terapia de lenguaje",
    "integración sensorial",
    "terapia ocupacional niños",
    "intervención temprana",
    "Sinapsyc",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: `${site.name} — Neurodesarrollo Infantil`,
    description: site.description,
    siteName: site.name,
  },
  icons: { icon: "/favicon.svg", apple: "/img/mascot-fox.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
