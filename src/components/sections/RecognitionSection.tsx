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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RecognitionCard 
            title="Anuário Análise Advocacia 2022" 
            description={currentLanguage === 'PT'
              ? 'O Martins Regina Advocacia e o Dr. Pedro DeRegina foram reconhecidos entre os mais admirados do Brasil, segundo pesquisa com executivos que contratam serviços jurídicos.'
              : 'Martins Regina Advocacia and Dr. Pedro DeRegina were recognized among the most admired in Brazil, according to a survey of executives hiring legal services.'}
            date="16/02/2023"
          />
          
          <RecognitionCard 
            title={currentLanguage === 'PT' ? 'Entrevista Quality Magazine' : 'Interview with Quality Magazine'} 
            description={currentLanguage === 'PT'
              ? 'Dr. Pedro DeRegina foi entrevistado pela revista Quality Magazine, destacando a reestruturação interna do escritório em 2017 e as iniciativas de inovação.'
              : "Dr. Pedro DeRegina was interviewed by Quality Magazine, highlighting the firm's internal restructuring in 2017 and its innovation initiatives."}
            date="01/11/2022"
          />
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
