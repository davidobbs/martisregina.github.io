'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Users, Building } from 'lucide-react';

interface Office {
  id: string;
  name: string;
  nameEn: string;
  country: string;
  countryEn: string;
  address: string;
  addressEn: string;
  phone: string;
  email: string;
  timezone: string;
  staff: number;
  coordinates: { x: number; y: number };
  description: string;
  descriptionEn: string;
  isMain?: boolean;
}

const offices: Office[] = [
  {
    id: 'rio',
    name: 'Rio de Janeiro',
    nameEn: 'Rio de Janeiro',
    country: 'Brasil',
    countryEn: 'Brazil',
    address: 'Av. das Américas, 4200 - Barra da Tijuca',
    addressEn: 'Av. das Américas, 4200 - Barra da Tijuca',
    phone: '+55 21 2532-7311',
    email: 'rio@martinsregina.com.br',
    timezone: 'GMT-3',
    staff: 45,
    coordinates: { x: 35, y: 65 },
    description: 'Escritório principal com especialização em planejamento patrimonial.',
    descriptionEn: 'Main office specializing in estate planning.',
    isMain: true
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo',
    nameEn: 'São Paulo',
    country: 'Brasil',
    countryEn: 'Brazil',
    address: 'Av. Paulista, 1106 - Bela Vista',
    addressEn: 'Av. Paulista, 1106 - Bela Vista',
    phone: '+55 11 3456-7890',
    email: 'sp@martinsregina.com.br',
    timezone: 'GMT-3',
    staff: 32,
    coordinates: { x: 33, y: 67 },
    description: 'Centro financeiro com foco em direito empresarial.',
    descriptionEn: 'Financial center focused on corporate law.'
  },
  {
    id: 'florianopolis',
    name: 'Florianópolis',
    nameEn: 'Florianópolis',
    country: 'Brasil',
    countryEn: 'Brazil',
    address: 'R. Felipe Schmidt, 515 - Centro',
    addressEn: 'R. Felipe Schmidt, 515 - Centro',
    phone: '+55 48 3234-5678',
    email: 'floripa@martinsregina.com.br',
    timezone: 'GMT-3',
    staff: 18,
    coordinates: { x: 32, y: 71 },
    description: 'Especialização em tecnologia e startups.',
    descriptionEn: 'Specializing in technology and startups.'
  },
  {
    id: 'orlando',
    name: 'Orlando',
    nameEn: 'Orlando',
    country: 'Estados Unidos',
    countryEn: 'United States',
    address: '123 Orange Ave, Orlando, FL',
    addressEn: '123 Orange Ave, Orlando, FL',
    phone: '+1 407 123-4567',
    email: 'orlando@martinsregina.com',
    timezone: 'GMT-5',
    staff: 15,
    coordinates: { x: 25, y: 40 },
    description: 'Investimentos e planejamento patrimonial internacional.',
    descriptionEn: 'Investments and international estate planning.'
  },
  {
    id: 'zurich',
    name: 'Zurique',
    nameEn: 'Zurich',
    country: 'Suíça',
    countryEn: 'Switzerland',
    address: 'Bahnhofstrasse 45, 8001 Zürich',
    addressEn: 'Bahnhofstrasse 45, 8001 Zürich',
    phone: '+41 44 123 4567',
    email: 'zurich@martinsregina.com',
    timezone: 'GMT+1',
    staff: 12,
    coordinates: { x: 52, y: 25 },
    description: 'Banking e private wealth management.',
    descriptionEn: 'Banking and private wealth management.'
  },
  {
    id: 'lisboa',
    name: 'Lisboa',
    nameEn: 'Lisbon',
    country: 'Portugal',
    countryEn: 'Portugal',
    address: 'Av. da Liberdade, 195, 1250-141 Lisboa',
    addressEn: 'Av. da Liberdade, 195, 1250-141 Lisboa',
    phone: '+351 21 123 4567',
    email: 'lisboa@martinsregina.com',
    timezone: 'GMT+0',
    staff: 10,
    coordinates: { x: 47, y: 30 },
    description: 'Gateway para Europa e África.',
    descriptionEn: 'Gateway to Europe and Africa.'
  },
  {
    id: 'shanghai',
    name: 'Xangai',
    nameEn: 'Shanghai',
    country: 'China',
    countryEn: 'China',
    address: 'No. 233 Tai Cang Road, Shanghai',
    addressEn: 'No. 233 Tai Cang Road, Shanghai',
    phone: '+86 21 1234 5678',
    email: 'shanghai@martinsregina.com',
    timezone: 'GMT+8',
    staff: 8,
    coordinates: { x: 78, y: 35 },
    description: 'Mercados asiáticos e joint ventures.',
    descriptionEn: 'Asian markets and joint ventures.'
  },
  {
    id: 'sydney',
    name: 'Sydney',
    nameEn: 'Sydney',
    country: 'Austrália',
    countryEn: 'Australia',
    address: '100 George Street, Sydney NSW 2000',
    addressEn: '100 George Street, Sydney NSW 2000',
    phone: '+61 2 1234 5678',
    email: 'sydney@martinsregina.com',
    timezone: 'GMT+10',
    staff: 7,
    coordinates: { x: 85, y: 75 },
    description: 'Pacífico Sul e mineração.',
    descriptionEn: 'South Pacific and mining.'
  }
];

export default function GlobalPresenceSection() {
  const { currentLanguage } = useLanguage();
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 80;
      const pos = el.getBoundingClientRect().top;
      const offset = pos + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);

  const handleOfficeClick = (office: Office) => {
    setSelectedOffice(office);
  };

  const closeModal = () => {
    setSelectedOffice(null);
  };

  return (
    <section id="presenca" className="py-20 bg-gradient-to-br from-mr-blue to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-mr-gold transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-mr-gold/50 transform -rotate-12 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {currentLanguage === 'PT' ? 'Presença Global em' : 'Global Presence in'}
            <span className="text-mr-gold ml-3">13 Cidades</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {currentLanguage === 'PT' 
              ? 'Escritórios estrategicamente posicionados nos principais centros financeiros mundiais para atender nossos clientes onde quer que estejam.'
              : 'Offices strategically positioned in the world\'s major financial centers to serve our clients wherever they are.'
            }
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/10">
          <svg
            viewBox="0 0 100 60"
            className="w-full h-auto max-h-96"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
          >
            {/* World Map Outline (Simplified) */}
            <g fill="none" stroke="rgba(201, 169, 97, 0.3)" strokeWidth="0.2">
              {/* Continents simplified paths */}
              <path d="M10 25 Q15 20 25 22 Q35 18 45 25 Q50 30 45 35 Q35 40 25 38 Q15 35 10 30 Z" /> {/* Europe */}
              <path d="M20 35 Q30 30 40 35 Q50 40 45 50 Q35 55 25 50 Q15 45 20 40 Z" /> {/* Africa */}
              <path d="M50 20 Q65 15 80 20 Q85 25 80 35 Q70 40 60 35 Q50 30 50 25 Z" /> {/* Asia */}
              <path d="M80 50 Q85 45 90 50 Q88 55 85 58 Q80 60 75 55 Q78 52 80 50 Z" /> {/* Australia */}
              <path d="M5 20 Q15 15 25 20 Q30 25 25 35 Q20 40 10 35 Q5 30 5 25 Z" /> {/* North America */}
              <path d="M15 40 Q25 35 35 40 Q40 45 35 55 Q25 60 15 55 Q10 50 15 45 Z" /> {/* South America */}
            </g>

            {/* Office Pins */}
            {offices.map((office) => (
              <g key={office.id}>
                {/* Pin Shadow */}
                <circle
                  cx={office.coordinates.x + 0.5}
                  cy={office.coordinates.y + 0.5}
                  r={hoveredOffice === office.id ? "1.5" : "1"}
                  fill="rgba(0, 0, 0, 0.3)"
                  className="transition-all duration-300"
                />
                
                {/* Main Pin */}
                <circle
                  cx={office.coordinates.x}
                  cy={office.coordinates.y}
                  r={hoveredOffice === office.id ? "1.5" : office.isMain ? "1.2" : "1"}
                  fill={office.isMain ? "#c9a961" : "#ffffff"}
                  stroke={office.isMain ? "#ffffff" : "#c9a961"}
                  strokeWidth="0.3"
                  className="cursor-pointer transition-all duration-300 hover:animate-pulse"
                  onMouseEnter={() => setHoveredOffice(office.id)}
                  onMouseLeave={() => setHoveredOffice(null)}
                  onClick={() => handleOfficeClick(office)}
                />

                {/* Ripple Effect for Main Office */}
                {office.isMain && (
                  <circle
                    cx={office.coordinates.x}
                    cy={office.coordinates.y}
                    r="2"
                    fill="none"
                    stroke="#c9a961"
                    strokeWidth="0.2"
                    opacity="0.6"
                    className="animate-ping"
                  />
                )}

                {/* Office Label */}
                <text
                  x={office.coordinates.x}
                  y={office.coordinates.y - 2}
                  textAnchor="middle"
                  fill="white"
                  fontSize="1.5"
                  fontWeight="500"
                  className={`transition-opacity duration-300 ${
                    hoveredOffice === office.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {currentLanguage === 'PT' ? office.name : office.nameEn}
                </text>
              </g>
            ))}

            {/* Connection Lines (subtle) */}
            {offices.map((office, index) => {
              if (office.isMain) {
                return offices
                  .filter(o => !o.isMain)
                  .map(targetOffice => (
                    <line
                      key={`${office.id}-${targetOffice.id}`}
                      x1={office.coordinates.x}
                      y1={office.coordinates.y}
                      x2={targetOffice.coordinates.x}
                      y2={targetOffice.coordinates.y}
                      stroke="rgba(201, 169, 97, 0.1)"
                      strokeWidth="0.1"
                      strokeDasharray="0.5,0.5"
                    />
                  ));
              }
              return null;
            })}
          </svg>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-center gap-4 text-white text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-mr-gold rounded-full"></div>
                <span>{currentLanguage === 'PT' ? 'Escritório Principal' : 'Main Office'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>{currentLanguage === 'PT' ? 'Escritórios' : 'Offices'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 mb-16 w-full">
          {offices.map((office, index) => (
            <div
              key={office.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-mr-gold/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => handleOfficeClick(office)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-mr-gold transition-colors duration-300">
                    {currentLanguage === 'PT' ? office.name : office.nameEn}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {currentLanguage === 'PT' ? office.country : office.countryEn}
                  </p>
                </div>
                {office.isMain && (
                  <div className="w-3 h-3 bg-mr-gold rounded-full animate-pulse"></div>
                )}
              </div>

              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-mr-gold" />
                  <span>{office.staff} {currentLanguage === 'PT' ? 'profissionais' : 'professionals'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-mr-gold" />
                  <span>{office.timezone}</span>
                </div>
              </div>

              <p className="text-white/70 text-xs mt-3 line-clamp-2">
                {currentLanguage === 'PT' ? office.description : office.descriptionEn}
              </p>

              <div className="mt-4 flex justify-end">
                <div className="w-8 h-8 bg-mr-gold/20 rounded-full flex items-center justify-center group-hover:bg-mr-gold/30 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-mr-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
              13
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider font-medium">
              {currentLanguage === 'PT' ? 'Cidades' : 'Cities'}
            </div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
              8
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider font-medium">
              {currentLanguage === 'PT' ? 'Países' : 'Countries'}
            </div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
              5
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider font-medium">
              {currentLanguage === 'PT' ? 'Continentes' : 'Continents'}
            </div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold text-mr-gold mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-white/80 text-sm uppercase tracking-wider font-medium">
              {currentLanguage === 'PT' ? 'Cobertura' : 'Coverage'}
            </div>
          </div>
        </div>
      </div>

      {/* Office Detail Modal */}
      {selectedOffice && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-mr-blue to-mr-bordo text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-mr-gold" />
                <div>
                  <h3 className="text-2xl font-serif font-bold">
                    {currentLanguage === 'PT' ? selectedOffice.name : selectedOffice.nameEn}
                  </h3>
                  <p className="text-white/80">
                    {currentLanguage === 'PT' ? selectedOffice.country : selectedOffice.countryEn}
                  </p>
                </div>
                {selectedOffice.isMain && (
                  <div className="ml-auto">
                    <div className="bg-mr-gold text-white px-3 py-1 rounded-full text-xs font-bold">
                      {currentLanguage === 'PT' ? 'PRINCIPAL' : 'MAIN'}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-white/90 leading-relaxed">
                {currentLanguage === 'PT' ? selectedOffice.description : selectedOffice.descriptionEn}
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-mr-bordo mt-1" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        {currentLanguage === 'PT' ? 'Endereço' : 'Address'}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {currentLanguage === 'PT' ? selectedOffice.address : selectedOffice.addressEn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-mr-bordo mt-1" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        {currentLanguage === 'PT' ? 'Telefone' : 'Phone'}
                      </div>
                      <div className="text-gray-600 text-sm">
                        <a href={`tel:${selectedOffice.phone}`} className="hover:text-mr-bordo transition-colors">
                          {selectedOffice.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-mr-bordo mt-1" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        Email
                      </div>
                      <div className="text-gray-600 text-sm">
                        <a href={`mailto:${selectedOffice.email}`} className="hover:text-mr-bordo transition-colors">
                          {selectedOffice.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-mr-bordo mt-1" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        {currentLanguage === 'PT' ? 'Fuso Horário' : 'Timezone'}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {selectedOffice.timezone}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-mr-bordo mt-1" />
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        {currentLanguage === 'PT' ? 'Equipe' : 'Team'}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {selectedOffice.staff} {currentLanguage === 'PT' ? 'profissionais' : 'professionals'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button onClick={() => scrollToSection('contato')} className="flex-1 bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  {currentLanguage === 'PT' ? 'Agendar Reunião' : 'Schedule Meeting'}
                </button>
                <button
                  onClick={() => window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      selectedOffice?.address || ''
                    )}`,
                    '_blank'
                  )}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-full font-medium transition-colors duration-300"
                >
                  {currentLanguage === 'PT' ? 'Ver no Mapa' : 'View on Map'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 