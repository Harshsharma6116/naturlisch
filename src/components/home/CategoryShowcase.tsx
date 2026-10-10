"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CategoryShowcase() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="mb-20 md:mb-32 text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-heading text-5xl md:text-6xl text-primary max-w-2xl leading-tight">
            Curated for <br/> <span className="italic">every skin.</span>
          </h2>
          <p className="font-sans text-sm uppercase tracking-widest text-primary/60 mt-6 md:mt-0 max-w-xs">
            01 — The Lookbook
          </p>
        </div>

        {/* Staggered Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          {/* Women's Skincare - Large & Tall */}
          <motion.div 
            className="md:col-span-7 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/shop?gender=female" className="group block relative w-full aspect-[3/4] bg-secondary rounded-[40px] overflow-hidden mb-8">
              <div className="absolute inset-0 bg-[#E8D4C0] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                <span className="font-sans text-primary/30 uppercase tracking-widest text-sm">[Women's Lifestyle Visual]</span>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <h3 className="font-heading text-4xl text-primary mb-3">Women's Skincare</h3>
            <p className="font-sans text-foreground/70 mb-4 max-w-md">
              Delicate, balancing formulas designed to nurture and protect your natural barrier.
            </p>
            <Link href="/shop?gender=female" className="font-sans text-sm uppercase tracking-widest text-primary hover:underline underline-offset-4">
              Shop Women's
            </Link>
          </motion.div>

          {/* Men's Skincare - Smaller & Staggered down */}
          <motion.div 
            className="md:col-span-5 flex flex-col md:pt-48"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="/shop?gender=male" className="group block relative w-full aspect-square bg-[#F2F2F2] rounded-[30px] overflow-hidden mb-8">
              <div className="absolute inset-0 bg-[#E5E5E5] transition-transform duration-700 group-hover:scale-105 flex items-center justify-center">
                <span className="font-sans text-primary/30 uppercase tracking-widest text-sm">[Men's Lifestyle Visual]</span>
              </div>
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <h3 className="font-heading text-3xl text-primary mb-3">Men's Skincare</h3>
            <p className="font-sans text-foreground/70 mb-4 max-w-sm">
              Grounded, deeply purifying essentials built for resilience and effortless routines.
            </p>
            <Link href="/shop?gender=male" className="font-sans text-sm uppercase tracking-widest text-primary hover:underline underline-offset-4">
              Shop Men's
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
