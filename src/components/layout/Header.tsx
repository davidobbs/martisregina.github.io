'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "../ui/button";
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { currentLanguage, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_progress = (winScroll / height) * 100;
      setScrollProgress(scrolled_progress);
      
      // Detect active section
      const sections = ['escritorio', 'areas', 'premiacoes', 'reconhecimentos', 'artigos', 'presenca', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

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
    closeMobileMenu();
  };

  const navigationItems = [
    { href: '#escritorio', key: 'escritorio', pt: 'Escritório', en: 'About Us' },
    { href: '#areas', key: 'areas', pt: 'Áreas de Atuação', en: 'Practice Areas' },
    { href: '#premiacoes', key: 'premiacoes', pt: 'Premiações', en: 'Awards' },
    { href: '#reconhecimentos', key: 'reconhecimentos', pt: 'Reconhecimentos', en: 'Recognitions' },
    { href: '#artigos', key: 'artigos', pt: 'Artigos', en: 'Articles' },
    { href: '#presenca', key: 'presenca', pt: 'Onde Estamos', en: 'Locations' },
    { href: '#contato', key: 'contato', pt: 'Contato', en: 'Contact' },
  ];

  const isActive = (key: string) => activeSection === key;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-mr-bordo to-red-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`${
        isScrolled 
          ? 'bg-white/95 text-gray-900 shadow-2xl border-b border-gray-100 backdrop-blur-md' 
          : 'bg-transparent text-white'
      } fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="logo group">
              <Link 
                href="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center transition-all duration-300 group-hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src="/logo martins regina.png"
                    alt="Martins Regina Advocacia Logo"
                    width={140}
                    height={40}
                    priority
                    className="h-auto drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl"
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-mr-bordo/20 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`
                    relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden
                    ${isScrolled 
                      ? `text-gray-700 hover:text-mr-bordo hover:bg-mr-bordo/5
                         ${isActive(item.key) ? 'text-mr-bordo bg-mr-bordo/10' : ''}` 
                      : `text-white/90 hover:text-white hover:bg-white/10
                         ${isActive(item.key) ? 'text-white bg-white/15' : ''}`
                    }
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-mr-bordo/0 to-mr-bordo/0 group-hover:from-mr-bordo/5 group-hover:to-mr-bordo/10 transition-all duration-300"></div>
                  
                  <span className="relative z-10">{currentLanguage === 'PT' ? item.pt : item.en}</span>
                  
                  {/* Active indicator */}
                  <span className={`
                    absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-mr-bordo transition-all duration-300 rounded-full
                    ${isActive(item.key) ? 'w-6' : 'w-0 group-hover:w-6'}
                  `} />
                </button>
              ))}
              
              {/* Language Toggle */}
              <div className="flex items-center ml-6 space-x-4">
                <button
                  onClick={toggleLanguage}
                  className={`
                    relative overflow-hidden px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 group
                    ${isScrolled 
                      ? 'border-gray-300 text-gray-700 hover:border-mr-bordo hover:text-mr-bordo hover:bg-mr-bordo/5' 
                      : 'border-white/50 text-white hover:border-white hover:bg-white/10'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {currentLanguage === 'PT' ? 'EN' : 'PT'}
                  </span>
                  <div className="absolute inset-0 bg-mr-bordo/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="relative overflow-hidden bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {currentLanguage === 'PT' ? 'Vamos conversar' : "Let's talk"}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLanguage}
                className={`
                  px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-300
                  ${isScrolled 
                    ? 'border-gray-300 text-gray-700 hover:border-mr-bordo hover:text-mr-bordo' 
                    : 'border-white/50 text-white hover:border-white'
                  }
                `}
              >
                {currentLanguage === 'PT' ? 'EN' : 'PT'}
              </button>
              
              {/* Hamburger Menu */}
              <button
                onClick={toggleMobileMenu}
                className={`relative w-10 h-10 rounded-xl transition-all duration-300 ${
                  isScrolled ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'
                  } ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
                  <span className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'mb-1'
                  } ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
                  <span className={`block w-5 h-0.5 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  } ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-900 font-medium hover:bg-mr-bordo/5 hover:text-mr-bordo transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {currentLanguage === 'PT' ? item.pt : item.en}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="w-full bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white font-semibold py-3 rounded-xl shadow-lg"
                >
                  {currentLanguage === 'PT' ? 'Vamos conversar' : "Let's talk"}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
