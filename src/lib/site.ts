export const site = {
  name: "Sinapsyc",
  tagline: "Neurodesarrollo Infantil",
  slogan: "Abrazamos infancias, iluminamos caminos",
  description:
    "Centro de neurodesarrollo infantil en Guadalajara. Acompañamos a las familias y potenciamos el desarrollo y bienestar de cada niño de 0 a 8 años.",
  url: "https://sinapsyc.com.mx",
  phoneDisplay: "33 3461 0814",
  whatsapp: "523334610814", // wa.me format (México, sin el 1)
  email: "hola@sinapsyc.com.mx",
  address: {
    street: "Juan Zubarán #1990",
    colony: "Col. Jardines Alcalde",
    city: "Guadalajara, Jalisco",
    zip: "C.P. 44298",
  },
  hours: [
    { d: "Lunes a viernes", h: "9:00 am – 7:00 pm" },
    { d: "Sábados", h: "9:00 am – 12:00 pm" },
  ],
  // Google Maps embed query
  mapsQuery: "Juan Zubaran 1990, Jardines Alcalde, 44298 Guadalajara, Jalisco",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  googleProfile:
    "https://www.google.com/maps/place/Sinapsyc/data=!4m2!3m1!1s0x0:0x258b9ada80a4e79",
  directionsUrl: "https://maps.app.goo.gl/wsspNadHR5oF83up7",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Nuestro Enfoque", href: "/enfoque" },
  { label: "Programas", href: "/programas" },
  { label: "Galería", href: "/galeria" },
  { label: "Preguntas", href: "/preguntas-frecuentes" },
  { label: "Blog", href: "/blog" },
  { label: "Ubicación", href: "/ubicacion" },
];

export type Program = {
  slug: string;
  title: string;
  short: string;
  image: string;
  color: "teal" | "sky" | "sun" | "bubble";
  emoji: string;
  paragraphs: string[];
  cert?: string;
  benefits: string[];
};

export const programs: Program[] = [
  {
    slug: "terapia-ocupacional",
    title: "Terapia Ocupacional",
    short:
      "El juego como motor del aprendizaje: motricidad, atención, regulación y autonomía en el día a día.",
    image: "/img/prog-ocupacional.png",
    color: "teal",
    emoji: "🦝",
    paragraphs: [
      "Intervención dirigida a niños que requieren desarrollar habilidades esenciales en el día a día. El juego es la ocupación más importante para el aprendizaje del niño y es el medio para fortalecer motricidad, atención, regulación emocional y la autonomía en rutinas como vestirse, alimentarse o aprender a ir al baño.",
    ],
    benefits: [
      "Motricidad fina y gruesa",
      "Atención y concentración",
      "Regulación emocional",
      "Autonomía en rutinas diarias",
    ],
  },
  {
    slug: "integracion-sensorial",
    title: "Terapia de Integración Sensorial",
    short:
      "Ayudamos a procesar mejor los sonidos, movimientos y texturas para una mayor participación en casa y la escuela.",
    image: "/img/prog-sensorial.png",
    color: "sky",
    emoji: "🐙",
    paragraphs: [
      "Intervención dirigida a niños que presentan dificultades para procesar y responder adecuadamente a los estímulos del entorno, como sonidos, movimientos o texturas. A través de actividades lúdicas y estructuradas, favorecemos una mejor regulación, atención y participación en casa y en la escuela, fortaleciendo así su seguridad y bienestar.",
    ],
    cert: "Equipo certificado por la Asociación Mexicana de Integración Sensorial y con formación avalada por CLASI (Ayres Sensory Integration®), garantizando una intervención especializada basada en estándares internacionales.",
    benefits: [
      "Mejor regulación sensorial",
      "Mayor atención y participación",
      "Seguridad y bienestar",
      "Respuestas adaptadas al entorno",
    ],
  },
  {
    slug: "terapia-fisica",
    title: "Terapia Física",
    short:
      "Fuerza, equilibrio, coordinación y movilidad para una mayor independencia y participación.",
    image: "/img/prog-fisica.png",
    color: "sun",
    emoji: "🦘",
    paragraphs: [
      "Intervención dirigida a niños que presentan alteraciones en su desarrollo motor, postura o movimiento, ya sea por retrasos madurativos, trastornos genéticos o lesiones. A través de ejercicios terapéuticos y actividades adaptadas a su edad, favorecemos la fuerza, equilibrio, la coordinación y la movilidad, promoviendo así una mayor independencia y participación del niño en su entorno cotidiano.",
    ],
    benefits: [
      "Desarrollo motor y postura",
      "Fuerza y equilibrio",
      "Coordinación y movilidad",
      "Mayor independencia",
    ],
  },
  {
    slug: "terapia-alimentacion",
    title: "Terapia de Alimentación",
    short:
      "Una relación saludable con los alimentos y el desarrollo de las habilidades orales para comer.",
    image: "/img/prog-alimentacion.png",
    color: "bubble",
    emoji: "🦛",
    paragraphs: [
      "Intervención dirigida a niños que presentan dificultades en el proceso de alimentación, como selectividad alimentaria, problemas de succión, masticación o deglución. A través de estrategias lúdicas y terapéuticas adaptadas a su edad, favorecemos una relación saludable con los alimentos y el desarrollo adecuado de las habilidades orales para comer.",
    ],
    cert: "Equipo certificado en el enfoque SOS (Sequential Oral Sensory Approach to Feeding®), garantizando una intervención especializada basada en estándares internacionales.",
    benefits: [
      "Menor selectividad alimentaria",
      "Succión, masticación y deglución",
      "Relación saludable con la comida",
      "Habilidades orales para comer",
    ],
  },
  {
    slug: "terapia-conductual",
    title: "Terapia Conductual",
    short:
      "Herramientas prácticas para la conducta, la regulación emocional y las habilidades sociales.",
    image: "/img/prog-conductual.png",
    color: "teal",
    emoji: "🦉",
    paragraphs: [
      "Intervención dirigida a niños que presentan dificultades en la conducta, regulación emocional o habilidades sociales.",
      "Brindamos orientación a padres de familia, ofreciendo herramientas prácticas que fortalecen la intervención en casa. Además trabajamos de la mano con la escuela para asegurar coherencia en las estrategias y favorecer una mejor adaptación y participación del niño en su entorno familiar y escolar, impulsando su autonomía y bienestar.",
    ],
    benefits: [
      "Regulación emocional",
      "Habilidades sociales",
      "Estrategias para casa y escuela",
      "Autonomía y bienestar",
    ],
  },
  {
    slug: "terapia-lenguaje",
    title: "Terapia de Lenguaje",
    short:
      "Comunicación funcional, comprensión y expresión, con apoyos visuales cuando es oportuno.",
    image: "/img/prog-lenguaje.png",
    color: "bubble",
    emoji: "🦜",
    paragraphs: [
      "Intervención dirigida a niños que presentan dificultades en el lenguaje, el habla, la comunicación o deglución. Mediante estrategias especializadas y adaptadas a su edad, favorecemos el desarrollo de la comunicación funcional, la comprensión y la expresión del lenguaje.",
      "Cuando es oportuno, implementamos sistemas de comunicación alternativa y aumentativa, brindando apoyos visuales y herramientas que ayuden al niño a comunicarse de manera efectiva mientras fortalece sus habilidades lingüísticas.",
    ],
    benefits: [
      "Comunicación funcional",
      "Comprensión y expresión",
      "Habla y articulación",
      "Sistemas alternativos y aumentativos",
    ],
  },
  {
    slug: "terapia-aprendizaje",
    title: "Terapia de Aprendizaje",
    short:
      "Atención, memoria, lectoescritura y habilidades lógico-matemáticas para un mejor desempeño escolar.",
    image: "/img/prog-aprendizaje.png",
    color: "sky",
    emoji: "🦊",
    paragraphs: [
      "Intervención dirigida a niños que presentan dificultades en los procesos de aprendizaje, como atención, memoria, lectoescritura o habilidades lógico–matemáticas. A través de estrategias personalizadas y adaptadas a su etapa de desarrollo, fortalecemos las habilidades cognitivas necesarias para un mejor desempeño escolar.",
    ],
    benefits: [
      "Atención y memoria",
      "Lectoescritura",
      "Habilidades lógico-matemáticas",
      "Mejor desempeño escolar",
    ],
  },
  {
    slug: "intervencion-temprana",
    title: "Intervención Temprana",
    short:
      "Para bebés con factores de riesgo o señales de alerta, en un ambiente cálido y seguro.",
    image: "/img/prog-temprana.png",
    color: "sun",
    emoji: "🐣",
    paragraphs: [
      "Intervención dirigida a bebés, especialmente a aquellos con factores de riesgo o señales de alerta en su desarrollo. A través de actividades lúdicas y estructuradas, favorecemos su desarrollo motor, cognitivo, sensorial, social y de lenguaje en un ambiente cálido y seguro para tu bebé.",
      "Brindamos orientación a la familia sobre cómo estimular al bebé en casa, fortaleciendo la participación activa de los padres en el proceso.",
    ],
    benefits: [
      "Desarrollo motor y cognitivo",
      "Estimulación sensorial y social",
      "Lenguaje temprano",
      "Orientación para la familia",
    ],
  },
  {
    slug: "evaluacion-neuropsicologica",
    title: "Evaluación Neuropsicológica",
    short:
      "Conocemos cómo funciona el desarrollo cognitivo, emocional y conductual para diseñar un plan personalizado.",
    image: "/img/prog-evaluacion.png",
    color: "sky",
    emoji: "🐘",
    paragraphs: [
      "Es un proceso especializado que nos permite conocer cómo está funcionando el desarrollo cognitivo, emocional y conductual del niño. A través de pruebas estandarizadas, actividades estructuradas y observación clínica, evaluamos áreas como la atención, memoria, lenguaje, habilidades de aprendizaje y funciones ejecutivas.",
      "Esta evaluación nos ayuda a identificar tanto sus fortalezas como las áreas que requieren apoyo, comprender el origen de sus dificultades y diseñar un plan de intervención personalizado. Además, brindamos orientación clara a la familia y escuela para acompañar de manera adecuada su proceso de desarrollo.",
    ],
    benefits: [
      "Pruebas estandarizadas",
      "Perfil de fortalezas y áreas de apoyo",
      "Origen de las dificultades",
      "Plan de intervención personalizado",
    ],
  },
  {
    slug: "terapia-grupal",
    title: "Terapia Grupal",
    short:
      "Un espacio para desarrollar habilidades sociales, comunicación y regulación en grupos reducidos (máx. 5 niños).",
    image: "/img/prog-grupal.png",
    color: "teal",
    emoji: "🐻",
    paragraphs: [
      "La terapia grupal ofrece un espacio estructurado donde los niños desarrollan habilidades sociales, de comunicación, regulación emocional, así como también estimulación sensorial y habilidades motoras.",
      "El contexto grupal facilita que las necesidades del niño se presenten de manera «natural» en un ambiente controlado durante la interacción y el juego. Esto permite que el terapeuta intervenga en el momento, brindando estrategias que favorezcan el desarrollo de habilidades que posteriormente podrán generalizarse en otros entornos como la escuela, el hogar y otros espacios.",
      "Existen diferentes grupos con objetivos específicos. Dependiendo de las capacidades, necesidades y fortalezas de cada niño, se busca integrarlo en el grupo que mejor favorezca su participación, aprendizaje y desarrollo. Grupos reducidos (5 niños máximo).",
    ],
    benefits: [
      "Habilidades sociales",
      "Comunicación e interacción",
      "Regulación emocional",
      "Grupos reducidos (máx. 5)",
    ],
  },
  {
    slug: "clases-psicomotricidad",
    title: "Clases de Psicomotricidad",
    short:
      "Aprender a través del movimiento y el juego: coordinación, equilibrio y conciencia corporal.",
    image: "/img/prog-psicomotricidad.png",
    color: "sun",
    emoji: "🐵",
    paragraphs: [
      "Nuestras clases de psicomotricidad ofrecen un espacio dinámico donde los niños aprenden a través del movimiento y el juego.",
      "A través de circuitos motores, juegos, retos y actividades guiadas, los niños desarrollan habilidades motoras gruesas, coordinación, equilibrio y conciencia corporal.",
      "Estas experiencias les permiten explorar su cuerpo, ganar confianza en sus movimientos y desarrollar habilidades que apoyarán su desempeño en la vida diaria.",
    ],
    benefits: [
      "Motricidad gruesa",
      "Coordinación y equilibrio",
      "Conciencia corporal",
      "Confianza en el movimiento",
    ],
  },
];

export type Faq = { q: string; a: string[] };

export const faqs: Faq[] = [
  {
    q: "¿Cómo saber si mi hijo necesita terapia?",
    a: [
      "Si observas dificultades conductuales, de lenguaje, sociales, emocionales, de aprendizaje, sensoriales o de movimiento que están afectando la forma en la que tu hijo se desenvuelve en su vida diaria, una cita de valoración puede ser un buen primer paso.",
      "Este espacio permite identificar sus necesidades, resolver tus dudas y comprender mejor su desarrollo para determinar si requiere algún tipo de intervención terapéutica. Estamos aquí para orientarte y acompañarte en este proceso.",
    ],
  },
  {
    q: "¿Qué terapias necesita un niño con autismo?",
    a: [
      "Cada niño dentro del espectro autista es único, por lo que las terapias recomendadas dependerán de sus necesidades, fortalezas y áreas de apoyo.",
      "Algunas de las intervenciones que pueden favorecer su desarrollo incluyen terapia de lenguaje, terapia ocupacional, integración sensorial, alimentación, terapia conductual, terapia física y acompañamiento en habilidades sociales.",
      "Una primera cita de valoración integral permite identificar qué áreas requieren mayor apoyo y diseñar un plan terapéutico personalizado. En Sinapsyc trabajamos de la mano con la familia, la escuela y otros profesionales para acompañar el desarrollo de cada niño en un entorno cálido, seguro y respetuoso.",
    ],
  },
  {
    q: "¿Qué es la terapia de integración sensorial?",
    a: [
      "La terapia de integración sensorial ayuda a los niños que presentan dificultades para procesar estímulos del entorno como sonidos, texturas, movimientos, luces o ciertas sensaciones corporales.",
      "Algunos niños pueden mostrarse muy sensibles a ciertos estímulos, buscar constante movimiento, tener dificultades para regular su conducta, atención o emociones, o presentar retos en actividades de la vida diaria como la alimentación, el sueño, el juego o hábitos de higiene personal.",
      "A través del juego, en un ambiente donde se controlan estímulos sensoriales y mediante actividades terapéuticas, se busca favorecer la regulación, participación y respuestas adaptadas del niño para mejorar su desempeño en la vida diaria.",
    ],
  },
  {
    q: "¿Cómo puede ayudar la terapia de lenguaje a mi hijo?",
    a: [
      "La terapia de lenguaje puede ayudar a niños que presentan dificultades para comunicarse, comprender, expresar sus ideas, pronunciar palabras, interactuar con otros o desarrollar habilidades relacionadas con el lenguaje y la comunicación.",
      "A través del juego y actividades terapéuticas individualizadas, se busca fortalecer las habilidades comunicativas del niño para favorecer su participación en la vida diaria, el aprendizaje, la interacción social y su bienestar.",
      "En Sinapsyc trabajamos con diferentes enfoques y herramientas, como el modelo TEACCH, sistemas alternativos y aumentativos de la comunicación, modelo Denver, entre otros, según las necesidades de cada familia y niño.",
    ],
  },
  {
    q: "¿Qué hacer si mi hijo no habla?",
    a: [
      "Cada niño se desarrolla a su propio ritmo, pero si notas que tu hijo presenta dificultades para comunicarse o su lenguaje no avanza como esperabas para su edad, una cita de valoración puede ser un buen primer paso.",
      "Las dificultades en el lenguaje pueden presentarse de distintas maneras, como ausencia de palabras, poca intención comunicativa, dificultad para comprender, expresarse o interactuar con otros. Identificar estas señales de manera temprana permite brindar estrategias y apoyos adecuados.",
      "En Sinapsyc realizamos un acompañamiento individualizado para comprender las necesidades de cada niño y diseñar un plan acorde a sus fortalezas y áreas de apoyo.",
    ],
  },
  {
    q: "¿Es normal que mi hijo no tolere algunos sonidos o texturas?",
    a: [
      "Algunos niños pueden mostrarse más sensibles a ciertos estímulos del entorno, como sonido, luces, texturas, movimiento, ropa o alimentos. Cuando estas dificultades afectan su participación en actividades de la vida diaria, puede ser importante realizar una primera cita de valoración.",
      "Estas respuestas sensoriales pueden presentarse de diferentes maneras, por ejemplo evitando ciertos sonidos o texturas, cubriéndose los oídos, rechazando alimentos, buscando constantemente el movimiento o mostrando dificultad para regular sus emociones y conducta.",
      "A través de una valoración integral es posible comprender mejor las necesidades del niño y determinar si requiere acompañamiento terapéutico.",
    ],
  },
  {
    q: "¿Cómo saber si mi hijo tiene un retraso en el lenguaje?",
    a: [
      "Cada niño desarrolla el lenguaje a su propio ritmo, pero algunas señales pueden indicar la necesidad de una valoración profesional: dificultad para comprender, expresarse, pronunciar palabras, comunicarse con otros o un lenguaje que no avanza como se espera para su edad.",
      "Algunas señales de alerta pueden incluir ausencia de palabras, poco interés por comunicarse, dificultad para seguir instrucciones, vocabulario limitado o problemas para interactuar con otras personas.",
      "Identificar estas dificultades de manera temprana permite brindar estrategias y apoyos adecuados para favorecer su comunicación, aprendizaje y participación en la vida diaria.",
    ],
  },
  {
    q: "¿Cómo saber si mi hijo tiene autismo?",
    a: [
      "Cada niño se desarrolla diferente, pero algunas señales pueden indicar la necesidad de una valoración profesional. Algunas familias comienzan a notar dificultades en la comunicación, la interacción social, el juego, la flexibilidad, el procesamiento sensorial o la participación en actividades cotidianas.",
      "Algunas señales que pueden observarse incluyen poco contacto visual, dificultad para responder a su nombre, retrasos en el lenguaje, intereses muy específicos, necesidad de rutinas rígidas, diferencias en las formas de jugar, dificultades para relacionarse, además de respuestas inusuales a sonidos o texturas.",
      "La presencia de una o varias de estas características no significa necesariamente que un niño esté dentro del espectro autista, pero una valoración puede ayudar a comprender mejor sus necesidades, fortalezas y áreas de apoyo.",
    ],
  },
  {
    q: "¿Cómo saber si mi hijo tiene déficit de atención o TDAH?",
    a: [
      "Cada niño tiene diferentes niveles de energía, atención y actividad, pero cuando estas dificultades interfieren de manera significativa con su participación en la vida diaria, es importante realizar una primera cita de valoración.",
      "Algunas señales incluyen dificultad para mantener la atención, distraerse con facilidad, problemas para seguir instrucciones, impulsividad, dificultad para esperar turnos, inquietud constante o dificultad para organizarse y completar actividades acordes a su edad.",
      "La presencia de una o varias de estas características no significa necesariamente que un niño tenga TDAH, pero una cita de valoración puede ayudar a comprender mejor sus necesidades.",
    ],
  },
  {
    q: "¿Es normal que mi hijo haga muchos berrinches?",
    a: [
      "Los berrinches forman parte del desarrollo infantil, especialmente durante ciertas etapas; sin embargo, cuando son muy intensos, frecuentes, prolongados o interfieren significativamente con la participación del niño, puede ser importante comprender qué está ocurriendo.",
      "Los berrinches pueden estar relacionados con diferentes factores, como dificultades en la comunicación, regulación emocional, procesamiento sensorial, frustración, cambios en la rutina o necesidades del desarrollo que el niño aún no logra expresar de otra manera.",
      "Comprender el motivo detrás de esta conducta permite identificar estrategias y apoyos adecuados para favorecer el bienestar del niño y su familia.",
    ],
  },
  {
    q: "¿Por qué mi hijo no presta atención?",
    a: [
      "La capacidad de atención cambia según la edad y etapa de desarrollo de cada niño. Sin embargo, cuando las dificultades para mantener la atención interfieren de manera importante en el juego, el aprendizaje o las actividades cotidianas, una primera cita de valoración podría ayudar a comprender mejor sus necesidades.",
      "Las dificultades atencionales pueden relacionarse con diferentes factores, como el desarrollo, regulación emocional, procesamiento sensorial, lenguaje, sueño, aprendizaje o necesidades específicas del neurodesarrollo.",
    ],
  },
  {
    q: "¿A qué edad se recomienda iniciar terapia infantil?",
    a: [
      "No existe una edad específica para iniciar terapia infantil. Lo más importante es identificar oportunamente cuando existen dificultades o señales que pueden estar interfiriendo con el desarrollo, participación o bienestar del niño.",
      "La intervención temprana puede favorecer el desarrollo de habilidades y brindar estrategias oportunas tanto al niño como a su familia. En la mayoría de los casos, el acompañamiento puede iniciarse desde los primeros meses de vida.",
    ],
  },
  {
    q: "¿Es normal que mi hijo no quiera comer?",
    a: [
      "Es normal que algunos niños atraviesen etapas donde rechazan ciertos alimentos. Sin embargo, cuando las dificultades para comer son persistentes, generan estrés familiar o afectan la nutrición, crecimiento o participación del niño, es importante realizar una primera cita de valoración.",
      "Las dificultades en la alimentación pueden relacionarse con la sensibilidad a texturas, sabores, olores, experiencias previas, aspectos conductuales o necesidades del neurodesarrollo.",
      "En Sinapsyc buscamos comprender las necesidades de cada niño para desarrollar estrategias individualizadas, trabajando de la mano con la familia y la escuela.",
    ],
  },
  {
    q: "¿Es normal que mi hijo no gatee, no camine o no se siente?",
    a: [
      "Cada niño desarrolla habilidades motoras a su propio ritmo; sin embargo, cuando existen dificultades para alcanzar hitos como sostener la cabeza, sentarse, gatear, caminar o participar en actividades propias de su edad, es importante realizar una cita de valoración.",
      "Estas dificultades pueden relacionarse con diferentes factores del desarrollo, tono muscular, coordinación o movimiento. Una identificación temprana permite brindar estrategias y apoyos oportunos para favorecer su participación, movilidad y bienestar.",
    ],
  },
  {
    q: "¿Cómo puede ayudar la terapia a niños con parálisis cerebral infantil?",
    a: [
      "Cada niño con parálisis cerebral infantil presenta necesidades, fortalezas y objetivos diferentes, por lo que el acompañamiento terapéutico debe adaptarse de manera individualizada.",
      "Dependiendo de las necesidades de cada niño, la intervención puede incluir terapia física, terapia ocupacional, integración sensorial, terapia de alimentación, terapia de comunicación y lenguaje y estrategias enfocadas en la vida diaria.",
      "En Sinapsyc trabajamos con un equipo interdisciplinario, permitiendo una atención integral y coordinada, de la mano con la familia, la escuela y otros profesionales.",
    ],
  },
  {
    q: "¿Cómo saber si mi bebé necesita terapia?",
    a: [
      "Cada bebé se desarrolla a su propio ritmo; sin embargo, cuando existen dudas sobre su desarrollo, movimiento, alimentación, comunicación, juego, regulación o participación, una primera cita de valoración es un buen paso.",
      "Algunas familias pueden notar dificultades para sostener la cabeza, sentarse, gatear, girarse, en la alimentación, sensibilidad a estímulos, irritabilidad constante o dificultades para participar en actividades esperadas para su edad.",
      "La identificación temprana permite brindar estrategias y apoyos oportunos para favorecer el desarrollo y bienestar del bebé y su familia.",
    ],
  },
  {
    q: "¿Necesito una referencia médica para agendar una cita?",
    a: [
      "No es necesario. Los padres pueden comunicarse directamente con nosotros para agendar una evaluación inicial. Durante este proceso te guiaremos y orientaremos; en dado caso de que sea necesario, también haremos la recomendación para la valoración por parte de algún otro especialista.",
    ],
  },
  {
    q: "¿Qué sucede en la primera cita de valoración?",
    a: [
      "La primera cita consiste en una entrevista guiada a los padres de familia con el objetivo de conocer el desarrollo del niño en diferentes áreas, como cognitiva, sensorial, motriz, emocional, etc. Esta información nos permite comprender el perfil del niño, identificando sus fortalezas y necesidades, así como el ambiente familiar y escolar en el que se desenvuelve.",
      "Esta cita representa el primer contacto con la familia y para nosotros es muy importante que los padres sean parte activa del proceso. Nuestro objetivo es que la familia se sienta acompañada y orientada desde el primer momento.",
    ],
  },
  {
    q: "¿Cómo saben qué tipo de terapia necesita mi hijo?",
    a: [
      "A través de la primera cita de valoración, el especialista podrá identificar cuáles son las áreas de desarrollo que están afectando la participación del niño en su vida diaria.",
      "Como parte del proceso también nos apoyamos en herramientas útiles como los tamizajes del desarrollo: evaluaciones breves que nos permiten observar diferentes áreas del desarrollo del niño (lenguaje, conducta, movimiento, sensorial, etc.). Esta información nos ayuda a orientar de manera adecuada el tipo de terapia que favorezca su desarrollo.",
    ],
  },
];

export const approach = [
  {
    step: "01",
    title: "Cita de valoración",
    color: "teal" as const,
    text: "Una entrevista guiada a los padres para conocer la historia de desarrollo de cada niño, incluso desde el embarazo, y comprender sus fortalezas, necesidades y los objetivos de cada familia.",
  },
  {
    step: "02",
    title: "Evaluación",
    color: "sky" as const,
    text: "Una valoración directa del niño desde el área correspondiente, con observación clínica, actividades específicas y herramientas de evaluación que nos permiten comprender mejor su perfil.",
  },
  {
    step: "03",
    title: "Resultados y objetivos",
    color: "sun" as const,
    text: "Compartimos un informe claro con la familia: los hallazgos encontrados y los objetivos terapéuticos a corto, mediano y largo plazo.",
  },
  {
    step: "04",
    title: "Intervención",
    color: "bubble" as const,
    text: "Iniciamos un plan de intervención individualizado, diseñado a la medida de las fortalezas y áreas de apoyo de cada niño.",
  },
  {
    step: "05",
    title: "Seguimiento continuo",
    color: "teal" as const,
    text: "Acompañamiento constante y reevaluaciones periódicas para observar avances, ajustar objetivos y seguir favoreciendo el desarrollo y bienestar del niño.",
  },
];

export const testimonials = [
  {
    name: "Mariana G.",
    role: "Mamá de Emilio (4 años)",
    quote:
      "Desde la primera cita nos sentimos acompañados. El equipo explica todo con claridad y calidez. Emilio disfruta ir a terapia y hemos visto avances hermosos en su lenguaje.",
    color: "teal" as const,
  },
  {
    name: "Luis y Paola",
    role: "Papás de Regina (2 años)",
    quote:
      "Nos orientaron con muchísima paciencia. Aquí no solo trabajan con la niña, también nos dan herramientas para casa. Se nota que aman lo que hacen.",
    color: "bubble" as const,
  },
  {
    name: "Adriana M.",
    role: "Mamá de Santiago (6 años)",
    quote:
      "La terapia de integración sensorial cambió nuestras rutinas. Santiago está más regulado, come mejor y llega más tranquilo a la escuela. ¡Gracias, Sinapsyc!",
    color: "sky" as const,
  },
  {
    name: "Fernanda R.",
    role: "Mamá de Valentina (3 años)",
    quote:
      "Un espacio cálido y profesional. Cada logro, por pequeño que parezca, lo celebran con nosotros. Recomiendo Sinapsyc con el corazón.",
    color: "sun" as const,
  },
];

// ---------- Fotografías reales del centro ----------
export const foto = (name: string) => `/fotos/${name}.jpg`;

/** Foto principal + galería por programa (fotos reales del centro). */
export const programMedia: Record<string, { photo: string; gallery: string[] }> = {
  "terapia-ocupacional": {
    photo: "juego_carritos_rampa_tapete",
    gallery: ["juego_carritos_rampa_tapete", "terapia_juguetes_huevos_helicoptero"],
  },
  "integracion-sensorial": {
    photo: "terapia_sensorial_caja_arena",
    gallery: [
      "terapia_sensorial_caja_arena",
      "terapia_columpio_vestibular",
      "terapia_tactil_antifaz_cubos",
      "terapia_sensorial_espuma_columpio",
      "terapia_auditiva_orejeras",
    ],
  },
  "terapia-fisica": {
    photo: "terapia_columpio_gorro_fresa",
    gallery: ["terapia_columpio_gorro_fresa", "terapia_grupal_mesa_escalada"],
  },
  "terapia-alimentacion": {
    photo: "revision_oral_casa_munecas",
    gallery: ["revision_oral_casa_munecas", "terapia_oral_miofuncional_lengua"],
  },
  "terapia-conductual": {
    photo: "terapia_juguetes_huevos_helicoptero",
    gallery: ["terapia_juguetes_huevos_helicoptero"],
  },
  "terapia-lenguaje": {
    photo: "terapia_lenguaje_laptop_nino",
    gallery: [
      "terapia_lenguaje_laptop_nino",
      "terapia_lenguaje_laptop_cuaderno",
      "terapia_secuencia_tarjetas",
    ],
  },
  "terapia-aprendizaje": {
    photo: "nino_leyendo_libro_animales",
    gallery: [
      "nino_leyendo_libro_animales",
      "terapia_rompecabezas_mesa",
      "terapia_tablet_rompecabezas_granja",
    ],
  },
  "intervencion-temprana": {
    photo: "terapia_bebe_cuna_azul",
    gallery: [
      "terapia_bebe_cuna_azul",
      "terapia_bebe_recien_nacido",
      "terapia_columpio_sensorial_bebe",
    ],
  },
  "evaluacion-neuropsicologica": {
    photo: "terapeuta_laptop_mural_arcoiris",
    gallery: ["terapeuta_laptop_mural_arcoiris", "terapia_rompecabezas_mesa"],
  },
  "terapia-grupal": {
    photo: "terapia_grupal_bebes_colchoneta",
    gallery: [
      "terapia_grupal_bebes_colchoneta",
      "terapia_grupal_mesa_escalada",
      "selfie_mural_espacial_ninos",
    ],
  },
  "clases-psicomotricidad": {
    photo: "terapia_twister_mural_espacial",
    gallery: ["terapia_twister_mural_espacial", "terapia_grupal_mesa_escalada"],
  },
};

export type Photo = { name: string; alt: string };

/** Carrusel del inicio: un vistazo al día a día. */
export const carouselPhotos: Photo[] = [
  { name: "terapia_columpio_vestibular", alt: "Terapia en columpio de integración sensorial" },
  { name: "juego_carritos_rampa_tapete", alt: "Niños jugando con carritos en el tapete" },
  { name: "terapia_bebe_cuna_azul", alt: "Terapeuta acompañando a un bebé" },
  { name: "terapia_lenguaje_laptop_nino", alt: "Sesión de terapia de lenguaje" },
  { name: "terapia_sensorial_caja_arena", alt: "Juego sensorial con caja de arena" },
  { name: "terapia_grupal_mesa_escalada", alt: "Terapia grupal y escalada" },
];

/** Galería completa (página Vida en Sinapsyc). */
export const galleryPhotos: Photo[] = [
  { name: "terapia_columpio_vestibular", alt: "Columpio vestibular" },
  { name: "juego_carritos_rampa_tapete", alt: "Juego con carritos en el tapete" },
  { name: "terapia_bebe_cuna_azul", alt: "Acompañamiento a un bebé" },
  { name: "terapia_sensorial_caja_arena", alt: "Caja de arena sensorial" },
  { name: "terapia_lenguaje_laptop_nino", alt: "Terapia de lenguaje" },
  { name: "terapia_columpio_gorro_fresa", alt: "Terapia física en columpio" },
  { name: "terapia_tactil_antifaz_cubos", alt: "Exploración táctil con antifaz" },
  { name: "terapia_bebe_recien_nacido", alt: "Estimulación temprana con bebé" },
  { name: "terapeuta_laptop_mural_arcoiris", alt: "Nuestro espacio con mural de arcoíris" },
  { name: "terapia_grupal_mesa_escalada", alt: "Terapia grupal y escalada" },
  { name: "nino_leyendo_libro_animales", alt: "Niño leyendo un libro de animales" },
  { name: "terapia_auditiva_orejeras", alt: "Regulación auditiva con orejeras" },
  { name: "terapia_sensorial_espuma_columpio", alt: "Juego sensorial con espuma" },
  { name: "terapia_rompecabezas_mesa", alt: "Rompecabezas y aprendizaje" },
  { name: "terapia_tablet_rompecabezas_granja", alt: "Actividad de aprendizaje con tablet" },
  { name: "revision_oral_casa_munecas", alt: "Valoración de alimentación" },
  { name: "terapia_grupal_bebes_colchoneta", alt: "Terapia grupal de bebés" },
  { name: "terapia_twister_mural_espacial", alt: "Psicomotricidad con Twister" },
  { name: "terapia_secuencia_tarjetas", alt: "Trabajo con tarjetas de secuencia" },
  { name: "selfie_mural_espacial_ninos", alt: "Niños en el mural espacial" },
  { name: "terapia_columpio_sensorial_bebe", alt: "Bebé en columpio sensorial" },
  { name: "terapia_oral_miofuncional_lengua", alt: "Terapia oral miofuncional" },
];

/** Momentos y eventos del centro. */
export const eventPhotos: Photo[] = [
  { name: "dia_mundial_autismo_juguete_cuentas", alt: "Día Mundial de Concienciación del Autismo" },
  { name: "manos_pintadas_azul_adolescente", alt: "Manos azules por el Día del Autismo" },
  { name: "halloween_disfraz_mario_bros", alt: "Halloween en Sinapsyc" },
  { name: "halloween_disfraces_alienigenas", alt: "Disfraces de Halloween" },
  { name: "fiesta_verano_luz_neon", alt: "Fiesta de verano con luz neón" },
  { name: "fiesta_disfraz_rockero_rapunzel", alt: "Fiesta de disfraces" },
  { name: "disfraz_minion_abeja", alt: "Día de disfraces" },
  { name: "entrega_diploma_reconocimiento", alt: "Entrega de reconocimiento a una familia" },
];

export type VideoItem = { file: string; poster: string; title: string };

export const videos: VideoItem[] = [
  { file: "video_terapia_grupal_columpio_hamaca", poster: "poster-video_terapia_grupal_columpio_hamaca", title: "Terapia en columpio y hamaca" },
  { file: "video_juego_paracaidas_grupal", poster: "poster-video_juego_paracaidas_grupal", title: "Juego grupal con paracaídas" },
  { file: "video_juego_aros_ninos_verano", poster: "poster-video_juego_aros_ninos_verano", title: "Juego de aros en verano" },
  { file: "video_terapia_tactil_antifaz_cubos", poster: "poster-video_terapia_tactil_antifaz_cubos", title: "Exploración táctil con antifaz" },
  { file: "video_fiesta_verano_pesca_luz_neon", poster: "poster-video_fiesta_verano_pesca_luz_neon", title: "Fiesta de verano: pesca con luz neón" },
  { file: "video_dia_mundial_autismo_manos_azules", poster: "poster-video_dia_mundial_autismo_manos_azules", title: "Día Mundial del Autismo" },
];

// ---------- Reseñas reales de Google ----------
export const googleRating = { value: 4.2, count: 21 };

export type GoogleReview = {
  author: string;
  text: string;
  localGuide?: boolean;
  color: "teal" | "sky" | "sun" | "bubble";
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Liliana Ascencio",
    color: "teal",
    text: "Llegamos cuando mi niño tenía año y medio con un diagnóstico reciente de autismo. Desde el primer momento nos sentimos entendidos, orientados y acompañados. Hoy tiene 5 años y no tengo más que agradecimiento: hemos pasado por terapia conductual, sensorial y de lenguaje, y nos han dado herramientas para lograr su independencia. Lo más valioso: haber logrado un niño regulado por más de año y medio sin medicación, aplicando las estrategias que aquí nos enseñan. ¡100% recomendados!",
  },
  {
    author: "Danny Rizo",
    localGuide: true,
    color: "bubble",
    text: "Sinapsyc no es solo un lugar de terapias, ellos son una familia. Atendieron a mi hijo con mucha calidad y su terapeuta Andy siempre se ocupaba de ayudarnos. Mi niño es autista y siempre nos brindaron apoyo y aprendizaje. Si estás buscando un centro de neurodesarrollo, te súper recomiendo Sinapsyc: desde las recepcionistas hasta los terapeutas son excelentes personas.",
  },
  {
    author: "Athziri Yasmin Tejeda",
    color: "sun",
    text: "¡10000/10! ✨ Mis felicitaciones por su gran dedicación y apoyo. A mi niño le ayudaron muchísimo en su desarrollo, y a mí a conocerlo y saber guiarlo de mejor forma. Un agradecimiento especial para Andrea, que pese a que mi niño ya está en otro enfoque, sigue muy al pendiente.",
  },
  {
    author: "Aminta Briseño",
    localGuide: true,
    color: "sky",
    text: "Excelente centro de terapias y muy completo. Mi hija asiste encantada a pesar de que son cosas que le parecen difíciles; va feliz pues le gusta el trato de la terapeuta Andrea. Siento que hemos avanzado mucho, siempre respetando su ritmo y su autoestima. Súper recomendado.",
  },
  {
    author: "Paulina Chavoya",
    color: "bubble",
    text: "Excelente atención, siempre buscando apoyar a los niños con mucho cariño, amor y empatía. Explican todo súper bien para que entiendas el proceso por el que están pasando los peques, y con mucha empatía hacia ti como mamá o papá. 100% recomendado.",
  },
  {
    author: "Cristina Alejandra Costilla",
    color: "teal",
    text: "¡Excelente servicio y atención humana! Las maestras Rosa y Gabriela se mostraron siempre comprometidas con el proceso de mis hijos, que avanzaron muchísimo. También agradezco a Susi por estar siempre atenta en recepción. ¡Sigan trabajando igual!",
  },
  {
    author: "Etcin Manzo",
    color: "sun",
    text: "Desde la primera sesión mi hija salió encantada. Las terapeutas son comprometidas, conocen su área y además te orientan para el adecuado neurodesarrollo de los niños.",
  },
  {
    author: "Rodrigo Castro",
    localGuide: true,
    color: "sky",
    text: "Excelente lugar para el apoyo de tu hijo. Personal muy capacitado y con ganas de ayudar. Calidad humana inmejorable.",
  },
];
