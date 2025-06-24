'use client';

import { Card, CardContent } from "../ui/card";
import { useLanguage } from '@/context/LanguageContext';

export default function LocationsSection() {
  const { currentLanguage } = useLanguage();
  return (
    <section id="presenca" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative inline-block">
            {currentLanguage === 'PT' ? 'Onde Estamos' : 'Where We Are'}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {currentLanguage === 'PT'
              ? 'Presente em várias cidades do Brasil e em Portugal, além de parcerias em 8 países.'
              : 'Present in several cities in Brazil and Portugal, with partnerships in 8 countries.'}
          </p>
        </div>
        
        <div className="relative mb-12">
          <div className="flex overflow-x-auto pb-4 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory scroll-smooth-horizontal px-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible md:snap-none">
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Rio de Janeiro/RJ"
                address="Av. das Américas 8.585, sala 339
Shopping Vogue Square, Setor Offices
Barra da Tijuca, CEP 22793-081
Tel. ‪+55 21 2532-7311‬
WhatsApp ‪+55 21 98777-1186‬

Av. Nilo Peçanha, 50 – Sala 812
Centro – Rio de Janeiro – RJ
CEP 20020-906"
              />
            </div>
            
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Campinas/SP"
                address="Rua Avelino Silveira Franco 149, sala 352
Condomínio L'Office, Ville Sainte Hélène, CEP 13105-822
WhatsApp ‪+ 55 19 9.9186-6133‬"
              />
            </div>
            
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="São Paulo/SP"
                address="CEMG - Centro Empresarial Mario Garnero
Av. Brigadeiro Faria Lima 1.461, 4º andar, Jardim Paulistano, CEP 01452-921
Tel. ‪+55 11 5504-1962‬"
              />
            </div>
            
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Florianópolis/SC"
                address="Ed. Helbor Dual
Rua Expedicionário Holz 550, sala 1.301, América, CEP 89201-740"
              />
            </div>
            
            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Porto/Portugal"
                address="Shopping Brasília, Loja 8B
1ª Cave
Praça de Mouzinho de Albuquerque 113, CP 4100-359
WhatsApp ‪+351 913 049 169"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Orlando/FL"
                address="Estados Unidos
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Saint Paul/MN"
                address="Estados Unidos  
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Zurique"
                address="Suíça
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Buenos Aires"
                address="Argentina
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Xangai"
                address="China
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Sydney"
                address="Austrália
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Istambul"
                address="Turquia
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Lisboa"
                address="Portugal
Escritório de representação"
              />
            </div>

            <div className="flex-none w-72 sm:w-80 md:w-auto snap-start">
              <LocationCard 
                city="Montevidéu"
                address="Uruguai
Escritório de representação"
              />
            </div>
          </div>
          
          {/* Indicador de scroll para mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              ← {currentLanguage === 'PT' ? 'Deslize para ver mais' : 'Swipe to see more'} →
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden h-96 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-medium mb-2">
              {currentLanguage === 'PT' ? 'Mapa de Presença Global' : 'Global Presence Map'}
            </p>
            <p className="italic">
              {currentLanguage === 'PT' ? 'Mapa interativo será carregado aqui' : 'Interactive map will be loaded here'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationCard({ city, address }: { city: string; address: string }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold text-primary mb-3">{city}</h3>
        <p className="text-muted-foreground whitespace-pre-line text-sm">{address}</p>
      </CardContent>
    </Card>
  );
}
