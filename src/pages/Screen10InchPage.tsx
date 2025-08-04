import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import product image
import screen10HT1419 from '/src/public/asset/img/screen/10-HT-1419-s2s5.png';

const Screen10InchPage = () => {
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
                {language === 'en' ? '10-inch Industrial Display' : 'Écran industriel 10 pouces'}
              </h1>
              <div className="w-16 h-1 bg-brand-red mb-6"></div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {language === 'en' 
                    ? 'The 10-inch industrial display offers enhanced visual space for complex applications with superior performance and reliability.'
                    : 'L\'écran industriel 10 pouces offre un espace visuel amélioré pour les applications complexes avec des performances et une fiabilité supérieures.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Advanced display technology with high brightness and contrast for clear visibility in all conditions.'
                    : 'Technologie d\'affichage avancée avec une luminosité et un contraste élevés pour une visibilité claire dans toutes les conditions.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Engineered for mission-critical applications with extended temperature range operation.'
                    : 'Conçu pour les applications critiques avec un fonctionnement à plage de température étendue.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Comprehensive interface options for seamless integration into existing systems.'
                    : 'Options d\'interface complètes pour une intégration transparente dans les systèmes existants.'}
                </p>
                <p>
                  {language === 'en' 
                    ? "HTVIVA's advanced solution for your demanding applications."
                    : 'Solution avancée de HTVIVA pour vos applications exigeantes.'}
                </p>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
                <img 
                  src={screen10HT1419} 
                  alt="10-inch Industrial Display"
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
                      <p>Ultra wide range power supply 18 to 110Vdc with 3000Vdc Insulation</p>
                      <p>CPU Quad-core ARM Cortex-A53, 1.2GHz</p>
                      <p>Memory Up to 8GB DDR4 ; eMMC 16GB</p>
                      <p>Operating System LINUX / Android optional</p>
                      <p>Touch screen Multi-touch Capacitive</p>
                      <p>Optional function keys and navigation controls backlighted by LEDs</p>
                      
                      <div className="mt-6">
                        <p className="font-semibold mb-2">Enhanced interfaces:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>2 x Gigabit Ethernet</li>
                          <li>2 x RS 232/422/485</li>
                          <li>Audio Input/Output</li>
                          <li>4x USB 3.0</li>
                          <li>HDMI Output</li>
                          <li>WiFi/Bluetooth optional</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EMC Environment Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('emc')}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className={`text-lg font-semibold ${
                  expandedSection === 'emc' ? 'text-brand-red' : 'text-gray-600'
                }`}>
                  {language === 'en' ? 'EMC ENVIRONMENT' : 'ENVIRONNEMENT EMC'}
                </span>
                {expandedSection === 'emc' ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              
              {expandedSection === 'emc' && (
                <div className="overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-6 py-4 bg-white">
                    <div className="space-y-3 text-gray-700">
                      <p>Enhanced electromagnetic compatibility for demanding environments</p>
                      <p>EN 50121-3-2 (Railway applications - EMC)</p>
                      <p>IEC 61000-4-2 (Electrostatic discharge immunity) - Level 4</p>
                      <p>IEC 61000-4-3 (Radiated electromagnetic field immunity) - Level 3</p>
                      <p>IEC 61000-4-4 (Electrical fast transient immunity)</p>
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
                      <p>Operating temperature: -30°C to +75°C</p>
                      <p>Storage temperature: -40°C to +85°C</p>
                      <p>Relative humidity: 5% to 95% (non-condensing)</p>
                      <p>Altitude: up to 3000m</p>
                      <p>Vibration: IEC 61373 Category 1 Class B</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standards and Guidelines Section */}
            <div className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleSection('standards')}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className={`text-lg font-semibold ${
                  expandedSection === 'standards' ? 'text-brand-red' : 'text-gray-600'
                }`}>
                  {language === 'en' ? 'STANDARDS AND GUIDELINES' : 'NORMES ET DIRECTIVES'}
                </span>
                {expandedSection === 'standards' ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              
              {expandedSection === 'standards' && (
                <div className="overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-6 py-4 bg-white">
                    <div className="space-y-3 text-gray-700">
                      <p>EN 50155 (Railway applications - Electronic equipment)</p>
                      <p>EN 45545-2 (Fire protection on railway vehicles)</p>
                      <p>IEC 62236 (Railway applications - EMC)</p>
                      <p>ISO 9001:2015 Quality Management System</p>
                      <p>IRIS (International Railway Industry Standard)</p>
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

export default Screen10InchPage; 