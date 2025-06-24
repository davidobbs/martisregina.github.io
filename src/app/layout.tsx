import '@/css/globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import SEOOptimization from '@/components/SEOOptimization';
import { LanguageProvider } from '@/context/LanguageContext';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos',
  description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
  keywords: 'advocacia, direito empresarial, planejamento patrimonial, contratos, direito médico, direito imobiliário, direito de família, sucessões',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} overflow-x-hidden`}>
      <head>
        <SEOOptimization />
        {/* Preload critical images */}
        <link 
          rel="preload" 
          href="/logo header.png" 
          as="image" 
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body className="overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
