'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '../ui/badge';
import { Calendar, User, Filter, ChevronDown, ExternalLink, X, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

interface ArticleData {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  date: string;
  author: string;
  description: {
    pt: string;
    en: string;
  };
  content: {
    pt: string;
    en: string;
  };
  articleUrl?: string;
  category: {
    pt: string;
    en: string;
  };
  tags: {
    pt: string[];
    en: string[];
  };
  featured?: boolean;
}

const articles: ArticleData[] = [
  {
    id: '1',
    title: {
      pt: "Inovício: Como evitar o vício em inovação no mundo jurídico",
      en: "Innovation Addiction: How to avoid innovation addiction in the legal world"
    },
    date: "24/02/2023",
    author: "Dr. Pedro DeRegina",
    description: {
      pt: "O mundo jurídico tem passado por transformações e inovações na forma de prestar serviços advocatícios.",
      en: "The legal world has undergone transformations and innovations in the way legal services are provided."
    },
    content: {
      pt: `
        <h2>Inovação no Direito: Equilibrando Tradição e Modernidade</h2>
        
        <p>O mundo jurídico tem passado por transformações significativas na forma de prestar serviços advocatícios. A digitalização dos processos, o uso de inteligência artificial e as novas ferramentas tecnológicas têm revolucionado a advocacia.</p>
        
        <h3>Os Desafios da Inovação</h3>
        <p>Embora a inovação seja fundamental para a evolução da advocacia, é importante evitar o que chamamos de "inovício" - o vício em inovação sem propósito claro. Muitos escritórios adotam tecnologias apenas por serem novidades, sem avaliar se realmente agregam valor aos clientes.</p>
        
        <h3>Estratégias para Inovação Efetiva</h3>
        <ul>
          <li>Análise criteriosa das necessidades dos clientes</li>
          <li>Implementação gradual de novas tecnologias</li>
          <li>Treinamento adequado da equipe</li>
          <li>Mensuração de resultados e ROI</li>
        </ul>
        
        <h3>O Futuro da Advocacia</h3>
        <p>A advocacia do futuro será aquela que conseguir equilibrar a tradição jurídica com as inovações tecnológicas, sempre priorizando a qualidade do serviço prestado ao cliente.</p>
      `,
      en: `
        <h2>Innovation in Law: Balancing Tradition and Modernity</h2>
        
        <p>The legal world has undergone significant transformations in the way legal services are provided. Process digitization, the use of artificial intelligence, and new technological tools have revolutionized the practice of law.</p>
        
        <h3>Innovation Challenges</h3>
        <p>While innovation is fundamental to the evolution of legal practice, it's important to avoid what we call "innovation addiction" - the addiction to innovation without clear purpose. Many firms adopt technologies just because they are new, without evaluating whether they truly add value to clients.</p>
        
        <h3>Strategies for Effective Innovation</h3>
        <ul>
          <li>Careful analysis of client needs</li>
          <li>Gradual implementation of new technologies</li>
          <li>Adequate team training</li>
          <li>Measurement of results and ROI</li>
        </ul>
        
        <h3>The Future of Legal Practice</h3>
        <p>The legal practice of the future will be one that manages to balance legal tradition with technological innovations, always prioritizing the quality of service provided to the client.</p>
      `
    },
    category: {
      pt: "Inovação",
      en: "Innovation"
    },
    tags: {
      pt: ["Tecnologia", "Inovação", "Advocacia"],
      en: ["Technology", "Innovation", "Legal Practice"]
    },
    featured: true,
    articleUrl: "https://www.jota.info/opiniao-e-analise/artigos/inovicio-como-evitar-o-vicio-em-inovacao-no-mundo-juridico/"
  },
  {
    id: '2',
    title: {
      pt: "Os advogados e escritórios mais admirados do Brasil",
      en: "Brazil's Most Admired Lawyers and Law Firms"
    },
    date: "16/02/2023",
    author: "Martins Regina Advocacia",
    description: {
      pt: "O Martins Regina Advocacia e Dr. Pedro DeRegina estão entre os escritórios e advogados mais admirados do Brasil.",
      en: "Martins Regina Law Firm and Dr. Pedro DeRegina are among Brazil's most admired law firms and lawyers."
    },
    content: {
      pt: `
        <h2>Reconhecimento Nacional na Advocacia</h2>
        
        <p>O Martins Regina Advocacia e Dr. Pedro DeRegina foram reconhecidos entre os escritórios e advogados mais admirados do Brasil, conforme pesquisa realizada pela revista Análise Advocacia.</p>
        
        <h3>Critérios de Avaliação</h3>
        <p>A pesquisa avaliou diversos critérios, incluindo:</p>
        <ul>
          <li>Qualidade técnica dos serviços</li>
          <li>Inovação em práticas jurídicas</li>
          <li>Relacionamento com clientes</li>
          <li>Responsabilidade social</li>
          <li>Gestão empresarial</li>
        </ul>
        
        <h3>Compromisso com a Excelência</h3>
        <p>Este reconhecimento reflete nosso compromisso contínuo com a excelência na prestação de serviços jurídicos, especialmente nas áreas de Planejamento Patrimonial, Familiar e Sucessório.</p>
        
        <h3>Agradecimentos</h3>
        <p>Agradecemos a todos os clientes e parceiros que tornaram este reconhecimento possível. Continuaremos trabalhando para manter os mais altos padrões de qualidade e inovação.</p>
      `,
      en: `
        <h2>National Recognition in Legal Practice</h2>
        
        <p>Martins Regina Law Firm and Dr. Pedro DeRegina were recognized among Brazil's most admired law firms and lawyers, according to a survey conducted by Análise Advocacia magazine.</p>
        
        <h3>Evaluation Criteria</h3>
        <p>The survey evaluated several criteria, including:</p>
        <ul>
          <li>Technical quality of services</li>
          <li>Innovation in legal practices</li>
          <li>Client relationships</li>
          <li>Social responsibility</li>
          <li>Business management</li>
        </ul>
        
        <h3>Commitment to Excellence</h3>
        <p>This recognition reflects our ongoing commitment to excellence in providing legal services, especially in the areas of Estate Planning, Family and Succession Law.</p>
        
        <h3>Acknowledgments</h3>
        <p>We thank all clients and partners who made this recognition possible. We will continue working to maintain the highest standards of quality and innovation.</p>
      `
    },
    category: {
      pt: "Reconhecimento",
      en: "Recognition"
    },
    tags: {
      pt: ["Prêmios", "Reconhecimento", "Advocacia"],
      en: ["Awards", "Recognition", "Legal Practice"]
    },
    featured: true,
    articleUrl: "https://escritoriodeadvocaciarj.com.br/anuario-analise-advocacia/"
  },
  {
    id: '3',
    title: {
      pt: "Entrevista para a revista Quality Magazine",
      en: "Interview for Quality Magazine"
    },
    date: "01/11/2022",
    author: "Quality Magazine",
    description: {
      pt: "O Martins Regina Advocacia é um escritório especializado em Planejamento Patrimonial, Familiar e Sucessório.",
      en: "Martins Regina Law Firm is a law firm specialized in Estate Planning, Family and Succession Law."
    },
    content: {
      pt: `
        <h2>Especialização em Planejamento Patrimonial</h2>
        
        <p>Em entrevista exclusiva à Quality Magazine, Dr. Pedro DeRegina compartilha insights sobre a especialização do escritório em Planejamento Patrimonial, Familiar e Sucessório.</p>
        
        <h3>Nossa Especialização</h3>
        <p>O Martins Regina Advocacia se destaca por sua expertise em estruturas complexas de planejamento patrimonial, oferecendo soluções personalizadas para cada família e empresa.</p>
        
        <h3>Práticas ESG</h3>
        <p>Discutimos também sobre a importância das práticas ESG (Environmental, Social and Governance) no mundo jurídico e como implementamos esses princípios em nossa gestão.</p>
        
        <h3>Visão de Futuro</h3>
        <p>O futuro da advocacia passa pela especialização técnica aliada à responsabilidade social e ambiental. Nosso escritório está comprometido com essa visão de futuro.</p>
        
        <h3>Inovação e Tradição</h3>
        <p>Combinamos a tradição jurídica com as mais modernas ferramentas de gestão e atendimento, sempre priorizando a excelência no serviço prestado.</p>
      `,
      en: `
        <h2>Specialization in Estate Planning</h2>
        
        <p>In an exclusive interview with Quality Magazine, Dr. Pedro DeRegina shares insights about the firm's specialization in Estate Planning, Family and Succession Law.</p>
        
        <h3>Our Specialization</h3>
        <p>Martins Regina Law Firm stands out for its expertise in complex estate planning structures, offering personalized solutions for each family and company.</p>
        
        <h3>ESG Practices</h3>
        <p>We also discuss the importance of ESG (Environmental, Social and Governance) practices in the legal world and how we implement these principles in our management.</p>
        
        <h3>Vision for the Future</h3>
        <p>The future of legal practice involves technical specialization combined with social and environmental responsibility. Our firm is committed to this vision of the future.</p>
        
        <h3>Innovation and Tradition</h3>
        <p>We combine legal tradition with the most modern management and service tools, always prioritizing excellence in the service provided.</p>
      `
    },
    category: {
      pt: "Entrevista",
      en: "Interview"
    },
    tags: {
      pt: ["Entrevista", "Gestão", "ESG"],
      en: ["Interview", "Management", "ESG"]
    },
    articleUrl: "https://escritoriodeadvocaciarj.com.br/entrevista-advogado-dr-pedro-deregina/"
  },
  {
    id: '4',
    title: {
      pt: "Reuniões de condomínio agora podem ser realizadas pela internet",
      en: "Condominium meetings can now be held online"
    },
    date: "16/03/2022",
    author: "Dr. Pedro DeRegina",
    description: {
      pt: "Lei assegura os mesmos direitos de voz e voto que os condôminos teriam em reuniões presenciais.",
      en: "Law ensures the same rights of voice and vote that condominium owners would have in face-to-face meetings."
    },
    content: {
      pt: `
        <h2>Modernização das Reuniões Condominiais</h2>
        
        <p>A nova legislação que permite reuniões de condomínio pela internet representa um marco importante na modernização do direito imobiliário brasileiro.</p>
        
        <h3>Aspectos Legais</h3>
        <p>A lei assegura que os condôminos tenham os mesmos direitos de voz e voto nas reuniões virtuais que teriam nas presenciais, garantindo a legitimidade das decisões tomadas.</p>
        
        <h3>Vantagens das Reuniões Virtuais</h3>
        <ul>
          <li>Maior participação dos condôminos</li>
          <li>Redução de custos operacionais</li>
          <li>Flexibilidade de horários</li>
          <li>Registro digital das discussões</li>
          <li>Acessibilidade para pessoas com mobilidade reduzida</li>
        </ul>
        
        <h3>Requisitos Técnicos</h3>
        <p>Para que as reuniões virtuais sejam válidas, devem atender a requisitos específicos de identificação dos participantes, registro das votações e ata digital.</p>
        
        <h3>Impacto na Gestão Condominial</h3>
        <p>Esta mudança revoluciona a gestão condominial, tornando-a mais eficiente e democrática, especialmente em tempos de distanciamento social.</p>
      `,
      en: `
        <h2>Modernization of Condominium Meetings</h2>
        
        <p>The new legislation that allows condominium meetings via the internet represents an important milestone in the modernization of Brazilian real estate law.</p>
        
        <h3>Legal Aspects</h3>
        <p>The law ensures that condominium owners have the same rights of voice and vote in virtual meetings as they would have in face-to-face meetings, guaranteeing the legitimacy of decisions made.</p>
        
        <h3>Advantages of Virtual Meetings</h3>
        <ul>
          <li>Greater participation of condominium owners</li>
          <li>Reduction of operational costs</li>
          <li>Schedule flexibility</li>
          <li>Digital recording of discussions</li>
          <li>Accessibility for people with reduced mobility</li>
        </ul>
        
        <h3>Technical Requirements</h3>
        <p>For virtual meetings to be valid, they must meet specific requirements for participant identification, vote recording, and digital minutes.</p>
        
        <h3>Impact on Condominium Management</h3>
        <p>This change revolutionizes condominium management, making it more efficient and democratic, especially in times of social distancing.</p>
      `
    },
    category: {
      pt: "Legislação",
      en: "Legislation"
    },
    tags: {
      pt: ["Direito Imobiliário", "Condomínio", "Tecnologia"],
      en: ["Real Estate Law", "Condominium", "Technology"]
    },
    articleUrl: "https://www.tupi.fm/rio/reunioes-de-condominio-agora-podem-ser-realizadas-tambem-pela-internet/"
  },
  {
    id: '5',
    title: {
      pt: "Uma análise sobre as holdings e offshores",
      en: "An analysis of holdings and offshores"
    },
    date: "28/10/2020",
    author: "Flávia Helena Lelis Silveira",
    description: {
      pt: "A holding foi instituída no direito brasileiro pela Lei 6.404/76, explicando o conceito no planejamento patrimonial.",
      en: "The holding company was established in Brazilian law by Law 6.404/76, explaining the concept in estate planning."
    },
    content: {
      pt: `
        <h2>Holdings e Offshores: Instrumentos de Planejamento Patrimonial</h2>
        
        <p>A holding foi instituída no direito brasileiro pela Lei 6.404/76, tornando-se um dos principais instrumentos de planejamento patrimonial e sucessório.</p>
        
        <h3>Conceito de Holding</h3>
        <p>A holding é uma sociedade que tem como objeto social principal a participação em outras empresas, podendo ser utilizada para diversos fins no planejamento patrimonial familiar.</p>
        
        <h3>Tipos de Holdings</h3>
        <ul>
          <li><strong>Holding Pura:</strong> Apenas detém participações em outras empresas</li>
          <li><strong>Holding Mista:</strong> Além de participações, desenvolve atividade operacional</li>
          <li><strong>Holding de Controle:</strong> Controla outras empresas através de participações majoritárias</li>
          <li><strong>Holding Familiar:</strong> Focada na gestão do patrimônio familiar</li>
        </ul>
        
        <h3>Offshores: Conceito e Aplicação</h3>
        <p>As estruturas offshore são empresas constituídas em jurisdições com tributação favorável, utilizadas para otimização tributária e proteção patrimonial dentro da legalidade.</p>
        
        <h3>Vantagens do Planejamento</h3>
        <ul>
          <li>Otimização tributária</li>
          <li>Proteção patrimonial</li>
          <li>Facilitação da sucessão</li>
          <li>Profissionalização da gestão</li>
          <li>Blindagem patrimonial</li>
        </ul>
        
        <h3>Aspectos Legais e Compliance</h3>
        <p>É fundamental que todas as estruturas sejam criadas em conformidade com a legislação brasileira e internacional, respeitando as regras de transparência fiscal e compliance.</p>
      `,
      en: `
        <h2>Holdings and Offshores: Estate Planning Instruments</h2>
        
        <p>The holding company was established in Brazilian law by Law 6.404/76, becoming one of the main instruments of estate and succession planning.</p>
        
        <h3>Holding Company Concept</h3>
        <p>A holding company is a company whose main corporate purpose is to participate in other companies, and can be used for various purposes in family estate planning.</p>
        
        <h3>Types of Holdings</h3>
        <ul>
          <li><strong>Pure Holding:</strong> Only holds participations in other companies</li>
          <li><strong>Mixed Holding:</strong> In addition to participations, develops operational activity</li>
          <li><strong>Control Holding:</strong> Controls other companies through majority participations</li>
          <li><strong>Family Holding:</strong> Focused on family wealth management</li>
        </ul>
        
        <h3>Offshores: Concept and Application</h3>
        <p>Offshore structures are companies incorporated in jurisdictions with favorable taxation, used for tax optimization and asset protection within legality.</p>
        
        <h3>Planning Advantages</h3>
        <ul>
          <li>Tax optimization</li>
          <li>Asset protection</li>
          <li>Succession facilitation</li>
          <li>Management professionalization</li>
          <li>Asset shielding</li>
        </ul>
        
        <h3>Legal Aspects and Compliance</h3>
        <p>It is essential that all structures are created in accordance with Brazilian and international legislation, respecting tax transparency and compliance rules.</p>
      `
    },
    category: {
      pt: "Planejamento Patrimonial",
      en: "Estate Planning"
    },
    tags: {
      pt: ["Holdings", "Offshore", "Planejamento Patrimonial"],
      en: ["Holdings", "Offshore", "Estate Planning"]
    },
    articleUrl: "https://escritoriodeadvocaciarj.com.br/holdings-offshores/"
  }
];

export default function ArticlesSection() {
  const { currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extrai categorias únicas dos artigos
  const currentLang = currentLanguage === 'PT' ? 'pt' : 'en';
  const categories = ['Todas', ...Array.from(new Set(articles.map(article => article.category[currentLang])))];

  // Filtra artigos baseado apenas na categoria
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'Todas' || article.category[currentLang] === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory, currentLang]);

  const handleArticleClick = (article: ArticleData) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const handleVisitOriginal = () => {
    if (selectedArticle?.articleUrl) {
      window.open(selectedArticle.articleUrl, '_blank');
    }
  };

  const content = {
    pt: {
      title: "Conhecimento Jurídico",
      subtitle: "Insights e análises do mundo jurídico",
      allCategories: "Todas",
      readMore: "Ler artigo",
      noResults: "Nenhum artigo encontrado",
      noResultsDesc: "Tente ajustar os filtros ou explorar outras categorias.",
      featured: "Destaque",
      closeArticle: "Fechar",
      visitOriginal: "Visitar artigo original",
      publishedOn: "Publicado em",
      by: "por",
      category: "Categoria",
      tags: "Tags"
    },
    en: {
      title: "Legal Knowledge",
      subtitle: "Insights and analysis from the legal world", 
      allCategories: "All",
      readMore: "Read article",
      noResults: "No articles found",
      noResultsDesc: "Try adjusting filters or explore other categories.",
      featured: "Featured",
      closeArticle: "Close",
      visitOriginal: "Visit original article",
      publishedOn: "Published on",
      by: "by",
      category: "Category",
      tags: "Tags"
    }
  };

  const t = content[currentLanguage === 'PT' ? 'pt' : 'en'];

  return (
    <>
      <section id="artigos" className="py-20 bg-gradient-to-br from-mr-black to-mr-bordo relative overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Filtros de categoria */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-mr-bordo shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category === 'Todas' ? t.allCategories : category}
              </button>
            ))}
          </div>

          {/* Grid de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length === 0 ? (
              // Estado Vazio
              <div className="col-span-full text-center py-16">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.noResults}</h3>
                <p className="text-white/70">{t.noResultsDesc}</p>
              </div>
            ) : (
              filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  content={t}
                  onArticleClick={handleArticleClick}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal do Artigo */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className="max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedArticle?.title[currentLang]}
                </DialogTitle>
                
                {/* Metadados do artigo */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {t.publishedOn} {selectedArticle?.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {t.by} {selectedArticle?.author}
                  </span>
                </div>

                {/* Categoria e Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <Badge className="bg-mr-bordo/10 text-mr-bordo">
                    {t.category}: {selectedArticle?.category[currentLang]}
                  </Badge>
                  {selectedArticle?.tags[currentLang].map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleCloseModal}
                className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>

          {/* Conteúdo do artigo */}
          <div className="max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: selectedArticle?.content[currentLang] || '' }}
              className="article-content"
            />
          </div>

          {/* Botão para visitar artigo original */}
          {selectedArticle?.articleUrl && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-center">
                <button
                  onClick={handleVisitOriginal}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-mr-black to-mr-bordo text-white px-6 py-3 rounded-xl font-medium hover:from-mr-bordo hover:to-mr-gold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t.visitOriginal}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function ArticleCard({ 
  article, 
  content, 
  onArticleClick 
}: { 
  article: ArticleData; 
  content: any;
  onArticleClick: (article: ArticleData) => void;
}) {
  const { currentLanguage } = useLanguage();
  const currentLang = currentLanguage === 'PT' ? 'pt' : 'en';
  
  const handleClick = () => {
    onArticleClick(article);
  };

  return (
    <div className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer" onClick={handleClick}>
      {/* Badge de destaque */}
      {article.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-mr-bordo text-white transform rotate-12 shadow-lg">
            ⭐ {content.featured}
          </Badge>
        </div>
      )}

      <div className="p-6">
        {/* Categoria */}
        <Badge className="mb-4 bg-mr-bordo/10 text-mr-bordo">
          {article.category[currentLang]}
        </Badge>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-mr-bordo transition-colors duration-300">
          {article.title[currentLang]}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description[currentLang]}
        </p>

        {/* Metadados simplificados */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            📅 {article.date}
          </span>
          <span className="flex items-center gap-1">
            👤 {article.author}
          </span>
        </div>

        {/* Botão de leitura com gradiente */}
        <div className="flex justify-center pt-4 border-t border-gray-100">
          <div className="w-full h-1 bg-gradient-to-r from-mr-black via-mr-bordo to-mr-gold rounded-full mb-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <button className="w-full bg-gradient-to-r from-mr-black to-mr-bordo text-white py-2 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-mr-bordo hover:to-mr-gold transition-all duration-300">
            {content.readMore}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
