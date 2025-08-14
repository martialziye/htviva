import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import engineerImage from '/public/assets/img/home/engineer-4915804_1280.png';

export default function AboutSection() {
  const { t, language } = useLanguage();

  const features = [
    {
      en: 'Onboard Display Equipment (DMI)',
      fr: 'Équipements d\'affichage embarqués (DMI)'
    },
    {
      en: 'Customized Hardware Solutions',
      fr: 'Solutions matérielles personnalisées'
    },
    {
      en: 'Railway & Metro Systems',
      fr: 'Systèmes ferroviaires et métro'
    },
    {
      en: 'Urban Rail Networks',
      fr: 'Réseaux ferroviaires urbains'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="order-2 lg:order-1" data-aos="zoom-out" data-aos-duration="1000">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={engineerImage} 
                  alt="Engineer working with industrial testing equipment" 
                  className="w-full h-auto object-cover max-h-[620px]"
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1400">
            <div className="space-y-6">
              {/* Badge */}
              <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full">
                {language === 'fr' ? 'À propos de nous' : 'About Us'}
              </span>
              
              {/* Main Heading - Using same as IntroSection */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                {t('home.section1.title')}
              </h2>
              
              {/* Description - Using same as IntroSection */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('home.section1.description')}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0" />
                    <span className="text-gray-700 font-medium">
                      {language === 'fr' ? feature.fr : feature.en}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Description */}
              <p className="text-gray-600 leading-relaxed">
                {language === 'fr'
                  ? 'Nos ingénieurs et techniciens conjuguent leurs expertise pour concevoir des solutions innovantes répondant aux exigences les plus élevées de secteur ferroviaires.'
                  : 'Our engineers and technicians combine their expertise to design innovative solutions that meet the highest standards of the railway industry.'
                }
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  asChild
                  className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Link to="/contact">
                    {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
