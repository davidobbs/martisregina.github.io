'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MinimalistHeroSection() {
  const { currentLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Animação sequencial do texto
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Background abstrato com tinta dourada */}
      <div className="absolute inset-0 z-0">
        {/* Fundo base */}
        <div className="absolute inset-0 bg-gradient-to-br from-mr-blue via-gray-900 to-black" />
        
        {/* Efeito de tinta dourada na água - simulado com gradientes */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Ondas abstratas */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-radial from-mr-gold/40 via-mr-gold/20 to-transparent animate-float" />
          <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-gradient-radial from-mr-gold/30 via-mr-gold/15 to-transparent animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 left-3/4 w-64 h-64 rounded-full bg-gradient-radial from-mr-gold/35 via-mr-gold/18 to-transparent animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }} />
        </div>

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Conteúdo Principal Ultraminimalista */}
      <div className="container mx-auto relative z-10 text-center px-6">
        <div className={`transition-all duration-2000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Logo/Marca Estilizada */}
          <div className="mb-16">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-serif font-thin text-white tracking-[0.15em] opacity-90">
              <span 
                className={`inline-block transition-all duration-1000 transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.2s' }}
              >
                M
              </span>
              <span 
                className={`inline-block transition-all duration-1000 transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                R
              </span>
              <span 
                className={`inline-block transition-all duration-1000 transform text-mr-gold ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.6s' }}
              >
                A
              </span>
            </h1>
          </div>

          {/* Mensagem Central */}
          <div className="mb-20">
            <h2 
              className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-white/90 tracking-[0.25em] uppercase transition-all duration-1500 transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '1s' }}
            >
              {currentLanguage === 'PT' 
                ? 'EXCELÊNCIA ALÉM DO TEMPO' 
                : 'EXCELLENCE BEYOND TIME'
              }
            </h2>
          </div>

          {/* CTA Único e Poderoso */}
          <div 
            className={`transition-all duration-1500 transform ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1.5s' }}
          >
            <button 
              onClick={() => scrollToSection('contato')}
              className="group relative overflow-hidden bg-transparent border-2 border-mr-gold text-mr-gold px-16 py-6 rounded-none font-light text-xl tracking-[0.2em] uppercase hover:bg-mr-gold hover:text-white transition-all duration-700 transform hover:scale-105"
            >
              <span className="relative flex items-center gap-6 z-10">
                {currentLanguage === 'PT' ? 'COMEÇAR' : 'BEGIN'}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
              </span>
              
              {/* Efeito de preenchimento */}
              <div className="absolute inset-0 bg-mr-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </button>
          </div>
        </div>
      </div>

      {/* Elementos atmosféricos minimalistas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Partículas sutis */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-mr-gold rounded-full animate-pulse opacity-20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Linhas geométricas sutis */}
        <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-transparent to-mr-gold/30" />
        <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-transparent to-mr-gold/30" />
        <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-transparent to-mr-gold/30" />
        <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-t from-transparent to-mr-gold/30" />
      </div>

      {/* CSS customizado */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(2deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 