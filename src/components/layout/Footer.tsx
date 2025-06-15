'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { currentLanguage } = useLanguage();

  return (
    <footer className="relative bg-gradient-to-r from-mr-black/95 via-gray-900/95 to-mr-black/95 backdrop-blur-sm text-white border-t border-gray-800/50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-mr-bordo to-transparent"></div>
      
      <div className="container mx-auto px-4 lg:px-6 py-8">
        
        {/* Links da Área de Direito */}
        <div className="mb-8">
          <h4 className="text-lg font-serif font-semibold mb-4 text-mr-bordo">
            {currentLanguage === 'PT' ? 'Links da Área de Direito' : 'Legal Area Links'}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <a 
              href="https://www.migalhas.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Migalhas
            </a>
            <a 
              href="https://www.jota.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              JOTA
            </a>
            <a 
              href="https://www.conjur.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Consultor Jurídico
            </a>
            <a 
              href="https://www.jusbrasil.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Jusbrasil
            </a>
            <a 
              href="https://ambitojuridico.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Âmbito Jurídico
            </a>
            <a 
              href="https://www.minutosdedireito.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Minutos de Direito
            </a>
            <a 
              href="https://juristas.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Juristas
            </a>
            <a 
              href="https://www.olharjuridico.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Olhar Jurídico
            </a>
            <a 
              href="https://www.justificando.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-mr-bordo transition-colors duration-300 text-sm"
            >
              Justificando
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 text-sm">
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-gray-300">
              <a 
                href="tel:+552125327311" 
                className="hover:text-mr-bordo transition-colors duration-300 font-medium"
              >
                {currentLanguage === 'PT' ? 'Contato: +55 21 2532-7311' : 'Contact: +55 21 2532-7311'}
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a 
                href="mailto:contato@martinsregina.com" 
                className="hover:text-mr-bordo transition-colors duration-300 font-medium"
              >
                contato@martinsregina.com
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400">
              <span>© {new Date().getFullYear()} Martins Regina Advocacia</span>
              <span className="mx-2">•</span>
              <span className="hover:text-mr-bordo transition-colors duration-300">
                {currentLanguage === 'PT' ? 'Todos os direitos reservados' : 'All rights reserved'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
