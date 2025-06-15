import '@/css/globals.css';
import { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import SEOOptimization from '@/components/SEOOptimization';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Martins Regina Advocacia | Planejamento Patrimonial, Negócios e Contratos',
  description: 'Escritório de advocacia especializado em Planejamento Patrimonial, Direito Empresarial e Contratos. Presente no Brasil e Portugal desde 1994.',
  keywords: 'advocacia, direito empresarial, planejamento patrimonial, contratos, direito médico, direito imobiliário, direito de família, sucessões',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <SEOOptimization />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
