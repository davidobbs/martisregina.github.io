'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

interface InfoScrollBarProps {
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  showControls?: boolean;
}

export default function InfoScrollBar({ 
  speed = 'normal', 
  pauseOnHover = true, 
  showControls = false 
}: InfoScrollBarProps) {
  const { currentLanguage } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const infoItems = currentLanguage === 'PT' ? [
    "🎉 30 anos de excelência jurídica em 2024",
    "⚖️ Especialistas em Planejamento Patrimonial e Negócios",
    "🏆 Reconhecimento em Direito Empresarial e Contratos",
    "🌍 Presença global com escritórios em 14 localidades",
    "📅 Agende sua consulta gratuita hoje mesmo",
    "💼 Mais de 1000 clientes atendidos com sucesso",
    "🔒 Confidencialidade e sigilo absoluto garantidos",
    "📞 Atendimento personalizado 24/7"
  ] : [
    "🎉 30 years of legal excellence in 2024",
    "⚖️ Specialists in Asset Planning and Business",
    "🏆 Recognition in Corporate Law and Contracts",
    "🌍 Global presence with offices in 14 locations",
    "📅 Schedule your free consultation today",
    "💼 Over 1000 clients successfully served",
    "🔒 Absolute confidentiality and secrecy guaranteed",
    "📞 Personalized 24/7 service"
  ];

  // Configuração de velocidade
  const speedConfig = {
    slow: 'animate-[scroll_45s_linear_infinite]',
    normal: 'animate-[scroll_30s_linear_infinite]',
    fast: 'animate-[scroll_15s_linear_infinite]'
  };

  const animationClass = speedConfig[speed];

  return (
    <div className="bg-mr-bordo text-white py-2 overflow-hidden relative group">
      {/* Indicador visual de ticker */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Gradientes laterais para efeito suave */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-mr-bordo to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-mr-bordo to-transparent z-10"></div>

      {/* Container do scroll */}
      <div 
        className={`flex whitespace-nowrap ${animationClass} ${
          isPaused || (pauseOnHover && 'group-hover:[animation-play-state:paused]')
        }`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        style={isPaused ? { animationPlayState: 'paused' } : undefined}
        aria-label={currentLanguage === 'PT' ? 'Barra de notícias em movimento' : 'Moving news ticker'}
        role="marquee"
      >
        {/* Primeira instância dos itens */}
        {infoItems.map((item, index) => (
          <span 
            key={`first-${index}`} 
            className="inline-flex items-center mx-8 text-sm font-medium hover:text-gray-200 transition-colors duration-200 cursor-pointer"
            role="text"
          >
            {item}
          </span>
        ))}
        
        {/* Segunda instância para continuidade do scroll */}
        {infoItems.map((item, index) => (
          <span 
            key={`second-${index}`} 
            className="inline-flex items-center mx-8 text-sm font-medium hover:text-gray-200 transition-colors duration-200 cursor-pointer"
            role="text"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Controles opcionais */}
      {showControls && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-white hover:text-gray-200 transition-colors duration-200 text-xs"
            aria-label={isPaused ? 
              (currentLanguage === 'PT' ? 'Retomar ticker' : 'Resume ticker') : 
              (currentLanguage === 'PT' ? 'Pausar ticker' : 'Pause ticker')
            }
          >
            {isPaused ? '▶️' : '⏸️'}
          </button>
        </div>
      )}

      {/* Texto para leitores de tela */}
      <div className="sr-only">
        {currentLanguage === 'PT' ? 'Últimas notícias e informações:' : 'Latest news and information:'} {infoItems.join(', ')}
      </div>
    </div>
  );
} 