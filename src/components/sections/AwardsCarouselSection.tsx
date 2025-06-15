'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

export default function AwardsCarouselSection() {
  const { currentLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const content = currentLanguage === 'PT' ? {
    badge: 'Reconhecimento',
    title: 'Premiações e Certificações',
    subtitle: 'Reconhecidos pelas principais organizações do setor jurídico mundial.',
    organizations: [
      {
        name: 'Chambers & Partners',
        logo: '/logos/chambers.svg',
        description: 'Ranking internacional de escritórios de advocacia',
        award: 'Best Law Firm 2023',
        category: 'Corporate Law'
      },
      {
        name: 'Legal 500',
        logo: '/logos/legal500.svg',
        description: 'Guia mundial de prestadores de serviços jurídicos',
        award: 'Escritório do Ano 2024',
        category: 'Direito Empresarial'
      },
      {
        name: 'Análise Advocacia',
        logo: '/logos/analise.svg',
        description: 'Principal publicação jurídica do Brasil',
        award: 'Excelência Jurídica 2023',
        category: 'Planejamento Patrimonial'
      },
      {
        name: 'LACCA',
        logo: '/logos/lacca.svg',
        description: 'Latin American Corporate Counsel Association',
        award: 'Top Tier 2022',
        category: 'Contratos e Negócios'
      },
      {
        name: 'OAB',
        logo: '/logos/oab.svg',
        description: 'Ordem dos Advogados do Brasil',
        award: 'Certificação de Excelência',
        category: 'Ética Profissional'
      },
      {
        name: 'Who\'s Who Legal',
        logo: '/logos/whoswho.svg',
        description: 'Diretório internacional de advogados',
        award: 'Leading Lawyer 2024',
        category: 'Business Law'
      }
    ]
  } : {
    badge: 'Recognition',
    title: 'Awards and Certifications',
    subtitle: 'Recognized by the main organizations of the global legal sector.',
    organizations: [
      {
        name: 'Chambers & Partners',
        logo: '/logos/chambers.svg',
        description: 'International ranking of law firms',
        award: 'Best Law Firm 2023',
        category: 'Corporate Law'
      },
      {
        name: 'Legal 500',
        logo: '/logos/legal500.svg',
        description: 'Global guide to legal service providers',
        award: 'Law Firm of the Year 2024',
        category: 'Corporate Law'
      },
      {
        name: 'Legal Analysis',
        logo: '/logos/analise.svg',
        description: 'Brazil\'s leading legal publication',
        award: 'Legal Excellence 2023',
        category: 'Asset Planning'
      },
      {
        name: 'LACCA',
        logo: '/logos/lacca.svg',
        description: 'Latin American Corporate Counsel Association',
        award: 'Top Tier 2022',
        category: 'Contracts & Business'
      },
      {
        name: 'OAB',
        logo: '/logos/oab.svg',
        description: 'Brazilian Bar Association',
        award: 'Excellence Certification',
        category: 'Professional Ethics'
      },
      {
        name: 'Who\'s Who Legal',
        logo: '/logos/whoswho.svg',
        description: 'International directory of lawyers',
        award: 'Leading Lawyer 2024',
        category: 'Business Law'
      }
    ]
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === content.organizations.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, content.organizations.length]);

  const visibleItems = 3; // Number of items visible at once
  const totalItems = content.organizations.length;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <span className="text-gray-700">🏆</span>
            {content.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            {content.title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`
              }}
            >
              {content.organizations.map((org, index) => (
                <div 
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col items-center text-center group hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                    
                    {/* Logo placeholder - Em produção, usar imagens reais */}
                    <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-white">
                        {org.name.split(' ').map(word => word[0]).join('').substring(0, 3)}
                      </div>
                    </div>
                    
                    {/* Organization name */}
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {org.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {org.description}
                    </p>
                    
                    {/* Award info */}
                    <div className="space-y-2">
                      <div className="bg-mr-bordo/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {org.award}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {org.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex(currentIndex === totalItems - 1 ? 0 : currentIndex + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(totalItems / visibleItems) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleItems)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleItems) === index
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Infinite scrolling text banner */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {content.organizations.map((org, index) => (
              <span key={`scroll-${index}`} className="inline-flex items-center mx-8 text-lg font-medium text-white/70">
                ⭐ {org.award} - {org.name}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {content.organizations.map((org, index) => (
              <span key={`scroll-dup-${index}`} className="inline-flex items-center mx-8 text-lg font-medium text-white/70">
                ⭐ {org.award} - {org.name}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {currentLanguage === 'PT' ? 'Ver todos os reconhecimentos' : 'View all recognitions'}
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-mr-bordo/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white transform rotate-45"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 border border-white transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white transform -rotate-12"></div>
      </div>
    </section>
  );
} 