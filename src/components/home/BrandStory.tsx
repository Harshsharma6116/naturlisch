"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-[#3A2A0F] text-[#F1DDC4] relative overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        
        {/* Section Label */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-sans text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#F1DDC4]/60 mb-6 md:mb-10 block"
        >
          04 — Our Philosophy
        </motion.span>

        {/* Headline - fluid typography without awkward forced linebreaks on mobile */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] md:leading-[1.1] mb-8 md:mb-12 max-w-3xl mx-auto"
        >
          Stripping away the unnecessary.{" "}
          <span className="italic font-light opacity-90 block sm:inline mt-1.5 sm:mt-0">
            Leaving only what your skin truly needs.
          </span>
        </motion.h2>

        {/* Elegant hairline accent divider */}
        <div className="w-12 h-px bg-[#F1DDC4]/25 mx-auto mb-8 md:mb-12" />

        {/* Narrative Paragraphs in clean, legible editorial cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left max-w-2xl md:max-w-3xl mx-auto font-sans text-[#F1DDC4]/85 text-xs sm:text-sm md:text-base leading-relaxed"
        >
          <div className="bg-white/[0.03] p-5 sm:p-6 rounded-2xl border border-white/[0.06] backdrop-blur-sm shadow-sm">
            <p>
              At Natürlisch, we believe in authentic radiance. Our products are formulated with organic symmetry in mind, bringing you an earthy sophistication that doesn't just mask, but deeply nourishes.
            </p>
          </div>
          <div className="bg-white/[0.03] p-5 sm:p-6 rounded-2xl border border-white/[0.06] backdrop-blur-sm shadow-sm">
            <p>
              Every bottle represents our commitment to warm minimalism—a return to grounded elegance. No harsh chemicals, no artificial noise. Just raw, effective nature.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
