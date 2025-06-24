import Header from '@/components/layout/Header';
import EnhancedCredibilityBar from '@/components/ui/EnhancedCredibilityBar';
import PremiumHeroSection from '@/components/sections/PremiumHeroSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import NewPracticeAreasSection from '@/components/sections/NewPracticeAreasSection';
import TimelineSection from '@/components/sections/TimelineSection';
import PartnersSection from '@/components/sections/PartnersSection';
import AwardsSection from '@/components/sections/AwardsSection';
import AwardsCarouselSection from '@/components/sections/AwardsCarouselSection';
import RecognitionSection from '@/components/sections/RecognitionSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import GlobalPresenceSection from '@/components/sections/GlobalPresenceSection';
import ContactSection from '@/components/sections/ContactSection';
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
      
      {/* Stats Section - O escritório em números */}
      <StatsSection />
      
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
      
      {/* Contact Section with AI Integration */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Chat Assistant - Always visible floating */}
      <ChatAssistant />
    </main>
  );
}
