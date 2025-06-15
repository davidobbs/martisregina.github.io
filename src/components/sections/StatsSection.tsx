'use client';

import { useLanguage } from '@/context/LanguageContext';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const { currentLanguage } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const content = currentLanguage === 'PT' ? {
    badge: '30 Anos de Excelência',
    title: 'O escritório em números',
    subtitle: 'Três décadas construindo uma trajetória de sucesso baseada na excelência técnica e resultados excepcionais.',
    stats: [
      { 
        number: 30, 
        suffix: '', 
        label: 'Anos de experiência', 
        icon: '🏆',
        description: 'de atuação sólida no mercado'
      },
      { 
        number: 1000, 
        suffix: '+', 
        label: 'Clientes atendidos', 
        icon: '👥',
        description: 'com sucesso ao longo dos anos'
      },
      { 
        number: 14, 
        suffix: '', 
        label: 'Escritórios globais', 
        icon: '🌍',
        description: 'presença internacional consolidada'
      },
      { 
        number: 16, 
        suffix: '', 
        label: 'Áreas especializadas', 
        icon: '⚖️',
        description: 'expertise jurídica abrangente'
      },
      { 
        number: 50, 
        suffix: '+', 
        label: 'Prêmios recebidos', 
        icon: '🥇',
        description: 'reconhecimento do mercado'
      },
      { 
        number: 95, 
        suffix: '%', 
        label: 'Taxa de sucesso', 
        icon: '📈',
        description: 'em processos judiciais'
      }
    ]
  } : {
    badge: '30 Years of Excellence',
    title: 'The firm in numbers',
    subtitle: 'Three decades building a successful trajectory based on technical excellence and exceptional results.',
    stats: [
      { 
        number: 30, 
        suffix: '', 
        label: 'Years of experience', 
        icon: '🏆',
        description: 'of solid market presence'
      },
      { 
        number: 1000, 
        suffix: '+', 
        label: 'Clients served', 
        icon: '👥',
        description: 'successfully over the years'
      },
      { 
        number: 14, 
        suffix: '', 
        label: 'Global offices', 
        icon: '🌍',
        description: 'consolidated international presence'
      },
      { 
        number: 16, 
        suffix: '', 
        label: 'Specialized areas', 
        icon: '⚖️',
        description: 'comprehensive legal expertise'
      },
      { 
        number: 50, 
        suffix: '+', 
        label: 'Awards received', 
        icon: '🥇',
        description: 'market recognition'
      },
      { 
        number: 95, 
        suffix: '%', 
        label: 'Success rate', 
        icon: '📈',
        description: 'in judicial proceedings'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-mr-bordo/10 text-mr-bordo px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <span className="text-gray-700">📊</span>
            {content.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-mr-bordo/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Number with animation */}
              <div className="text-4xl md:text-5xl font-bold text-mr-bordo mb-3 relative z-10">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    delay={index * 0.2}
                    suffix={stat.suffix}
                    useEasing={true}
                  />
                ) : (
                  '0' + stat.suffix
                )}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mr-bordo to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">
              {currentLanguage === 'PT' ? 'Seja nosso próximo cliente de sucesso' : 'Be our next success client'}
            </span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-mr-bordo/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-mr-bordo/5 rounded-full blur-xl"></div>
    </section>
  );
} 