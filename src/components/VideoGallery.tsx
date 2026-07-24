"use client";

import { useState } from "react";
import Image from "next/image";
import { foto, type VideoItem } from "@/lib/site";
import { clsx } from "@/lib/clsx";

export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => {
        const active = playing === v.file;
        return (
          <div
            key={v.file}
            className="group relative overflow-hidden rounded-[28px] bg-ink shadow-lg shadow-teal-900/5 ring-1 ring-black/[0.03]"
          >
            <div className="relative aspect-[3/4] sm:aspect-square">
              {active ? (
                <video
                  src={`/video/${v.file}.mp4`}
                  poster={foto(v.poster)}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full bg-black object-contain"
                />
              ) : (
                <button
                  onClick={() => setPlaying(v.file)}
                  className="absolute inset-0"
                  aria-label={`Reproducir video: ${v.title}`}
                >
                  <Image
                    src={foto(v.poster)}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                  <span
                    className={clsx(
                      "absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-teal-600 shadow-xl transition-transform group-hover:scale-110"
                    )}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left">
                    <span className="font-display text-sm font-600 text-white">{v.title}</span>
                  </span>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
