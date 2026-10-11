"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] bg-background flex flex-col lg:flex-row overflow-hidden border-b border-border">
      
      {/* Left Content (Text) */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-8 sm:py-20 lg:px-24 lg:py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-sans text-xs sm:text-base font-bold tracking-[0.25em] sm:tracking-[0.3em] text-leafy-green uppercase mb-4 sm:mb-8 block">
            The Essence of Nature
          </span>
          
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-[7rem] leading-[0.9] sm:leading-[0.85] text-wavy-brown mb-6 sm:mb-8 tracking-tight">
            Real <br />
            <span className="italic text-wavy-brown font-light ml-4 sm:ml-8 lg:ml-16">Beauty.</span>
          </h1>
          
          <p className="font-sans text-sm sm:text-lg text-foreground/80 max-w-md leading-relaxed mb-8 sm:mb-12">
            Authentic personal care crafted from the earth. Discover formulations designed for grounded elegance and natural radiance.
          </p>
          
          <Link 
            href="/shop" 
            className="group flex items-center gap-4 sm:gap-6 font-sans text-xs sm:text-sm uppercase tracking-widest text-primary hover:text-[#3A2A0F] transition-colors w-fit"
          >
            <span className="border-b border-primary pb-1 group-hover:border-[#3A2A0F] transition-colors">
              Explore Collection
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Live Shoots in Motion Micro-Hook */}
          <div className="mt-8 sm:mt-12 flex items-center gap-3">
            <div className="flex -space-x-2">
              <img src="/images/models/model_cherry_shoot.gif" className="w-8 h-8 rounded-full border-2 border-[#FFF8F0] object-cover shadow-sm" alt="Cherry Model Shoot" />
              <img src="/images/models/model_azure_shoot.gif" className="w-8 h-8 rounded-full border-2 border-[#FFF8F0] object-cover shadow-sm" alt="Azure Model Shoot" />
              <img src="/images/models/model_espresso_shoot.gif" className="w-8 h-8 rounded-full border-2 border-[#FFF8F0] object-cover shadow-sm" alt="Espresso Model Shoot" />
            </div>
            <span className="font-sans text-[11px] uppercase tracking-wider text-primary/70 font-medium">
              Shoots In Motion • 35mm
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Content (Hero Image Fitted Frame) */}
      <div className="flex-1 relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-full bg-[#E8D4C0]/20 flex items-center justify-center p-4 sm:p-8 lg:p-16">
        
        <motion.div
          className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Live Campaign Pill Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white shadow-lg pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/90">
              Campaign 2026
            </span>
          </div>

          <img 
            src="/images/hero-group.jpg" 
            alt="Natürlisch Real Beauty Collection" 
            className="w-full h-auto block"
          />
        </motion.div>

      </div>

    </section>
  );
}
