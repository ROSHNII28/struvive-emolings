import React from 'react';

const TherapyIllustration = () => (
  <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '520px' }}>
    <defs>
      <radialGradient id="roomGlow" cx="50%" cy="60%" r="60%">
        <stop offset="0%" stopColor="#EDD5D0" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FAF6F2" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="lampGlow" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#D6BE8A" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#D6BE8A" stopOpacity="0" />
      </radialGradient>
      <filter id="soft">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    {/* Background room */}
    <rect width="520" height="400" fill="#FAF6F2" />
    <rect x="0" y="200" width="520" height="200" fill="#F3EBE6" />
    
    {/* Warm ambient glow */}
    <ellipse cx="260" cy="180" rx="200" ry="130" fill="url(#roomGlow)" />

    {/* Window with soft light */}
    <rect x="350" y="60" width="90" height="120" rx="6" fill="#EDD5D0" opacity="0.4" />
    <rect x="360" y="70" width="70" height="50" rx="3" fill="rgba(214,190,138,0.3)" />
    <rect x="360" y="125" width="70" height="45" rx="3" fill="rgba(214,190,138,0.25)" />
    <line x1="395" y1="70" x2="395" y2="170" stroke="#DDB7B0" strokeWidth="1.5" opacity="0.5" />
    <line x1="360" y1="120" x2="430" y2="120" stroke="#DDB7B0" strokeWidth="1.5" opacity="0.5" />

    {/* Floor lamp */}
    <line x1="100" y1="290" x2="100" y2="130" stroke="#D6BE8A" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="100" cy="125" rx="25" ry="12" fill="#EAD9A8" opacity="0.9" />
    <ellipse cx="100" cy="125" rx="18" ry="8" fill="#D6BE8A" />
    {/* Lamp glow */}
    <ellipse cx="100" cy="150" rx="70" ry="50" fill="url(#lampGlow)" opacity="0.7" />
    <circle cx="100" cy="290" r="8" fill="#C4A870" opacity="0.6" />

    {/* Couch / sofa */}
    {/* Sofa body */}
    <rect x="100" y="270" width="300" height="70" rx="14" fill="#DDB7B0" />
    {/* Sofa cushions */}
    <rect x="108" y="255" width="136" height="55" rx="10" fill="#E8C5BE" />
    <rect x="252" y="255" width="140" height="55" rx="10" fill="#E8C5BE" />
    {/* Sofa back */}
    <rect x="95" y="230" width="315" height="52" rx="12" fill="#C9A09A" />
    {/* Armrests */}
    <rect x="93" y="248" width="22" height="80" rx="8" fill="#C9A09A" />
    <rect x="395" y="248" width="22" height="80" rx="8" fill="#C9A09A" />

    {/* Therapist figure (left) */}
    {/* Body */}
    <ellipse cx="185" cy="220" rx="22" ry="30" fill="#F5E6E0" />
    <rect x="163" y="230" width="44" height="40" rx="8" fill="#B8C4B2" />
    {/* Head */}
    <circle cx="185" cy="200" r="20" fill="#F5E6E0" />
    {/* Hair */}
    <ellipse cx="185" cy="190" rx="20" ry="14" fill="#C9A09A" />
    <ellipse cx="175" cy="205" rx="6" ry="12" fill="#C9A09A" />
    <ellipse cx="195" cy="205" rx="6" ry="12" fill="#C9A09A" />
    {/* Face - gentle smile */}
    <circle cx="179" cy="202" r="2" fill="#9B7A8A" opacity="0.6" />
    <circle cx="191" cy="202" r="2" fill="#9B7A8A" opacity="0.6" />
    <path d="M181 208 Q185 212 189 208" fill="none" stroke="#9B7A8A" strokeWidth="1.3" strokeLinecap="round" />
    {/* Legs */}
    <rect x="168" y="265" width="16" height="25" rx="6" fill="#B8C4B2" />
    <rect x="189" y="265" width="16" height="25" rx="6" fill="#B8C4B2" />
    {/* Notepad */}
    <rect x="155" y="245" width="30" height="36" rx="3" fill="#FFFDFC" opacity="0.9" />
    <line x1="160" y1="254" x2="180" y2="254" stroke="#DDB7B0" strokeWidth="1" opacity="0.6" />
    <line x1="160" y1="260" x2="180" y2="260" stroke="#DDB7B0" strokeWidth="1" opacity="0.6" />
    <line x1="160" y1="266" x2="175" y2="266" stroke="#DDB7B0" strokeWidth="1" opacity="0.6" />

    {/* Client figure (right) */}
    {/* Body */}
    <ellipse cx="325" cy="220" rx="22" ry="30" fill="#F5E6E0" />
    <rect x="303" y="228" width="44" height="42" rx="8" fill="#EDD5D0" />
    {/* Head */}
    <circle cx="325" cy="198" r="20" fill="#F5E6E0" />
    {/* Hair */}
    <ellipse cx="325" cy="186" rx="20" ry="15" fill="#9B7A8A" />
    <ellipse cx="310" cy="196" rx="7" ry="13" fill="#9B7A8A" />
    <ellipse cx="340" cy="196" rx="7" ry="13" fill="#9B7A8A" />
    {/* Face - peaceful */}
    <circle cx="319" cy="200" r="2" fill="#6E5563" opacity="0.5" />
    <circle cx="331" cy="200" r="2" fill="#6E5563" opacity="0.5" />
    <path d="M321 207 Q325 210 329 207" fill="none" stroke="#6E5563" strokeWidth="1.2" strokeLinecap="round" />
    {/* Legs */}
    <rect x="308" y="265" width="16" height="25" rx="6" fill="#EDD5D0" />
    <rect x="329" y="265" width="16" height="25" rx="6" fill="#EDD5D0" />

    {/* Speech bubble (soft) */}
    <ellipse cx="255" cy="160" rx="55" ry="28" fill="rgba(255,253,252,0.85)" />
    <path d="M245 186 Q255 195 265 186" fill="rgba(255,253,252,0.85)" />
    <text x="225" y="158" fontFamily="Cormorant Garamond, serif" fontSize="9" fill="#9B7A8A" fontStyle="italic">You are safe here</text>
    <text x="232" y="172" fontFamily="Cormorant Garamond, serif" fontSize="8" fill="#B8C4B2" fontStyle="italic">to feel everything.</text>

    {/* Plant pot (right side) */}
    <rect x="435" y="300" width="32" height="30" rx="4" fill="#C9A09A" opacity="0.7" />
    <rect x="430" y="296" width="42" height="8" rx="3" fill="#B8887F" opacity="0.6" />
    {/* Plant leaves */}
    <ellipse cx="451" cy="275" rx="9" ry="24" fill="#B8C4B2" opacity="0.85" transform="rotate(-20 451 275)" />
    <ellipse cx="451" cy="275" rx="9" ry="22" fill="#9DB697" opacity="0.75" transform="rotate(15 451 275)" />
    <ellipse cx="451" cy="280" rx="7" ry="18" fill="#B8C4B2" opacity="0.7" transform="rotate(35 451 280)" />
    <ellipse cx="445" cy="285" rx="6" ry="16" fill="#9DB697" opacity="0.6" transform="rotate(-35 445 285)" />

    {/* Small plant (left) */}
    <rect x="52" y="308" width="24" height="24" rx="4" fill="#C9A09A" opacity="0.5" />
    <ellipse cx="64" cy="292" rx="7" ry="18" fill="#B8C4B2" opacity="0.7" transform="rotate(-10 64 292)" />
    <ellipse cx="64" cy="293" rx="6" ry="15" fill="#9DB697" opacity="0.6" transform="rotate(20 64 293)" />

    {/* Soft rug */}
    <ellipse cx="260" cy="330" rx="140" ry="20" fill="rgba(221,183,176,0.25)" />

    {/* Coffee table */}
    <rect x="195" y="312" width="130" height="12" rx="4" fill="#EAD9A8" opacity="0.7" />
    {/* Tea cup */}
    <ellipse cx="248" cy="312" rx="9" ry="5" fill="#FFFDFC" opacity="0.9" />
    <path d="M248 307 Q255 305 255 312" fill="none" stroke="#EAD9A8" strokeWidth="1.2" opacity="0.7" />
  </svg>
);

export default TherapyIllustration;
