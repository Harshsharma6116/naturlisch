"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Check, Copy } from "lucide-react";

export default function AnnouncementTicker() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("NATUR15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tickerItems = [
    { text: "SPECIAL LAUNCH OFFER: ENJOY 15% OFF WITH CODE", code: "NATUR15" },
    { text: "FREE COMPLIMENTARY SHIPPING ON ORDERS OVER ₹999" },
    { text: "100% ORGANIC PLANT-BASED FORMULATIONS • DERM TESTED" },
    { text: "AS SEEN IN VOGUE INDIA EDITORIAL • THE LIVING LOOKBOOK" },
    { text: "HANDCRAFTED IN SMALL FRESH BATCHES FOR PEAK RADIANCE" },
  ];

  return (
    <div className="bg-[#3A2A0F] text-[#F1DDC4] border-b border-[#F1DDC4]/10 h-9 sm:h-10 flex items-center overflow-hidden relative z-40 select-none">
      <div className="animate-marquee flex items-center gap-8 text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase font-medium">
        
        {/* Set 1 */}
        {tickerItems.map((item, idx) => (
          <div key={`t1-${idx}`} className="flex items-center gap-3 shrink-0">
            <span className="text-[#E5C158]">✦</span>
            <span>{item.text}</span>
            {item.code && (
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 bg-[#F1DDC4] text-[#3A2A0F] px-2 py-0.5 rounded font-mono font-bold text-[10px] tracking-normal hover:bg-white transition-colors cursor-pointer"
                title="Click to copy code"
              >
                {item.code}
                {copied ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5 opacity-60" />}
              </button>
            )}
          </div>
        ))}

        {/* Set 2 (Duplicates for seamless infinite loop) */}
        {tickerItems.map((item, idx) => (
          <div key={`t2-${idx}`} className="flex items-center gap-3 shrink-0">
            <span className="text-[#E5C158]">✦</span>
            <span>{item.text}</span>
            {item.code && (
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 bg-[#F1DDC4] text-[#3A2A0F] px-2 py-0.5 rounded font-mono font-bold text-[10px] tracking-normal hover:bg-white transition-colors cursor-pointer"
                title="Click to copy code"
              >
                {item.code}
                {copied ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5 opacity-60" />}
              </button>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
