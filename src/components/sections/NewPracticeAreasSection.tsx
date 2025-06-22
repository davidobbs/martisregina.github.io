'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from 'next/link';

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  detailedContent?: string;
}

export default function NewPracticeAreasSection() {
  const [activeTab, setActiveTab] = useState<'pf' | 'pj'>('pj');
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  const { currentLanguage } = useLanguage();

  const content = currentLanguage === 'PT' ? {
    title: 'Áreas de Atuação',
    subtitle: 'Soluções jurídicas especializadas para pessoas físicas e jurídicas',
    tabs: {
      pf: 'Pessoa Física',
      pj: 'Pessoa Jurídica'
    },
    areas: {
      pf: [
        {
          id: 'planejamento-sucessorio',
          title: 'Planejamento Sucessório',
          description: 'Estruturação de heranças e sucessões patrimoniais com eficiência tributária e proteção familiar.',
          features: ['Inventários', 'Testamentos', 'Holdings Familiares', 'Blindagem Patrimonial'],
          icon: '📝',
          detailedContent: `
            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-center">
                  <div class="text-2xl font-bold text-mr-bordo">90%</div>
                  <div class="text-sm text-gray-600">das empresas no Brasil nascem como empresas familiares</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-mr-bordo mb-4">Serviços Especializados:</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Holdings familiares e patrimoniais</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Testamentos e doações estratégicas</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Blindagem patrimonial</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Inventários judiciais e extrajudiciais</span>
                  </li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'direito-familia',
          title: 'Direito de Família',
          description: 'Orientação especializada em questões familiares com foco na preservação de relacionamentos.',
          features: ['Divórcios', 'Pensão Alimentícia', 'Guarda de Filhos', 'Pactos Antenupciais'],
          icon: '👪'
        },
        {
          id: 'tributario-pf',
          title: 'Planejamento Tributário PF',
          description: 'Otimização da carga tributária pessoal e estratégias de investimento.',
          features: ['Imposto de Renda', 'Investimentos', 'Receita Federal', 'Planejamento Fiscal'],
          icon: '💰'
        },
        {
          id: 'direito-imobiliario',
          title: 'Direito Imobiliário',
          description: 'Assessoria completa em transações imobiliárias e questões de propriedade.',
          features: ['Compra e Venda', 'Locações', 'Financiamentos', 'Regularizações'],
          icon: '🏠'
        },
        {
          id: 'direito-previdenciario',
          title: 'Direito Previdenciário',
          description: 'Maximização de benefícios previdenciários e planejamento da aposentadoria.',
          features: ['INSS', 'Aposentadorias', 'Benefícios', 'Revisões'],
          icon: '🛡️'
        },
        {
          id: 'protecao-dados',
          title: 'Proteção de Dados',
          description: 'Conformidade com LGPD e proteção da privacidade digital pessoal.',
          features: ['LGPD', 'Privacidade', 'Dados Pessoais', 'Direitos Digitais'],
          icon: '🔒'
        }
      ],
      pj: [
        {
          id: 'direito-empresarial',
          title: 'Direito Empresarial',
          description: 'Estruturação e assessoria completa para empresas de todos os portes e segmentos.',
          features: ['Constituição', 'Governança', 'Compliance', 'Reestruturações'],
          icon: '🏢',
          detailedContent: `
            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-center">
                  <div class="text-2xl font-bold text-mr-bordo">500+</div>
                  <div class="text-sm text-gray-600">empresas constituídas com nossa assessoria</div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-mr-bordo mb-4">Serviços Especializados:</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Constituição de sociedades empresárias</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Governança corporativa</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Programas de compliance</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Reestruturações societárias</span>
                  </li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'contratos-empresariais',
          title: 'Contratos Empresariais',
          description: 'Elaboração e revisão de contratos complexos com foco na mitigação de riscos.',
          features: ['Contratos Comerciais', 'Parcerias', 'Fornecimento', 'Prestação de Serviços'],
          icon: '📄'
        },
        {
          id: 'fusoes-aquisicoes',
          title: 'Fusões e Aquisições',
          description: 'Assessoria estratégica em operações de M&A com visão corporativa integrada.',
          features: ['Due Diligence', 'Structuring', 'Negociação', 'Fechamento'],
          icon: '🤝'
        },
        {
          id: 'direito-tributario',
          title: 'Direito Tributário',
          description: 'Planejamento tributário estratégico e defesa em processos administrativos.',
          features: ['Elisão Fiscal', 'Autuações', 'Parcelamentos', 'Recursos'],
          icon: '💰',
          detailedContent: `
            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-mr-bordo">403.322</div>
                    <div class="text-sm text-gray-600">leis tributárias editadas no Brasil desde 1988</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-mr-bordo">35,17%</div>
                    <div class="text-sm text-gray-600">do PIB é a carga tributária brasileira</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-mr-bordo mb-4">Serviços Especializados:</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Planejamento tributário estratégico</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Defesa em autuações fiscais</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Recursos administrativos</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-mr-bordo mt-1">•</span>
                    <span>Transfer pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'direito-trabalhista',
          title: 'Direito Trabalhista',
          description: 'Prevenção de passivos trabalhistas e assessoria em relações de trabalho.',
          features: ['Compliance Trabalhista', 'Contratos', 'Demissões', 'Auditorias'],
          icon: '👷'
        },
        {
          id: 'direito-digital',
          title: 'Direito Digital',
          description: 'Assessoria especializada em tecnologia, dados e transformação digital.',
          features: ['LGPD', 'Marco Civil', 'E-commerce', 'Propriedade Intelectual'],
          icon: '💻'
        },
        {
          id: 'direito-bancario',
          title: 'Direito Bancário',
          description: 'Operações financeiras complexas e relacionamento com instituições bancárias.',
          features: ['Operações de Crédito', 'Garantias', 'Renegociações', 'Compliance Bancário'],
          icon: '🏦'
        },
        {
          id: 'recuperacao-judicial',
          title: 'Recuperação Judicial',
          description: 'Soluções para empresas em dificuldade financeira e reestruturação de dívidas.',
          features: ['Recuperação Judicial', 'Falências', 'Acordos', 'Reestruturação'],
          icon: '📈'
        }
      ]
    }
  } : {
    title: 'Practice Areas',
    subtitle: 'Specialized legal solutions for individuals and corporations',
    tabs: {
      pf: 'Individuals',
      pj: 'Corporations'
    },
    areas: {
      pf: [
        {
          id: 'estate-planning',
          title: 'Estate Planning',
          description: 'Structuring inheritances and wealth succession with tax efficiency and family protection.',
          features: ['Probate', 'Wills', 'Family Holdings', 'Asset Protection'],
          icon: '📝'
        },
        {
          id: 'family-law',
          title: 'Family Law',
          description: 'Specialized guidance on family matters focusing on relationship preservation.',
          features: ['Divorce', 'Alimony', 'Child Custody', 'Prenuptial Agreements'],
          icon: '👪'
        },
        {
          id: 'personal-tax',
          title: 'Personal Tax Planning',
          description: 'Personal tax burden optimization and investment strategies.',
          features: ['Income Tax', 'Investments', 'Tax Authority', 'Tax Planning'],
          icon: '💰'
        },
        {
          id: 'real-estate',
          title: 'Real Estate Law',
          description: 'Complete assistance in real estate transactions and property matters.',
          features: ['Purchase & Sale', 'Leases', 'Financing', 'Regularization'],
          icon: '🏠'
        },
        {
          id: 'social-security',
          title: 'Social Security Law',
          description: 'Maximizing social security benefits and retirement planning.',
          features: ['Social Security', 'Retirement', 'Benefits', 'Reviews'],
          icon: '🛡️'
        },
        {
          id: 'data-protection',
          title: 'Data Protection',
          description: 'LGPD compliance and personal digital privacy protection.',
          features: ['LGPD', 'Privacy', 'Personal Data', 'Digital Rights'],
          icon: '🔒'
        }
      ],
      pj: [
        {
          id: 'corporate-law',
          title: 'Corporate Law',
          description: 'Structuring and complete advisory for companies of all sizes and segments.',
          features: ['Incorporation', 'Governance', 'Compliance', 'Restructuring'],
          icon: '🏢'
        },
        {
          id: 'corporate-contracts',
          title: 'Corporate Contracts',
          description: 'Drafting and reviewing complex contracts focusing on risk mitigation.',
          features: ['Commercial Contracts', 'Partnerships', 'Supply', 'Service Provision'],
          icon: '📄'
        },
        {
          id: 'mergers-acquisitions',
          title: 'Mergers & Acquisitions',
          description: 'Strategic advisory in M&A operations with integrated corporate vision.',
          features: ['Due Diligence', 'Structuring', 'Negotiation', 'Closing'],
          icon: '🤝'
        },
        {
          id: 'tax-law',
          title: 'Tax Law',
          description: 'Strategic tax planning and defense in administrative proceedings.',
          features: ['Tax Planning', 'Assessments', 'Installments', 'Appeals'],
          icon: '💰'
        },
        {
          id: 'labor-law',
          title: 'Labor Law',
          description: 'Prevention of labor liabilities and advisory in employment relations.',
          features: ['Labor Compliance', 'Contracts', 'Terminations', 'Audits'],
          icon: '👷'
        },
        {
          id: 'digital-law',
          title: 'Digital Law',
          description: 'Specialized advisory in technology, data and digital transformation.',
          features: ['LGPD', 'Internet Framework', 'E-commerce', 'Intellectual Property'],
          icon: '💻'
        },
        {
          id: 'banking-law',
          title: 'Banking Law',
          description: 'Complex financial operations and banking institutional relationships.',
          features: ['Credit Operations', 'Guarantees', 'Renegotiations', 'Banking Compliance'],
          icon: '🏦'
        },
        {
          id: 'judicial-recovery',
          title: 'Judicial Recovery',
          description: 'Solutions for companies in financial distress and debt restructuring.',
          features: ['Judicial Recovery', 'Bankruptcy', 'Agreements', 'Restructuring'],
          icon: '📈'
        }
      ]
    }
  };

  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('pj')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'pj'
                  ? 'bg-mr-bordo text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {content.tabs.pj}
            </button>
            <button
              onClick={() => setActiveTab('pf')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'pf'
                  ? 'bg-mr-bordo text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {content.tabs.pf}
            </button>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {content.areas[activeTab].map((area, index) => (
            <div
              key={index}
              onClick={() => setSelectedArea(area)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer relative overflow-hidden"
            >
              <div className="h-full flex flex-col relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mr-bordo transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {area.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {area.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-mr-bordo/10 group-hover:text-mr-bordo transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                    {area.features.length > 3 && (
                      <span className="text-gray-400 text-xs font-medium px-3 py-1">
                        +{area.features.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-mr-bordo text-sm font-medium group-hover:underline flex items-center gap-1">
                    {currentLanguage === 'PT' ? 'Clique para detalhes' : 'Click for details'}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
              
              {/* Efeito de brilho sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] duration-700"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-mr-bordo to-red-700 hover:from-red-700 hover:to-mr-bordo text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {currentLanguage === 'PT' ? 'Solicite uma consulta especializada' : 'Request specialized consultation'}
          </button>
        </div>
      </div>

      {/* Modal de Detalhes */}
      <Dialog open={!!selectedArea} onOpenChange={(open: boolean) => !open && setSelectedArea(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedArea && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selectedArea.icon}</span>
                  <DialogTitle className="text-xl">{selectedArea.title}</DialogTitle>
                </div>
              </DialogHeader>
              <div className="py-4">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedArea.description}
                </p>
                
                {selectedArea.detailedContent ? (
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: selectedArea.detailedContent 
                    }} 
                    className="prose prose-sm max-w-none"
                  />
                ) : (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-mr-bordo">Serviços Principais:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedArea.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 bg-mr-bordo rounded-full"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedArea(null)}
                    className="flex-1 sm:flex-none"
                  >
                    {currentLanguage === 'PT' ? 'Fechar' : 'Close'}
                  </Button>
                  <Button 
                    className="bg-mr-bordo hover:bg-red-700 flex-1 sm:flex-none"
                    asChild
                  >
                    <Link href="#contact">
                      {currentLanguage === 'PT' ? 'Falar com Especialista' : 'Talk to Specialist'}
                    </Link>
                  </Button>
                </div>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
} 