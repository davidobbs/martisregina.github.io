import '@/css/globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import ChatAssistant from '@/components/ui/ChatAssistant';
import Script from 'next/script';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

// Metadata completa usando Next.js Metadata API
export const metadata: Metadata = {
  title: {
    default: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos',
    template: '%s | Martins Regina Advocacia'
  },
  description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994. Atendimento em Rio de Janeiro, São Paulo, Campinas, Joinville e Porto.',
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://martinsregina.com.br'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos',
    description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
    url: 'https://martinsregina.com.br',
    siteName: 'Martins Regina Advocacia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Martins Regina Advocacia - Escritório de Advocacia Especializado',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos',
    description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Schema.org Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Martins Regina Advocacia',
  description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
  url: 'https://martinsregina.com.br',
  logo: 'https://martinsregina.com.br/logo%20martins%20regina.png',
  image: 'https://martinsregina.com.br/images/og-image.jpg',
  foundingDate: '1994',
  sameAs: [
    'https://www.linkedin.com/company/martins-regina-advocacia',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Rio de Janeiro',
      addressRegion: 'RJ',
      postalCode: '22793-081',
      streetAddress: 'Av. das Américas 8.585, sala 339, Shopping Vogue Square, Setor Offices, Barra da Tijuca',
      addressCountry: 'BR'
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01452-921',
      streetAddress: 'Av. Brigadeiro Faria Lima 1.461, 4º andar, Jardim Paulistano',
      addressCountry: 'BR'
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Campinas',
      addressRegion: 'SP',
      postalCode: '13105-822',
      streetAddress: 'Rua Avelino Silveira Franco 149, sala 352, Condomínio L\'Office, Ville Sainte Hélène',
      addressCountry: 'BR'
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Joinville',
      addressRegion: 'SC',
      postalCode: '89201-740',
      streetAddress: 'Rua Expedicionário Holz 550, sala 1.301, América',
      addressCountry: 'BR'
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Porto',
      postalCode: '4100-359',
      streetAddress: 'Praça de Mouzinho de Albuquerque 113, Shopping Brasília, Loja 8B, 1ª Cave',
      addressCountry: 'PT'
    }
  ],
  telephone: [
    '+55 21 2532-7311',
    '+55 11 5504-1962',
    '+55 19 9.9186-6133',
    '+55 21 9.9522-7018',
    '+351 913 049 169'
  ],
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
  serviceType: [
    'Planejamento Patrimonial',
    'Direito Empresarial',
    'Contratos',
    'Direito Médico',
    'Direito Imobiliário',
    'Direito de Família e Sucessões'
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'Brasil'
    },
    {
      '@type': 'Country',
      name: 'Portugal'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Jurídicos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Planejamento Patrimonial',
          description: 'Consultoria especializada em estruturação e proteção patrimonial'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Direito Empresarial',
          description: 'Assessoria jurídica completa para empresas'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contratos',
          description: 'Elaboração e revisão de contratos empresariais'
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} overflow-x-hidden`}>
      <head>
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/logo header.png" 
          as="image" 
          type="image/png"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="/logo martins regina.png" 
          as="image" 
          type="image/png"
        />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="overflow-x-hidden">
        <LanguageProvider>
          {children}
          <ChatAssistant />
        </LanguageProvider>
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
