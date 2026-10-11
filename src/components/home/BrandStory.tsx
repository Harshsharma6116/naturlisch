"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-24 sm:py-28 md:py-36 bg-[#3A2A0F] text-[#F1DDC4] relative overflow-hidden flex flex-col justify-center min-h-[70vh] md:min-h-[80vh]">
      
      {/* Decorative background typography - Perfectly placed watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] overflow-hidden pointer-events-none select-none">
        <span className="font-heading text-[26vw] md:text-[20vw] whitespace-nowrap leading-none tracking-tight">
          Natürlisch
        </span>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        {/* Section Label */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-sans text-[11px] md:text-xs uppercase tracking-[0.4em] text-[#F1DDC4]/60 mb-8 md:mb-12 block"
        >
          04 — Our Philosophy
        </motion.span>

        {/* Big Editorial Headline - In place on mobile and desktop */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.14] mb-10 md:mb-16 max-w-4xl mx-auto"
        >
          Stripping away the unnecessary.<br className="hidden sm:inline" />{" "}
          Leaving only <span className="italic font-light opacity-90">what your skin</span><br />
          <span className="italic font-light opacity-90">truly needs.</span>
        </motion.h2>

        {/* Pure Editorial Narrative Paragraphs (No boxes, clean mobile scale) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 md:gap-12 text-left max-w-3xl mx-auto font-sans text-[#F1DDC4]/80 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          <p className="flex-1">
            At Natürlisch, we believe in authentic radiance. Our products are formulated with organic symmetry in mind, bringing you an earthy sophistication that doesn't just mask, but deeply nourishes.
          </p>
          <p className="flex-1">
            Every bottle represents our commitment to warm minimalism—a return to grounded elegance. No harsh chemicals, no artificial noise. Just raw, effective nature.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
