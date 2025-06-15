'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Calendar, CheckCircle, MapPin, ChevronDown } from 'lucide-react';

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
        console.log(`Navegando para seção: ${sectionId}`);
        
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
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-mr-black to-mr-bordo"
      role="banner"
      aria-label={currentLanguage === 'PT' ? 'Seção principal do site' : 'Main site section'}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4">
        {/* Título principal */}
        <h1 className={`text-5xl md:text-7xl font-serif font-bold text-white uppercase mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {currentLanguage === 'PT'
            ? '30 ANOS DE EXCELÊNCIA JURÍDICA'
            : '30 YEARS OF LEGAL EXCELLENCE'}
        </h1>

        {/* Subtítulo */}
        <p className={`text-xl md:text-2xl text-white/80 uppercase tracking-wider mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {currentLanguage === 'PT'
            ? 'Planejamento Patrimonial  |  Negócios  |  Contratos'
            : 'Estate Planning  |  Business  |  Contracts'}
        </p>

        {/* CTAs */}
        <div className={`flex gap-4 justify-center mb-6 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => scrollToSection('contato', 'contact')}
            className="bg-mr-bordo text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors duration-300 flex items-center gap-2"
          >
            {currentLanguage === 'PT' ? 'Agende uma Consulta' : 'Schedule a Consultation'}
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection('about', 'about')}
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-mr-bordo transition-colors duration-300 flex items-center gap-2"
          >
            {currentLanguage === 'PT' ? 'Conheça Nossos Sócios' : 'Meet Our Partners'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className={`transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
          <p className="text-sm text-white/70 uppercase tracking-wider mt-2">
            {currentLanguage === 'PT' ? 'Role para descobrir mais' : 'Scroll to discover more'}
          </p>
        </div>
      </div>
    </section>
  );
} 