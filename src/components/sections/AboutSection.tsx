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
    <section id="escritorio" className="relative overflow-hidden py-20 bg-white">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mr-bordo rounded-full transform -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-red-600/20 rounded-full transform translate-y-1/3 blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Story Content */}
        <div className={`transition-opacity transition-transform duration-1000 ${mounted && inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-mr-bordo/10 rounded-full px-4 py-2 mb-4 text-sm uppercase font-semibold text-mr-bordo tracking-wide">
            <div className="w-2 h-2 bg-mr-bordo rounded-full"></div>
            {currentLanguage === 'PT' ? 'Nossa História' : 'Our Story'}
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-4">
            <span>{currentLanguage === 'PT' ? 'Sobre o' : 'About Our'} </span>
            <span className="text-mr-bordo">{currentLanguage === 'PT' ? 'Escritório' : 'Firm'}</span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-mr-bordo to-red-700 rounded-full mb-6"></div>

          <div className="space-y-4 text-gray-700">
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

            <p className="text-base md:text-lg">
              {currentLanguage === 'PT'
                ? 'Além do nosso core business, temos consciência de nossa responsabilidade social e exercemos advocacia pro bono para pessoas hipossuficientes e em causas constitucionais sensíveis.'
                : 'Beyond our core business, we are aware of our social responsibility and provide pro bono representation for underprivileged individuals and sensitive constitutional causes.'}
            </p>
          </div>

          <button className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('areas')}>
            {currentLanguage === 'PT' ? 'Conheça mais' : 'Learn more'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
          <StatCard number="1994" text={currentLanguage === 'PT' ? 'Ano de fundação' : 'Year of Establishment'} icon="🏛️" delay={mounted && inView ? 0 : undefined} mounted={mounted} inView={inView} />
          <StatCard number="14" text={currentLanguage === 'PT' ? 'Escritórios no Brasil e exterior' : 'Offices in Brazil and Abroad'} icon="🌍" delay={mounted && inView ? 100 : undefined} mounted={mounted} inView={inView} />
          <StatCard number="16" text={currentLanguage === 'PT' ? 'Áreas de atuação' : 'Practice Areas'} icon="⚖️" delay={mounted && inView ? 200 : undefined} mounted={mounted} inView={inView} />
          <StatCard number="30+" text={currentLanguage === 'PT' ? 'Anos de experiência' : 'Years of Experience'} icon="💼" delay={mounted && inView ? 300 : undefined} mounted={mounted} inView={inView} />
        </div>

        {/* Quote */}
        <div className={`mt-16 p-8 bg-gray-50 rounded-xl transition-opacity transition-transform duration-1000 delay-200 ${mounted && inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-mr-bordo mb-4">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <blockquote className="text-gray-700 text-lg italic mb-4">
            {currentLanguage === 'PT'
              ? '"Combinamos tradição jurídica com visão inovadora para entregar soluções que realmente fazem a diferença na vida de nossos clientes."'
              : '"We combine legal tradition with innovative vision to deliver solutions that truly make a difference in our clients lives."'}
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-mr-bordo/10 rounded-full flex items-center justify-center">
              <span className="text-mr-bordo font-semibold">MR</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Martins Regina</div>
              <div className="text-sm text-gray-600">
                {currentLanguage === 'PT' ? 'Sócios Fundadores' : 'Founding Partners'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  text: string;
  icon: string;
  delay?: number;
  mounted: boolean;
  inView: boolean;
}

function StatCard({ number, text, icon, delay, mounted, inView }: StatCardProps) {
  const [cardMounted, setCardMounted] = useState(false);

  useEffect(() => {
    setCardMounted(true);
  }, []);

  return (
    <Card className={`group h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm ${
      cardMounted && mounted && inView 
        ? 'opacity-100 translate-y-0' 
        : cardMounted && mounted 
          ? 'opacity-0 translate-y-4' 
          : 'opacity-100'
    }`} 
    style={{ 
      transitionDelay: delay !== undefined ? `${delay}ms` : '0ms' 
    }}>
      <CardContent className="p-6 text-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-mr-bordo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon */}
        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Number */}
        <div className="text-4xl md:text-5xl font-serif font-bold text-mr-bordo mb-3 relative z-10">
          {number}
        </div>
        
        {/* Text */}
        <p className="text-gray-600 text-sm leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors duration-300">
          {text}
        </p>

        {/* Decorative Element */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-mr-bordo/5 rounded-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
      </CardContent>
    </Card>
  );
}
