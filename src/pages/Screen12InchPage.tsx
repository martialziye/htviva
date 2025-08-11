import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import product image
import screen12HT1408S from '/src/public/asset/img/screen/12-HT-1408-S.png';

const Screen12InchPage = () => {
  const { language, t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>('technical');

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
                {language === 'en' ? '12-inch Industrial Display' : 'Écran industriel 12 pouces'}
              </h1>
              <div className="w-16 h-1 bg-brand-red mb-6"></div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {language === 'en' 
                    ? 'The 12-inch industrial display provides maximum visual workspace for comprehensive control and monitoring applications.'
                    : 'L\'écran industriel 12 pouces offre un espace de travail visuel maximal pour les applications complètes de contrôle et de surveillance.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Premium display technology with exceptional brightness, contrast, and color accuracy for professional applications.'
                    : 'Technologie d\'affichage haut de gamme avec une luminosité, un contraste et une précision des couleurs exceptionnels pour les applications professionnelles.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Built to withstand extreme conditions while maintaining consistent performance in critical operations.'
                    : 'Conçu pour résister aux conditions extrêmes tout en maintenant des performances constantes dans les opérations critiques.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Advanced connectivity and processing power for complex industrial automation systems.'
                    : 'Connectivité avancée et puissance de traitement pour les systèmes d\'automatisation industrielle complexes.'}
                </p>
                <p>
                  {language === 'en' 
                    ? "HTVIVA's flagship solution for the most demanding applications."
                    : 'Solution phare de HTVIVA pour les applications les plus exigeantes.'}
                </p>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
                <img 
                  src={screen12HT1408S} 
                  alt="12-inch Industrial Display"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white py-12">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-navy mb-8">
            {language === 'en' ? 'Technical Specifications' : 'Spécifications techniques'}
          </h2>
          <div className="w-16 h-1 bg-brand-red mb-8"></div>

          <div className="space-y-4">
            {/* Technical Specifications Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('technical')}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className={`text-lg font-semibold ${
                  expandedSection === 'technical' ? 'text-brand-red' : 'text-gray-600'
                }`}>
                  {language === 'en' ? 'TECHNICAL SPECIFICATIONS' : 'SPÉCIFICATIONS TECHNIQUES'}
                </span>
                {expandedSection === 'technical' ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              
              {expandedSection === 'technical' && (
                <div className="overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-6 py-4 bg-white">
                    <div className="space-y-3 text-gray-700">
                      <p>Ultra wide range power supply 18 to 137Vdc with 4000Vdc Insulation</p>
                      <p>CPU Octa-core ARM Cortex-A78, 2.0GHz</p>
                      <p>Memory Up to 16GB DDR5 ; eMMC 32GB + SSD optional</p>
                      <p>Operating System LINUX / Windows IoT / Android</p>
                      <p>Touch screen Multi-touch PCAP with palm rejection</p>
                      <p>Programmable function keys with customizable LED backlighting</p>
                      
                      <div className="mt-6">
                        <p className="font-semibold mb-2">Professional interfaces:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>4 x Gigabit Ethernet with PoE+</li>
                          <li>4 x RS 232/422/485 with isolation</li>
                          <li>Professional Audio I/O with amplifier</li>
                          <li>6x USB 3.2 Gen 2</li>
                          <li>Dual HDMI/DisplayPort</li>
                          <li>WiFi 6E/Bluetooth 5.2/5G optional</li>
                          <li>CAN-Bus interface</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* Climatic Environment Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('climatic')}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className={`text-lg font-semibold ${
                  expandedSection === 'climatic' ? 'text-brand-red' : 'text-gray-600'
                }`}>
                  {language === 'en' ? 'CLIMATIC ENVIRONMENT' : 'ENVIRONNEMENT CLIMATIQUE'}
                </span>
                {expandedSection === 'climatic' ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              
              {expandedSection === 'climatic' && (
                <div className="overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-6 py-4 bg-white">
                    <div className="space-y-3 text-gray-700">
                      <p>Operating temperature: -40°C to +80°C</p>
                      <p>Storage temperature: -50°C to +90°C</p>
                      <p>Relative humidity: 5% to 95% (non-condensing)</p>
                      <p>Altitude: up to 4000m</p>
                      <p>Vibration: IEC 61373 Category 1 Class A</p>
                      <p>Shock: IEC 61373 Category 1 Class A</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen12InchPage; 