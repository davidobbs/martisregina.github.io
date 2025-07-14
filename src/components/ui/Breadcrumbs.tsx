'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateStructuredData } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Sempre incluir Home como primeiro item
  const allItems = [
    { name: 'Home', url: '/' },
    ...items
  ];

  const structuredData = generateStructuredData('breadcrumb', { items: allItems });

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Navegação estrutural" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <ol className="flex items-center space-x-2">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight 
                  className="h-4 w-4 text-gray-400 mx-2" 
                  aria-hidden="true"
                />
              )}
              
              {index === allItems.length - 1 ? (
                // Último item - não é link
                <span 
                  className="text-gray-600 font-medium"
                  aria-current="page"
                >
                  {index === 0 && <Home className="h-4 w-4 inline mr-1" aria-hidden="true" />}
                  {item.name}
                </span>
              ) : (
                // Itens anteriores - são links
                <Link
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  title={`Ir para ${item.name}`}
                >
                  {index === 0 && <Home className="h-4 w-4 inline mr-1" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
} 