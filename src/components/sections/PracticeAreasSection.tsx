'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import Link from 'next/link';

interface PracticeArea {
  id: string;
  icon: string;
  title: string;
  description: string;
  titleEn: string;
  descriptionEn: string;
  category: 'business' | 'personal' | 'specialized';
  detailedContent?: string;
  detailedContentEn?: string;
}

export default function PracticeAreasSection() {
  const { currentLanguage } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);
  
  const practiceAreas: PracticeArea[] = [
    {
      id: 'planejamento',
      icon: '📝',
      title: 'Planejamento Patrimonial, Familiar e Sucessório',
      description: 'Proteção e organização de patrimônio para garantir a sucessão familiar e empresarial.',
      titleEn: 'Estate, Family, and Succession Planning',
      descriptionEn: 'Protection and organization of assets to ensure family and business succession.',
      category: 'personal',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              É um mecanismo jurídico multidisciplinar que visa preservar e proteger os bens e recursos das pessoas (Físicas e/ou Jurídicas). Os benefícios verificados com o Planejamento Patrimonial são inúmeros, mas o ponto de partida é identificar o propósito negocial e o substrato econômico para o cliente, garantindo assim o correto e eficiente planejamento.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="text-center mb-4">
              <div class="text-2xl font-bold text-mr-bordo">90%</div>
              <div class="text-sm text-gray-600">das empresas no Brasil nascem como empresas familiares</div>
              <div class="text-xs text-gray-500 mt-1">Segundo dados do SEBRAE e IBGE</div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              As empresas familiares possuem características peculiares, e, no nosso entender, não devem ser medidas apenas pelo ano-calendário, mas por gerações. Empresas familiares carregam valores culturais como importante pilar, mas têm como grande desafio a conscientização da importância de planejar e executar as ações do planejamento.
            </p>
            <p class="text-base leading-relaxed mb-4">
              Um dos grandes desafios das empresas familiares é tratar sobre o momento da sucessão e garantir a longevidade sustentável da empresa após a "passagem do bastão".
            </p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Estatísticas Globais FFI:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-mr-bordo">70%</div>
                <div class="text-sm text-gray-600">das empresas familiares não sobrevivem à "passagem do bastão"</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-mr-bordo">90%</div>
                <div class="text-sm text-gray-600">não chegam na terceira geração</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Todos os dados convergem no sentido que esta organização é vital à sobrevivência das empresas. Mas a sucessão na gestão empresarial nem sempre é debatida com a seriedade devida, especialmente nas empresas familiares de primeira geração que por não terem vivenciado esse tema têm dificuldade em abordá-lo.
            </p>
            <p class="text-base leading-relaxed mb-4">
              Essa dificuldade com o tema – Sucessão – também é muito verificada entre pessoas físicas que pelo esforço de seu trabalho adquirem e constroem patrimônio ao longo da vida, mas ao final ficam reféns de inventários para transmitir seu patrimônio aos herdeiros. Com o devido Planejamento Sucessório essas questões podem ser equalizadas, trazendo tranquilidade e segurança para toda família.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Nesse sentido, independentemente se o seu objetivo é o Planejamento Patrimonial, Planejamento Familiar, Planejamento Sucessório, ou, até mesmo, um compilado dessas espécies, é recomendável iniciar o planejamento com a maior antecedência possível, sendo certo que a transição das etapas de forma gradativa e fluida previne prejuízos e reduz riscos.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">O que nossos advogados podem fazer por você e sua empresa?</h4>
            <p class="text-base leading-relaxed mb-4">
              Martins Regina Advocacia está habilitado a prestar consultoria e assessoria jurídica àqueles que desejam planejar e ter a tranquilidade de preservar seu patrimônio por gerações. Nossos principais serviços nessa área incluem:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Análise patrimonial da empresa ou cliente pessoa física</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração do Planejamento, seja ele Patrimonial, Familiar e/ou Sucessório</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria jurídica para empresas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reestruturação empresarial/societária</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Avaliação dos riscos tributários, societários e trabalhistas, quando for o caso</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria legal das mudanças legislativas com informações relevantes aos clientes</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constituição de empresa familiar</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              It is a multidisciplinary legal mechanism that aims to preserve and protect the assets and resources of individuals (Natural and/or Legal Persons). The benefits verified with Estate Planning are numerous, but the starting point is to identify the business purpose and economic substrate for the client, thus ensuring correct and efficient planning.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="text-center mb-4">
              <div class="text-2xl font-bold text-mr-bordo">90%</div>
              <div class="text-sm text-gray-600">of companies in Brazil are born as family businesses</div>
              <div class="text-xs text-gray-500 mt-1">According to SEBRAE and IBGE data</div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Family businesses have peculiar characteristics, and, in our understanding, should not be measured only by the calendar year, but by generations. Family businesses carry cultural values as an important pillar, but have as a great challenge the awareness of the importance of planning and executing planning actions.
            </p>
            <p class="text-base leading-relaxed mb-4">
              One of the great challenges of family businesses is dealing with the moment of succession and ensuring the sustainable longevity of the company after "passing the baton".
            </p>
          </div>

          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Global FFI Statistics:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-mr-bordo">70%</div>
                <div class="text-sm text-gray-600">of family businesses do not survive "passing the baton"</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-mr-bordo">90%</div>
                <div class="text-sm text-gray-600">do not reach the third generation</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              All data converge in the sense that this organization is vital to the survival of companies. But succession in business management is not always debated with due seriousness, especially in first-generation family businesses that, having not experienced this theme, have difficulty addressing it.
            </p>
            <p class="text-base leading-relaxed mb-4">
              This difficulty with the theme – Succession – is also very verified among natural persons who, through the effort of their work, acquire and build assets throughout life, but in the end become hostages of inventories to transmit their assets to heirs. With proper Succession Planning, these issues can be equalized, bringing tranquility and security to the entire family.
            </p>
            <p class="text-base leading-relaxed mb-6">
              In this sense, regardless of whether your objective is Estate Planning, Family Planning, Succession Planning, or even a compilation of these types, it is recommended to start planning as early as possible, being certain that the transition of stages gradually and fluidly prevents losses and reduces risks.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">What can our lawyers do for you and your company?</h4>
            <p class="text-base leading-relaxed mb-4">
              Martins Regina Advocacia is qualified to provide legal consulting and advice to those who wish to plan and have the peace of mind of preserving their assets for generations. Our main services in this area include:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Asset analysis of the company or individual client</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planning development, whether Estate, Family and/or Succession</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Legal advice for companies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business/corporate restructuring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessment of tax, corporate and labor risks, when applicable</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria legal das mudanças legislativas com informações relevantes aos clientes</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constitution of family business</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'medico',
      icon: '⚕️',
      title: 'Direito Médico, da Saúde e Life Sciences',
      description: 'Assessoria jurídica especializada para o setor de ciências da vida e saúde.',
      titleEn: 'Medical, Health, and Life Sciences Law',
      descriptionEn: 'Specialized legal advice for the life sciences and healthcare sector.',
      category: 'specialized',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              As indústrias farmacêuticas atuam em um mercado altamente regulado e a assessoria jurídica especializada é fundamental para a reputação e sobrevivência das empresas nesse setor.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Com 27 anos advogando para estas indústrias e profissionais da saúde, o know how do Martins Regina Advocacia nesse setor é diferenciado.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Nosso mercado é um campo fértil nesta área, especialmente se considerarmos a biodiversidade do Brasil, tida como a maior do mundo, propiciando assim condições favoráveis para o país se tornar um polo de pesquisas no setor farmacêutico e agregando valor aos investidores.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">US$ 17.5 Bi</div>
                <div class="text-sm text-gray-600">foi o valor líquido movimentado pelo mercado de medicamentos no Brasil em 2019</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">10,74%</div>
                <div class="text-sm text-gray-600">foi o crescimento em relação ao ano anterior</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              O Direito Médico por sua vez dedica-se à responsabilidade dos profissionais e instituições que atuam na área da saúde, bem como àqueles que de alguma forma iniciaram uma relação jurídica com os serviços médico-hospitalares. As demandas nesse ramo do direito geralmente surgem pela falta do dever de informar, ausência de assessoria especializada e da responsabilidade médica inerente aos serviços prestados.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">O que nossos advogados podem fazer por você e sua empresa?</h4>
            <p class="text-base leading-relaxed mb-4">
              O escritório de advocacia Martins Regina tem como práticas abrangentes:
            </p>
            
            <ul class="space-y-2 text-sm columns-1 md:columns-2">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria e consultoria jurídica preventiva, reduzindo os impactos das decisões estratégicas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria preventiva para reduzir os riscos próprios da atividade médico-hospitalar</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representation in administrative and judicial proceedings</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Responsabilidade civil e profissional</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Regularização societária para profissionais da saúde</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reestruturação Societária</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Aquisição, Fusão, Cisão e Joint Venture</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constituição de grupos societários</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>PPP (parceria público-privada)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>PDP (parceria de desenvolvimento produtivo)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Transferência de tecnologia</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contrato de Fornecimento com o Ministério da Saúde</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria em licitação</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria para assuntos regulatórios na ANVISA, INPI e Ministério da Saúde (MS)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Compra de grupos com assessoria em due dilligence</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contratos de P&D</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Distribuição e Logística (SSC)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Terceirização</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Compra de Insumos no exterior</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Transfer Pricing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração de contratos de assistência médico-hospitalar e odontológico e Contrato de Informação</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Treinamento sobre resoluções dos Conselhos de Classe</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Criação do programa de Normas de Condutas e Ética para Clínicas e Consultórios</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              Pharmaceutical industries operate in a highly regulated market, and specialized legal advice is fundamental to the reputation and survival of companies in this sector.
            </p>
            <p class="text-base leading-relaxed mb-6">
              With 27 years of advocating for these industries and healthcare professionals, Martins Regina Advocacia's know-how in this sector is differentiated.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Our market is a fertile field in this area, especially if we consider Brazil's biodiversity, considered the largest in the world, thus providing favorable conditions for the country to become a research hub in the pharmaceutical sector and adding value to investors.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">US$ 17.5 Bi</div>
                <div class="text-sm text-gray-600">was the net value moved by the drug market in Brazil in 2019</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">10.74%</div>
                <div class="text-sm text-gray-600">was the growth compared to the previous year</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Medical Law, in turn, is dedicated to the responsibility of professionals and institutions working in the health area, as well as those who have somehow initiated a legal relationship with medical-hospital services. Demands in this branch of law generally arise from the lack of duty to inform, absence of specialized advice, and the medical responsibility inherent in the services provided.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">What can our lawyers do for you and your company?</h4>
            <p class="text-base leading-relaxed mb-4">
              The Martins Regina law firm has comprehensive practices:
            </p>
            
            <ul class="space-y-2 text-sm columns-1 md:columns-2">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preventive legal advice and consulting, reducing the impacts of strategic decisions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preventive consulting to reduce the risks inherent in medical-hospital activity</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representation in administrative and judicial proceedings</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Civil and professional liability</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Corporate regularization for healthcare professionals</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Corporate Restructuring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Acquisition, Merger, Demerger, and Joint Venture</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constitution of corporate groups</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>PPP (public-private partnership)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>PDP (productive development partnership)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Technology transfer</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Supply Agreement with the Ministry of Health</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Bidding advisory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consulting for regulatory affairs at ANVISA, INPI, and Ministry of Health (MS)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Purchase of groups with due diligence advisory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>R&D Contracts</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Distribution and Logistics (SSC)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Outsourcing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Purchase of Inputs abroad</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Transfer Pricing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Drafting of medical-hospital and dental assistance contracts and Information Contract</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Training on resolutions of Class Councils</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Creation of the Code of Conduct and Ethics program for Clinics and Offices</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'imobiliario',
      icon: '🏢',
      title: 'Direito Imobiliário',
      description: 'Soluções jurídicas para questões imobiliárias comerciais e residenciais.',
      titleEn: 'Real Estate Law',
      descriptionEn: 'Legal solutions for commercial and residential real estate matters.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              O mercado imobiliário, em especial de construção, impacta de forma significativa na economia do país por interligar prestadores de serviços, fornecedores de matéria prima, relações de emprego, propriedade territorial etc.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Nossa equipe de imobiliário está atualizada e atenta às mudanças e perspectivas do mercado imobiliário, prestando assessoria jurídica aos mais diversos clientes do ramo.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="border-r border-gray-200 pr-4">
                <div class="text-2xl font-bold text-mr-bordo">133ª</div>
                <div class="text-sm text-gray-600">posição do Brasil dos 190 países pesquisados quando o assunto é registro/regularização da propriedade</div>
              </div>
              <div class="pl-4">
                <div class="text-2xl font-bold text-mr-bordo">20%</div>
                <div class="text-sm text-gray-600">de aumento é a expectativa de crescimento dos lançamentos imobiliários em relação ao ano passado</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              A equipe de direito imobiliário do Martins Regina Advocacia possui longa experiência no setor, incluindo serviços como:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria jurídica para incorporações e desmembramentos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração de contratos de compra e venda</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Locações</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Análise de estruturas imobiliárias para novos projetos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento imobiliário</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria e negociação de contratos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constituição de condomínios</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Locação built to suit</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Usufruto</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constituição e consultoria para empresas do setor</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>SPE (Sociedade de Propósito Específico)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>SCP (Sociedade em Conta de Participação)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria jurídica para administradoras e imobiliárias</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria jurídica para condomínios e associações</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The real estate market, especially construction, significantly impacts the country's economy by connecting service providers, raw material suppliers, employment relationships, territorial property, etc.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Our real estate team is updated and attentive to changes and perspectives in the real estate market, providing legal advice to the most diverse clients in the sector.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="border-r border-gray-200 pr-4">
                <div class="text-2xl font-bold text-mr-bordo">133rd</div>
                <div class="text-sm text-gray-600">position of Brazil out of 190 countries surveyed when it comes to property registration/regularization</div>
              </div>
              <div class="pl-4">
                <div class="text-2xl font-bold text-mr-bordo">20%</div>
                <div class="text-sm text-gray-600">increase is the expected growth in real estate launches compared to last year</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              The real estate law team at Martins Regina Advocacia has extensive experience in the sector, including services such as:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Legal advice for incorporations and subdivisions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Drafting purchase and sale contracts</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Leases</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Analysis of real estate structures for new projects</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Real estate planning</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contract advice and negotiation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constitution of condominiums</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Built to suit leasing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Usufruct</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Constitution and consulting for sector companies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>SPE (Special Purpose Entity)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>SCP (Account Participation Company)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Legal consulting for administrators and real estate companies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Legal advice for condominiums and associations</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'contratos',
      icon: '📄',
      title: 'Contratos',
      description: 'Elaboração, revisão e gestão de contratos diversos para segurança jurídica.',
      titleEn: 'Contracts',
      descriptionEn: 'Drafting, reviewing, and managing various contracts for legal security.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              O Martins Regina Advocacia tem ampla experiência em assessorar o cliente nas relações jurídicas desde a elaboração, revisão e gestão contratual até os litígios decorrentes das discussões contratuais.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Contamos com advogados que trouxeram na bagagem a experiência de terem atuado no Departamento Jurídico de multinacionais e somaram aos nossos outros profissionais que atuam como escritório externo de empresas. É a perfeita junção entre o conhecimento do mundo corporativo à prática litigiosa nos Tribunais.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">12</div>
                <div class="text-sm text-gray-600">é a quantidade média de contratos que um adulto celebra por dia</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">58ª</div>
                <div class="text-sm text-gray-600">posição do Brasil, dentre 190 países analisados, no cumprimento dos Contratos</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              O escritório Martins Regina Advocacia está apto a elaborar, revisar e assessorar o cliente em todos os tipos contratuais, como por exemplo:
            </p>
            
            <ul class="space-y-2 text-sm columns-1 md:columns-2">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Estatutos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Acordos Societários</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Arrendamento Mercantil (leasing) e Arrendamento de Planta Industrial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contrato de Permuta</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Franquia</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contrato Social</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Compra e Venda</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Locação</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Prestação de Serviço</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Fornecimento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Comodato de Equipamentos e de Imóvel</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Built to Suit</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Associação</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Distribuição e Logística (SSC)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Fornecimento de Tecnologia</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Industrialização</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Leaseback</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Patrocínio</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Parceria Empresarial</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              Martins Regina Advocacia has extensive experience in advising clients in legal relationships from drafting, reviewing and contract management to litigation arising from contractual disputes.
            </p>
            <p class="text-base leading-relaxed mb-6">
              We have lawyers who brought in their background the experience of having worked in the Legal Department of multinationals and added to our other professionals who act as external counsel for companies. It's the perfect junction between corporate world knowledge and litigation practice in the Courts.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">12</div>
                <div class="text-sm text-gray-600">is the average number of contracts an adult enters into per day</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">58th</div>
                <div class="text-sm text-gray-600">position of Brazil, among 190 countries analyzed, in contract compliance</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Martins Regina Advocacia is qualified to draft, review and advise clients on all contractual types, such as:
            </p>
            
            <ul class="space-y-2 text-sm columns-1 md:columns-2">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Bylaws</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Shareholders' Agreements</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Commercial Leasing and Industrial Plant Leasing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Exchange Contract</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Franchise</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Articles of Association</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Purchase and Sale</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Lease</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Service Provision</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Supply</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Equipment and Real Estate Commodatum</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Built to Suit</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Association</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Distribution and Logistics (SSC)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Technology Supply</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Industrialization</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Leaseback</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Sponsorship</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business Partnership</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'contencioso',
      icon: '⚖️',
      title: 'Contencioso',
      description: 'Solução de disputas judiciais e administrativas em diversas áreas.',
      titleEn: 'Litigation',
      descriptionEn: 'Resolution of judicial and administrative disputes in various areas.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              A área de contencioso faz alusão a tudo o que possa ser objeto de contestação, disputa ou conflito de interesses. Atuamos no contencioso cível e comercial, recuperações de crédito, ações indenizatórias, disputas contratuais, entre outras.
            </p>
            <p class="text-base leading-relaxed mb-4">
              A Equipe de Contencioso do Martins Regina Advocacia atua diretamente com a interposição de ações e defesas judiciais, bem como administrativas em todo o território nacional, para brasileiros e estrangeiros, e perante todos os juízos e tribunais do País.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Além do Contencioso, também assessoramos o cliente na fase pré-contenciosa com alternativas jurídicas para impedir ações judiciais, negociação com órgãos reguladores, acordos administrativos e com o Ministério Público.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Atuação Nacional</h4>
            <p class="text-sm text-gray-700">
              Atendemos brasileiros e estrangeiros perante todos os juízos e tribunais do país, com experiência em contencioso cível, comercial e administrativo.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Nossos profissionais são capacitados para:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Propositura e acompanhamento de ações</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Apresentação de defesas, recursos e impugnações</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Realização de sustentação oral</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Viabilização de soluções alternativas para a solução dos litígios</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Gestão, análise e atuação no contencioso estratégico</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria e Elaboração de parecer para atuação preventiva sobre os temas afetos à empresa</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The litigation area alludes to everything that may be the object of contestation, dispute or conflict of interests. We work in civil and commercial litigation, credit recovery, indemnity actions, contractual disputes, among others.
            </p>
            <p class="text-base leading-relaxed mb-4">
              The Litigation Team at Martins Regina Advocacia acts directly with the filing of actions and judicial defenses, as well as administrative ones throughout the national territory, for Brazilians and foreigners, and before all courts and tribunals in the country.
            </p>
            <p class="text-base leading-relaxed mb-6">
              In addition to Litigation, we also advise the client in the pre-litigation phase with legal alternatives to prevent legal actions, negotiation with regulatory bodies, administrative agreements and with the Public Prosecutor's Office.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">National Coverage</h4>
            <p class="text-sm text-gray-700">
              We serve Brazilians and foreigners before all courts and tribunals in the country, with experience in civil, commercial and administrative litigation.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Our professionals are qualified to:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Filing and monitoring actions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Presentation of defenses, appeals and challenges</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Oral argument</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Enabling alternative solutions for dispute resolution</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Management, analysis and action in strategic litigation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consulting and drafting legal opinions for preventive action on matters affecting the company</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'societario',
      icon: '🤝',
      title: 'Societário, M&A e Estruturação de Empresas',
      description: 'Assessoria em direito societário, fusões, aquisições e estruturação empresarial.',
      titleEn: 'Corporate, M&A, and Business Structuring',
      descriptionEn: 'Advice on corporate law, mergers, acquisitions, and business structuring.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              O ambiente de negócios no Brasil é extremamente complexo por envolver aspectos societários, tributários e trabalhistas, sem mencionar as variáveis da economia que afetam diretamente as operações empresariais. Apesar do cenário desafiador, o Brasil ainda sim é um mercado atrativo.
            </p>
            <p class="text-base leading-relaxed mb-4">
              Operações de fusão e aquisição (M&A), por exemplo, se mantém com volume estável e até mesmo apresentaram crescimento nas estatísticas recentes. Isso porque o mercado brasileiro possui um volume significativo e destaque geográfico que atrai investidores (nacionais e estrangeiros).
            </p>
            <p class="text-base leading-relaxed mb-6">
              Não obstante, as recentes reformas legais como a Reforma trabalhista, a "MP da Liberdade Econômica" convertida na lei 13.874/2019, e até mesmo o projeto de lei para Reforma Tributária no Brasil visando simplificar e modernizar o sistema tributário brasileiro, são indícios que o Brasil caminha positivamente na construção de seu futuro e com atenção ao ambiente de Negócios, tornando o país cada vez mais atrativo aos olhos dos investidores.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">R$ 34,8 Bi</div>
                <div class="text-sm text-gray-600">volume de M&A no mês de novembro de 2020</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">R$ 600 Bi</div>
                <div class="text-sm text-gray-600">produção das Micro e Pequenas Empresas segundo dados do SEBRAE</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Independente da forma – alienação, aquisição, fusão, Joint Venture, incorporação, cisão, reestruturação etc. – a avaliação criteriosa se faz necessária antes de escolher a melhor forma societária. Ajudamos sua empresa a escolher as formas societárias e contratuais mais eficientes de acordo com o seu modelo de negócio.
            </p>
            <p class="text-base leading-relaxed mb-6">
              O objetivo do Martins Regina Advocacia é dar segurança à sua empresa para que o caminho a ser traçado esteja tecnicamente respaldado, potencializando o crescimento e consequentemente os ganhos da empresa.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">O que nossos advogados podem fazer por você e sua empresa?</h4>
            <p class="text-base leading-relaxed mb-4">
              Nossas práticas no Direito Societário abrangem todas as formas de sociedades, em especial as limitadas e de capital fechado que desejam se estruturar para crescer e avançar nas suas próximas etapas. O escritório presta, ainda, serviços como:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Avaliação de riscos das formas societárias escolhidas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Estruturação de empresas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reestruturação empresarial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria e Consultoria jurídica</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Adequação dos Contratos e Estatutos sociais frente às novas mudanças legislativas e cenário pandêmico</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>M&A</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preparação para venda da empresa</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria sobre due diligences na pré-aquisição e pré-venda</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento e estruturação de Negócios</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Permuta</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Formação de grupos e Associações</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reorganização societária e do modelo de negócio</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Fusão, Cisão e Incorporação</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Defesa do direito dos acionistas</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The business environment in Brazil is extremely complex as it involves corporate, tax and labor aspects, not to mention economic variables that directly affect business operations. Despite the challenging scenario, Brazil is still an attractive market.
            </p>
            <p class="text-base leading-relaxed mb-4">
              Merger and acquisition (M&A) operations, for example, maintain stable volume and have even shown growth in recent statistics. This is because the Brazilian market has significant volume and geographical prominence that attracts investors (national and foreign).
            </p>
            <p class="text-base leading-relaxed mb-6">
              Nevertheless, recent legal reforms such as the Labor Reform, the "Economic Freedom MP" converted into law 13.874/2019, and even the bill for Tax Reform in Brazil aimed at simplifying and modernizing the Brazilian tax system, are indications that Brazil is walking positively in building its future and with attention to the Business environment, making the country increasingly attractive in the eyes of investors.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">R$ 34.8 Bi</div>
                <div class="text-sm text-gray-600">M&A volume in November 2020</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">R$ 600 Bi</div>
                <div class="text-sm text-gray-600">production of Micro and Small Enterprises according to SEBRAE data</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Regardless of the form – disposal, acquisition, merger, Joint Venture, incorporation, spin-off, restructuring, etc. – careful evaluation is necessary before choosing the best corporate form. We help your company choose the most efficient corporate and contractual forms according to your business model.
            </p>
            <p class="text-base leading-relaxed mb-6">
              The objective of Martins Regina Advocacia is to give security to your company so that the path to be traced is technically supported, enhancing growth and consequently the company's gains.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">What can our lawyers do for you and your company?</h4>
            <p class="text-base leading-relaxed mb-4">
              Our practices in Corporate Law cover all forms of companies, especially limited and closely held companies that wish to structure themselves to grow and advance in their next stages. The firm also provides services such as:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Risk assessment of chosen corporate forms</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business structuring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business restructuring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Legal advice and consulting</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Adaptation of Contracts and Bylaws in the face of new legislative changes and pandemic scenario</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>M&A</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preparation for company sale</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consulting on due diligence in pre-acquisition and pre-sale</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business planning and structuring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Exchange</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Formation of groups and Associations</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Corporate and business model reorganization</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Merger, Spin-off and Incorporation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Defense of shareholders' rights</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'recuperacao',
      icon: '📈',
      title: 'Recuperação de Empresas e Falências',
      description: 'Assessoria em reestruturação empresarial, recuperações judiciais e falências.',
      titleEn: 'Business Recovery and Bankruptcy',
      descriptionEn: 'Advice on business restructuring, judicial recovery, and bankruptcies.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              A nova lei de recuperação judicial e extrajudicial e falências (2020) trouxe mudanças substanciais frente a antiga lei. Dentre várias alterações destacamos a permissão do sócio da empresa contratar financiamentos na fase de recuperação judicial e a autorização do parcelamento de dívidas tributárias federais.
            </p>
            <p class="text-base leading-relaxed mb-6">
              O escritório Martins Regina Advocacia possui experiência e está preparado a assessorar o cliente perante a mudança legislativa.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">+7 mil</div>
                <div class="text-sm text-gray-600">empresas estão em recuperação judicial no Brasil</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">Rec. 63</div>
                <div class="text-sm text-gray-600">CNJ editou recomendação para priorizar empresas recuperandas no cenário pandêmico</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Mudanças Legislativas 2020</h4>
            <p class="text-sm text-gray-700 mb-2">
              • Permissão do sócio da empresa contratar financiamentos na fase de recuperação judicial
            </p>
            <p class="text-sm text-gray-700">
              • Autorização do parcelamento de dívidas tributárias federais
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Nossos serviços incluem:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento de alternativas para as empresas como aquisição e venda</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Recuperação de crédito de empresas em processo de recuperação ou falência</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Medidas judiciais na preservação do crédito</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Execução contra a devedora principal e coobrigados</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Renegociação de empréstimos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reorganização empresarial e das dívidas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria para investidores interessados nos ativos da empresa</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria nos processos de recuperação judicial e extrajudicial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representação em comitês e assembleia de credores</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The new judicial and extrajudicial recovery and bankruptcy law (2020) brought substantial changes compared to the old law. Among several changes, we highlight the permission for company partners to contract financing during the judicial recovery phase and the authorization of federal tax debt installment.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Martins Regina Advocacia has experience and is prepared to advise clients in the face of legislative change.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">+7k</div>
                <div class="text-sm text-gray-600">companies are in judicial recovery in Brazil</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">Rec. 63</div>
                <div class="text-sm text-gray-600">CNJ issued recommendation to prioritize recovering companies in pandemic scenario</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">2020 Legislative Changes</h4>
            <p class="text-sm text-gray-700 mb-2">
              • Permission for company partners to contract financing during judicial recovery phase
            </p>
            <p class="text-sm text-gray-700">
              • Authorization of federal tax debt installment
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Our services include:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planning alternatives for companies such as acquisition and sale</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Credit recovery from companies in recovery or bankruptcy process</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Judicial measures in credit preservation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Execution against main debtor and co-obligors</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Loan renegotiation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business and debt reorganization</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Advisory for investors interested in company assets</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Advisory in judicial and extrajudicial recovery processes</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representation in committees and creditors' assembly</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'familia',
      icon: '👪',
      title: 'Direito de Família e Sucessões',
      description: 'Assessoria em questões familiares e sucessórias com sensibilidade e expertise.',
      titleEn: 'Family and Succession Law',
      descriptionEn: 'Advice on family and succession matters with sensitivity and expertise.',
      category: 'personal',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <h4 class="font-semibold text-mr-bordo mb-3">DIREITO DE FAMÍLIA</h4>
            <p class="text-base leading-relaxed mb-4">
              O Direito de Família é responsável por regular as relações pessoais e patrimoniais decorrentes do matrimônio, da união estável, do parentesco, da tutela e/ou da curatela. Possui normas jurídicas que trabalham de acordo com orientação constitucional do conceito de família, levando em conta o entendimento jurisprudencial, em âmbito jurídico, e transformações sociais, no âmbito da sociologia.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">3:1</div>
                <div class="text-sm text-gray-600">proporção entre casamento e divórcio segundo o IBGE</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">2011</div>
                <div class="text-sm text-gray-600">ano em que o STF reconheceu a equiparação das relações homoafetivas às uniões estáveis</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              A equipe de Direito de Família do escritório Martins Regina Advocacia está capacitada para auxiliar juridicamente e prestar consultoria em diversas questões advindas do âmbito familiar, tais como:
            </p>
            
            <ul class="space-y-2 text-sm columns-1 md:columns-2">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Casamento, Pacto Antenupcial, Acordo Nupcial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Escritura de União Estável</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Pacto de Convivência e Namoro</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Direitos e deveres dos cônjuges</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reconhecimento e dissolução de união estável</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>União homoafetiva</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Ação de alimentos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Revisão de pensão alimentícia</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Casamento no exterior e seus efeitos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Retificação de registro civil (alteração de nome, acréscimo de sobrenome, entre outros)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Anulação de casamento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Divórcio judicial (consensual ou litigioso) e divórcio extrajudicial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Homologação de Divórcio no exterior</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Partilha do patrimônio do casal judicial e extrajudicial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Ação de investigação de paternidade</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Guarda dos filhos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Convivência familiar e regulamentação de visitas (direito de visitas)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Adoção</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Tutela de menores e curatela</span>
              </li>
            </ul>
          </div>

          <div class="border-t pt-6">
            <h4 class="font-semibold text-mr-bordo mb-3">DIREITO DE SUCESSÕES</h4>
            <p class="text-base leading-relaxed mb-4">
              Além do Direito de Família, mas ainda sobre relações familiares e sociais, o escritório conta com equipe especializada em Direito das Sucessões, ramo do direito que disciplina a transferência do patrimônio em decorrência da perda de um ente querido.
            </p>

            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-mr-bordo mb-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-mr-bordo">44%</div>
                <div class="text-sm text-gray-600">aumento de inventários em relação a 2019</div>
              </div>
            </div>

            <p class="text-base leading-relaxed mb-4">
              Neste sentido, o escritório atua nos interesses dos herdeiros desde a:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Abertura de Inventário judicial e extrajudicial</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Partilha de bens na herança</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Aceitação ou renúncia de herança</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Abertura de testamento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria prévia ao falecimento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração de Testamentos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento Sucessório</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <h4 class="font-semibold text-mr-bordo mb-3">FAMILY LAW</h4>
            <p class="text-base leading-relaxed mb-4">
              Family Law is responsible for regulating personal and patrimonial relationships arising from marriage, stable union, kinship, guardianship and/or curatorship. It has legal norms that work according to the constitutional orientation of the concept of family, taking into account jurisprudential understanding in the legal sphere, and social transformations in the sphere of sociology.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">3:1</div>
                <div class="text-sm text-gray-600">ratio between marriage and divorce according to IBGE</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">2011</div>
                <div class="text-sm text-gray-600">year when STF recognized the equivalence of same-sex relationships to stable unions</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              The Family Law team at Martins Regina Advocacia is qualified to legally assist and provide consulting on various issues arising from the family sphere, such as:
            </p>
            
            <ul class="space-y-2 text-sm columns-1 md:columns-2">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Marriage, Prenuptial Agreement, Marital Agreement</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Stable Union Deed</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Cohabitation and Dating Agreement</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Rights and duties of spouses</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Recognition and dissolution of stable union</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Same-sex union</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Alimony action</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Alimony revision</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Marriage abroad and its effects</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Civil registry rectification (name change, surname addition, among others)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Marriage annulment</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Judicial divorce (consensual or litigious) and extrajudicial divorce</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Foreign divorce homologation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Judicial and extrajudicial property division of the couple</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Paternity investigation action</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Child custody</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Family coexistence and visitation regulation (visitation rights)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Adoption</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Minor guardianship and curatorship</span>
              </li>
            </ul>
          </div>

          <div class="border-t pt-6">
            <h4 class="font-semibold text-mr-bordo mb-3">SUCCESSION LAW</h4>
            <p class="text-base leading-relaxed mb-4">
              In addition to Family Law, but still on family and social relationships, the firm has a team specialized in Succession Law, a branch of law that governs the transfer of assets due to the loss of a loved one.
            </p>

            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-mr-bordo mb-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-mr-bordo">44%</div>
                <div class="text-sm text-gray-600">increase in inventories compared to 2019</div>
              </div>
            </div>

            <p class="text-base leading-relaxed mb-4">
              In this sense, the firm acts in the interests of heirs from:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Opening of judicial and extrajudicial Inventory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Division of assets in inheritance</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Acceptance or renunciation of inheritance</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Will opening</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Pre-death consulting</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Will drafting</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Succession Planning</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'compliance',
      icon: '✔️',
      title: 'Compliance',
      description: 'Implementação e monitoramento de políticas de conformidade para mitigar riscos e atender a normas regulatórias.',
      titleEn: 'Compliance',
      descriptionEn: 'Implementation and monitoring of compliance policies to mitigate risks and meet regulatory standards.',
      category: 'specialized',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              O grande marco do Compliance se iniciou com a FCPA (Foreign Corruption Practices Act), lei americana editada em 1977 após o escândalo de Watergate.
            </p>
            <p class="text-base leading-relaxed mb-6">
              O FCPA foi a primeira lei no mundo a punir e responsabilizar as empresas norte-americanas que subornassem partidos políticos, oficiais e funcionários ou políticos de governo estrangeiro. Diante desse novo paradigma, a política global mudou de cenário.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Marcos Históricos</h4>
            <div class="text-sm text-gray-700 space-y-1">
              <p><strong>1977:</strong> FCPA (EUA) - primeira lei anticorrupção mundial</p>
              <p><strong>1997:</strong> Convenção Interamericana contra a Corrupção (OEA) e Convenção da OCDE</p>
              <p><strong>2010:</strong> UKBA - United Kingdom Bribery Act</p>
              <p><strong>2013:</strong> Lei 12.846/2013 - Lei Anticorrupção brasileira</p>
              <p><strong>2016:</strong> Lei Sapin II (França)</p>
              <p><strong>2017:</strong> Ley de Responsabilidad Empresaria (Argentina)</p>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Outros países se sentiram pressionados a promulgar sua própria lei anticorrupção, dentre alguns destacamos o Reino Unido ao instituir o UKBA (United Kingdom Bribery Act) em 2010, a França em 2016 com a Lei Sapin II, nossa vizinha Argentina em 2017 aprovando a nova "Ley de Responsbilidad Empresaria" e o Brasil, que apesar de já ter em seu ordenamento jurídico previsões esparsas como na Lei de Licitações (8.666/93) e no Código Penal, por exemplo, teve como seu divisor de águas a Lei 12.846/2013, chamada de "Lei Anticorrupção" ou "Lei da Empresa Limpa".
            </p>
            <p class="text-base leading-relaxed mb-6">
              Vale citar por fim, a China, maior parceira comercial do Brasil, que apesar de não ter uma Lei Anticorrupção propriamente dita, teve o compromisso público de seu atual presidente no combate a corrupção criando uma Comissão Nacional de Supervisão que trabalhará em conjunto com a Comissão Central para Inspeção Disciplinar (CCID) que por sua vez investiga e pune crimes cometidos por membros do Partido Comunista.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="text-center">
              <div class="text-2xl font-bold text-mr-bordo">R$ 3,84 Bi</div>
              <div class="text-sm text-gray-600">valor já devolvido aos cofres públicos pelos Acordos de Leniência</div>
              <div class="text-xs text-gray-500 mt-1">R$ 3.840.367.468,77</div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-6">
              Assim, os programas de Compliance vieram para atender à demanda global de regulamentação, pressão dos stakeholders e shareholders e estruturação das organizações com a adoção de boas práticas de governança corporativa.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Nesse contexto, os profissionais do Martins Regina Advocacia possuem perfil multidisciplinar para prestar assessoria jurídica qualificada às empresas que desejam implementar ou aprimorar seus programas de Compliance através da identificação e prevenção de riscos.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">O que nossos advogados podem fazer por você e sua empresa?</h4>
            <p class="text-base leading-relaxed mb-4">
              Os serviços de nosso escritório de advocacia incluem:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração do programa de Compliance</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Avaliação e reformulação do Programa de Compliance frente às novas políticas globais</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Negociação em acordo de leniência com autoridades governamentais</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Análise das práticas dos clientes frente a lei e políticas internas da Cia.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Governança corporativa</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Entrevistas com administradores, sócios, funcionários e terceiros</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Defesa técnica em processos administrativos e judiciais</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The great milestone of Compliance began with the FCPA (Foreign Corruption Practices Act), an American law enacted in 1977 after the Watergate scandal.
            </p>
            <p class="text-base leading-relaxed mb-6">
              The FCPA was the first law in the world to punish and hold accountable American companies that bribed political parties, officials and employees or politicians of foreign governments. Faced with this new paradigm, global politics changed scenario.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Historical Milestones</h4>
            <div class="text-sm text-gray-700 space-y-1">
              <p><strong>1977:</strong> FCPA (USA) - first anti-corruption law worldwide</p>
              <p><strong>1997:</strong> Inter-American Convention against Corruption (OAS) and OECD Convention</p>
              <p><strong>2010:</strong> UKBA - United Kingdom Bribery Act</p>
              <p><strong>2013:</strong> Law 12.846/2013 - Brazilian Anti-Corruption Law</p>
              <p><strong>2016:</strong> Sapin II Law (France)</p>
              <p><strong>2017:</strong> Corporate Responsibility Law (Argentina)</p>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Other countries felt pressured to enact their own anti-corruption law, among some we highlight the United Kingdom by instituting the UKBA (United Kingdom Bribery Act) in 2010, France in 2016 with the Sapin II Law, our neighbor Argentina in 2017 approving the new "Corporate Responsibility Law" and Brazil, which despite already having sparse provisions in its legal system such as in the Bidding Law (8.666/93) and in the Penal Code, for example, had as its watershed Law 12.846/2013, called the "Anti-Corruption Law" or "Clean Company Law".
            </p>
            <p class="text-base leading-relaxed mb-6">
              It is worth mentioning, finally, China, Brazil's largest trading partner, which despite not having an Anti-Corruption Law per se, had the public commitment of its current president in the fight against corruption by creating a National Supervision Commission that will work together with the Central Commission for Disciplinary Inspection (CCDI) which in turn investigates and punishes crimes committed by members of the Communist Party.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="text-center">
              <div class="text-2xl font-bold text-mr-bordo">R$ 3.84 Bi</div>
              <div class="text-sm text-gray-600">amount already returned to public coffers through Leniency Agreements</div>
              <div class="text-xs text-gray-500 mt-1">R$ 3,840,367,468.77</div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-6">
              Thus, Compliance programs came to meet the global demand for regulation, pressure from stakeholders and shareholders and structuring of organizations with the adoption of good corporate governance practices.
            </p>
            <p class="text-base leading-relaxed mb-6">
              In this context, Martins Regina Advocacia professionals have a multidisciplinary profile to provide qualified legal advice to companies that wish to implement or improve their Compliance programs through risk identification and prevention.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">What can our lawyers do for you and your company?</h4>
            <p class="text-base leading-relaxed mb-4">
              Our law firm services include:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Development of Compliance program</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Evaluation and reformulation of Compliance Program in face of new global policies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Negotiation in leniency agreements with government authorities</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Analysis of clients' practices in face of law and company's internal policies</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Corporate governance</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Interviews with administrators, partners, employees and third parties</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Technical defense in administrative and judicial proceedings</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'lgpd',
      icon: '🔐',
      title: 'Lei Geral de Proteção de Dados (LGPD)',
      description: 'Adequação às normas de proteção de dados pessoais conforme a LGPD, incluindo políticas e procedimentos.',
      titleEn: 'General Data Protection Law (LGPD)',
      descriptionEn: 'Adaptation to personal data protection standards according to LGPD, including policies and procedures.',
      category: 'specialized',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              A Lei Geral de Proteção de Dados (LGPD) é um marco regulatório no Brasil e veio para regular o tratamento dos dados pessoais conferindo maior segurança, transparência, responsabilidade e cumprindo princípios como finalidade e necessidade.
            </p>
            <p class="text-base leading-relaxed mb-4">
              A missão desta lei é proteger os direitos fundamentais como a privacidade, livre desenvolvimento, personalidade e liberdade. E garante direitos como do consentimento para o uso de seus dados.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Nossa lei foi baseada na GDPR, lei europeia e paradigmática no tema proteção de dados.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">61%</div>
                <div class="text-sm text-gray-600">dos entrevistados em 2020 do Edelman Trust Barometer indicaram que o ritmo da mudança tecnológica era muito rápido</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">2%</div>
                <div class="text-sm text-gray-600">do faturamento pode ser a multa para empresa privada que violar a LGPD</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Marco Regulatório</h4>
            <p class="text-sm text-gray-700">
              A LGPD foi baseada na GDPR (General Data Protection Regulation), lei europeia paradigmática em proteção de dados, adaptada para a realidade brasileira com foco na proteção dos direitos fundamentais dos cidadãos.
            </p>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Desde 2018 (ano de aprovação da Lei) a equipe do Martins Regina Advocacia vem se especializando em assessorar clientes em:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Treinamento da LGPD com as mudanças trazidas pela lei</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Implementação da LGPD na sua empresa</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Avaliação e revisão da política de privacidade</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Comparativo da GDPR com a LGPD para multinacionais e empresas interessadas em expandir mercado</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The General Data Protection Law (LGPD) is a regulatory milestone in Brazil and came to regulate the treatment of personal data providing greater security, transparency, responsibility and fulfilling principles such as purpose and necessity.
            </p>
            <p class="text-base leading-relaxed mb-4">
              The mission of this law is to protect fundamental rights such as privacy, free development, personality and freedom. And it guarantees rights such as consent for the use of your data.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Our law was based on the GDPR, the European and paradigmatic law on data protection.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">61%</div>
                <div class="text-sm text-gray-600">of respondents in 2020 Edelman Trust Barometer indicated that the pace of technological change was too fast</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">2%</div>
                <div class="text-sm text-gray-600">of revenue can be the fine for private companies that violate the LGPD</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Regulatory Milestone</h4>
            <p class="text-sm text-gray-700">
              The LGPD was based on the GDPR (General Data Protection Regulation), the paradigmatic European law on data protection, adapted to the Brazilian reality with a focus on protecting the fundamental rights of citizens.
            </p>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-4">
              Since 2018 (year of approval of the Law) the Martins Regina Advocacia team has been specializing in advising clients on:
            </p>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>LGPD training with the changes brought by the law</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>LGPD implementation in your company</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Privacy policy evaluation and review</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>GDPR comparison with LGPD for multinationals and companies interested in market expansion</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'tributario',
      icon: '💰',
      title: 'Direito Tributário',
      description: 'Assessoria em planejamento e contencioso tributário para empresas e pessoas físicas.',
      titleEn: 'Tax Law',
      descriptionEn: 'Advice on tax planning and litigation for companies and individuals.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              O sistema tributário brasileiro é o mais complexo e desafiador sistema jurídico, e por isso merece advogados especializados em Direito Tributário.
            </p>
            <p class="text-base leading-relaxed mb-4">
              O Direito Tributário determina e fiscaliza a arrecadação de tributos, combate abusos do fisco e controla o pagamento de contribuintes. O papel do advogado tributarista nas empresas é defender o patrimônio do empreendedor e evitar cobranças abusivas, direcionando todo o processo fiscal da organização.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Quem conta com um tributarista tem segurança para evitar riscos e prejuízos, garantindo o planejamento tributário adequado.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">403.322</div>
                <div class="text-sm text-gray-600">leis tributárias editadas no Brasil desde a promulgação da Constituição até 2019</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">35,17%</div>
                <div class="text-sm text-gray-600">do PIB é a carga tributária brasileira</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Atuação Consultiva e Contenciosa</h4>
            <p class="text-sm text-gray-700 mb-2">
              <strong>Consultivo:</strong> Fornecemos pareceres técnicos sobre diversos temas, considerando não só leis em vigor mas também projetos de lei em tramitação.
            </p>
            <p class="text-sm text-gray-700">
              <strong>Contencioso:</strong> Defendemos clientes contra autuações de entes públicos em processos administrativos e judiciais tributários.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Principais serviços oferecidos em Direito Tributário:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento Tributário (estratégias lícitas para reduzir carga fiscal, aproveitar incentivos, escolher regime tributário adequado)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria em temas tributários diversos (esclarecimento de dúvidas fiscais, emissão de pareceres legais sobre interpretação de normas)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contencioso administrativo e judicial tributário (defesa em autos de infração, impugnações, recursos, ações judiciais)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Transfer Pricing (preços de transferência para empresas que fazem comércio internacional intragrupo)</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-4">
              The Brazilian tax system is the most complex and challenging legal system, and therefore deserves lawyers specialized in Tax Law.
            </p>
            <p class="text-base leading-relaxed mb-4">
              Tax Law determines and supervises tax collection, combats tax abuses and controls taxpayer payments. The role of the tax lawyer in companies is to defend the entrepreneur's assets and avoid abusive charges, directing the entire tax process of the organization.
            </p>
            <p class="text-base leading-relaxed mb-6">
              Those who have a tax specialist have security to avoid risks and losses, ensuring adequate tax planning.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">403,322</div>
                <div class="text-sm text-gray-600">tax laws enacted in Brazil since the promulgation of the Constitution until 2019</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">35.17%</div>
                <div class="text-sm text-gray-600">of GDP is the Brazilian tax burden</div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Advisory and Litigation Practice</h4>
            <p class="text-sm text-gray-700 mb-2">
              <strong>Advisory:</strong> We provide technical opinions on various topics, considering not only laws in force but also bills in process.
            </p>
            <p class="text-sm text-gray-700">
              <strong>Litigation:</strong> We defend clients against assessments by public entities in administrative and judicial tax proceedings.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Main services offered in Tax Law:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Tax Planning (lawful strategies to reduce tax burden, take advantage of incentives, choose adequate tax regime)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consulting on various tax matters (clarification of tax doubts, issuance of legal opinions on interpretation of rules)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Administrative and judicial tax litigation (defense in tax assessments, challenges, appeals, judicial actions)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Transfer Pricing (for companies engaged in intragroup international trade)</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'desportivo',
      icon: '🏅',
      title: 'Direito Desportivo',
      description: 'Consultoria e contencioso em contratos e regulamentações do universo esportivo.',
      titleEn: 'Sports Law',
      descriptionEn: 'Consulting and litigation in contracts and regulations of the sports universe.',
      category: 'specialized',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Ramo do direito que trata das relações jurídicas envolvendo as práticas esportivas. É uma área que deve ser entendida sob o viés multidisciplinar por envolver aspectos trabalhistas, contratuais, tributários etc.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">R$ 125 Mi</div>
                <div class="text-sm text-gray-600">valor dos investimentos com esportes através dos programas Bolsa Atleta e Pódio em 2020</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">US$ 842,4 Mi</div>
                <div class="text-sm text-gray-600">gastos do Brasil com esportes 1 ano antes dos Jogos Olímpicos do Rio, sendo o país latino-americano que mais investiu</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-6">
              Nossa equipe de Direito Desportivo está preparada para assessorar todos os envolvidos nesse ramo de atividade, desde o atleta, empresário, patrocinadores, entidades desportivas até investidores do segmento.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Experiência Reconhecida</h4>
            <p class="text-sm text-gray-700">
              O Martins Regina Advocacia possui nos seus quadros de sócios com papéis de destaque no Direito Desportivo como ex-Procurador do Superior Tribunal de Justiça Desportivo (STJD) e membro da Comissão de Direito Desportivo da OAB/RJ, habilitando o escritório para assessorá-lo nessa área.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Dentre nossos serviços destacamos:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria de negócios esportivos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração, Revisão e Gestão de Contratos e Estatutos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento Patrimonial para atletas e empresários</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Planejamento Empresarial para entidades do esporte</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reestruturação societária</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria Jurídica</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Direito de Imagem e Direito de Arena</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Patrocínio</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Naming Rights e Licenciamento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Gestão de contratos de trabalho</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Branch of law that deals with legal relationships involving sports practices. It is an area that must be understood from a multidisciplinary perspective as it involves labor, contractual, tax aspects, etc.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">R$ 125 Mi</div>
                <div class="text-sm text-gray-600">value of sports investments through Bolsa Atleta and Pódio programs in 2020</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">US$ 842.4 Mi</div>
                <div class="text-sm text-gray-600">Brazil's sports spending 1 year before Rio Olympics, being the Latin American country that invested the most</div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-base leading-relaxed mb-6">
              Our Sports Law team is prepared to advise all those involved in this field of activity, from athletes, businessmen, sponsors, sports entities to segment investors.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Recognized Experience</h4>
            <p class="text-sm text-gray-700">
              Martins Regina Advocacia has partners with prominent roles in Sports Law such as former Prosecutor of the Superior Court of Sports Justice (STJD) and member of the Sports Law Commission of OAB/RJ, qualifying the firm to advise you in this area.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Among our services we highlight:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Sports business consulting</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Drafting, Review and Management of Contracts and Bylaws</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Estate Planning for athletes and businessmen</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Business Planning for sports entities</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Corporate restructuring</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Legal Advisory</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Image Rights and Arena Rights</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Sponsorship</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Naming Rights and Licensing</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Employment contract management</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'trabalhista',
      icon: '👷',
      title: 'Direito Trabalhista',
      description: 'Assessoria em relações de trabalho, contratos de emprego e contencioso trabalhista.',
      titleEn: 'Labor Law',
      descriptionEn: 'Advice on labor relations, employment contracts, and labor litigation.',
      category: 'business',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Ramo do Direito que rege as relações de trabalho, em especial entre empregado e empregador, o Direito Trabalhista tem os valores sociais do trabalho como Princípio Fundamental consagrado em nossa Constituição, tamanha sua importância em nosso ordenamento jurídico.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Princípio Constitucional</h4>
            <p class="text-sm text-gray-700">
              Os valores sociais do trabalho são consagrados como Princípio Fundamental em nossa Constituição, demonstrando a importância central do Direito Trabalhista no ordenamento jurídico brasileiro.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">52%</div>
                <div class="text-sm text-gray-600">dos empregos com carteiras assinadas no Brasil são fruto das Micros e Pequenas Empresas</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">39.097</div>
                <div class="text-sm text-gray-600">processos sobre Horas Extras lideram as estatísticas oficiais na Justiça Trabalhista</div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Dentre os serviços prestados pelo Martins Regina Advocacia destacamos:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representação Processual</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria sobre aplicação da lei trabalhista e convenções coletivas de trabalho</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria jurídica preventiva</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representação nas Delegacias Regionais do Trabalho e Ministério Público do trabalho</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria em acordos e convenções coletivas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Acidente de trabalho</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Avaliação e elaboração de planos de incentivos e benefícios como participação nos lucros e stock option</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria em plano de demissão voluntária</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Branch of Law that governs labor relations, especially between employee and employer, Labor Law has the social values of work as a Fundamental Principle enshrined in our Constitution, such is its importance in our legal system.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Constitutional Principle</h4>
            <p class="text-sm text-gray-700">
              The social values of work are enshrined as a Fundamental Principle in our Constitution, demonstrating the central importance of Labor Law in the Brazilian legal system.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">52%</div>
                <div class="text-sm text-gray-600">of formal jobs in Brazil are result of Micro and Small Enterprises</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">39,097</div>
                <div class="text-sm text-gray-600">overtime processes lead the official statistics in Labor Justice</div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Among the services provided by Martins Regina Advocacia we highlight:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Procedural Representation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consulting on application of labor law and collective labor agreements</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preventive legal advice</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Representation at Regional Labor Offices and Public Ministry of Labor</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Advisory on agreements and collective conventions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Work accidents</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Evaluation and development of incentive and benefit plans such as profit sharing and stock options</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Advisory on voluntary dismissal plans</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'consumidor',
      icon: '🛒',
      title: 'Direito do Consumidor',
      description: 'Orientação e defesa em direitos do consumidor, incluindo litígios e compliance.',
      titleEn: 'Consumer Law',
      descriptionEn: 'Guidance and defense in consumer rights, including litigation and compliance.',
      category: 'specialized',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              O Direito do Consumidor abrange todas as questões relacionadas ao consumo de produtos e serviços em geral, visando resguardar o direito do consumidor nestas relações.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">84,6%</div>
                <div class="text-sm text-gray-600">foi o aumento de reclamações sobre Direito do Consumidor em relação ao ano anterior no site Reclame Aqui</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">76,5%</div>
                <div class="text-sm text-gray-600">é o índice médio de soluções em casos do Direito do Consumidor segundo o SINDEC</div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">A equipe do escritório Martins Regina Advocacia presta consultoria e auxílio jurídico nas seguintes situações:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Problemas envolvendo compras pela internet</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Produto com defeito ou não entregue</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Vícios na qualidade de produtos e serviços</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Atraso na entrega de produtos e/ou serviços</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Propaganda enganosa e Venda casada</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Prevenção e reparação de danos oriundos de relações de consumo</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Direito de arrependimento e devolução do produto</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Inscrição indevida em cadastros de inadimplentes, tais como: SPC e SERASA</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Revisão de cláusula de contrato, como por exemplo de Financiamento</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Atraso na entrega de imóvel</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assuntos envolvendo plano de saúde</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Problemas com serviços de telefonia, internet, TV a cabo</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Água e esgoto, energia elétrica, cancelamento ou atraso de voo, avaria e/ou extravio de carga ou bagagem, Overbooking, Programa de milhas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Pacote turístico</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Transportes coletivos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Reajustes e juros abusivos</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Consumer Law covers all issues related to the consumption of products and services in general, aiming to protect consumer rights in these relationships.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">84.6%</div>
                <div class="text-sm text-gray-600">was the increase in Consumer Law complaints compared to the previous year on Reclame Aqui website</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">76.5%</div>
                <div class="text-sm text-gray-600">is the average resolution rate in Consumer Law cases according to SINDEC</div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">The team at Martins Regina Advocacia provides consulting and legal assistance in the following situations:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Problems involving online purchases</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Defective or undelivered products</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Quality defects in products and services</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Delays in product and/or service delivery</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Misleading advertising and Tie-in sales</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Prevention and repair of damages arising from consumer relationships</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Right of withdrawal and product return</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Improper registration in credit bureaus, such as: SPC and SERASA</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Contract clause review, such as Financing contracts</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Delays in real estate delivery</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Health insurance matters</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Problems with telecommunications, internet, cable TV services</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Water and sewage, electricity, flight cancellation or delays, cargo or baggage damage and/or loss, Overbooking, Mileage programs</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Travel packages</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Public transportation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Abusive adjustments and interest rates</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'constitucional',
      icon: '📜',
      title: 'Direito Constitucional',
      description: 'Assessoria em questões constitucionais e direitos fundamentais perante o poder público.',
      titleEn: 'Constitutional Law',
      descriptionEn: 'Advice on constitutional issues and fundamental rights before public authorities.',
      category: 'specialized',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Nossa atual Constituição data de 05 de outubro de 1988 e foi um marco histórico por uma série de motivos, em especial por ser a Constituição promulgada após o regime militar.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Capacitação Diferenciada</h4>
            <p class="text-sm text-gray-700">
              Nossos advogados possuem capacitação diferenciada em Direito Constitucional, tendo profissionais formados nos cursos de pós graduação com o título Summa Cum Laude.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">1.158</div>
                <div class="text-sm text-gray-600">é o número de decisões proferidas pelo STF em janeiro de 2021</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">8.917</div>
                <div class="text-sm text-gray-600">é o número de decisões proferidas desde 2000 pelo STF em ADI (Ação Direta de Inconstitucionalidade)</div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Nesse sentido o Martins Regina Advocacia está apto a assessorar o cliente em:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria em julgamentos perante o Supremo Tribunal Federal (STF)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração de pareceres sobre a constitucionalidade das leis</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Recursos Extraordinários</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Elaboração de memoriais</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Formulação de incidentes de inconstitucionalidade em ações tramitando nas instâncias ordinárias</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consultoria sobre questões sensíveis do Direito Constitucional</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Assessoria em discussões de Teses que envolvam o tema</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Our current Constitution dates from October 5, 1988 and was a historic milestone for several reasons, especially for being the Constitution enacted after the military regime.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Distinguished Qualification</h4>
            <p class="text-sm text-gray-700">
              Our lawyers have distinguished qualification in Constitutional Law, with professionals graduated from postgraduate courses with Summa Cum Laude title.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">1,158</div>
                <div class="text-sm text-gray-600">is the number of decisions rendered by the Supreme Federal Court in January 2021</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">8,917</div>
                <div class="text-sm text-gray-600">is the number of decisions rendered since 2000 by the Supreme Court in ADI (Direct Action of Unconstitutionality)</div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">In this regard, Martins Regina Advocacia is qualified to advise clients on:</h4>
            
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Advisory in trials before the Supreme Federal Court (STF)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preparation of opinions on constitutionality of laws</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Extraordinary Appeals</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Preparation of legal briefs</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Formulation of unconstitutionality incidents in actions pending in ordinary instances</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Consulting on sensitive Constitutional Law issues</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mr-bordo mt-1">•</span>
                <span>Advisory in thesis discussions involving the subject</span>
              </li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'pro-bono',
      icon: '🤝',
      title: 'Pro Bono',
      description: 'Atuação voluntária em causas sociais e de interesse público para acesso à justiça.',
      titleEn: 'Pro Bono',
      descriptionEn: 'Voluntary work in social and public interest causes for access to justice.',
      category: 'personal',
      detailedContent: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Pro Bono é uma expressão latina que significa "para o bem", logo, o termo nada mais é do que uma atividade voluntária exercida pelo profissional ou empresa de advocacia.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Hipertensão Arterial Pulmonar (HAP)</h4>
            <p class="text-sm text-gray-700">
              O escritório Martins Regina Advocacia abraça os pacientes portadores de Hipertensão Arterial Pulmonar (HAP) de forma gratuita e renunciando, inclusive, aos honorários sucumbenciais. Nosso escritório teve participação ativa na implementação do Protocolo Clínico e Diretrizes Terapêuticas de Hipertensão Arterial Pulmonar no Estado do Rio de Janeiro.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">67</div>
                <div class="text-sm text-gray-600">Número de pacientes assistidos gratuitamente pelo escritório Martins Regina Advocacia</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">100%</div>
                <div class="text-sm text-gray-600">de êxito nas ações pro bono</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
            <h4 class="font-semibold text-gray-800 mb-3">Depoimento - Dr. Pedro DeRegina</h4>
            <p class="text-sm text-gray-700 mb-3">
              Ainda nesse âmbito, o Dr. Pedro DeRegina, sócio do Martins Regina Advocacia comenta que houve renúncia de honorários, inclusive os de sucumbência, os quais foram destinados ao próprio Estado.
            </p>
            <p class="text-sm text-gray-700">
              "Essa causa teve início em 2007 e perdura até os dias atuais. Além disso, passamos a ter uma atenção especial às questões ambientais. Algumas mudanças no dia a dia e que fazem a diferença ao longo dos anos foram implementadas para contribuir nessa seara", completa.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Responsabilidade Social Corporativa</h4>
            <p class="text-base leading-relaxed mb-4">
              Atreladas aos Objetivos de Desenvolvimento Sustentável (ODS), estas ações são enquadradas na Responsabilidade Social Corporativa e implementadas no escritório para garantir o direito à saúde, previsto na Constituição.
            </p>
          </div>
        </div>
      `,
      detailedContentEn: `
        <div class="space-y-6">
          <div>
            <p class="text-base leading-relaxed mb-6">
              Pro Bono is a Latin expression meaning "for the good", therefore, the term is nothing more than a voluntary activity exercised by the professional or law firm.
            </p>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-mr-bordo">
            <h4 class="font-semibold text-mr-bordo mb-3">Pulmonary Arterial Hypertension (PAH)</h4>
            <p class="text-sm text-gray-700">
              Martins Regina Advocacia embraces patients with Pulmonary Arterial Hypertension (PAH) for free and even waiving contingency fees. Our firm played an active role in implementing the Clinical Protocol and Therapeutic Guidelines for Pulmonary Arterial Hypertension in the State of Rio de Janeiro.
            </p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div class="md:border-r md:border-gray-200 md:pr-4">
                <div class="text-2xl font-bold text-mr-bordo">67</div>
                <div class="text-sm text-gray-600">Number of patients assisted free of charge by Martins Regina Advocacia</div>
              </div>
              <div class="md:pl-4 mt-4 md:mt-0">
                <div class="text-2xl font-bold text-mr-bordo">100%</div>
                <div class="text-sm text-gray-600">success rate in pro bono actions</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600">
            <h4 class="font-semibold text-gray-800 mb-3">Testimony - Dr. Pedro DeRegina</h4>
            <p class="text-sm text-gray-700 mb-3">
              In this regard, Dr. Pedro DeRegina, partner at Martins Regina Advocacia, comments that there was a waiver of fees, including contingency fees, which were allocated to the State itself.
            </p>
            <p class="text-sm text-gray-700">
              "This cause began in 2007 and continues to this day. Furthermore, we began to pay special attention to environmental issues. Some changes in daily life that make a difference over the years have been implemented to contribute to this area", he concludes.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-mr-bordo mb-4">Corporate Social Responsibility</h4>
            <p class="text-base leading-relaxed mb-4">
              Linked to the Sustainable Development Goals (SDGs), these actions are framed within Corporate Social Responsibility and implemented in the firm to guarantee the right to health, provided for in the Constitution.
            </p>
          </div>
        </div>
      `
    }
  ];

  const openAreaDetails = (area: PracticeArea) => {
    setSelectedArea(area);
  };

  return (
    <section id="areas" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative inline-block">
            {currentLanguage === 'PT' ? 'Áreas de Atuação' : 'Practice Areas'}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
            {currentLanguage === 'PT'
              ? 'Oferecemos advocacia multidisciplinar com soluções customizadas para atender às necessidades específicas de cada cliente. Nossa experiência abrange desde planejamento patrimonial e direito empresarial até causas especializadas e pro bono.'
              : 'We offer multidisciplinary legal services with customized solutions to meet each client\'s specific needs. Our experience ranges from estate planning and corporate law to specialized and pro bono cases.'}
          </p>
          
          <div className="bg-gradient-to-r from-mr-bordo/10 to-blue-50 p-6 rounded-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-mr-bordo mb-2">16</div>
                <div className="text-sm text-gray-600">
                  {currentLanguage === 'PT' ? 'Áreas de Especialização' : 'Areas of Expertise'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mr-bordo mb-2">27+</div>
                <div className="text-sm text-gray-600">
                  {currentLanguage === 'PT' ? 'Anos de Experiência' : 'Years of Experience'}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-mr-bordo mb-2">100%</div>
                <div className="text-sm text-gray-600">
                  {currentLanguage === 'PT' ? 'Êxito em Ações Pro Bono' : 'Success in Pro Bono Actions'}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            <TabsTrigger value="all">{currentLanguage === 'PT' ? 'Todas as Áreas' : 'All Areas'}</TabsTrigger>
            <TabsTrigger value="business">{currentLanguage === 'PT' ? 'Empresarial' : 'Business'}</TabsTrigger>
            <TabsTrigger value="personal">{currentLanguage === 'PT' ? 'Pessoal' : 'Personal'}</TabsTrigger>
            <TabsTrigger value="specialized">{currentLanguage === 'PT' ? 'Especializado' : 'Specialized'}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll px-1">
                {practiceAreas.map((area) => (
                  <div key={area.id} className="flex-none w-72 sm:w-80 md:w-96 snap-start">
                    <AreaCard area={area} onClick={() => openAreaDetails(area)} />
                  </div>
                ))}
              </div>
              {/* Indicador de scroll para mobile */}
              <div className="flex justify-center mt-4 md:hidden">
                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full scroll-indicator">
                  ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="business" className="mt-6">
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll px-1">
                {practiceAreas
                  .filter(area => area.category === 'business')
                  .map((area) => (
                    <div key={area.id} className="flex-none w-72 sm:w-80 md:w-96 snap-start">
                      <AreaCard area={area} onClick={() => openAreaDetails(area)} />
                    </div>
                  ))}
              </div>
              {practiceAreas.filter(area => area.category === 'business').length > 1 && (
                <div className="flex justify-center mt-4 md:hidden">
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full scroll-indicator">
                    ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="personal" className="mt-6">
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll px-1">
                {practiceAreas
                  .filter(area => area.category === 'personal')
                  .map((area) => (
                    <div key={area.id} className="flex-none w-72 sm:w-80 md:w-96 snap-start">
                      <AreaCard area={area} onClick={() => openAreaDetails(area)} />
                    </div>
                  ))}
              </div>
              {practiceAreas.filter(area => area.category === 'personal').length > 1 && (
                <div className="flex justify-center mt-4 md:hidden">
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full scroll-indicator">
                    ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="specialized" className="mt-6">
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal touch-scroll px-1">
                {practiceAreas
                  .filter(area => area.category === 'specialized')
                  .map((area) => (
                    <div key={area.id} className="flex-none w-72 sm:w-80 md:w-96 snap-start">
                      <AreaCard area={area} onClick={() => openAreaDetails(area)} />
                    </div>
                  ))}
              </div>
              {practiceAreas.filter(area => area.category === 'specialized').length > 1 && (
                <div className="flex justify-center mt-4 md:hidden">
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full scroll-indicator">
                    ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Area Details Dialog */}
        <Dialog open={!!selectedArea} onOpenChange={(open: boolean) => !open && setSelectedArea(null)}>
          <DialogContent className="sm:max-w-5xl max-h-[85vh] overflow-hidden">
            {selectedArea && (
              <>
                <DialogHeader className="pb-4 border-b">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-mr-bordo/10 p-3 rounded-xl">
                      <span className="text-4xl">{selectedArea.icon}</span>
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-2xl md:text-3xl font-serif text-gray-900 mb-2">
                        {currentLanguage === 'PT' ? selectedArea.title : selectedArea.titleEn}
                      </DialogTitle>
                      <p className="text-gray-600 text-base">
                        {currentLanguage === 'PT' ? selectedArea.description : selectedArea.descriptionEn}
                      </p>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="py-6 overflow-y-auto max-h-[60vh]">
                  {selectedArea.detailedContent && currentLanguage === 'PT' ? (
                    <div 
                      className="prose prose-gray max-w-none prose-headings:text-mr-bordo prose-headings:font-serif prose-a:text-mr-bordo prose-strong:text-mr-bordo prose-ul:space-y-2"
                      dangerouslySetInnerHTML={{ 
                        __html: selectedArea.detailedContent 
                      }} 
                    />
                  ) : selectedArea.detailedContentEn && currentLanguage === 'EN' ? (
                    <div 
                      className="prose prose-gray max-w-none prose-headings:text-mr-bordo prose-headings:font-serif prose-a:text-mr-bordo prose-strong:text-mr-bordo prose-ul:space-y-2"
                      dangerouslySetInnerHTML={{ 
                        __html: selectedArea.detailedContentEn 
                      }} 
                    />
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-6">{currentLanguage === 'PT' ? selectedArea.description : selectedArea.descriptionEn}</p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-sm text-gray-500">
                          {currentLanguage === 'PT' 
                            ? 'Entre em contato para mais informações sobre esta área de atuação.' 
                            : 'Contact us for more information about this practice area.'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <DialogFooter className="pt-4 border-t bg-gray-50 -mx-6 -mb-6 px-6 py-4">
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button variant="outline" onClick={() => setSelectedArea(null)} className="flex-1 sm:flex-none">
                      {currentLanguage === 'PT' ? 'Fechar' : 'Close'}
                    </Button>
                    <Button asChild className="flex-1 sm:flex-none bg-mr-bordo hover:bg-mr-bordo/90">
                      <Link href="#contato" onClick={() => setSelectedArea(null)}>
                        {currentLanguage === 'PT' ? 'Agendar Consulta' : 'Schedule Consultation'}
                      </Link>
                    </Button>
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

function AreaCard({ area, onClick }: { area: PracticeArea; onClick: () => void }) {
  const { currentLanguage } = useLanguage();
  
  // Definir categorias com cores
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'business':
        return { 
          label: currentLanguage === 'PT' ? 'Empresarial' : 'Business', 
          color: 'bg-blue-100 text-blue-800',
          borderColor: 'border-l-blue-500'
        };
      case 'personal':
        return { 
          label: currentLanguage === 'PT' ? 'Pessoal' : 'Personal', 
          color: 'bg-green-100 text-green-800',
          borderColor: 'border-l-green-500'
        };
      case 'specialized':
        return { 
          label: currentLanguage === 'PT' ? 'Especializado' : 'Specialized', 
          color: 'bg-purple-100 text-purple-800',
          borderColor: 'border-l-purple-500'
        };
      default:
        return { 
          label: '', 
          color: 'bg-gray-100 text-gray-800',
          borderColor: 'border-l-mr-bordo'
        };
    }
  };

  const categoryInfo = getCategoryInfo(area.category);
  
  return (
    <Card className={`h-full cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-l-4 ${categoryInfo.borderColor} bg-white hover:bg-gray-50/50 relative overflow-hidden`}>
      <CardContent className="p-6 h-full flex flex-col relative z-10" onClick={onClick}>
        <div className="flex items-start justify-between mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
            {categoryInfo.label}
          </span>
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{area.icon}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground group-hover:text-mr-bordo transition-colors mb-3 leading-tight font-serif">
          {currentLanguage === 'PT' ? area.title : area.titleEn}
        </h3>
        
        <p className="text-muted-foreground text-sm flex-grow leading-relaxed mb-4">
          {currentLanguage === 'PT' ? area.description : area.descriptionEn}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <span className="text-mr-bordo text-sm font-medium group-hover:underline flex items-center gap-1">
            {currentLanguage === 'PT' ? 'Clique para detalhes' : 'Click for details'}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </CardContent>
      
      {/* Efeito de brilho sutil no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] duration-700"></div>
    </Card>
  );
}
