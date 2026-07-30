/**
 * Términos técnicos que se explican al vuelo dentro del texto.
 *
 * `match` es la cadena exacta tal como aparece en las descripciones de
 * `site.ts`; se subraya y al hacer clic muestra la explicación. Para añadir
 * un término nuevo basta con agregar una entrada aquí.
 */
export type GlossaryTerm = {
  match: string;
  title: string;
  body: string;
};

export const glossary: GlossaryTerm[] = [
  {
    match: "Comunicación Aumentativa Alternativa (SAAC)",
    title: "SAAC · Comunicación Aumentativa y Alternativa",
    body: "Son herramientas que le dan al niño una forma de comunicarse cuando el habla todavía no le alcanza: desde tableros con imágenes y pictogramas hasta aplicaciones o dispositivos que «hablan» por él. No frenan el lenguaje oral; al contrario, suelen impulsarlo, porque reducen la frustración y le permiten expresarse desde hoy.",
  },
  {
    match: "SOS (Sequential Oral Sensory Approach to Feeding®)",
    title: "Enfoque SOS de alimentación",
    body: "Sequential Oral Sensory Approach to Feeding®. Un método reconocido internacionalmente que entiende el comer como una habilidad que se aprende por pasos. En vez de presionar al niño, lo acompaña a acercarse al alimento poco a poco —tolerarlo cerca, tocarlo, olerlo, probarlo— a través del juego y sin obligarlo a comer.",
  },
  {
    match: "Análisis Conductual Aplicado (ABA)",
    title: "ABA · Análisis Conductual Aplicado",
    body: "Un enfoque basado en evidencia que busca comprender por qué ocurre una conducta y qué la mantiene, para enseñar en su lugar habilidades más funcionales. En Sinapsyc se utiliza solo cuando representa la mejor alternativa para el niño, y siempre orientado a habilidades útiles para su vida diaria.",
  },
];
