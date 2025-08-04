import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Counter1 from '@/components/ui/counter';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import QualitySection from '@/components/sections/QualitySection';
import ClientsWallSection from '@/components/sections/ClientsWallSection';
import NewsSection from '@/components/sections/NewsSection';
import CTASection from '@/components/sections/CTASection';
import AboutSection from '@/components/sections/aboutSection';
const Index = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <Counter1 />
      <HowItWorksSection />
      <QualitySection />
      <ClientsWallSection />
      
      {/* Products Showcase Section */}
      <div id="products">
        <ProductShowcase 
          title={language === 'en' ? 'Our Industrial Display Solutions' : 'Nos solutions d\'affichage industriel'}
          subtitle={language === 'en' 
            ? 'Discover our comprehensive range of rugged industrial displays designed for demanding environments' 
            : 'Découvrez notre gamme complète d\'écrans industriels robustes conçus pour les environnements exigeants'
          }
          className="bg-gray-50"
        />
      </div>
      <CTASection />
    </div>
  );
};

export default Index;
