'use client';

import { Card, CardContent } from "../ui/card";
import { useLanguage } from '@/context/LanguageContext';

export default function RecognitionSection() {
  const { currentLanguage } = useLanguage();
  return (
    <section id="reconhecimentos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative inline-block">
            {currentLanguage === 'PT' ? 'Reconhecimentos' : 'Recognitions'}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {currentLanguage === 'PT'
              ? 'Nosso compromisso com a excelência é reconhecido por clientes e pelo mercado jurídico.'
              : 'Our commitment to excellence is recognized by clients and the legal market.'}
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 gap-4 md:gap-8 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal px-1 md:grid md:grid-cols-2 md:overflow-visible md:snap-none">
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <RecognitionCard 
                title="Anuário Análise Advocacia 2022" 
                description={currentLanguage === 'PT'
                  ? 'O Martins Regina Advocacia e o Dr. Pedro DeRegina foram reconhecidos entre os mais admirados do Brasil, segundo pesquisa com executivos que contratam serviços jurídicos.'
                  : 'Martins Regina Advocacia and Dr. Pedro DeRegina were recognized among the most admired in Brazil, according to a survey of executives hiring legal services.'}
                date="16/02/2023"
              />
            </div>
            
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <RecognitionCard 
                title={currentLanguage === 'PT' ? 'Entrevista Quality Magazine' : 'Interview with Quality Magazine'} 
                description={currentLanguage === 'PT'
                  ? 'Dr. Pedro DeRegina foi entrevistado pela revista Quality Magazine, destacando a reestruturação interna do escritório em 2017 e as iniciativas de inovação.'
                  : "Dr. Pedro DeRegina was interviewed by Quality Magazine, highlighting the firm's internal restructuring in 2017 and its innovation initiatives."}
                date="01/11/2022"
              />
            </div>
          </div>
          
          {/* Indicador de scroll para mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full scroll-indicator">
              ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionCard({ title, description, date }: { title: string; description: string; date: string }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-serif font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="text-sm text-muted-foreground mt-4">Publicado em {date}</div>
      </CardContent>
    </Card>
  );
}
