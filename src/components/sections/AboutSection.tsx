'use client';

import { Card, CardContent } from "../ui/card";
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const { currentLanguage } = useLanguage();
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const element = document.getElementById('escritorio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 80;
      const position = el.getBoundingClientRect().top;
      const offset = position + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="escritorio" className="relative overflow-hidden py-20 bg-gradient-to-br from-mr-black to-mr-bordo">
      <div className="relative z-10 container mx-auto px-6">
        {/* Story Content */}
        <div className={`transition-opacity transition-transform duration-1000 ${mounted && inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4 text-sm uppercase font-semibold text-white tracking-wide">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            {currentLanguage === 'PT' ? 'Nossa História' : 'Our Story'}
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            <span>{currentLanguage === 'PT' ? 'Sobre o' : 'About Our'} </span>
            <span className="text-mr-gold">{currentLanguage === 'PT' ? 'Escritório' : 'Firm'}</span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-white to-mr-gold rounded-full mb-6"></div>

          <div className="space-y-4 text-white/90 max-w-4xl">
            <p className="text-lg md:text-xl font-light">
              {currentLanguage === 'PT'
                ? 'Fundado em 1994, o Martins Regina Advocacia nasceu da união de executivos de multinacionais e advogados de grandes bancas do Rio de Janeiro, combinando visão corporativa com expertise jurídica tradicional.'
                : 'Founded in 1994, Martins Regina Advocacia emerged from the union of multinational executives and lawyers from leading law firms in Rio de Janeiro, combining corporate vision with traditional legal expertise.'}
            </p>

            <p className="text-base md:text-lg">
              {currentLanguage === 'PT'
                ? 'Nossa abordagem multidisciplinar e personalizada nos permite oferecer soluções jurídicas eficientes e alinhadas às necessidades específicas de cada cliente, com foco em Planejamento Patrimonial, Direito Empresarial e Contratos.'
                : 'Our multidisciplinary and personalized approach allows us to offer efficient legal solutions tailored to each client specific needs, focusing on Asset Planning, Business Law, and Contracts.'}
            </p>
          </div>

          <button className="mt-6 inline-flex items-center gap-3 bg-white text-mr-bordo hover:bg-mr-gold hover:text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('areas')}>
            {currentLanguage === 'PT' ? 'Conheça mais' : 'Learn more'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          <StatCard number="1994" text={currentLanguage === 'PT' ? 'Fundação' : 'Founded'} mounted={mounted} inView={inView} />
          <StatCard number="13" text={currentLanguage === 'PT' ? 'Países' : 'Countries'} mounted={mounted} inView={inView} />
          <StatCard number="16" text={currentLanguage === 'PT' ? 'Áreas' : 'Practice Areas'} mounted={mounted} inView={inView} />
          <StatCard number="30+" text={currentLanguage === 'PT' ? 'Anos' : 'Years'} mounted={mounted} inView={inView} />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  text: string;
  mounted: boolean;
  inView: boolean;
}

function StatCard({ number, text, mounted, inView }: StatCardProps) {
  return (
    <Card className={`group h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/95 backdrop-blur-sm ${
      mounted && inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <CardContent className="p-4 text-center">        
        <div className="text-3xl md:text-4xl font-serif font-bold text-mr-bordo mb-2">
          {number}
        </div>
        
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed group-hover:text-mr-bordo transition-colors duration-300">
          {text}
        </p>
      </CardContent>
    </Card>
  );
}
