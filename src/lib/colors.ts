export type Brand = "teal" | "sky" | "sun" | "bubble";

// Full static class strings so Tailwind's compiler keeps them.
export const colorMap: Record<
  Brand,
  {
    text: string;
    bgSoft: string;
    bgSolid: string;
    border: string;
    ring: string;
    chipBg: string;
    gradient: string;
    dot: string;
  }
> = {
  teal: {
    text: "text-teal-600",
    bgSoft: "bg-teal-100",
    bgSolid: "bg-teal-500",
    border: "border-teal-400",
    ring: "ring-teal-400",
    chipBg: "bg-teal-100 text-teal-600",
    gradient: "from-teal-400 to-teal-600",
    dot: "bg-teal-400",
  },
  sky: {
    text: "text-sky-brand-600",
    bgSoft: "bg-sky-brand-100",
    bgSolid: "bg-sky-brand-500",
    border: "border-sky-brand-300",
    ring: "ring-sky-brand-300",
    chipBg: "bg-sky-brand-100 text-sky-brand-600",
    gradient: "from-sky-brand-300 to-sky-brand-600",
    dot: "bg-sky-brand-500",
  },
  sun: {
    text: "text-sun-500",
    bgSoft: "bg-sun-100",
    bgSolid: "bg-sun-400",
    border: "border-sun-300",
    ring: "ring-sun-300",
    chipBg: "bg-sun-100 text-sun-500",
    gradient: "from-sun-300 to-sun-500",
    dot: "bg-sun-400",
  },
  bubble: {
    text: "text-bubble-600",
    bgSoft: "bg-bubble-100",
    bgSolid: "bg-bubble-500",
    border: "border-bubble-300",
    ring: "ring-bubble-300",
    chipBg: "bg-bubble-100 text-bubble-600",
    gradient: "from-bubble-300 to-bubble-600",
    dot: "bg-bubble-500",
  },
};
