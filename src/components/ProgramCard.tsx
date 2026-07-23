import Link from "next/link";
import Image from "next/image";
import { Program } from "@/lib/site";
import { colorMap } from "@/lib/colors";
import { clsx } from "@/lib/clsx";

export default function ProgramCard({ program }: { program: Program }) {
  const c = colorMap[program.color];
  return (
    <Link
      href={`/programas/${program.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className={clsx("relative aspect-[4/3] overflow-hidden", c.bgSoft)}>
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/85 text-2xl shadow-sm backdrop-blur">
          {program.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={clsx("font-display text-xl font-600", c.text)}>
          {program.title}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
          {program.short}
        </p>
        <span className={clsx("mt-4 inline-flex items-center gap-1 text-sm font-700", c.text)}>
          Conocer más
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
