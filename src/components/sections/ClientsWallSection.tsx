import React from 'react';

const ClientsWallSection = () => {
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
            They trust us
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
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