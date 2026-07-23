import { Container, Pill } from "./ui";
import { clsx } from "@/lib/clsx";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  eyebrowClass = "bg-white/80 text-teal-600",
  tint = "teal",
  emoji,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  eyebrowClass?: string;
  tint?: "teal" | "sky" | "sun" | "bubble";
  emoji?: string;
}) {
  const tints: Record<string, string> = {
    teal: "from-teal-100 via-cream to-sky-brand-100",
    sky: "from-sky-brand-100 via-cream to-teal-100",
    sun: "from-sun-100 via-cream to-bubble-100",
    bubble: "from-bubble-100 via-cream to-sun-100",
  };
  return (
    <section className={clsx("relative overflow-hidden bg-gradient-to-br", tints[tint])}>
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative py-14 text-center sm:py-20">
        {eyebrow && (
          <Pill className={clsx("mb-4", eyebrowClass)}>
            {emoji && <span>{emoji}</span>}
            {eyebrow}
          </Pill>
        )}
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-700 leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
