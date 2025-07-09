'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Calendar, CheckCircle, MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function PremiumHeroSection() {
  const { currentLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({ years: 0, countries: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoading, setIsLoading] = useState({ contact: false, about: false });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animação dos contadores quando a seção entra em view
  useEffect(() => {
    if (!mounted || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [mounted, hasAnimated]);

  const animateCounters = () => {
    // Animação dos anos
    let yearsCount = 0;
    const yearsInterval = setInterval(() => {
      yearsCount += 1;
      setCounters(prev => ({ ...prev, years: yearsCount }));
      if (yearsCount >= 30) clearInterval(yearsInterval);
    }, 50);

    // Animação dos países
    let countriesCount = 0;
    const countriesInterval = setInterval(() => {
      countriesCount += 1;
      setCounters(prev => ({ ...prev, countries: countriesCount }));
      if (countriesCount >= 13) clearInterval(countriesInterval);
    }, 80);

    // Animação dos clientes
    let clientsCount = 0;
    const clientsInterval = setInterval(() => {
      clientsCount += 500;
      setCounters(prev => ({ ...prev, clients: clientsCount }));
      if (clientsCount >= 10000) {
        setCounters(prev => ({ ...prev, clients: 10000 }));
        clearInterval(clientsInterval);
      }
    }, 30);
  };

  const scrollToSection = async (sectionId: string, buttonType: 'contact' | 'about') => {
    setIsLoading(prev => ({ ...prev, [buttonType]: true }));
    
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        // Log para debug

        
        // Offset ajustado para barra de credibilidade + header
        const headerHeight = buttonType === 'contact' ? 100 : 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Feedback visual mais rápido para contato
        const delay = buttonType === 'contact' ? 600 : 800;
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.warn(`Seção '${sectionId}' não encontrada`);
      }
    } catch (error) {
      console.error('Erro ao navegar para seção:', error);
    } finally {
      setIsLoading(prev => ({ ...prev, [buttonType]: false }));
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 10000) return '10K+';
    return num.toLocaleString();
  };

  const features = [
    { 
      pt: "30+ Anos de Excelência", 
      en: "30+ Years of Excellence",
      icon: <CheckCircle className="w-5 h-5" />
    },
    { 
      pt: "13 Países de Atuação", 
      en: "13 Countries Presence",
      icon: <MapPin className="w-5 h-5" />
    },
    { 
      pt: "10.000+ Clientes Atendidos", 
      en: "10,000+ Clients Served",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col justify-center items-center bg-gradient-to-br from-mr-black to-mr-bordo py-12 sm:py-20 md:min-h-screen"
      role="banner"
      aria-label={currentLanguage === 'PT' ? 'Seção principal do site' : 'Main site section'}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo centralizada */}
        <div className={`mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Image
                src="/logo header.png"
                alt="Martins Regina Advocacia"
                width={200}
                height={100}
                className="h-auto max-w-[200px] object-contain"
                sizes="200px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white uppercase mb-6 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {currentLanguage === 'PT'
            ? 'ADVOGADOS ESPECIALISTAS EM PLANEJAMENTO PATRIMONIAL, NEGÓCIOS E CONTRATOS'
            : 'EXPERT LAWYERS IN WEALTH PLANNING, BUSINESS, AND CONTRACTS'}
        </h1>

        {/* Subtítulo */}
        <p className={`text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {currentLanguage === 'PT'
            ? 'Escritório de advocacia referência em Planejamento Patrimonial'
            : 'A leading law firm in Wealth Planning'}
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => scrollToSection('contato', 'contact')}
            disabled={isLoading.contact}
            className="bg-mr-bordo text-white px-8 py-4 rounded-lg font-semibold hover:bg-black transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading.contact ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {currentLanguage === 'PT' ? 'Agende uma Consulta' : 'Schedule a Consultation'}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <button
            onClick={() => scrollToSection('about', 'about')}
            disabled={isLoading.about}
            className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-mr-bordo transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading.about ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {currentLanguage === 'PT' ? 'Conheça Nossos Sócios' : 'Meet Our Partners'}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className={`transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
          <p className="text-sm text-white/70 uppercase tracking-wider mt-2">
            {currentLanguage === 'PT' ? 'Role para descobrir mais' : 'Scroll to discover more'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-mr-gold/50">
              <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-3 group-hover:text-white transition-colors duration-300">
                30+
              </div>
              <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                {currentLanguage === 'PT' ? 'Anos de Excelência' : 'Years of Excellence'}
              </div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-mr-gold/50">
              <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-3 group-hover:text-white transition-colors duration-300">
                14
              </div>
              <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                {currentLanguage === 'PT' ? 'Escritórios Globais' : 'Global Offices'}
              </div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-mr-gold/50">
              <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-3 group-hover:text-white transition-colors duration-300">
                16
              </div>
              <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                {currentLanguage === 'PT' ? 'Áreas de Atuação' : 'Practice Areas'}
              </div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-mr-gold/50">
              <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-3 group-hover:text-white transition-colors duration-300">
                10K+
              </div>
              <div className="text-white/80 text-sm md:text-base uppercase tracking-wider font-medium">
                {currentLanguage === 'PT' ? 'Clientes Atendidos' : 'Clients Served'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 