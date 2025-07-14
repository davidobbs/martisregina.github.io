'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronRight, X, Linkedin, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface Partner {
  id: number
  name: string
  position: string
  area: string
  description: string
  image: string
  linkedin?: string
  biography: string
  achievements: string[]
  specializations: string[]
  expertise: string[]
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Dr. Pedro DeRegina",
    position: "Managing Partner",
    area: "Direito Empresarial e Societário",
    description: "Especialista em reestruturações societárias complexas e governança corporativa, com mais de 20 anos de experiência no mercado brasileiro e internacional.",
    image: "/partners/pedro-deregina.jpeg",
    linkedin: "https://linkedin.com/in/pedro-deregina",
    biography: "Formado pela Universidade de São Paulo (USP) com pós-graduação em Direito Empresarial pela FGV e MBA em Gestão Empresarial pelo INSEAD. Mestre em Direito Comercial pela Universidade de Coimbra.",
    achievements: [
      "Conduziu mais de 150 operações de M&A no Brasil",
      "Assessorou a reestruturação de grupos empresariais com faturamento superior a R$ 5 bilhões",
      "Reconhecido pela Chambers & Partners como Leading Individual em Direito Societário",
      "Autor de 3 livros sobre governança corporativa"
    ],
    specializations: ["Fusões e Aquisições", "Governança Corporativa", "Direito Societário", "Reestruturações Empresariais"],
    expertise: ["Compliance Corporativo", "Due Diligence", "Contratos Empresariais", "Direito do Mercado de Capitais"]
  },
  {
    id: 2,
    name: "Dr. Marcelo Borges",
    position: "Sócio-Associado",
    area: "Direito Trabalhista e Previdenciário",
    description: "Reconhecido especialista em relações trabalhistas complexas e estratégias previdenciárias, atuando em grandes corporações nacionais e multinacionais.",
    image: "/partners/marcelo socio.jpeg",
    linkedin: "https://linkedin.com/in/marcelo-borges",
    biography: "Graduado pela Pontifícia Universidade Católica de São Paulo (PUC-SP) com especialização em Direito do Trabalho pela Universidade de São Paulo. Pós-graduado em Direito Previdenciário pela FGV.",
    achievements: [
      "Conduziu mais de 200 processos trabalhistas com 95% de êxito",
      "Desenvolveu estratégias previdenciárias que geraram economia de R$ 50 milhões para clientes",
      "Palestrante em mais de 100 eventos sobre legislação trabalhista",
      "Consultor de reforma trabalhista para associações empresariais"
    ],
    specializations: ["Direito do Trabalho", "Direito Previdenciário", "Compliance Trabalhista", "Relações Sindicais"],
    expertise: ["Auditoria Trabalhista", "Reestruturação de Folha de Pagamento", "Negociação Coletiva", "Contencioso Trabalhista"]
  },
  {
    id: 3,
    name: "Dra. Regina Martins",
    position: "Sócia-Fundadora",
    area: "Direito Tributário e Compliance",
    description: "Pioneira em planejamento fiscal internacional e compliance tributário, com expertise reconhecida em operações transnacionais e estruturações fiscais complexas.",
    image: "/partners/regina-martins.jpg",
    linkedin: "https://linkedin.com/in/regina-martins",
    biography: "Formada pela Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) com pós-graduação em Direito Tributário pela FGV. Mestre em Direito Fiscal Internacional pela Universidade de Lisboa e doutoranda em Direito Tributário pela USP.",
    achievements: [
      "Estruturou operações fiscais internacionais superiores a R$ 2 bilhões",
      "Desenvolveu o primeiro programa de compliance tributário certificado pela Receita Federal",
      "Reconhecida pelo Legal 500 como Leading Lawyer em Direito Tributário",
      "Consultora do Ministério da Fazenda para reforma tributária"
    ],
    specializations: ["Direito Tributário Internacional", "Compliance Fiscal", "Planejamento Tributário", "Transfer Pricing"],
    expertise: ["Reorganizações Societárias", "Incentivos Fiscais", "Contencioso Tributário", "BEPS e MLI"]
  },
  {
    id: 4,
    name: "Dra. Ana Santos",
    position: "Sócia de Tecnologia",
    area: "Direito Digital e Proteção de Dados",
    description: "Especialista em LGPD/GDPR e transformação digital, liderando a prática de direito digital com foco em inovação tecnológica e proteção de dados pessoais.",
    image: "/partners/ana-santos.jpg",
    linkedin: "https://linkedin.com/in/ana-santos-digital",
    biography: "Graduada pela Universidade de São Paulo (USP) com especialização em Direito Digital pelo Insper. Certificada em Privacy Engineering pela Berkeley Law School e em GDPR pela Universidade de Londres.",
    achievements: [
      "Implementou programas de conformidade LGPD em mais de 100 empresas",
      "Autora do livro 'Direito na Era Digital: LGPD e Transformação Digital'",
      "Primeira advogada brasileira certificada em Privacy by Design",
      "Consultora da ANPD para regulamentações setoriais"
    ],
    specializations: ["LGPD/GDPR", "Direito Digital", "Privacy by Design", "Governança de Dados"],
    expertise: ["Compliance Digital", "Contratos de Tecnologia", "Propriedade Intelectual Digital", "Cibersegurança Jurídica"]
  },
  {
    id: 5,
    name: "Dr. Carlos Silva",
    position: "Sócio de Contencioso",
    area: "Contencioso Estratégico",
    description: "Especialista em litígios complexos e arbitragem internacional, com mais de 15 anos de experiência em grandes disputas empresariais e contencioso regulatório.",
    image: "/partners/carlos-silva.jpg",
    linkedin: "https://linkedin.com/in/carlos-silva-litigation",
    biography: "Formado pela Universidade Federal do Rio de Janeiro (UFRJ) com pós-graduação em Direito Processual pela PUC-Rio. Especialização em Arbitragem Internacional pela Universidade de Paris e certificação em Mediação pela Harvard Law School.",
    achievements: [
      "Conduziu mais de 200 casos de contencioso empresarial com valor superior a R$ 1 bilhão",
      "Árbitro certificado pela CCI e CAM-CCBC",
      "Vencedor do prêmio 'Advogado Contencioso do Ano' pela Análise Advocacia",
      "Palestrante internacional em arbitragem e mediação"
    ],
    specializations: ["Arbitragem Internacional", "Contencioso Cível", "Mediação Empresarial", "Compliance Processual"],
    expertise: ["Litígios Regulatórios", "Recuperação de Ativos", "Contencioso Tributário", "Disputas Societárias"]
  },
  {
    id: 6,
    name: "Dr. João Oliveira",
    position: "Sócio de M&A",
    area: "Fusões e Aquisições",
    description: "Especialista em operações de M&A e investimentos, com vasta experiência em transações transnacionais e estruturações de capital para empresas de médio e grande porte.",
    image: "/partners/joao-oliveira.jpg",
    linkedin: "https://linkedin.com/in/joao-oliveira-ma",
    biography: "Graduado pela Fundação Getulio Vargas (FGV) com MBA pelo INSEAD e especialização em Corporate Finance pela Columbia Law School. Certificação em Valuation pela CFA Institute.",
    achievements: [
      "Assessorou operações de M&A superiores a R$ 15 bilhões",
      "Estruturou 50+ operações de private equity e venture capital",
      "Reconhecido pela IFLR1000 como Highly Regarded em M&A",
      "Consultor de fundos de investimento para operações estratégicas"
    ],
    specializations: ["Fusões e Aquisições", "Private Equity", "Venture Capital", "Mercado de Capitais"],
    expertise: ["Due Diligence Financeira", "Estruturação de Investimentos", "Governança Corporativa", "Contratos de Investimento"]
  }
]

export default function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null)
  const { currentLanguage } = useLanguage()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato')
    if (contactSection) {
      const headerOffset = 100
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const content = currentLanguage === 'PT' ? {
    title: 'Nossos Sócios',
    subtitle: 'Conheça os profissionais que lideram nossa excelência jurídica com expertise reconhecida nacional e internacionalmente.',
    viewProfile: 'Ver perfil completo',
    close: 'Fechar',
    biography: 'Biografia',
    achievements: 'Principais Conquistas',
    specializations: 'Especializações',
    expertise: 'Áreas de Expertise',
    contact: 'Entre em contato',
    ctaTitle: 'Pronto para trabalhar com os melhores?',
    ctaSubtitle: 'Nossa equipe está preparada para oferecer soluções jurídicas excepcionais para seus desafios mais complexos.',
    ctaButton: 'Fale com nossos especialistas'
  } : {
    title: 'Our Partners',
    subtitle: 'Meet the professionals who lead our legal excellence with nationally and internationally recognized expertise.',
    viewProfile: 'View full profile',
    close: 'Close',
    biography: 'Biography',
    achievements: 'Key Achievements',
    specializations: 'Specializations',
    expertise: 'Areas of Expertise',
    contact: 'Get in touch',
    ctaTitle: 'Ready to work with the best?',
    ctaSubtitle: 'Our team is prepared to offer exceptional legal solutions for your most complex challenges.',
    ctaButton: 'Talk to our specialists'
  }

  return (
    <>
      <section id="socios" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner) => (
              <div
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className="bg-mr-bordo rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-4 border-white/20"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-100 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-red-100 font-medium mb-2 text-sm">
                      {partner.position}
                    </p>
                    <p className="text-red-200 text-sm mb-3 line-clamp-2">
                      {partner.area}
                    </p>
                    <p className="text-white/90 text-sm line-clamp-3 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <span className="text-red-100 text-sm font-medium">
                                            {content.viewProfile}
                  </span>
                  <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden mb-16">
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 snap-x snap-mandatory touch-scroll">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  onClick={() => setSelectedPartner(partner)}
                  className="bg-mr-bordo rounded-2xl p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group flex-shrink-0 w-80 snap-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={70}
                        height={70}
                        className="rounded-full object-cover border-3 border-white/20"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-red-100 font-medium mb-2 text-xs">
                        {partner.position}
                      </p>
                      <p className="text-red-200 text-xs mb-2 line-clamp-1">
                        {partner.area}
                      </p>
                      <p className="text-white/90 text-xs line-clamp-2 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
                    <span className="text-red-100 text-xs font-medium">
                      {currentLanguage === 'PT' ? 'Ver perfil' : 'View profile'}
                    </span>
                    <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {partners.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                ></div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-mr-bordo text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {currentLanguage === 'PT' ? 'Fale com Nossa Equipe' : 'Contact Our Team'}
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300">
            <div className="relative bg-mr-bordo p-8 text-white">
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Image
                    src={selectedPartner.image}
                    alt={selectedPartner.name}
                    width={200}
                    height={200}
                    className="rounded-2xl object-cover border-4 border-white/20 shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedPartner.name}</h2>
                  <p className="text-red-100 text-xl font-medium mb-4">{selectedPartner.position}</p>
                  <p className="text-red-200 text-lg mb-6">{selectedPartner.area}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {selectedPartner.linkedin && (
                      <a
                        href={selectedPartner.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    <button className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                          {content.biography}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">{selectedPartner.biography}</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                          {content.achievements}
                </h3>
                <ul className="space-y-3">
                  {selectedPartner.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {content.specializations}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {currentLanguage === 'PT' ? 'Expertise' : 'Expertise'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.expertise.map((exp, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={scrollToContact}
                  className="flex-1 bg-mr-bordo text-white py-3 px-6 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  {currentLanguage === 'PT' ? 'Entrar em Contato' : 'Get in Touch'}
                </button>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  {content.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 