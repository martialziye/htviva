import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-navy relative h-screen overflow-hidden flex items-center">
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 mix-blend-overlay"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/train-operator-in-blue-uniform-managing-controls-i-2024-03-01-04-50-37-utc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90"
            >
              <Link to="/products">
                {t('nav.products')}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link to="/contact">
                {t('nav.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 