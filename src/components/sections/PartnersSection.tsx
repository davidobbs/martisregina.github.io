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
  role: string;
  roleEn: string;
  expertise: string[];
  expertiseEn: string[];
  linkedinUrl?: string;
  detailedBio?: string;
  detailedBioEn?: string;
  achievements?: string[];
  achievementsEn?: string[];
  specializations?: string[];
  specializationsEn?: string[];
}

const partners: Partner[] = [
  {
    id: 'deregina',
    name: 'Dr. Pedro DeRegina',
    area: 'Planejamento Patrimonial e Sucessório',
    areaEn: 'Estate and Succession Planning',
    image: '/partners/pedro-deregina.jpeg',
    description: 'Managing Partner do Martins Regina Advocacia, especialista em Planejamento Patrimonial Familiar e Sucessório com ampla expertise em estruturação de empresas no exterior. Reconhecido pela Análise Advocacia e Best Lawyers® entre os advogados mais admirados do Brasil. Fundador do podcast "Manda Pro Jurídico!" e palestrante em eventos de IA no direito.',
    descriptionEn: 'Managing Partner at Martins Regina Advocacia, specializing in Family Estate and Succession Planning with extensive expertise in offshore corporate structuring. Recognized by Análise Advocacia and Best Lawyers® among Brazil\'s most admired lawyers. Founder of the "Manda Pro Jurídico!" podcast and speaker at AI in law events.',
    role: 'Managing Partner',
    roleEn: 'Managing Partner',
    expertise: ['Planejamento Patrimonial', 'Negócios Internacionais', 'Litígio de PI', 'Reestruturação Societária', 'Direito da Saúde', 'Direito Farmacêutico'],
    expertiseEn: ['Estate Planning', 'International Business', 'IP Litigation', 'Corporate Restructuring', 'Healthcare Law', 'Pharmaceutical Law'],
    linkedinUrl: 'https://www.linkedin.com/in/dr-pedro-deregina/',
    detailedBio: `Sócio do Martins Regina Advocacia e especialista em Planejamento Patrimonial Familiar e Sucessório. Ampla expertise prática na Estruturação de Empresas no exterior. Assessoro e presto consultoria para empresas brasileiras que desejam expandir seus negócios para os EUA, Europa, China e Oriente Médio.

Minha trajetória na Iniciativa Privada teve início no grupo BAT na área de Contratos. Em 2011 aceitei o convite para integrar o De Regina Advogados. Conduzi o plano de reestruturação societária que deu origem ao Martins Regina Advocacia. Hoje, na condição de Managing Partner, lidero as operações globais e da sede no Rio de Janeiro.

Posso destacar como diferenciais minha experiência hands-on em disputas internacionais, inclusive tendo criado uma rede própria de Business Partners em 8 países para melhor atender as demandas societárias e tributárias dos clientes, com informações full-time.

No contencioso estratégico destaco casos vencidos de infração e nulidade de patentes que ultrapassam 1bi. Reconhecido pela Análise Advocacia e Best Lawyers® no rol dos advogados mais admirados do Brasil, fui sucessivamente eleito no Setor Farmacêutico e na área de Propriedade Intelectual pelo desempenho no contencioso de patentes, PPP e transferência de tecnologia.

Minha visão multidisciplinar e vivência no exterior me credenciaram para atuar para os Consulados Americano e Britânico. No setor médico, conduzi a estruturação de hospitais (no Brasil e exterior), bem como de clínicas para médicos que eram da equipe do Dr. Ivo Pitanguy, além de elaborar planos de reestruturação empresarial e planejamento patrimonial para médicos em todo Brasil.

Elaborei diversos tipos de contratos para grandes empresas como Mediservice (Bradesco Seguros), Cristália, Shell, Walmart, Adobe, BIC, Orla Rio, BioChimico, JTI, Texaco etc.

O Martins Regina Advocacia tem presença nacional na atuação em Direito Condominial. Nessa seara elaborei e consegui registrar o primeiro Estatuto do Estado do RJ com possibilidade assembleia virtual, antes mesmo da mudança legal.

Fundador do podcast Manda Pro Jurídico! que visa descomplicar o direito para aproximar a sociedade, rodo o Brasil ministrando palestras em eventos relacionados a IA no direito.`,
    detailedBioEn: `Partner at Martins Regina Advocacia and specialist in Family Estate and Succession Planning. Extensive practical expertise in offshore corporate structuring. I advise and provide consulting services to Brazilian companies seeking to expand their business to the USA, Europe, China, and the Middle East.

My trajectory in the private sector began at BAT group in the Contracts area. In 2011, I accepted the invitation to join De Regina Advogados. I led the corporate restructuring plan that gave rise to Martins Regina Advocacia. Today, as Managing Partner, I lead global operations and the Rio de Janeiro headquarters.

I can highlight as differentials my hands-on experience in international disputes, including having created my own network of Business Partners in 8 countries to better serve clients' corporate and tax demands, with full-time information.

In strategic litigation, I highlight won cases of patent infringement and nullity that exceed 1 billion. Recognized by Análise Advocacia and Best Lawyers® among Brazil's most admired lawyers, I was successively elected in the Pharmaceutical Sector and in the Intellectual Property area for performance in patent litigation, PPP, and technology transfer.

My multidisciplinary vision and experience abroad have qualified me to work for the American and British Consulates. In the medical sector, I led the structuring of hospitals (in Brazil and abroad), as well as clinics for doctors who were part of Dr. Ivo Pitanguy's team, in addition to developing business restructuring plans and estate planning for doctors throughout Brazil.

I have drafted various types of contracts for large companies such as Mediservice (Bradesco Seguros), Cristália, Shell, Walmart, Adobe, BIC, Orla Rio, BioChimico, JTI, Texaco, etc.

Martins Regina Advocacia has a national presence in Condominium Law. In this area, I drafted and managed to register the first Statute in the State of RJ with the possibility of virtual assembly, even before the legal change.

Founder of the podcast "Manda Pro Jurídico!" which aims to simplify law to bring society closer, I travel around Brazil giving lectures at events related to AI in law.`,
    achievements: [
      'Reconhecido pela Análise Advocacia entre os mais admirados do Brasil',
      'Eleito pela Best Lawyers® no Setor Farmacêutico e Propriedade Intelectual',
      'Casos vencidos de patentes que ultrapassam R$ 1 bilhão',
      'Criação de rede de Business Partners em 8 países',
      'Primeiro Estatuto do RJ com assembleia virtual',
      'Fundador do podcast "Manda Pro Jurídico!"',
      'Palestrante em eventos de IA no direito'
    ],
    achievementsEn: [
      'Recognized by Análise Advocacia among Brazil\'s most admired',
      'Elected by Best Lawyers® in Pharmaceutical Sector and Intellectual Property',
      'Won patent cases exceeding R$ 1 billion',
      'Creation of Business Partners network in 8 countries',
      'First RJ Statute with virtual assembly',
      'Founder of "Manda Pro Jurídico!" podcast',
      'Speaker at AI in law events'
    ],
    specializations: [
      'Planejamento Patrimonial Familiar e Sucessório',
      'Estruturação de Empresas no Exterior',
      'Contencioso de Patentes e Propriedade Intelectual',
      'Direito Farmacêutico e da Saúde',
      'Reestruturação Societária',
      'Direito Condominial',
      'Consultoria para Expansão Internacional',
      'Contratos Empresariais Complexos'
    ],
    specializationsEn: [
      'Family Estate and Succession Planning',
      'Offshore Corporate Structuring',
      'Patent and Intellectual Property Litigation',
      'Pharmaceutical and Healthcare Law',
      'Corporate Restructuring',
      'Condominium Law',
      'International Expansion Consulting',
      'Complex Business Contracts'
    ]
  },
  {
    id: 'marcelo',
    name: 'Dr. Marcelo Borges',
    area: 'Direito Societário e Imobiliário',
    areaEn: 'Corporate and Real Estate Law',
    image: '/partners/marcelo socio.jpeg',
    description: 'Sócio-associado do Martins Regina Advocacia, especialista em Direito Societário e Imobiliário com mais de 10 anos de experiência. Atua em planejamento patrimonial, due diligence e operações de M&A, com foco em grupos familiares e empresas de médio porte.',
    descriptionEn: 'Associate Partner at Martins Regina Advocacia, specializing in Corporate and Real Estate Law with over 10 years of experience. Works in estate planning, due diligence and M&A operations, focusing on family groups and medium-sized companies.',
    role: 'Sócio-Associado',
    roleEn: 'Associate Partner',
    expertise: ['Direito Societário', 'Direito Imobiliário', 'Planejamento Patrimonial', 'Due Diligence', 'Contratos Empresariais', 'Governança'],
    expertiseEn: ['Corporate Law', 'Real Estate Law', 'Estate Planning', 'Due Diligence', 'Business Contracts', 'Governance'],
    linkedinUrl: 'https://www.linkedin.com/in/marcelo-borges-advocacia/',
    detailedBio: `Há mais de dez anos transformo desafios societários e imobiliários em operações viáveis e seguras. Atuei em due diligences de aquisições estratégicas, regularizei ativos para grupos familiares e implantei políticas de compliance contratual que reduziram riscos jurídicos para clientes empresariais.

Em 2025, trouxe essa bagagem para o Martins Regina Advocacia com a missão de consolidar a área de planejamento patrimonial e M&A. Meu dia a dia envolve estruturar sociedades de propósito específico, mitigar passivos ocultos em carteiras imobiliárias e orquestrar estratégias de sucessão que protegem valor ao longo de gerações.

A trajetória até aqui teve marcos determinantes: experiências em bancas especializadas (Sherman Caneiro da Costa), prática autônoma focada em grupos familiares e, no início, o balcão da Defensoria Pública do RJ, onde aprendi que técnica só gera impacto quando combinada a empatia.

Durante oito anos de prática independente, prestei consultoria a grupos familiares e empresas de médio porte em questões contratuais, societárias e contenciosas. Elaborei contratos empresariais, negociei acordos extrajudiciais e implantei políticas de compliance contratual.

Fora dos casos, ministro palestras sobre governança em sociedades limitadas, atuo como mentor de jovens advogados e mantenho formação contínua – Ibmec, Candido Mendes, FGV – complementada pelo Executive Program in Innovation da StartSe (2023).`,
    detailedBioEn: `For over ten years, I have been transforming corporate and real estate challenges into viable and secure operations. I have worked on due diligence for strategic acquisitions, regularized assets for family groups, and implemented contractual compliance policies that reduced legal risks for corporate clients.

In 2025, I brought this experience to Martins Regina Advocacia with the mission of consolidating the estate planning and M&A area. My daily work involves structuring special purpose entities, mitigating hidden liabilities in real estate portfolios, and orchestrating succession strategies that protect value across generations.

The journey so far has had defining milestones: experiences in specialized firms (Sherman Caneiro da Costa), independent practice focused on family groups, and initially, the Public Defender's Office of RJ, where I learned that technique only generates impact when combined with empathy.

During eight years of independent practice, I provided consulting to family groups and medium-sized companies on contractual, corporate, and contentious matters. I drafted business contracts, negotiated extrajudicial agreements, and implemented contractual compliance policies.

Outside of cases, I give lectures on governance in limited liability companies, act as a mentor to young lawyers, and maintain continuous education – Ibmec, Candido Mendes, FGV – complemented by the Executive Program in Innovation at StartSe (2023).`,
    achievements: [
      'Mais de 10 anos de experiência em Direito Societário e Imobiliário',
      'Especialista em due diligence e operações de M&A',
      'Executive Program in Innovation - StartSe (2023)',
      'MBA Direito Empresarial - FGV (2020)',
      'Experiência em bancas especializadas e prática autônoma',
      'Mentor de jovens advogados',
      'Palestrante em governança societária'
    ],
    achievementsEn: [
      'Over 10 years of experience in Corporate and Real Estate Law',
      'Specialist in due diligence and M&A operations',
      'Executive Program in Innovation - StartSe (2023)',
      'MBA Business Law - FGV (2020)',
      'Experience in specialized firms and independent practice',
      'Mentor to young lawyers',
      'Speaker on corporate governance'
    ],
    specializations: [
      'Direito Societário',
      'Direito Imobiliário',
      'Planejamento Patrimonial e Sucessório',
      'Due Diligence Jurídico-Imobiliária',
      'Contratos Empresariais',
      'Governança Corporativa',
      'Compliance Contratual',
      'Operações de M&A',
      'Holdings Patrimoniais',
      'Mediação e Negociação'
    ],
    specializationsEn: [
      'Corporate Law',
      'Real Estate Law',
      'Estate and Succession Planning',
      'Legal-Real Estate Due Diligence',
      'Business Contracts',
      'Corporate Governance',
      'Contractual Compliance',
      'M&A Operations',
      'Asset Holdings',
      'Mediation and Negotiation'
    ]
  }
];

export default function PartnersSection() {
  const { currentLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  // Estado para parceiro selecionado no modal
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

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
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {partners.map((partner, index) => (
              <div 
                onClick={() => setSelectedPartner(partner)}
                key={partner.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header com foto e nome */}
                <div className="flex items-center px-6 pt-6 gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-mr-bordo transition-colors duration-300">
                    {partner.name}
                  </h3>
                </div>
                {/* Conteúdo */}
                <div className="px-6 pb-6">
                  <p className="text-mr-bordo font-semibold mb-3 text-sm">
                    {currentLanguage === 'PT' ? partner.role : partner.roleEn}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {currentLanguage === 'PT' ? partner.description : partner.descriptionEn}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {(currentLanguage === 'PT' ? partner.expertise : partner.expertiseEn).slice(0, 2).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-mr-bordo/10 group-hover:text-mr-bordo transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {(currentLanguage === 'PT' ? partner.expertise : partner.expertiseEn).length > 2 && (
                      <span className="text-gray-400 text-xs font-medium px-3 py-1">
                        +{(currentLanguage === 'PT' ? partner.expertise : partner.expertiseEn).length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-mr-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll">
              {partners.map((partner, index) => (
                <div 
                  onClick={() => setSelectedPartner(partner)}
                  key={partner.id}
                  className="flex-none w-72 group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 snap-start cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Header com foto e nome */}
                  <div className="flex items-center px-6 pt-6 gap-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 aspect-square">
                      <img src={partner.image} alt={partner.name} className="w-full h-full object-cover object-center" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-mr-bordo transition-colors duration-300 leading-tight">
                      {partner.name}
                    </h3>
                  </div>
                  {/* Conteúdo */}
                  <div className="px-6 pb-6">
                    <p className="text-mr-bordo font-semibold mb-3 text-sm">
                      {currentLanguage === 'PT' ? partner.role : partner.roleEn}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {currentLanguage === 'PT' ? partner.description : partner.descriptionEn}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {(currentLanguage === 'PT' ? partner.expertise : partner.expertiseEn).slice(0, 2).map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-mr-bordo/10 group-hover:text-mr-bordo transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {(currentLanguage === 'PT' ? partner.expertise : partner.expertiseEn).length > 2 && (
                        <span className="text-gray-400 text-xs font-medium px-3 py-1">
                          +{(currentLanguage === 'PT' ? partner.expertise : partner.expertiseEn).length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-mr-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

        {/* CTA Button */}
        <div className="hidden md:block text-center mt-16">
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
      {/* Modal de ficha completa */}
      {selectedPartner && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPartner(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in-0 zoom-in-95 duration-300 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* Header do Modal */}
            <div className="sticky top-0 z-10 bg-gradient-to-r from-mr-bordo to-red-700 text-white p-8 rounded-t-2xl">
              <button 
                onClick={() => setSelectedPartner(null)} 
                className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                  <img src={selectedPartner.image} alt={selectedPartner.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedPartner.name}</h2>
                  <p className="text-xl font-medium text-white/90">
                    {currentLanguage === 'PT' ? selectedPartner.role : selectedPartner.roleEn}
                  </p>
                  <p className="text-white/80 mt-1">
                    {currentLanguage === 'PT' ? selectedPartner.area : selectedPartner.areaEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8">
              {/* Biografia */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-mr-bordo rounded-full"></div>
                  {currentLanguage === 'PT' ? 'Biografia' : 'Biography'}
                </h3>
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {currentLanguage === 'PT' ? selectedPartner.detailedBio : selectedPartner.detailedBioEn}
                </div>
              </div>

              {/* Principais Conquistas */}
              {selectedPartner.achievements && selectedPartner.achievements.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-mr-bordo rounded-full"></div>
                    {currentLanguage === 'PT' ? 'Principais Conquistas' : 'Key Achievements'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {(currentLanguage === 'PT' ? selectedPartner.achievements : selectedPartner.achievementsEn)?.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <div className="w-2 h-2 bg-mr-bordo rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Especializações */}
              {selectedPartner.specializations && selectedPartner.specializations.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-mr-bordo rounded-full"></div>
                    {currentLanguage === 'PT' ? 'Especializações' : 'Specializations'}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {(currentLanguage === 'PT' ? selectedPartner.specializations : selectedPartner.specializationsEn)?.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="bg-mr-bordo/10 text-mr-bordo px-4 py-2 rounded-full font-medium border border-mr-bordo/20"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Áreas de Expertise */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-mr-bordo rounded-full"></div>
                  {currentLanguage === 'PT' ? 'Áreas de Expertise' : 'Areas of Expertise'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {(currentLanguage === 'PT' ? selectedPartner.expertise : selectedPartner.expertiseEn).map((skill, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 text-lg mb-4 font-medium">
                  {currentLanguage === 'PT' 
                    ? 'Se você chegou até aqui é porque o perfil te interessou. Vamos conversar e tomar um café para colocar em prática seus casos que estavam no papel.'
                    : 'If you\'ve made it this far, it\'s because the profile interested you. Let\'s talk and have coffee to put your cases that were on paper into practice.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => {
                      setSelectedPartner(null);
                      const element = document.getElementById('contato');
                      if (element) {
                        const headerHeight = 120;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {currentLanguage === 'PT' ? 'Entrar em Contato' : 'Get in Touch'}
                  </button>
                  
                  {selectedPartner.linkedinUrl && (
                    <a
                      href={selectedPartner.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0077B5] hover:bg-[#005885] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 