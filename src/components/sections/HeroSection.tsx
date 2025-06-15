'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const { currentLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const title = currentLanguage === 'PT'
    ? 'Advogados especialistas em Planejamento Patrimonial, Negócios e Contratos'
    : 'Lawyers specializing in Asset Planning, Business, and Contracts';

  const subtitle = currentLanguage === 'PT'
    ? 'Desde 1994 oferecendo soluções jurídicas personalizadas com visão corporativa e excelência técnica.'
    : 'Since 1994 providing personalized legal solutions with a corporate vision and technical excellence.';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-mr-bordo/10 via-transparent to-mr-bordo/5"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-mr-bordo transform rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-mr-bordo/50 transform rotate-12"></div>
          <div className="absolute bottom-40 left-32 w-20 h-20 border border-mr-bordo/30 transform -rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-mr-bordo/40 transform rotate-45"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-mr-bordo rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-mr-bordo/70 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-mr-bordo/50 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 text-center px-6">
        <div className={`transition-all duration-1500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
            <div className="w-2 h-2 bg-mr-bordo rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {currentLanguage === 'PT' ? 'Excelência desde 1994' : 'Excellence since 1994'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            <span className="block mb-2">
              <span className="text-mr-bordo">Advogados</span> especialistas
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/90 font-light">
              em Planejamento Patrimonial,
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-mr-bordo">Negócios</span> e <span className="text-mr-bordo">Contratos</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-mr-bordo/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="flex items-center gap-3">
                {currentLanguage === 'PT' ? 'Agende sua consulta' : 'Schedule consultation'}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-3">
                {currentLanguage === 'PT' ? 'Conheça nosso escritório' : 'Learn about our firm'}
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mr-bordo mb-2">30+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">
                {currentLanguage === 'PT' ? 'Anos de experiência' : 'Years of experience'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mr-bordo mb-2">14</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">
                {currentLanguage === 'PT' ? 'Escritórios globais' : 'Global offices'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mr-bordo mb-2">16</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">
                {currentLanguage === 'PT' ? 'Áreas de atuação' : 'Practice areas'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mr-bordo mb-2">1000+</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">
                {currentLanguage === 'PT' ? 'Clientes atendidos' : 'Clients served'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs uppercase tracking-wider mb-2">
            {currentLanguage === 'PT' ? 'Role para baixo' : 'Scroll down'}
          </span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
