import { Metadata } from 'next'

export const siteConfig = {
  name: 'Martins Regina Advocacia',
  description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
  url: 'https://martinsregina.com.br',
  ogImage: '/images/og-image.jpg',
  twitterImage: '/images/twitter-image.jpg',
  keywords: [
    'advocacia',
    'direito empresarial',
    'planejamento patrimonial',
    'contratos',
    'direito médico',
    'direito imobiliário',
    'direito de família',
    'sucessões',
    'escritório advocacia',
    'advogado rio de janeiro',
    'advogado são paulo',
    'advogado portugal',
    'consultoria jurídica',
    'assessoria legal'
  ],
  authors: [{ name: 'Martins Regina Advocacia' }],
  creator: 'Martins Regina Advocacia',
  publisher: 'Martins Regina Advocacia',
  social: {
    linkedin: 'https://www.linkedin.com/company/martins-regina-advocacia',
  },
  offices: [
    {
      city: 'Rio de Janeiro',
      state: 'RJ',
      country: 'Brasil',
      address: 'Av. das Américas 8.585, sala 339, Shopping Vogue Square, Setor Offices, Barra da Tijuca',
      postalCode: '22793-081',
      phone: '+55 21 2532-7311',
    },
    {
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
      address: 'Av. Brigadeiro Faria Lima 1.461, 4º andar, Jardim Paulistano',
      postalCode: '01452-921',
      phone: '+55 11 5504-1962',
    },
    {
      city: 'Campinas',
      state: 'SP',
      country: 'Brasil',
      address: 'Rua Avelino Silveira Franco 149, sala 352, Condomínio L\'Office, Ville Sainte Hélène',
      postalCode: '13105-822',
      phone: '+55 19 9.9186-6133',
    },
    {
      city: 'Joinville',
      state: 'SC',
      country: 'Brasil',
      address: 'Rua Expedicionário Holz 550, sala 1.301, América',
      postalCode: '89201-740',
      phone: '+55 21 9.9522-7018',
    },
    {
      city: 'Porto',
      country: 'Portugal',
      address: 'Praça de Mouzinho de Albuquerque 113, Shopping Brasília, Loja 8B, 1ª Cave',
      postalCode: '4100-359',
      phone: '+351 913 049 169',
    },
  ],
  practiceAreas: [
    {
      name: 'Planejamento Patrimonial',
      slug: 'planejamento-patrimonial',
      description: 'Consultoria especializada em estruturação e proteção patrimonial',
    },
    {
      name: 'Direito Empresarial',
      slug: 'direito-empresarial',
      description: 'Assessoria jurídica completa para empresas',
    },
    {
      name: 'Contratos',
      slug: 'contratos',
      description: 'Elaboração e revisão de contratos empresariais',
    },
    {
      name: 'Direito Médico',
      slug: 'direito-medico',
      description: 'Consultoria jurídica especializada para profissionais da saúde',
    },
    {
      name: 'Direito Imobiliário',
      slug: 'direito-imobiliario',
      description: 'Assessoria em transações e investimentos imobiliários',
    },
    {
      name: 'Direito de Família e Sucessões',
      slug: 'direito-familia-sucessoes',
      description: 'Consultoria em questões familiares e sucessórias',
    },
  ],
}

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogImage?: string
  twitterImage?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

export function generateSEO({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  canonical,
  noindex = false,
  nofollow = false,
  ogImage = siteConfig.ogImage,
  twitterImage = siteConfig.twitterImage,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
}: SEOProps = {}): Metadata {
  const seoTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Planejamento Patrimonial, Negócios e Contratos`

  const seoKeywords = tags ? [...keywords, ...tags] : keywords

  return {
    title: seoTitle,
    description,
    keywords: seoKeywords,
    authors: authors 
      ? authors.map(author => ({ name: author }))
      : siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || '/',
      languages: {
        'pt-BR': '/',
        'en': '/en',
      },
    },
    openGraph: {
      title: seoTitle,
      description,
      url: canonical ? `${siteConfig.url}${canonical}` : siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${description}`,
        },
      ],
      locale: 'pt_BR',
      type,
      publishedTime,
      modifiedTime,
      authors: authors,
      section,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description,
      images: [twitterImage],
      creator: '@martinsregina',
      site: '@martinsregina',
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'Legal Services',
  }
}

export function generateStructuredData(type: 'organization' | 'article' | 'breadcrumb' | 'faq', data?: any) {
  const baseUrl = siteConfig.url

  switch (type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: siteConfig.name,
        description: siteConfig.description,
        url: baseUrl,
        logo: `${baseUrl}/logo martins regina.png`,
        image: `${baseUrl}${siteConfig.ogImage}`,
        foundingDate: '1994',
        sameAs: [siteConfig.social.linkedin],
        address: siteConfig.offices.map(office => ({
          '@type': 'PostalAddress',
          addressLocality: office.city,
          addressRegion: office.state,
          postalCode: office.postalCode,
          streetAddress: office.address,
          addressCountry: office.country === 'Brasil' ? 'BR' : 'PT',
        })),
        telephone: siteConfig.offices.map(office => office.phone),
        openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
        serviceType: siteConfig.practiceAreas.map(area => area.name),
        areaServed: [
          { '@type': 'Country', name: 'Brasil' },
          { '@type': 'Country', name: 'Portugal' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços Jurídicos',
          itemListElement: siteConfig.practiceAreas.map(area => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: area.name,
              description: area.description,
            },
          })),
        },
      }

    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        author: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo martins regina.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}${data.url}`,
        },
      }

    case 'breadcrumb':
      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      }

    case 'faq':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }

    default:
      return null
  }
} 