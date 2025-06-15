'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function SEOOptimization() {
  useEffect(() => {
    // Adicionar dados estruturados para organização jurídica
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      'name': 'Martins Regina Advocacia',
      'description': 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
      'url': 'https://martinsregina.com.br',
      'logo': 'https://martinsregina.com.br/images/logo.png',
      'sameAs': [
        'https://www.linkedin.com/company/martins-regina-advocacia',
      ],
      'address': [
        {
          '@type': 'PostalAddress',
          'addressLocality': 'Rio de Janeiro',
          'addressRegion': 'RJ',
          'postalCode': '22793-081',
          'streetAddress': 'Av. das Américas 8.585, sala 339, Shopping Vogue Square, Setor Offices, Barra da Tijuca',
          'addressCountry': 'BR'
        },
        {
          '@type': 'PostalAddress',
          'addressLocality': 'São Paulo',
          'addressRegion': 'SP',
          'postalCode': '01452-921',
          'streetAddress': 'Av. Brigadeiro Faria Lima 1.461, 4º andar, Jardim Paulistano',
          'addressCountry': 'BR'
        },
        {
          '@type': 'PostalAddress',
          'addressLocality': 'Campinas',
          'addressRegion': 'SP',
          'postalCode': '13105-822',
          'streetAddress': 'Rua Avelino Silveira Franco 149, sala 352, Condomínio L\'Office, Ville Sainte Hélène',
          'addressCountry': 'BR'
        },
        {
          '@type': 'PostalAddress',
          'addressLocality': 'Joinville',
          'addressRegion': 'SC',
          'postalCode': '89201-740',
          'streetAddress': 'Rua Expedicionário Holz 550, sala 1.301, América',
          'addressCountry': 'BR'
        },
        {
          '@type': 'PostalAddress',
          'addressLocality': 'Porto',
          'postalCode': '4100-359',
          'streetAddress': 'Praça de Mouzinho de Albuquerque 113, Shopping Brasília, Loja 8B, 1ª Cave',
          'addressCountry': 'PT'
        }
      ],
      'telephone': [
        '+55 21 2532-7311',
        '+55 11 5504-1962',
        '+55 19 9.9186-6133',
        '+55 21 9.9522-7018',
        '+351 913 049 169'
      ],
      'openingHours': 'Mo,Tu,We,Th,Fr 09:00-18:00',
      'serviceType': [
        'Planejamento Patrimonial',
        'Direito Empresarial',
        'Contratos',
        'Direito Médico',
        'Direito Imobiliário',
        'Direito de Família e Sucessões'
      ],
      'areaServed': [
        {
          '@type': 'Country',
          'name': 'Brasil'
        },
        {
          '@type': 'Country',
          'name': 'Portugal'
        }
      ]
    });
    document.head.appendChild(script);

    // Adicionar meta tags para compartilhamento em redes sociais
    const metaTags = [
      { property: 'og:title', content: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos' },
      { property: 'og:description', content: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.' },
      { property: 'og:image', content: 'https://martinsregina.com.br/images/og-image.jpg' },
      { property: 'og:url', content: 'https://martinsregina.com.br' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Martins Regina Advocacia' },
      { property: 'og:locale', content: 'pt_BR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos' },
      { name: 'twitter:description', content: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.' },
      { name: 'twitter:image', content: 'https://martinsregina.com.br/images/twitter-image.jpg' },
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      const key = Object.keys(tag)[0];
      const value = Object.values(tag)[0];
      meta.setAttribute(key, value as string);
      document.head.appendChild(meta);
    });

    return () => {
      // Cleanup
      document.head.removeChild(script);
      metaTags.forEach(() => {
        const meta = document.querySelector(`meta[property="${Object.keys(metaTags[0])[0]}"]`);
        if (meta) document.head.removeChild(meta);
      });
    };
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://martinsregina.com.br" />
      
      {/* Preconnect to external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="pt-br" href="https://martinsregina.com.br" />
      <link rel="alternate" hrefLang="en" href="https://martinsregina.com.br/en" />
    </>
  );
}
