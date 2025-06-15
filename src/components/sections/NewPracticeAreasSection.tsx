'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function NewPracticeAreasSection() {
  const [activeTab, setActiveTab] = useState<'pf' | 'pj'>('pj');
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
          title: 'Planejamento Sucessório',
          description: 'Estruturação de heranças e sucessões patrimoniais com eficiência tributária e proteção familiar.',
          features: ['Inventários', 'Testamentos', 'Holdings Familiares', 'Blindagem Patrimonial']
        },
        {
          title: 'Direito de Família',
          description: 'Orientação especializada em questões familiares com foco na preservação de relacionamentos.',
          features: ['Divórcios', 'Pensão Alimentícia', 'Guarda de Filhos', 'Pactos Antenupciais']
        },
        {
          title: 'Planejamento Tributário PF',
          description: 'Otimização da carga tributária pessoal e estratégias de investimento.',
          features: ['Imposto de Renda', 'Investimentos', 'Receita Federal', 'Planejamento Fiscal']
        },
        {
          title: 'Direito Imobiliário',
          description: 'Assessoria completa em transações imobiliárias e questões de propriedade.',
          features: ['Compra e Venda', 'Locações', 'Financiamentos', 'Regularizações']
        },
        {
          title: 'Direito Previdenciário',
          description: 'Maximização de benefícios previdenciários e planejamento da aposentadoria.',
          features: ['INSS', 'Aposentadorias', 'Benefícios', 'Revisões']
        },
        {
          title: 'Proteção de Dados',
          description: 'Conformidade com LGPD e proteção da privacidade digital pessoal.',
          features: ['LGPD', 'Privacidade', 'Dados Pessoais', 'Direitos Digitais']
        }
      ],
      pj: [
        {
          title: 'Direito Empresarial',
          description: 'Estruturação e assessoria completa para empresas de todos os portes e segmentos.',
          features: ['Constituição', 'Governança', 'Compliance', 'Reestruturações']
        },
        {
          title: 'Contratos Empresariais',
          description: 'Elaboração e revisão de contratos complexos com foco na mitigação de riscos.',
          features: ['Contratos Comerciais', 'Parcerias', 'Fornecimento', 'Prestação de Serviços']
        },
        {
          title: 'Fusões e Aquisições',
          description: 'Assessoria estratégica em operações de M&A com visão corporativa integrada.',
          features: ['Due Diligence', 'Structuring', 'Negociação', 'Fechamento']
        },
        {
          title: 'Direito Tributário',
          description: 'Planejamento tributário estratégico e defesa em processos administrativos.',
          features: ['Elisão Fiscal', 'Autuações', 'Parcelamentos', 'Recursos']
        },
        {
          title: 'Direito Trabalhista',
          description: 'Prevenção de passivos trabalhistas e assessoria em relações de trabalho.',
          features: ['Compliance Trabalhista', 'Contratos', 'Demissões', 'Auditorias']
        },
        {
          title: 'Direito Digital',
          description: 'Assessoria especializada em tecnologia, dados e transformação digital.',
          features: ['LGPD', 'Marco Civil', 'E-commerce', 'Propriedade Intelectual']
        },
        {
          title: 'Direito Bancário',
          description: 'Operações financeiras complexas e relacionamento com instituições bancárias.',
          features: ['Operações de Crédito', 'Garantias', 'Renegociações', 'Compliance Bancário']
        },
        {
          title: 'Recuperação Judicial',
          description: 'Soluções para empresas em dificuldade financeira e reestruturação de dívidas.',
          features: ['Recuperação Judicial', 'Falências', 'Acordos', 'Reestruturação']
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
          title: 'Estate Planning',
          description: 'Structuring inheritances and wealth succession with tax efficiency and family protection.',
          features: ['Probate', 'Wills', 'Family Holdings', 'Asset Protection']
        },
        {
          title: 'Family Law',
          description: 'Specialized guidance on family matters focusing on relationship preservation.',
          features: ['Divorce', 'Alimony', 'Child Custody', 'Prenuptial Agreements']
        },
        {
          title: 'Personal Tax Planning',
          description: 'Personal tax burden optimization and investment strategies.',
          features: ['Income Tax', 'Investments', 'Tax Authority', 'Tax Planning']
        },
        {
          title: 'Real Estate Law',
          description: 'Complete assistance in real estate transactions and property matters.',
          features: ['Purchase & Sale', 'Leases', 'Financing', 'Regularization']
        },
        {
          title: 'Social Security Law',
          description: 'Maximizing social security benefits and retirement planning.',
          features: ['Social Security', 'Retirement', 'Benefits', 'Reviews']
        },
        {
          title: 'Data Protection',
          description: 'LGPD compliance and personal digital privacy protection.',
          features: ['LGPD', 'Privacy', 'Personal Data', 'Digital Rights']
        }
      ],
      pj: [
        {
          title: 'Corporate Law',
          description: 'Structuring and complete advisory for companies of all sizes and segments.',
          features: ['Incorporation', 'Governance', 'Compliance', 'Restructuring']
        },
        {
          title: 'Corporate Contracts',
          description: 'Drafting and reviewing complex contracts focusing on risk mitigation.',
          features: ['Commercial Contracts', 'Partnerships', 'Supply', 'Service Provision']
        },
        {
          title: 'Mergers & Acquisitions',
          description: 'Strategic advisory in M&A operations with integrated corporate vision.',
          features: ['Due Diligence', 'Structuring', 'Negotiation', 'Closing']
        },
        {
          title: 'Tax Law',
          description: 'Strategic tax planning and defense in administrative proceedings.',
          features: ['Tax Planning', 'Assessments', 'Installments', 'Appeals']
        },
        {
          title: 'Labor Law',
          description: 'Prevention of labor liabilities and advisory in employment relations.',
          features: ['Labor Compliance', 'Contracts', 'Terminations', 'Audits']
        },
        {
          title: 'Digital Law',
          description: 'Specialized advisory in technology, data and digital transformation.',
          features: ['LGPD', 'Internet Framework', 'E-commerce', 'Intellectual Property']
        },
        {
          title: 'Banking Law',
          description: 'Complex financial operations and banking institutional relationships.',
          features: ['Credit Operations', 'Guarantees', 'Renegotiations', 'Banking Compliance']
        },
        {
          title: 'Judicial Recovery',
          description: 'Solutions for companies in financial distress and debt restructuring.',
          features: ['Judicial Recovery', 'Bankruptcy', 'Agreements', 'Restructuring']
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
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mr-bordo transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {area.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2">
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
                </div>
              </div>
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
    </section>
  );
} 