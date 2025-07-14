'use client';

import { useEffect } from 'react';
import { generateStructuredData } from '@/lib/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  twitterImage,
  structuredData,
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Atualizar title dinamicamente
    if (title) {
      document.title = title;
    }

    // Atualizar ou criar meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords?.join(', ') },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: twitterImage },
      { name: 'robots', content: `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}` },
    ];

    metaTags.forEach(tag => {
      if (tag.content) {
        const key = tag.name || tag.property;
        const attribute = tag.name ? 'name' : 'property';
        
        if (key) {
          let meta = document.querySelector(`meta[${attribute}="${key}"]`);
          
          if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, key);
            document.head.appendChild(meta);
          }
          
          meta.setAttribute('content', tag.content);
        }
      }
    });

    // Atualizar canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', canonical);
    }

    // Adicionar structured data se fornecido
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, keywords, canonical, ogImage, twitterImage, structuredData, noindex, nofollow]);

  return null;
}

// Hook para facilitar o uso
export function useSEO(seoData: SEOHeadProps) {
  useEffect(() => {
    // Gerar structured data automaticamente se não fornecido
    if (!seoData.structuredData && seoData.title) {
      const autoStructuredData = generateStructuredData('organization');
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(autoStructuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [seoData]);
} 