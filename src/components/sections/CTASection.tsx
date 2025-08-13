import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-navy text-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'fr' 
              ? 'Prêt à transformer vos systèmes électroniques ?' 
              : 'Ready to transform your electronic systems?'
            }
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {language === 'fr'
              ? 'Discutons de la façon dont notre expertise peut donner vie à vos projets avec des solutions fiables et performantes.'
              : "Let's discuss how our expertise can bring your projects to life with reliable, high-performance solutions."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90"
            >
              <Link to="/contact">
                {language === 'fr' ? 'Contacter Notre Équipe' : 'Contact Our Team'}
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link to="/products">
                {language === 'fr' ? 'Explorer Les Produits' : 'Explore Products'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 