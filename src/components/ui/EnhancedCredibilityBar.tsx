'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Trophy, Globe, Users, TrendingUp, Award, Star, Building, Calendar } from 'lucide-react';

interface CredibilityItem {
  id: string;
  icon: React.ReactNode;
  textPT: string;
  textEN: string;
  highlight?: boolean;
}

const credibilityItems: CredibilityItem[] = [
  {
    id: 'award-2022',
    icon: <Trophy className="w-5 h-5" />,
    textPT: '🏆 Escritório Mais Admirado 2022',
    textEN: '🏆 Most Admired Law Firm 2022',
    highlight: true
  },
  {
    id: 'global-offices',
    icon: <Globe className="w-5 h-5" />,
    textPT: '🌍 13 Escritórios Globais',
    textEN: '🌍 13 Global Offices'
  },
  {
    id: 'clients',
    icon: <Users className="w-5 h-5" />,
    textPT: '👥 +10.000 Clientes Atendidos',
    textEN: '👥 +10,000 Clients Served'
  },
  {
    id: 'growth',
    icon: <TrendingUp className="w-5 h-5" />,
    textPT: '📊 Crescimento de 40% em 2023',
    textEN: '📊 40% Growth in 2023'
  },
  {
    id: 'excellence',
    icon: <Award className="w-5 h-5" />,
    textPT: '⭐ Excelência em Planejamento Patrimonial',
    textEN: '⭐ Excellence in Estate Planning'
  },
  {
    id: 'rating',
    icon: <Star className="w-5 h-5" />,
    textPT: '🌟 5 Estrelas em Satisfação do Cliente',
    textEN: '🌟 5-Star Client Satisfaction'
  },
  {
    id: 'top-firm',
    icon: <Building className="w-5 h-5" />,
    textPT: '🏢 Top 50 Bancas do Brasil',
    textEN: '🏢 Top 50 Law Firms in Brazil'
  },
  {
    id: 'experience',
    icon: <Calendar className="w-5 h-5" />,
    textPT: '📅 30 Anos de Tradição e Inovação',
    textEN: '📅 30 Years of Tradition and Innovation',
    highlight: true
  },
  {
    id: 'international',
    icon: <Globe className="w-5 h-5" />,
    textPT: '🌐 Atuação em 5 Continentes',
    textEN: '🌐 Operating on 5 Continents'
  },
  {
    id: 'specialization',
    icon: <Award className="w-5 h-5" />,
    textPT: '🎯 Especialistas em Wealth Management',
    textEN: '🎯 Wealth Management Specialists'
  }
];

interface EnhancedCredibilityBarProps {
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  showControls?: boolean;
  variant?: 'default' | 'dark' | 'gradient';
}

export default function EnhancedCredibilityBar({ 
  speed = 'normal',
  pauseOnHover = true,
  showControls = false,
  variant = 'default'
}: EnhancedCredibilityBarProps) {
  const { currentLanguage } = useLanguage();

  const getSpeed = () => {
    switch (speed) {
      case 'slow': return '60s';
      case 'fast': return '15s';
      default: return '30s';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-gray-900 text-white border-gray-700';
      case 'gradient':
        return 'bg-gradient-to-r from-mr-blue via-mr-bordo to-mr-blue text-white border-transparent';
      default:
        return 'bg-mr-blue text-white border-mr-blue/20';
    }
  };

  // Duplicate items for seamless loop
  const duplicatedItems = [...credibilityItems, ...credibilityItems];

  return (
    <div className={`
      relative w-full py-3 border-y overflow-hidden z-50
      ${getVariantClasses()}
    `}>
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-current to-transparent opacity-20 z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-current to-transparent opacity-20 z-10 pointer-events-none"></div>

      {/* Scrolling content */}
      <div 
        className={`
          flex items-center gap-8 whitespace-nowrap animate-scroll
          ${pauseOnHover ? 'hover:pause' : ''}
        `}
        style={{
          animation: `scroll ${getSpeed()} linear infinite`,
          width: 'max-content'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`
              flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300
              ${item.highlight ? 'bg-mr-gold/20 border border-mr-gold/30' : 'hover:bg-white/10'}
              ${item.highlight ? 'text-mr-gold font-semibold' : ''}
            `}
          >
            <div className={`
              flex items-center justify-center w-6 h-6 rounded-full
              ${item.highlight ? 'bg-mr-gold/30 text-mr-gold' : 'bg-white/20 text-white/80'}
            `}>
              {item.icon}
            </div>
            <span className="text-sm font-medium tracking-wide">
              {currentLanguage === 'PT' ? item.textPT : item.textEN}
            </span>
            {item.highlight && (
              <div className="w-2 h-2 bg-mr-gold rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Optional controls */}
      {showControls && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-20">
          <button 
            className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            onClick={() => {
              const element = document.querySelector('.animate-scroll') as HTMLElement;
              if (element) {
                element.style.animationPlayState = 'paused';
              }
            }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          </button>
          <button 
            className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            onClick={() => {
              const element = document.querySelector('.animate-scroll') as HTMLElement;
              if (element) {
                element.style.animationPlayState = 'running';
              }
            }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll ${getSpeed()} linear infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        /* Smooth fade for edges */
        .animate-scroll::before,
        .animate-scroll::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          z-index: 10;
          pointer-events: none;
        }

        .animate-scroll::before {
          left: 0;
          background: linear-gradient(to right, currentColor, transparent);
          opacity: 0.1;
        }

        .animate-scroll::after {
          right: 0;
          background: linear-gradient(to left, currentColor, transparent);
          opacity: 0.1;
        }
      `}</style>
    </div>
  );
} 