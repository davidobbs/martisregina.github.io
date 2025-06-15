'use client';

import { useState } from 'react';
import PremiumHeroSection from './PremiumHeroSection';
import MinimalistHeroSection from './MinimalistHeroSection';
import { Palette, Sparkles } from 'lucide-react';

type HeroVariant = 'premium' | 'minimalist';

export default function HeroSectionSwitcher() {
  const [variant, setVariant] = useState<HeroVariant>('premium');

  return (
    <>
      {/* Switcher Controls */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => setVariant('premium')}
          className={`p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 ${
            variant === 'premium'
              ? 'bg-mr-gold text-white border-mr-gold shadow-lg shadow-mr-gold/25'
              : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
          }`}
          title="Versão Premium"
        >
          <Sparkles className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setVariant('minimalist')}
          className={`p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 ${
            variant === 'minimalist'
              ? 'bg-mr-gold text-white border-mr-gold shadow-lg shadow-mr-gold/25'
              : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
          }`}
          title="Versão Minimalista"
        >
          <Palette className="w-5 h-5" />
        </button>
      </div>

      {/* Hero Section Content */}
      {variant === 'premium' ? <PremiumHeroSection /> : <MinimalistHeroSection />}
    </>
  );
} 