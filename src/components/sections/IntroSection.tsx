import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">
              {t('home.section1.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('home.section1.description')}
            </p>
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90"
            >
              <Link to="/about">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
              alt="Circuit board close-up"
              className="rounded-lg shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 