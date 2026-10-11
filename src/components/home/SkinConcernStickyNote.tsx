"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stickyNotes = [
  { id: 1, src: "/images/assets/asset_2.webp", title: "Tanning Concern", label: "Tanning" },
  { id: 2, src: "/images/assets/asset_3.webp", title: "Strawberry Skin Concern", label: "Strawberry Skin" },
  { id: 3, src: "/images/assets/asset_4.webp", title: "Daily Skin Concern 3", label: "Roughness" },
  { id: 4, src: "/images/assets/asset_5.webp", title: "Daily Skin Concern 4", label: "Dullness" },
];

export default function SkinConcernStickyNote() {
  const [index, setIndex] = useState(0);

  const handleNextNote = () => {
    setIndex((prev) => (prev + 1) % stickyNotes.length);
  };

  const handleSelectNote = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    setIndex(i);
  };

  const currentNote = stickyNotes[index];
  const nextNote = stickyNotes[(index + 1) % stickyNotes.length];

  return (
    <div className="flex flex-col items-center md:items-end select-none">
      {/* Top Header Label & Interactive Dots */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="font-sans text-[11px] tracking-widest uppercase text-primary/70 font-medium">
          Skin Queries
        </span>
        <div className="flex items-center gap-1.5 bg-primary/5 px-2 py-1 rounded-full border border-primary/10">
          {stickyNotes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => handleSelectNote(e, i)}
              aria-label={`Jump to sticky note ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-3.5 bg-primary shadow-sm" : "w-1.5 bg-primary/25 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Realistic Interactive Post-It Pad Stack */}
      <div 
        onClick={handleNextNote}
        className="relative w-40 sm:w-44 md:w-48 aspect-square cursor-pointer group"
        title="Click note to peel next concern"
      >
        {/* Layer 3: Base Paper Layer of the Pad */}
        <div 
          className="absolute inset-0 bg-[#E8D058] rounded-[2px] shadow-sm transform rotate-[3.5deg] scale-[0.96] opacity-70 transition-transform duration-300 group-hover:rotate-[5deg]"
        />

        {/* Layer 2: Next Sticky Note Waiting Underneath */}
        <div 
          className="absolute inset-0 bg-[#F4E365] rounded-[2px] shadow-md transform -rotate-[2deg] scale-[0.98] transition-transform duration-300 group-hover:-rotate-[3.5deg] overflow-hidden border-t border-black/[0.04]"
        >
          <img 
            src={nextNote.src} 
            alt={nextNote.title}
            className="w-full h-full object-cover opacity-75"
          />
          {/* Adhesive shade bar */}
          <div className="absolute top-0 inset-x-0 h-4 bg-black/[0.03] pointer-events-none" />
        </div>

        {/* Layer 1: Active Peeling Note */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentNote.id}
            initial={{ opacity: 0.5, scale: 0.94, rotate: -2, y: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ 
              opacity: 0, 
              rotateZ: 24, 
              rotateX: 25,
              x: 65, 
              y: -50, 
              scale: 0.88,
              transition: { duration: 0.38, ease: [0.32, 0.72, 0, 1] } 
            }}
            whileHover={{ scale: 1.025, rotate: 0.5 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            style={{ transformOrigin: "top left" }}
            className="relative w-full h-full rounded-[2px] overflow-hidden shadow-[0_12px_24px_-6px_rgba(0,0,0,0.22),0_4px_8px_-2px_rgba(0,0,0,0.12)] bg-[#FDF175] border-t border-black/[0.05]"
          >
            {/* Top Adhesive Band Indicator (Authentic Post-It detail) */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/[0.05] to-transparent pointer-events-none z-10" />

            {/* Frosted Tape at Top Center */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/60 backdrop-blur-[2px] rounded-[1px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] border-x border-white/40 z-20 pointer-events-none transform -rotate-1 opacity-90 group-hover:opacity-100 transition-opacity" />

            {/* The Handwritten Note Image */}
            <img 
              src={currentNote.src} 
              alt={currentNote.title} 
              className="w-full h-full object-cover"
            />

            {/* Realistic Dog-Ear / Curled Corner on Bottom Right */}
            <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none overflow-hidden">
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-gradient-to-br from-[#E2CE4E] to-[#CBB73E] shadow-sm transform rotate-45 translate-x-1.5 translate-y-1.5" />
            </div>

            {/* Corner Lift Shadow */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-black/15 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Tap Helper Hint Pill */}
        <div className="absolute -bottom-5 right-0 flex items-center gap-1 font-sans text-[10px] uppercase tracking-wider text-primary/60 group-hover:text-primary transition-colors pointer-events-none">
          <span>Tap to peel</span>
          <span className="text-[11px] inline-block transition-transform duration-300 group-hover:rotate-90">↺</span>
        </div>
      </div>
    </div>
  );
}
