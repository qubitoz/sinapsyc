import { glossary } from "@/lib/glossary";
import Termino from "./Termino";

/**
 * Renderiza un párrafo resaltando los términos del glosario.
 *
 * Las descripciones en `site.ts` se mantienen como texto plano: aquí se
 * detectan los términos y se envuelven, así el copy del cliente no se
 * ensucia con marcado.
 */
export default function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest.length > 0) {
    // término que aparece primero en lo que queda del párrafo
    let best: { index: number; term: (typeof glossary)[number] } | null = null;
    for (const term of glossary) {
      const i = rest.indexOf(term.match);
      if (i !== -1 && (best === null || i < best.index)) best = { index: i, term };
    }

    if (!best) {
      nodes.push(rest);
      break;
    }

    if (best.index > 0) nodes.push(rest.slice(0, best.index));
    nodes.push(
      <Termino key={key++} term={best.term}>
        {best.term.match}
      </Termino>
    );
    rest = rest.slice(best.index + best.term.match.length);
  }

  return <>{nodes}</>;
}
