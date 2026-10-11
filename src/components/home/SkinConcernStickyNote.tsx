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
      <div className="flex items-center gap-2 mb-3">
        <span className="font-sans text-[11px] tracking-widest uppercase text-primary/70 font-medium">
          Daily Queries
        </span>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-mono font-semibold">
          {index + 1}/4
        </span>
      </div>

      {/* Interactive Sticky Note Stack */}
      <div 
        onClick={handleNextNote}
        className="relative w-56 sm:w-64 md:w-72 aspect-square cursor-pointer group"
        title="Click to peel next sticky note"
      >
        {/* Subtle Stack Note 2 (Deepest) */}
        <div 
          className="absolute inset-0 bg-[#E8D4C0] rounded-lg shadow-md transform rotate-3 scale-95 opacity-60 transition-transform duration-300 group-hover:rotate-6"
        />

        {/* Subtle Stack Note 1 (Directly underneath) */}
        <div 
          className="absolute inset-0 bg-[#F4E365]/90 rounded-lg shadow-md transform -rotate-2 scale-98 transition-transform duration-300 group-hover:-rotate-4 overflow-hidden"
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
            initial={{ opacity: 0.6, scale: 0.95, rotate: -2, y: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ 
              opacity: 0, 
              rotate: 18, 
              x: 80, 
              y: -60, 
              scale: 0.9,
              transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] } 
            }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_16px_30px_-8px_rgba(0,0,0,0.18)] bg-[#F8E764] ring-1 ring-black/5"
          >
            {/* Realistic Frosted Tape Strip at Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 bg-white/40 backdrop-blur-md rounded-sm shadow-sm border border-white/30 z-20 pointer-events-none transform -rotate-1" />

            {/* Note Image */}
            <img 
              src={currentNote.src} 
              alt={currentNote.alt} 
              className="w-full h-full object-cover"
            />

            {/* Corner curl highlight gradient */}
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-black/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Tap Helper Hint Pill */}
        <motion.div 
          className="absolute -bottom-7 right-2 flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-wider text-primary/70 group-hover:text-primary transition-colors pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>Tap to peel</span>
          <span className="inline-block transition-transform duration-300 group-hover:rotate-45">↺</span>
        </motion.div>
      </div>
    </div>
  );
}
