import { Metadata } from 'next';
import { generateSEO, generateStructuredData } from '@/lib/seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Metadata específica da página usando a função centralizada
export const metadata: Metadata = generateSEO({
  title: 'Exemplo de SEO Otimizado',
  description: 'Esta é uma página de exemplo mostrando como implementar SEO otimizado com Next.js 13+ App Router.',
  keywords: ['exemplo', 'seo', 'next.js', 'otimização'],
  canonical: '/exemplo-seo',
  type: 'article',
  publishedTime: '2024-01-01T00:00:00.000Z',
  modifiedTime: '2024-01-01T00:00:00.000Z',
  authors: ['Martins Regina Advocacia'],
  section: 'Tecnologia',
  tags: ['tutorial', 'seo', 'desenvolvimento'],
});

// Dados estruturados específicos da página
const pageStructuredData = generateStructuredData('article', {
  title: 'Exemplo de SEO Otimizado',
  description: 'Esta é uma página de exemplo mostrando como implementar SEO otimizado com Next.js 13+ App Router.',
  image: '/images/seo-example.jpg',
  publishedTime: '2024-01-01T00:00:00.000Z',
  modifiedTime: '2024-01-01T00:00:00.000Z',
  url: '/exemplo-seo',
});

export default function ExemploSEOPage() {
  const breadcrumbItems = [
    { name: 'Exemplos', url: '/exemplos' },
    { name: 'SEO Otimizado', url: '/exemplo-seo' },
  ];

  return (
    <>
      {/* Structured Data específico da página */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumbs para navegação e SEO */}
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          
          {/* Conteúdo principal */}
          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Exemplo de SEO Otimizado
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Esta é uma página de exemplo mostrando como implementar SEO otimizado 
                com Next.js 13+ App Router e todas as melhores práticas.
              </p>
            </header>
            
            <div className="prose prose-lg max-w-none">
              <h2>Recursos Implementados</h2>
              <ul>
                <li><strong>Metadata API do Next.js:</strong> Configuração completa de SEO server-side</li>
                <li><strong>Structured Data:</strong> Schema.org para melhor compreensão pelos motores de busca</li>
                <li><strong>Open Graph:</strong> Otimização para compartilhamento em redes sociais</li>
                <li><strong>Twitter Cards:</strong> Visualização otimizada no Twitter</li>
                <li><strong>Sitemap Automático:</strong> Geração dinâmica de sitemap</li>
                <li><strong>Robots.txt:</strong> Configuração otimizada para crawlers</li>
                <li><strong>Breadcrumbs:</strong> Navegação estruturada com Schema.org</li>
                <li><strong>Performance:</strong> Otimizações de carregamento e cache</li>
              </ul>
              
              <h2>Benefícios para SEO</h2>
              <p>
                A implementação usando o Next.js App Router oferece várias vantagens:
              </p>
              <ul>
                <li>Renderização server-side para melhor indexação</li>
                <li>Metadata dinâmica e específica por página</li>
                <li>Structured data automático</li>
                <li>Otimizações de performance integradas</li>
                <li>Configuração centralizada e reutilizável</li>
              </ul>
              
              <h2>Como Usar</h2>
              <p>
                Para implementar SEO em uma nova página:
              </p>
              <ol>
                <li>Importe as funções <code>generateSEO</code> e <code>generateStructuredData</code></li>
                <li>Configure a metadata específica da página</li>
                <li>Adicione breadcrumbs se necessário</li>
                <li>Inclua structured data relevante</li>
                <li>Use tags HTML semânticas (h1, h2, article, etc.)</li>
              </ol>
            </div>
          </article>
        </div>
      </div>
    </>
  );
} 