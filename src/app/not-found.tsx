import Image from "next/image";
import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="text-center">
        <Image
          src="/img/mascot-fox.jpg"
          alt=""
          aria-hidden
          width={200}
          height={200}
          className="mx-auto h-40 w-40 animate-float rounded-full object-cover"
        />
        <p className="mt-6 font-display text-6xl font-700 text-teal-500">404</p>
        <h1 className="mt-2 font-display text-2xl font-600 text-ink">
          Uy… esta página se fue a jugar
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          No encontramos lo que buscas, pero podemos ayudarte a regresar al
          camino.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            Volver al inicio
          </Button>
          <Button href="/programas" variant="outline">
            Ver programas
          </Button>
        </div>
      </Container>
    </section>
  );
}
