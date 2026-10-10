import React from 'react';

interface TopDownJarProps {
  colorHex?: string;
  className?: string;
  lidOffset?: { x: number, y: number };
}

export function TopDownJar({ 
  colorHex = "#2E5BFF", 
  className = "",
  lidOffset = { x: -80, y: -20 }
}: TopDownJarProps) {
  return (
    <div className={'relative w-64 h-64 ' + className}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
        
        <defs>
          <filter id="scrub-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0, 1 0 0 0 0, 1 0 0 0 0, 0 0 0 0.3 0" />
            <feBlend mode="overlay" in2="SourceGraphic" />
          </filter>

          <filter id="sparkle">
            <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 3 -1.5" in="noise" result="coloredNoise" />
            <feBlend in="SourceGraphic" in2="coloredNoise" mode="screen" />
          </filter>

          <filter id="blur-glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          
          <radialGradient id="product-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colorHex} />
            <stop offset="70%" stopColor={colorHex} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        <g transform={'translate(' + lidOffset.x + ', ' + lidOffset.y + ')'}>
          <circle cx="102" cy="102" r="45" fill="rgba(0,0,0,0.2)" filter="url(#blur-glow)" />
          <circle cx="100" cy="100" r="45" fill="#111111" stroke="#000" strokeWidth="2"/>
          <circle cx="100" cy="100" r="38" fill="#F1DDC4" />
          
          <g stroke="#3A2A0F" strokeWidth="1.5" fill="none">
            <circle cx="100" cy="100" r="8" fill="#FDF6ED" />
            {[...Array(12)].map((_, i) => (
              <path 
                key={i}
                d="M 100 92 Q 115 70 100 62 Q 85 70 100 92" 
                transform={'rotate(' + (i * 30) + ' 100 100)'}
                opacity="0.8"
              />
            ))}
            <circle cx="100" cy="100" r="25" strokeDasharray="2 4" strokeWidth="2" opacity="0.6" />
            <circle cx="100" cy="100" r="32" opacity="0.4" />
          </g>
          <path d="M 60 85 A 45 45 0 0 1 120 60" fill="none" stroke="white" strokeWidth="2" opacity="0.2" filter="url(#blur-glow)" />
        </g>

        <circle cx="105" cy="105" r="60" fill="rgba(0,0,0,0.3)" filter="url(#blur-glow)" />
        
        <circle cx="100" cy="100" r="60" fill="#E8ECEF" stroke="#99A3A4" strokeWidth="1"/>
        <circle cx="100" cy="100" r="58" fill="#D0D3D4" />
        <circle cx="100" cy="100" r="54" fill="#111111" />
        
        <circle 
          cx="100" cy="100" r="50" 
          fill="url(#product-gradient)" 
        />
        
        <circle 
          cx="100" cy="100" r="50" 
          fill={colorHex} 
          filter="url(#scrub-texture)" 
          style={{ mixBlendMode: 'overlay' }}
          opacity="0.8"
        />
        
        <circle 
          cx="100" cy="100" r="50" 
          fill="transparent" 
          filter="url(#sparkle)" 
          opacity="0.5"
        />

        <path d="M 70 80 Q 90 60 110 70" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" opacity="0.4" filter="url(#blur-glow)" />
        <path d="M 120 120 Q 130 100 110 130" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3" filter="url(#blur-glow)" />
        <circle cx="85" cy="115" r="3" fill="white" opacity="0.6" filter="url(#blur-glow)" />
        <circle cx="115" cy="90" r="2" fill="white" opacity="0.5" filter="url(#blur-glow)" />

        <circle cx="100" cy="100" r="52" fill="none" stroke="white" strokeWidth="3" opacity="0.3" filter="url(#blur-glow)" />
        
        <path d="M 45 90 A 60 60 0 0 1 120 45" fill="none" stroke="white" strokeWidth="4" opacity="0.5" filter="url(#blur-glow)" />
        <path d="M 155 110 A 60 60 0 0 1 80 155" fill="none" stroke="white" strokeWidth="2" opacity="0.2" filter="url(#blur-glow)" />

      </svg>
    </div>
  );
}
