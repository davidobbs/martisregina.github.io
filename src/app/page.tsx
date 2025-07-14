import Header from '@/components/layout/Header';
import EnhancedCredibilityBar from '@/components/ui/EnhancedCredibilityBar';
import PremiumHeroSection from '@/components/sections/PremiumHeroSection';
import AboutSection from '@/components/sections/AboutSection';
import NewPracticeAreasSection from '@/components/sections/NewPracticeAreasSection';
import AwardsCarouselSection from '@/components/sections/AwardsCarouselSection';
import RecognitionSection from '@/components/sections/RecognitionSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import GlobalPresenceSection from '@/components/sections/GlobalPresenceSection';
import ContactSection from '@/components/sections/ContactSection';
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
      
      {/* 1. Escritório - About Section with Company History */}
      <AboutSection />
      
      {/* 2. Áreas de Atuação - Practice Areas */}
      <NewPracticeAreasSection />
      
      {/* 3. Premiações - Awards Carousel */}
      <AwardsCarouselSection />
      
      {/* 4. Reconhecimentos - Recognition Section */}
      <RecognitionSection />
      
      {/* 5. Sócios - Partners Section */}
      <PartnersSection />
      
      {/* 6. Artigos - Articles/Blog Section */}
      <ArticlesSection />
      
      {/* 7. Onde Estamos - Global Presence with Interactive Map */}
      <GlobalPresenceSection />
      
      {/* 8. Contato - Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
