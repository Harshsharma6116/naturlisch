"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Story Text */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-sans tracking-widest text-primary/70 uppercase mb-4 block">Our Story</span>
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6 leading-tight">
            Embracing the essence of <br/> <span className="italic">Naturalness</span>.
          </h2>
          <p className="font-sans text-foreground opacity-80 text-lg mb-6 leading-relaxed">
            At Natürlisch, we believe in authentic radiance. Our products are formulated with organic symmetry in mind, bringing you earthy sophistication that doesn't just mask, but nourishes.
          </p>
          <p className="font-sans text-foreground opacity-80 text-lg leading-relaxed">
            Every bottle represents our commitment to warm minimalism— stripping away the unnecessary harsh chemicals and leaving only what your skin truly needs for grounded elegance.
          </p>
        </motion.div>

        {/* Story Visual (Using the brand logo conceptually as we don't have lifestyle images) */}
        <motion.div 
          className="flex-1 relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-secondary rounded-[40px] transform rotate-3 flex items-center justify-center border border-border shadow-2xl">
            <div className="bg-background w-[90%] h-[90%] rounded-[30px] flex items-center justify-center p-8">
              <Image 
                src="/images/logo-clean.png"
                alt="Natürlisch Brand"
                width={300}
                height={150}
                className="opacity-90"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
