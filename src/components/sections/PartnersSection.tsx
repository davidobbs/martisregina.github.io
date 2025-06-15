'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Partner {
  id: string;
  name: string;
  area: string;
  areaEn: string;
  image: string;
  description: string;
  descriptionEn: string;
}

const partners: Partner[] = [
  {
    id: 'martins',
    name: 'Dr. Regina Martins',
    area: 'Planejamento Patrimonial',
    areaEn: 'Estate Planning',
    image: '/partners/regina-martins.jpg',
    description: 'Sócia fundadora com mais de 30 anos de experiência em planejamento patrimonial.',
    descriptionEn: 'Founding partner with over 30 years of experience in estate planning.'
  },
  {
    id: 'silva',
    name: 'Dr. Carlos Silva',
    area: 'Direito Empresarial',
    areaEn: 'Corporate Law',
    image: '/partners/carlos-silva.jpg',
    description: 'Especialista em direito empresarial e fusões & aquisições.',
    descriptionEn: 'Specialist in corporate law and mergers & acquisitions.'
  },
  {
    id: 'santos',
    name: 'Dra. Ana Santos',
    area: 'Direito Tributário',
    areaEn: 'Tax Law',
    image: '/partners/ana-santos.jpg',
    description: 'Líder em estratégias tributárias e compliance fiscal.',
    descriptionEn: 'Leader in tax strategies and fiscal compliance.'
  },
  {
    id: 'oliveira',
    name: 'Dr. João Oliveira',
    area: 'Contencioso',
    areaEn: 'Litigation',
    image: '/partners/joao-oliveira.jpg',
    description: 'Especialista em litígios complexos e arbitragem.',
    descriptionEn: 'Specialist in complex litigation and arbitration.'
  }
];

export default function PartnersSection() {
  const { currentLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 4)) % Math.ceil(partners.length / 4));
  };

  return (
    <section id="socios" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border border-mr-bordo transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-mr-bordo/50 transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {currentLanguage === 'PT' ? 'Conheça Nossos' : 'Meet Our'}
            <span className="text-mr-bordo ml-3">
              {currentLanguage === 'PT' ? 'Sócios' : 'Partners'}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLanguage === 'PT' 
              ? 'Líderes experientes que combinam excelência técnica, visão estratégica e compromisso com resultados excepcionais.'
              : 'Experienced leaders who combine technical excellence, strategic vision and commitment to exceptional results.'
            }
          </p>
        </div>

        {/* Partners Grid */}
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={partner.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div 
                    className="w-full h-full bg-gray-300 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${partner.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(70%) group-hover:grayscale(0)',
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Color overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
                    style={{
                      background: 'linear-gradient(45deg, rgba(201, 169, 97, 0.2), rgba(26, 43, 74, 0.2))'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-mr-bordo transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-mr-bordo font-medium mb-3">
                    {currentLanguage === 'PT' ? partner.area : partner.areaEn}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {currentLanguage === 'PT' ? partner.description : partner.descriptionEn}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-mr-bordo rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {partners.map((partner, index) => (
                  <div key={partner.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="relative aspect-[3/4]">
                        <div 
                          className="w-full h-full bg-gray-300"
                          style={{
                            backgroundImage: `url(${partner.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(50%)',
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-mr-bordo font-medium mb-3">
                          {currentLanguage === 'PT' ? partner.area : partner.areaEn}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {currentLanguage === 'PT' ? partner.description : partner.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-mr-bordo hover:bg-mr-bordo hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentSlide === index ? 'bg-mr-bordo' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-mr-bordo hover:bg-mr-bordo hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-3">
              {currentLanguage === 'PT' ? 'Ver Todos os Sócios' : 'View All Partners'}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 