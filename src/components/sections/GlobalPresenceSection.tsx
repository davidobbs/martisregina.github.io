'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function GlobalPresenceSection() {
  const { currentLanguage } = useLanguage();

  return (
    <section id="presenca" className="py-20 bg-gradient-to-br from-mr-black to-mr-bordo relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Apenas a imagem do mapa */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative w-full aspect-[2/1] min-h-[400px]">
              <Image
                src="/images/mapa martins.png"
                alt={currentLanguage === 'PT' ? 'Mapa de Presença Global' : 'Global Presence Map'}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 