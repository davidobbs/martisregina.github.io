'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function TimelineSection() {
  const { currentLanguage } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const content = currentLanguage === 'PT' ? {
    badge: 'Nossa Jornada',
    title: 'Marcos de uma trajetória de sucesso',
    subtitle: 'Três décadas de crescimento, inovação e conquistas que marcaram nossa história.',
    milestones: [
      {
        year: '1994',
        title: 'Fundação do Escritório',
        description: 'Início das atividades com foco em direito empresarial e contratos, estabelecendo as bases sólidas de nossa atuação.',
        highlight: 'Marco inicial',
        icon: '🏛️'
      },
      {
        year: '2001',
        title: 'Primeira Expansão',
        description: 'Abertura do segundo escritório e consolidação da expertise em planejamento patrimonial.',
        highlight: 'Crescimento',
        icon: '📈'
      },
      {
        year: '2007',
        title: 'Atuação Pro Bono',
        description: 'Início da atuação voluntária em casos de Hipertensão Arterial Pulmonar, reforçando nosso compromisso social.',
        highlight: 'Responsabilidade social',
        icon: '🤝'
      },
      {
        year: '2015',
        title: 'Expansão Internacional',
        description: 'Estabelecimento de parcerias estratégicas e presença em mercados internacionais.',
        highlight: 'Globalização',
        icon: '🌍'
      },
      {
        year: '2017',
        title: 'Reestruturação e Inovação',
        description: 'Modernização dos processos internos e implementação de tecnologias avançadas para melhor atendimento.',
        highlight: 'Modernização',
        icon: '⚡'
      },
      {
        year: '2020',
        title: 'Adaptação Digital',
        description: 'Transição completa para atendimento híbrido e implementação de soluções digitais inovadoras.',
        highlight: 'Transformação digital',
        icon: '💻'
      },
      {
        year: '2024',
        title: '30 Anos de Excelência',
        description: 'Celebração de três décadas de sucesso com mais de 1000 clientes atendidos e presença global consolidada.',
        highlight: '30º aniversário',
        icon: '🎉'
      }
    ]
  } : {
    badge: 'Our Journey',
    title: 'Milestones of a successful trajectory',
    subtitle: 'Three decades of growth, innovation and achievements that marked our history.',
    milestones: [
      {
        year: '1994',
        title: 'Firm Foundation',
        description: 'Started operations with focus on corporate law and contracts, establishing solid foundations for our practice.',
        highlight: 'Initial milestone',
        icon: '🏛️'
      },
      {
        year: '2001',
        title: 'First Expansion',
        description: 'Opening of second office and consolidation of expertise in asset planning.',
        highlight: 'Growth',
        icon: '📈'
      },
      {
        year: '2007',
        title: 'Pro Bono Practice',
        description: 'Beginning of voluntary work in Pulmonary Arterial Hypertension cases, reinforcing our social commitment.',
        highlight: 'Social responsibility',
        icon: '🤝'
      },
      {
        year: '2015',
        title: 'International Expansion',
        description: 'Establishment of strategic partnerships and presence in international markets.',
        highlight: 'Globalization',
        icon: '🌍'
      },
      {
        year: '2017',
        title: 'Restructuring and Innovation',
        description: 'Modernization of internal processes and implementation of advanced technologies for better service.',
        highlight: 'Modernization',
        icon: '⚡'
      },
      {
        year: '2020',
        title: 'Digital Adaptation',
        description: 'Complete transition to hybrid service and implementation of innovative digital solutions.',
        highlight: 'Digital transformation',
        icon: '💻'
      },
      {
        year: '2024',
        title: '30 Years of Excellence',
        description: 'Celebrating three decades of success with over 1000 clients served and consolidated global presence.',
        highlight: '30th anniversary',
        icon: '🎉'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-mr-bordo/10 text-mr-bordo px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <span className="text-gray-700">📅</span>
            {content.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Timeline Horizontal Scroll */}
        <div className="overflow-x-auto w-full pb-4">
          <div className="flex space-x-8 snap-x snap-mandatory scrollbar-hide px-4">
            {content.milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex-none snap-center w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{milestone.icon}</div>
                  <div className="bg-mr-bordo text-white px-4 py-2 rounded-full font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="bg-mr-bordo/10 text-mr-bordo px-3 py-1 rounded-full text-xs font-semibold">
                    {milestone.highlight}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-mr-bordo/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-mr-bordo/5 rounded-full blur-xl"></div>
    </section>
  );
} 