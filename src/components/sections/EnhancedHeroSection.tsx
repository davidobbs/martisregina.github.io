'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { ChevronDown, Play, Users, Globe, Trophy, Calendar } from 'lucide-react';

export default function EnhancedHeroSection() {
  const { currentLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-mr-blue/80 via-mr-blue/60 to-mr-blue/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-mr-bordo/20 via-transparent to-mr-bordo/10"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-mr-bordo transform rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-mr-bordo/50 transform rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-32 w-20 h-20 border border-mr-bordo/30 transform -rotate-12 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-mr-bordo/40 transform rotate-45 animate-pulse delay-3000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10 text-center px-6">
        <div className={`transition-all duration-2000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* 30 Years Badge */}
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-8 py-4 mb-8 border border-white/30 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-mr-gold rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-lg">30</span>
            </div>
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
              {currentLanguage === 'PT' ? 'Anos de Excelência Jurídica' : 'Years of Legal Excellence'}
            </span>
            <Trophy className="w-5 h-5 text-mr-gold" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            <span className="block mb-4 animate-fade-in-up">
              <span className="text-mr-gold">30 ANOS</span>
            </span>
            <span className="block mb-4 text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white/95 font-light animate-fade-in-up delay-300">
              {currentLanguage === 'PT' ? 'DE EXCELÊNCIA JURÍDICA' : 'OF LEGAL EXCELLENCE'}
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl xl:text-6xl animate-fade-in-up delay-600">
              <span className="text-mr-gold">Planejamento Patrimonial</span>
              <span className="text-white mx-4">|</span>
              <span className="text-mr-gold">Negócios</span>
              <span className="text-white mx-4">|</span>
              <span className="text-mr-gold">Contratos</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up delay-900">
            {currentLanguage === 'PT' 
              ? 'Desde 1994 oferecendo soluções jurídicas personalizadas com visão global, excelência técnica e compromisso com resultados excepcionais.'
              : 'Since 1994 providing personalized legal solutions with global vision, technical excellence and commitment to exceptional results.'
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-1200">
            <button 
              onClick={() => scrollToSection('contato')}
              className="group bg-gradient-to-r from-mr-gold to-yellow-600 hover:from-yellow-600 hover:to-mr-gold text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-mr-gold/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                {currentLanguage === 'PT' ? 'Agende uma Consulta' : 'Schedule Consultation'}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('socios')}
              className="group bg-white/15 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/25 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                {currentLanguage === 'PT' ? 'Conheça Nossos Sócios' : 'Meet Our Partners'}
                <Play className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Credibility Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto animate-fade-in-up delay-1500 w-full">
            <div className="text-center group">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  30+
                </div>
                <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                  {currentLanguage === 'PT' ? 'Anos de Excelência' : 'Years of Excellence'}
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  13
                </div>
                <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                  {currentLanguage === 'PT' ? 'Escritórios Globais' : 'Global Offices'}
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                  {currentLanguage === 'PT' ? 'Clientes Atendidos' : 'Clients Served'}
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  #1
                </div>
                <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                  {currentLanguage === 'PT' ? 'Mais Admirado 2022' : 'Most Admired 2022'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          onClick={() => scrollToSection('escritorio')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-xs uppercase tracking-wider mb-3 font-medium group-hover:text-mr-gold transition-colors duration-300">
            {currentLanguage === 'PT' ? 'Role para descobrir mais' : 'Scroll to discover more'}
          </span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1 group-hover:border-mr-gold transition-colors duration-300">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse group-hover:bg-mr-gold transition-colors duration-300"></div>
          </div>
          <ChevronDown className="w-6 h-6 mt-2 group-hover:translate-y-1 group-hover:text-mr-gold transition-all duration-300" />
        </button>
      </div>

      {/* Global Presence Floating Indicator */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block z-10">
        <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 group cursor-pointer">
          <Globe className="w-8 h-8 mb-2 group-hover:text-mr-gold group-hover:rotate-12 transition-all duration-300" />
          <span className="text-xs uppercase tracking-wider writing-mode-vertical text-center font-medium group-hover:text-mr-gold transition-colors duration-300">
            {currentLanguage === 'PT' ? 'Presença Global' : 'Global Presence'}
          </span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-900 {
          animation-delay: 0.9s;
        }

        .delay-1200 {
          animation-delay: 1.2s;
        }

        .delay-1500 {
          animation-delay: 1.5s;
        }

        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
} 