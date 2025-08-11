import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import AccordionSection from '@/components/ui/AccordionSection';
import { productsData } from '@/data/products';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>('technical');

  // Check if product exists
  if (!productId || !productsData[productId as keyof typeof productsData]) {
    return <Navigate to="/products" replace />;
  }

  const product = productsData[productId as keyof typeof productsData];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-navy mb-6">
                {product.name}
              </h1>
              <div className="w-16 h-1 bg-brand-red mb-6"></div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {product.descriptions[language].map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xs bg-white p-4">
                <img 
                  src={product.image} 
                  alt={`${product.name} Industrial Display`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white py-16">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-navy mb-8">
            {language === 'en' ? 'Technical Specifications' : 'Spécifications techniques'}
          </h2>
          
          <div className="max-w-4xl">
            <AccordionSection
              title={language === 'en' ? 'Technical Specifications' : 'Spécifications techniques'}
              isExpanded={expandedSection === 'technical'}
              onToggle={() => toggleSection('technical')}
              isActive={expandedSection === 'technical'}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">{product.specs.display[language].title}</h4>
                  <ul className="space-y-1 text-gray-600">
                    {product.specs.display[language].items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{product.specs.interface[language].title}</h4>
                  <ul className="space-y-1 text-gray-600">
                    {product.specs.interface[language].items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionSection>


            <AccordionSection
              title={language === 'en' ? 'Climatic Environment' : 'Environnement climatique'}
              isExpanded={expandedSection === 'climate'}
              onToggle={() => toggleSection('climate')}
              isActive={expandedSection === 'climate'}
            >
              <div className="text-sm text-gray-600 space-y-2">
                {productId === '7-HT-2505' || productId === '17-HT-0003' || productId === '12-HT-1408-S' ? (
                  <>
                    <p>{language === 'en' ? 'Operating Temperature: -25°C to +70°C' : 'Température de fonctionnement : -25°C à +70°C'}</p>
                    <p>{language === 'en' ? 'Storage Temperature: -40°C to +80°C' : 'Température de stockage : -40°C à +80°C'}</p>
                    <p>{language === 'en' ? 'Heat Dissipation: Overall heat dissipation, no fan' : 'Dissipation thermique : Dissipation globale, sans ventilateur'}</p>
                  </>
                ) : productId === '10-HT-EPC-419' || productId === '12-HT-1503' ? (
                  <>
                    <p>{language === 'en' ? 'Operating Temperature: -25°C to +70°C' : 'Température de fonctionnement : -25°C à +70°C'}</p>
                    <p>{language === 'en' ? 'Storage Temperature: -40°C to +80°C' : 'Température de stockage : -40°C à +80°C'}</p>
                    <p>{language === 'en' ? 'Heat Dissipation: Overall heat dissipation, no fan' : 'Dissipation thermique : Dissipation globale, sans ventilateur'}</p>
                  </>
                ) : (
                  <>
                    <p>{language === 'en' ? 'Operating Temperature: 0°C to +50°C' : 'Température de fonctionnement : 0°C à +50°C'}</p>
                    <p>{language === 'en' ? 'Storage Temperature: -20°C to +60°C' : 'Température de stockage : -20°C à +60°C'}</p>
                    <p>{language === 'en' ? 'Humidity: 10% to 90% RH non-condensing' : 'Humidité : 10% à 90% HR sans condensation'}</p>
                    <p>{language === 'en' ? 'Vibration: 1G at 5-500Hz' : 'Vibration : 1G à 5-500Hz'}</p>
                  </>
                )}
              </div>
            </AccordionSection>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;