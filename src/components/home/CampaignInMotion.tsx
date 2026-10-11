"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CampaignShoot {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  modelMedia: string; // GIF, MP4, or WebM
  productName: string;
  productPrice: number;
  productImg: string;
  productSlug: string;
  description: string;
  benefits: string[];
  shootCredits: string;
}

const shoots: CampaignShoot[] = [
  {
    id: "cherry",
    tag: "Shoot 01 — Dewy Radiance",
    title: "Hibiscus Cherry Dew",
    subtitle: "Natural Daylight & Botanical Glow",
    modelMedia: "/images/models/model_cherry_shoot.gif",
    productName: "Hibiscus Cherry Body Scrub",
    productPrice: 1299,
    productImg: "/images/assets/asset_6.webp",
    productSlug: "revitalizing-ruby-scrub",
    description: "Fine ruby crystals suspended in botanical oils to dissolve roughness and leave skin dewy, supple, and glowing.",
    benefits: ["Target: Strawberry Skin", "Antioxidant Rich", "Silky Skin Finish"],
    shootCredits: "Shot on 35mm film • Natural studio morning light",
  },
  {
    id: "azure",
    tag: "Shoot 02 — The Cool Cleanse",
    title: "Azure Tide Purify",
    subtitle: "Deep Pore Clarity & Ocean Refresh",
    modelMedia: "/images/models/model_azure_shoot.gif",
    productName: "Azure Tide Body Polish",
    productPrice: 899,
    productImg: "/images/assets/asset_16.webp",
    productSlug: "azure-tide-scrub",
    description: "Invigorating marine salt and mineral-rich extracts that lift sweat, oil, and impurities without stripping natural moisture.",
    benefits: ["Target: Post-Workout Buff", "Refreshing Feel", "Effortless Rinse"],
    shootCredits: "Studio portraiture • Direct softbox lighting",
  },
  {
    id: "espresso",
    tag: "Shoot 03 — Morning Awaken",
    title: "Espresso Radiance Buff",
    subtitle: "Warm Roasted Polish & Even Tone",
    modelMedia: "/images/models/model_espresso_shoot.gif",
    productName: "Espresso Awakening Scrub",
    productPrice: 499,
    productImg: "/images/products/product_5.webp",
    productSlug: "espresso-body-scrub",
    description: "Freshly roasted Arabica grounds paired with nourishing shea butter to gently buff away stubborn tan and reveal renewed brightness.",
    benefits: ["Target: Stubborn Tanning", "Micro-Circulation", "Warm Earthy Aroma"],
    shootCredits: "Golden hour capture • Warm minimalist styling",
  },
];

export default function CampaignInMotion() {
  const [activeTab, setActiveTab] = useState(0);
  const currentShoot = shoots[activeTab];

  return (
    <section className="py-16 md:py-32 bg-[#F4EBE1]/60 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 pb-6 md:pb-8 border-b border-primary/10 gap-4 md:gap-6">
          <div>
            <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.3em] text-primary/60 mb-2 md:mb-3 block">
              02 — Campaign / In Motion
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl text-primary leading-tight">
              The Ritual. <span className="italic font-light">In Motion.</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-foreground/70 max-w-sm leading-relaxed">
            Inspired by luxury editorial lookbooks. Watch our formulations melt, lather, and polish in real light.
          </p>
        </div>

        {/* Tab Selectors - Horizontal Swipe on Mobile, Wrap on Desktop */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 mb-8 md:mb-12 -mx-4 px-4 md:mx-0 md:px-0 flex-nowrap md:flex-wrap">
          {shoots.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-[11px] sm:text-xs uppercase tracking-wider md:tracking-widest transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${
                idx === activeTab
                  ? "bg-primary text-[#F1DDC4] shadow-md scale-[1.02]"
                  : "bg-white/80 hover:bg-white text-primary/70 border border-primary/15"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${idx === activeTab ? "bg-[#F1DDC4]" : "bg-primary/40"}`} />
              {s.title}
            </button>
          ))}
        </div>

        {/* Main Editorial Split: Model Shoot GIF Frame + Product Pair */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center">
          
          {/* Left: Model Shoot GIF Display (4:5 Strathberry ratio) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl bg-[#1A1410] ring-1 ring-black/10 group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentShoot.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  {/* The Model Shoot GIF */}
                  <img
                    src={currentShoot.modelMedia}
                    alt={`${currentShoot.title} Model Shoot`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Editorial Film Overlay Accents */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Live Badge */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 md:px-3.5 md:py-1.5 rounded-full border border-white/10 z-10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-white/90">
                      Shoot In Motion
                    </span>
                  </div>

                  {/* Bottom Model Details */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white z-10">
                    <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest text-white/70 block mb-0.5 md:mb-1">
                      {currentShoot.tag}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl mb-0.5 md:mb-1">
                      {currentShoot.title}
                    </h3>
                    <p className="font-sans text-[11px] md:text-xs text-white/80 opacity-90">
                      {currentShoot.shootCredits}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Right: "Featured in this Shoot" Editorial Product Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentShoot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="bg-white/80 backdrop-blur-sm p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-3xl border border-primary/10 shadow-lg md:shadow-xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-primary/60">
                    Featured Formulation
                  </span>
                  <span className="font-heading text-xl md:text-2xl text-primary font-semibold">
                    ₹{currentShoot.productPrice}
                  </span>
                </div>

                {/* Product Thumbnail with hover zoom */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-background mb-5 md:mb-6 shadow-sm border border-primary/5">
                  <img
                    src={currentShoot.productImg}
                    alt={currentShoot.productName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h4 className="font-heading text-xl sm:text-2xl md:text-3xl text-primary mb-2 md:mb-3">
                  {currentShoot.productName}
                </h4>

                <p className="font-sans text-xs sm:text-sm text-foreground/75 leading-relaxed mb-5 md:mb-6">
                  {currentShoot.description}
                </p>

                {/* Benefits Tag Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 md:mb-8">
                  {currentShoot.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="font-sans text-[10px] sm:text-[11px] bg-secondary/60 text-primary px-2.5 sm:px-3 py-1 rounded-full border border-primary/10"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                {/* Call To Action Buttons - Stacked on Mobile, Inline on Tablet/Desktop */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-3 border-t border-primary/10">
                  <Link
                    href={`/shop/${currentShoot.productSlug}`}
                    className="w-full sm:flex-1 bg-primary text-[#F1DDC4] py-3 sm:py-3.5 px-6 rounded-full font-sans text-[11px] sm:text-xs uppercase tracking-widest text-center hover:bg-[#432E0E] transition-colors shadow-md active:scale-[0.98]"
                  >
                    Shop This Formulation
                  </Link>
                  <Link
                    href="/shop"
                    className="w-full sm:w-auto py-3 sm:py-3.5 px-5 rounded-full border border-primary/20 font-sans text-[11px] sm:text-xs uppercase tracking-widest text-primary text-center hover:bg-primary/5 transition-colors active:scale-[0.98]"
                  >
                    All Shoots
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
