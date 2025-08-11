import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ClientsWallSection = () => {
  const { language } = useLanguage();
  const clientLogos = [
    { src: '/assets/img/logo/bombardier-100x80.jpg', alt: 'Bombardier' },
    { src: '/assets/img/logo/casco-100x80.jpg', alt: 'Casco' },
    { src: '/assets/img/logo/thales-100x80.jpg', alt: 'Thales' },
    { src: '/assets/img/logo/TCT.png', alt: 'TCT' },
    { src: '/assets/img/logo/Fitsco.jpeg', alt: 'Fitsco' },
    { src: '/assets/img/logo/Unittec.png', alt: 'Unittec' },
    { src: '/assets/img/logo/CRRClogo.png', alt: 'CRRC' },
    { src: '/assets/img/logo/Thales-SEC-Transport.jpeg', alt: 'Thales-SEC-Transport' }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Ils nous font confiance' : 'They trust us'}
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
          {language === 'fr' ? (
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Aujourd'hui, comme leader sur le marché chinois avec plus de 65 % de part de marché dans le secteur du métro et tramway, HT VIVA dispose d'une expertise technique reconnue et développe avec nos clients.
            </p>
          ) : (
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Today, as a market leader in China holding over 65% market share in the metro and tramway sector, HT-Viva has established recognized technical expertise and continues to grow alongside our clients.
            </p>
          )}
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src={logo.src}
                alt={logo.alt}
                className="max-w-[100px] max-h-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsWallSection; 