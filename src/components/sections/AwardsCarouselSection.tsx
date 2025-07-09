'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AwardsCarouselSection() {
  const { currentLanguage } = useLanguage();

  const content = currentLanguage === 'PT' ? {
    title: 'Premiações',
    subtitle: 'Reconhecidos por nossa excelência jurídica',
    awards: [
      {
        title: 'Análise Advocacia 2022',
        description: 'Escritório especializado - Setor Farmacêutico',
        position: '4º lugar'
      },
      {
        title: 'Chambers & Partners',
        description: 'Best Law Firm - Corporate Law',
        position: 'Ranking 2023'
      },
      {
        title: 'Legal 500',
        description: 'Direito Empresarial e Contratos',
        position: 'Top Tier'
      },
      {
        title: 'Quality Magazine',
        description: 'Excelência em Gestão Jurídica',
        position: '2022'
      }
    ]
  } : {
    title: 'Awards',
    subtitle: 'Recognized for our legal excellence',
    awards: [
      {
        title: 'Legal Analysis 2022',
        description: 'Specialized Firm - Pharmaceutical Sector',
        position: '4th place'
      },
      {
        title: 'Chambers & Partners',
        description: 'Best Law Firm - Corporate Law',
        position: 'Ranking 2023'
      },
      {
        title: 'Legal 500',
        description: 'Corporate Law and Contracts',
        position: 'Top Tier'
      },
      {
        title: 'Quality Magazine',
        description: 'Excellence in Legal Management',
        position: '2022'
      }
    ]
  };

  return (
    <section id="premiacoes" className="py-20 bg-gradient-to-br from-mr-black to-mr-bordo text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {content.title}
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Grid de Prêmios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {content.awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Ícone de troféu */}
              <div className="w-16 h-16 bg-mr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              
              {/* Título do prêmio */}
              <h3 className="text-lg font-bold mb-2 text-white">
                {award.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-white/80 text-sm mb-3">
                {award.description}
              </p>
              
              {/* Posição/Ano */}
              <div className="bg-mr-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                {award.position}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 