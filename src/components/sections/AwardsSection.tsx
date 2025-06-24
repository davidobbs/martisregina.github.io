'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AwardsSection() {
  const { currentLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 80;
      const pos = el.getBoundingClientRect().top;
      const offset = pos + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const content = currentLanguage === 'PT' ? {
    badge: '30 Anos de Excelência',
    title: 'Três décadas de reconhecimento e inovação jurídica',
    subtitle: 'Desde 1994, construímos uma trajetória de sucesso baseada na excelência técnica, confiança e resultados excepcionais para nossos clientes.',
    awards: [
      {
        year: '2024',
        title: 'Escritório do Ano',
        org: 'Legal 500',
        category: 'Direito Empresarial'
      },
      {
        year: '2023',
        title: 'Best Law Firm',
        org: 'Chambers & Partners',
        category: 'Corporate Law'
      },
      {
        year: '2023',
        title: 'Excelência Jurídica',
        org: 'Análise Advocacia',
        category: 'Planejamento Patrimonial'
      },
      {
        year: '2022',
        title: 'Top Tier',
        org: 'LACCA',
        category: 'Contratos e Negócios'
      }
    ]
  } : {
    badge: '30 Years of Excellence',
    title: 'Three decades of recognition and legal innovation',
    subtitle: 'Since 1994, we have built a successful trajectory based on technical excellence, trust and exceptional results for our clients.',
    awards: [
      {
        year: '2024',
        title: 'Law Firm of the Year',
        org: 'Legal 500',
        category: 'Corporate Law'
      },
      {
        year: '2023',
        title: 'Best Law Firm',
        org: 'Chambers & Partners',
        category: 'Corporate Law'
      },
      {
        year: '2023',
        title: 'Legal Excellence',
        org: 'Legal Analysis',
        category: 'Asset Planning'
      },
      {
        year: '2022',
        title: 'Top Tier',
        org: 'LACCA',
        category: 'Contracts & Business'
      }
    ]
  };

  return (
    <section id="premiacoes" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-mr-bordo/10 text-mr-bordo px-6 py-3 rounded-full font-semibold text-sm mb-6">
            <span className="text-gray-700">🏆</span>
            {content.badge}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Awards Grid */}
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            {currentLanguage === 'PT' ? 'Reconhecimentos Recentes' : 'Recent Awards'}
          </h3>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {content.awards.map((award, index) => (
              <div key={index} className="w-full">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-mr-bordo h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-mr-bordo text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {award.year}
                    </span>
                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {award.title}
                  </h4>
                  
                  <p className="text-mr-bordo font-semibold mb-1">
                    {award.org}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll">
              {content.awards.map((award, index) => (
                <div key={index} className="flex-none w-72 snap-start">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-mr-bordo h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-mr-bordo text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {award.year}
                      </span>
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      {award.title}
                    </h4>
                    
                    <p className="text-mr-bordo font-semibold mb-1">
                      {award.org}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4">
              <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button onClick={() => scrollToSection('escritorio')} className="bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {currentLanguage === 'PT' ? 'Conheça nossa história' : 'Learn our story'}
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-40 h-40 bg-mr-bordo/5 rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-32 h-32 bg-mr-bordo/5 rounded-full"></div>
      </div>
    </section>
  );
} 