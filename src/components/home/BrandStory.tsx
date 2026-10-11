"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-32 bg-[#3A2A0F] text-[#F1DDC4] relative overflow-hidden">
      
      {/* Decorative background typography */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] overflow-hidden pointer-events-none">
        <span className="font-heading text-[20vw] whitespace-nowrap leading-none select-none">
          Natürlisch
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
        
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-sans text-xs uppercase tracking-[0.4em] text-[#F1DDC4]/60 mb-12 block"
        >
          04 — Our Philosophy
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12"
        >
          Stripping away the unnecessary.<br />
          Leaving only <span className="italic font-light opacity-90">what your skin</span><br />
          <span className="italic font-light opacity-90">truly needs.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-8 text-left max-w-3xl mx-auto font-sans text-[#F1DDC4]/80 text-lg md:text-xl leading-relaxed"
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
