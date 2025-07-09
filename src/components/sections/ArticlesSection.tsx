'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Badge } from '../ui/badge';
import { Calendar, User, Filter, ChevronDown, ExternalLink } from 'lucide-react';

interface ArticleData {
  id: string;
  title: string;
  date: string;
  author: string;
  description: string;
  articleUrl?: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const articles: ArticleData[] = [
  {
    id: '1',
    title: "Inovício: Como evitar o vício em inovação no mundo jurídico",
    date: "24/02/2023",
    author: "Dr. Pedro DeRegina",
    description: "O mundo jurídico tem passado por transformações e inovações na forma de prestar serviços advocatícios.",
    category: "Inovação",
    tags: ["Tecnologia", "Inovação", "Advocacia"],
    featured: true,
    articleUrl: "https://www.jota.info/opiniao-e-analise/artigos/inovicio-como-evitar-o-vicio-em-inovacao-no-mundo-juridico/"
  },
  {
    id: '2',
    title: "Os advogados e escritórios mais admirados do Brasil",
    date: "16/02/2023",
    author: "Martins Regina Advocacia",
    description: "O Martins Regina Advocacia e Dr. Pedro DeRegina estão entre os escritórios e advogados mais admirados do Brasil.",
    category: "Reconhecimento",
    tags: ["Prêmios", "Reconhecimento", "Advocacia"],
    featured: true,
    articleUrl: "https://escritoriodeadvocaciarj.com.br/anuario-analise-advocacia/"
  },
  {
    id: '3',
    title: "Entrevista para a revista Quality Magazine",
    date: "01/11/2022",
    author: "Quality Magazine",
    description: "O Martins Regina Advocacia é um escritório especializado em Planejamento Patrimonial, Familiar e Sucessório.",
    category: "Entrevista",
    tags: ["Entrevista", "Gestão", "ESG"],
    articleUrl: "https://escritoriodeadvocaciarj.com.br/entrevista-advogado-dr-pedro-deregina/"
  },
  {
    id: '4',
    title: "Reuniões de condomínio agora podem ser realizadas pela internet",
    date: "16/03/2022",
    author: "Dr. Pedro DeRegina",
    description: "Lei assegura os mesmos direitos de voz e voto que os condôminos teriam em reuniões presenciais.",
    category: "Legislação",
    tags: ["Direito Imobiliário", "Condomínio", "Tecnologia"],
    articleUrl: "https://www.tupi.fm/rio/reunioes-de-condominio-agora-podem-ser-realizadas-tambem-pela-internet/"
  },
  {
    id: '5',
    title: "Uma análise sobre as holdings e offshores",
    date: "28/10/2020",
    author: "Flávia Helena Lelis Silveira",
    description: "A holding foi instituída no direito brasileiro pela Lei 6.404/76, explicando o conceito no planejamento patrimonial.",
    category: "Planejamento Patrimonial",
    tags: ["Holdings", "Offshore", "Planejamento Patrimonial"],
    articleUrl: "https://escritoriodeadvocaciarj.com.br/holdings-offshores/"
  }
];

export default function ArticlesSection() {
  const { currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  // Extrai categorias únicas dos artigos
  const categories = ['Todas', ...Array.from(new Set(articles.map(article => article.category)))];

  // Filtra artigos baseado apenas na categoria
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'Todas' || article.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  const content = {
    pt: {
      title: "Conhecimento Jurídico",
      subtitle: "Insights e análises do mundo jurídico",
      allCategories: "Todas",
      readMore: "Ler artigo",
      noResults: "Nenhum artigo encontrado",
      noResultsDesc: "Tente ajustar os filtros ou explorar outras categorias.",
    },
    en: {
      title: "Legal Knowledge",
      subtitle: "Insights and analysis from the legal world", 
      allCategories: "All",
      readMore: "Read article",
      noResults: "No articles found",
      noResultsDesc: "Try adjusting filters or explore other categories.",
    }
  };

  const t = content[currentLanguage === 'PT' ? 'pt' : 'en'];

  return (
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
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, content }: { article: ArticleData; content: any }) {
  const handleClick = () => {
    if (article.articleUrl) {
      window.open(article.articleUrl, '_blank');
    }
  };

  return (
    <div className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer" onClick={handleClick}>
      {/* Badge de destaque */}
      {article.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-mr-bordo text-white transform rotate-12 shadow-lg">
            ⭐ Destaque
          </Badge>
        </div>
      )}

      <div className="p-6">
        {/* Categoria */}
        <Badge className="mb-4 bg-mr-bordo/10 text-mr-bordo">
          {article.category}
        </Badge>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-mr-bordo transition-colors duration-300">
          {article.title}
        </h3>

        {/* Descrição */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description}
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
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
