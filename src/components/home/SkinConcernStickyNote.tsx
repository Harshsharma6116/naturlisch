"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stickyNotes = [
  { id: 1, src: "/images/assets/asset_2.webp", title: "Tanning Concern", label: "Tanning" },
  { id: 2, src: "/images/assets/asset_3.webp", title: "Strawberry Skin Concern", label: "Strawberry Skin" },
  { id: 3, src: "/images/assets/asset_4.webp", title: "Daily Skin Concern 3", label: "Roughness" },
  { id: 4, src: "/images/assets/asset_5.webp", title: "Daily Skin Concern 4", label: "Dullness" },
];

function GoldPushPin() {
  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-[0_4px_6px_rgba(40,25,5,0.45)]">
      <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Metallic Gold Pin Head Gradient */}
          <radialGradient id="goldHead" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="30%" stopColor="#E6C45E" />
            <stop offset="70%" stopColor="#B38622" />
            <stop offset="100%" stopColor="#6E4F10" />
          </radialGradient>
          {/* Base Rim Gradient */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5DC88" />
            <stop offset="50%" stopColor="#C99B35" />
            <stop offset="100%" stopColor="#7A5612" />
          </linearGradient>
        </defs>

        {/* Pin Shadow on Paper */}
        <ellipse cx="16" cy="28" rx="6" ry="2.5" fill="#241706" opacity="0.35" />

        {/* Pin Needle entry puncture */}
        <ellipse cx="14" cy="24" rx="2" ry="1" fill="#1C1204" opacity="0.8" />

        {/* Pin Base Rim Collar */}
        <ellipse cx="14" cy="20" rx="7" ry="3.5" fill="url(#goldRim)" />

        {/* Pin Cylindrical Body / Head */}
        <circle cx="14" cy="12" r="8" fill="url(#goldHead)" />

        {/* Gloss Specular Glare */}
        <ellipse cx="11.5" cy="9.5" rx="2.5" ry="1.5" fill="#FFFFFF" opacity="0.75" />
      </svg>
    </div>
  );
}

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
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-sans text-[11px] tracking-widest uppercase text-primary/70 font-medium">
          Pinboard Queries
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

      {/* The Pinned Board Pad Container */}
      <div 
        onClick={handleNextNote}
        className="relative w-40 sm:w-44 md:w-48 aspect-square cursor-pointer group"
        title="Click note to peel next concern"
      >
        {/* The 3D Push Pin anchored at top center */}
        <GoldPushPin />

        {/* Layer 3: Base Paper Sheet of the Board Pad */}
        <div 
          className="absolute inset-0 bg-[#E8D058] rounded-[2px] shadow-sm transform rotate-[3deg] scale-[0.96] opacity-70 transition-transform duration-300 group-hover:rotate-[4.5deg]"
        />

        {/* Layer 2: Next Note Waiting Underneath */}
        <div 
          className="absolute inset-0 bg-[#F4E365] rounded-[2px] shadow-md transform -rotate-[2deg] scale-[0.98] transition-transform duration-300 group-hover:-rotate-[3deg] overflow-hidden border-t border-black/[0.04]"
        >
          <img 
            src={nextNote.src} 
            alt={nextNote.title}
            className="w-full h-full object-cover opacity-75"
          />
          {/* Subtle paper shadow under top pin */}
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/[0.04] to-transparent pointer-events-none" />
        </div>

        {/* Layer 1: Active Pinned Note (Sways on pin when hovered, peels away when clicked) */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentNote.id}
            initial={{ opacity: 0.5, scale: 0.95, rotate: -1.5, y: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ 
              opacity: 0, 
              rotateZ: 26, 
              rotateX: 20,
              x: 65, 
              y: -45, 
              scale: 0.88,
              transition: { duration: 0.38, ease: [0.32, 0.72, 0, 1] } 
            }}
            whileHover={{ 
              rotate: [0, -1.2, 1.2, 0],
              transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.96 }}
            style={{ transformOrigin: "top center" }}
            className="relative w-full h-full rounded-[2px] overflow-hidden shadow-[0_14px_28px_-6px_rgba(0,0,0,0.22),0_4px_8px_-2px_rgba(0,0,0,0.12)] bg-[#FDF175] border-t border-black/[0.05]"
          >
            {/* Top Adhesive Shadow Line */}
            <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/[0.05] to-transparent pointer-events-none z-10" />

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
