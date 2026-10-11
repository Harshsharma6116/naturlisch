"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stickyNotes = [
  { id: 1, src: "/images/assets/asset_2.webp", alt: "Tanning hai? - Skin Concern Note" },
  { id: 2, src: "/images/assets/asset_3.webp", alt: "Strawberry skin? - Skin Concern Note" },
  { id: 3, src: "/images/assets/asset_4.webp", alt: "Daily Concern Note 3" },
  { id: 4, src: "/images/assets/asset_5.webp", alt: "Daily Concern Note 4" },
];

export default function SkinConcernStickyNote() {
  const [index, setIndex] = useState(0);

  const handleNextNote = () => {
    setIndex((prev) => (prev + 1) % stickyNotes.length);
  };

  const currentNote = stickyNotes[index];
  const nextNote = stickyNotes[(index + 1) % stickyNotes.length];

  return (
    <div className="flex flex-col items-start md:items-end select-none">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-sans text-[11px] tracking-widest uppercase text-primary/60 font-medium">
          Skin Queries
        </span>
        <div className="flex items-center gap-1">
          {stickyNotes.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-3 bg-primary" : "w-1.5 bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Sticky Note Stack - Sized cleanly for natural balance */}
      <div 
        onClick={handleNextNote}
        className="relative w-40 sm:w-44 md:w-48 aspect-square cursor-pointer group"
        title="Click to peel next sticky note"
      >
        {/* Subtle Stack Note 2 (Deepest) */}
        <div 
          className="absolute inset-0 bg-[#E8D4C0] rounded-lg shadow-sm transform rotate-3 scale-95 opacity-50 transition-transform duration-300 group-hover:rotate-5"
        />

        {/* Subtle Stack Note 1 (Directly underneath) */}
        <div 
          className="absolute inset-0 bg-[#F4E365]/80 rounded-lg shadow-sm transform -rotate-2 scale-98 transition-transform duration-300 group-hover:-rotate-3 overflow-hidden"
        >
          <img 
            src={nextNote.src} 
            alt={nextNote.alt}
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Active Top Sticky Note */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentNote.id}
            initial={{ opacity: 0.6, scale: 0.95, rotate: -2, y: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ 
              opacity: 0, 
              rotate: 16, 
              x: 60, 
              y: -40, 
              scale: 0.9,
              transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } 
            }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full h-full rounded-md overflow-hidden shadow-[0_10px_22px_-6px_rgba(0,0,0,0.16)] bg-[#F8E764] ring-1 ring-black/5"
          >
            {/* Realistic Frosted Tape Strip at Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-4 bg-white/50 backdrop-blur-md rounded-sm shadow-sm border border-white/40 z-20 pointer-events-none transform -rotate-1" />

            {/* Note Image */}
            <img 
              src={currentNote.src} 
              alt={currentNote.alt} 
              className="w-full h-full object-cover"
            />

            {/* Corner curl highlight gradient */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-black/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Tap Helper Hint */}
        <div className="absolute -bottom-5 right-1 flex items-center gap-1 font-sans text-[10px] uppercase tracking-wider text-primary/60 group-hover:text-primary transition-colors pointer-events-none">
          <span>Tap to peel</span>
          <span className="text-[11px] inline-block transition-transform duration-300 group-hover:rotate-90">↺</span>
        </div>
      </div>
    </div>
  );
}
