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
      {/* Top Contact Bar - Fixed for Mobile */}
      <div className="bg-mr-bordo text-white py-2 relative z-[55] lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+5511999999999" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 99999-9999
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com/martinsregina" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/martinsregina" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-[60] lg:top-0">
        <div 
          className="h-full bg-gradient-to-r from-mr-bordo to-red-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`${
        isScrolled 
          ? 'bg-white/95 text-gray-900 shadow-2xl border-b border-gray-100 backdrop-blur-md' 
          : 'bg-transparent text-white'
      } fixed top-0 lg:top-0 left-0 w-full z-40 transition-all duration-500 ease-out`}>
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
