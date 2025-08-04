import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Import product image
import screen7HT2505 from '/src/public/asset/img/screen/7-HT-2505.png';

const Screen7InchPage = () => {
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
                {language === 'en' ? '7-inch Industrial Display' : 'Écran industriel 7 pouces'}
              </h1>
              <div className="w-16 h-1 bg-brand-red mb-6"></div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {language === 'en' 
                    ? 'The 7-inch industrial display is designed for demanding applications with superior performance and reliability.'
                    : 'L\'écran industriel 7 pouces est conçu pour les applications exigeantes avec des performances et une fiabilité supérieures.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Featuring high-resolution display technology with optimal price/performance ratio.'
                    : 'Doté d\'une technologie d\'affichage haute résolution avec un rapport qualité-prix optimal.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Built with rugged construction for industrial environments and long-term reliability.'
                    : 'Construit avec une construction robuste pour les environnements industriels et une fiabilité à long terme.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'Includes essential features needed for most industrial applications.'
                    : 'Comprend les fonctionnalités essentielles nécessaires pour la plupart des applications industrielles.'}
                </p>
                <p>
                  {language === 'en' 
                    ? "HTVIVA's core competence for your critical applications."
                    : 'Compétence de base de HTVIVA pour vos applications critiques.'}
                </p>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg">
                <img 
                  src={screen7HT2505} 
                  alt="7-inch Industrial Display"
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
                      <p>Ultra wide range power supply 24 to 110Vdc with 2200Vdc Insulation</p>
                      <p>CPU Dual or Quadcore, 800MHz</p>
                      <p>Memory Up to 4GB DDR3 ; eMMC 8GB</p>
                      <p>Operating System LINUX</p>
                      <p>Touch screen Capacitive</p>
                      <p>Optional 32 keys keyboard in front (UIC612) backlighted by LEDs</p>
                      
                      <div className="mt-6">
                        <p className="font-semibold mb-2">Essential interfaces:</p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>2 x Ethernet 100M</li>
                          <li>1 RS 232/422/485</li>
                          <li>Audio Output for HP</li>
                          <li>1x USB</li>
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
                      <p>Electromagnetic compatibility compliant with railway standards</p>
                      <p>EN 50121-3-2 (Railway applications - EMC)</p>
                      <p>IEC 61000-4-2 (Electrostatic discharge immunity)</p>
                      <p>IEC 61000-4-3 (Radiated electromagnetic field immunity)</p>
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
                      <p>Operating temperature: -25°C to +70°C</p>
                      <p>Storage temperature: -40°C to +80°C</p>
                      <p>Relative humidity: 5% to 95% (non-condensing)</p>
                      <p>Altitude: up to 2000m</p>
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

export default Screen7InchPage; 