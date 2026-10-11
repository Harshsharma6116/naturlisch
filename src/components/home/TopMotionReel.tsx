"use client";

import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface ReelItem {
  id: string;
  type: "model" | "texture";
  title: string;
  subtitle: string;
  media: string;
  tag: string;
  slug: string;
}

const reelItems: ReelItem[] = [
  {
    id: "cherry-model",
    type: "model",
    title: "Hibiscus Cherry Dew",
    subtitle: "Lookbook Shoot 01",
    media: "/images/models/model_cherry_shoot.gif",
    tag: "Dewy Radiance",
    slug: "revitalizing-ruby-scrub",
  },
  {
    id: "texture-melt",
    type: "texture",
    title: "Botanical Dissolve",
    subtitle: "Texture Macro In Motion",
    media: "/images/models/texture_melt_shoot.gif",
    tag: "Micro-Exfoliation",
    slug: "revitalizing-ruby-scrub",
  },
  {
    id: "azure-model",
    type: "model",
    title: "Azure Tide Cleanse",
    subtitle: "Lookbook Shoot 02",
    media: "/images/models/model_azure_shoot.gif",
    tag: "Ocean Purify",
    slug: "azure-tide-scrub",
  },
  {
    id: "espresso-model",
    type: "model",
    title: "Espresso Radiance Buff",
    subtitle: "Lookbook Shoot 03",
    media: "/images/models/model_espresso_shoot.gif",
    tag: "Tan Removal",
    slug: "espresso-body-scrub",
  },
  {
    id: "glow-model",
    type: "model",
    title: "Golden Hour Glow",
    subtitle: "Lookbook Shoot 04",
    media: "/images/models/model_glow_shoot.gif",
    tag: "Silk Skin Finish",
    slug: "revitalizing-ruby-scrub",
  },
];

export default function TopMotionReel() {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF4ED] border-b border-border overflow-hidden select-none">
      <div className="container mx-auto px-4 max-w-7xl mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary/70 font-semibold">
            In Motion • Studio Film Reel
          </span>
        </div>
        <p className="font-sans text-[11px] sm:text-xs tracking-wider text-foreground/60 uppercase">
          Hover to pause • Tap to shop look
        </p>
      </div>

      {/* Infinite Horizontal Reel Strip */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge blur vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF4ED] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF4ED] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          
          {/* Reel Track 1 */}
          {reelItems.map((item, idx) => (
            <Link
              key={`r1-${item.id}-${idx}`}
              href={`/shop/${item.slug}`}
              className="group relative w-36 sm:w-48 md:w-56 aspect-[4/5] rounded-2xl overflow-hidden bg-[#1A1410] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 shrink-0 ring-1 ring-black/5"
            >
              {/* Animated GIF Frame */}
              <img
                src={item.media}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Film Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

              {/* Top Viewfinder Stamp */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                <span className="text-[9px] font-mono tracking-wider text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  REC ●
                </span>
                <span className="text-[9px] font-mono tracking-wider text-white/70">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Info Stamp */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-end justify-between pointer-events-none">
                <div>
                  <h5 className="font-heading text-xs sm:text-sm leading-tight text-white/95">
                    {item.title}
                  </h5>
                  <p className="font-sans text-[9px] text-white/70">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </Link>
          ))}

          {/* Reel Track 2 (Duplicate for infinite seamless loop) */}
          {reelItems.map((item, idx) => (
            <Link
              key={`r2-${item.id}-${idx}`}
              href={`/shop/${item.slug}`}
              className="group relative w-36 sm:w-48 md:w-56 aspect-[4/5] rounded-2xl overflow-hidden bg-[#1A1410] shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 shrink-0 ring-1 ring-black/5"
            >
              {/* Animated GIF Frame */}
              <img
                src={item.media}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Film Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

              {/* Top Viewfinder Stamp */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                <span className="text-[9px] font-mono tracking-wider text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  REC ●
                </span>
                <span className="text-[9px] font-mono tracking-wider text-white/70">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Info Stamp */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white flex items-end justify-between pointer-events-none">
                <div>
                  <h5 className="font-heading text-xs sm:text-sm leading-tight text-white/95">
                    {item.title}
                  </h5>
                  <p className="font-sans text-[9px] text-white/70">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
