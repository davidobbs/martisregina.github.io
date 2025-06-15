import Header from '@/components/layout/Header';
import EnhancedCredibilityBar from '@/components/ui/EnhancedCredibilityBar';
import PremiumHeroSection from '@/components/sections/PremiumHeroSection';
import AboutSection from '@/components/sections/AboutSection';
import NewPracticeAreasSection from '@/components/sections/NewPracticeAreasSection';
import TimelineSection from '@/components/sections/TimelineSection';
import PartnersSection from '@/components/sections/PartnersSection';
import AwardsSection from '@/components/sections/AwardsSection';
import AwardsCarouselSection from '@/components/sections/AwardsCarouselSection';
import RecognitionSection from '@/components/sections/RecognitionSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import GlobalPresenceSection from '@/components/sections/GlobalPresenceSection';
import ContactSection from '@/components/sections/ContactSection';
import Newsletter from '@/components/ui/Newsletter';
import QRCodeSocial from '@/components/ui/QRCodeSocial';
import ChatAssistant from '@/components/ui/ChatAssistant';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Enhanced Credibility Bar - Dynamic scroll with achievements */}
      <EnhancedCredibilityBar 
        speed="normal" 
        pauseOnHover={true} 
        showControls={false}
        variant="gradient"
      />
      
      <Header />
      
      {/* Premium Hero Section - Primeiro Impacto Premium */}
      <PremiumHeroSection />
      
      {/* About Section with Company History */}
      <AboutSection />
      
      {/* Practice Areas - Divided PF/PJ as specified */}
      <NewPracticeAreasSection />
      
      {/* Timeline de Marcos Históricos */}
      <TimelineSection />
      
      {/* New Partners Section */}
      <PartnersSection />
      
      {/* Enhanced Global Presence with Interactive Map */}
      <GlobalPresenceSection />
      
      {/* Seção de Prêmios Original (mantida para compatibilidade) */}
      <AwardsSection />
      
      {/* Carrossel de Prêmios e Certificações */}
      <AwardsCarouselSection />
      
      {/* Recognition Section */}
      <RecognitionSection />
      
      {/* Articles/Blog Section */}
      <ArticlesSection />
      
      {/* Enhanced Newsletter Section */}
      <section className="py-20 bg-mr-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Faça Parte da Comunidade MRA
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Receba insights jurídicos exclusivos, análises de mercado e novidades do escritório diretamente em seu e-mail.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/70 text-sm">
              <span>✓ Conteúdo Exclusivo</span>
              <span>•</span>
              <span>✓ Sem Spam</span>
              <span>•</span>
              <span>✓ Cancele a Qualquer Momento</span>
            </div>
          </div>
          <Newsletter />
        </div>
      </section>

      {/* QR Code Section for Digital Connection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Conecte-se Digitalmente
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use seu smartphone para acessar rapidamente nossas redes sociais, newsletter ou agendar uma reunião.
            </p>
          </div>
          <QRCodeSocial />
        </div>
      </section>

      {/* Contact Section with AI Integration */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Chat Assistant - Always visible floating */}
      <ChatAssistant />
    </main>
  );
}
