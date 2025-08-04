import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Cog, 
  ChevronRight, 
  SquareCode, 
  Cpu, 
  HardDrive, 
  Headphones,
  Rocket,
  ClipboardCheck,
  Award,
  Search,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import RepairSection from '@/components/sections/RepairSection';

const getIconComponent = (iconName: string | null) => {
  if (!iconName) return Wrench;
  
  const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Wrench,
    Cog,
    SquareCode,
    Cpu,
    HardDrive,
    Headphones,
    Rocket,
    ClipboardCheck
  };
  
  return icons[iconName] || Wrench;
};

// 新增固定服务内容
const fixedServices = [
  {
    id: 'fixed-1',
    icon: Award,
    name_en: "EXPERTISE AND CONSULTING",
    name_fr: "EXPERTISE ET CONSEIL",
    description_en: "Our experience in embedded electronics systems and software allow us to propose adapted tools and developments for your company.",
    description_fr: "Notre expérience en systèmes électroniques embarqués et en logiciels nous permet de proposer des outils et des développements adaptés à votre entreprise.",
    bgColorClass: "bg-red-50",
    textColorClass: "text-brand-red"
  },
  {
    id: 'fixed-2',
    icon: Wrench,
    name_en: "MAINTAIN, REPAIR AND OVERHAUL",
    name_fr: "MAINTENANCE, RÉPARATION ET RÉVISION",
    description_en: "HTVIVA offers customised MRO solutions that allow your company to operate without unintentional stoppages.",
    description_fr: "HTVIVA propose des solutions MRO personnalisées qui permettent à votre entreprise de fonctionner sans arrêts imprévus.",
    bgColorClass: "bg-red-50",
    textColorClass: "text-brand-red"
  },
  {
    id: 'fixed-3',
    icon: Search,
    name_en: "OBSOLESCENCE MANAGEMENT",
    name_fr: "GESTION DE L'OBSOLESCENCE",
    description_en: "HTVIVA proposes different services adapted to customer needs in order to optimize the life cycle of its products.",
    description_fr: "HTVIVA propose différents services adaptés aux besoins des clients afin d'optimiser le cycle de vie de ses produits.",
    bgColorClass: "bg-red-50",
    textColorClass: "text-brand-red"
  }
];

// 认证证书数据
const certifications = [
  {
    id: 'cert-1',
    name: 'ISO 9001',
    image: '/images/certifications/afaq-iso-9001.png',
    description: 'Quality Management System'
  },
  {
    id: 'cert-2',
    name: 'EN/AS/JISQ 9100',
    image: '/images/certifications/afaq-jisq-9100.png',
    description: 'Aerospace Quality Management'
  },
  {
    id: 'cert-3',
    name: 'ISO/TS 22163',
    image: '/images/certifications/IRIS.png',
    description: 'Railway Quality Management'
  },
  {
    id: 'cert-4',
    name: 'CEFRI',
    image: '/images/certifications/CEFRI.png',
    description: 'Nuclear Safety Certification'
  }
];

const ServicesPage = () => {
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            
            {/* Left Image Section */}
            <div className="relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Industrial Engineer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/80 via-brand-red/60 to-transparent"></div>
                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
              </div>
              
              {/* Diagonal Cut Effect */}
              <div className="absolute top-0 right-0 w-32 h-full bg-white transform skew-x-12 translate-x-16"></div>
            </div>

            {/* Right Content Section */}
            <div className="relative flex items-center py-16 lg:py-20 px-8 lg:px-16">
              {/* Background Decoration */}
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-brand-red rounded-full transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-16 w-2 h-2 bg-brand-red/60 rounded-full transform -translate-y-1/2"></div>
              
              <div className="w-full max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-brand-red/10 text-brand-red text-sm font-semibold rounded-full mb-6">
                  <span className="w-2 h-2 bg-brand-red rounded-full mr-2"></span>
                  {language === 'fr' ? 'Services Professionnels' : 'Professional Services'}
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                  <span className="block">{t('services.title')}</span>
                  <span className="block text-brand-red">& MRO</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
                  {language === 'fr' 
                    ? 'Apporter de la valeur à nos clients'
                    : 'Delivering value to our customers'
                  }
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-lg">
                  {language === 'fr'
                    ? 'Nous sommes un fournisseur français leader dans la conception, la fabrication et la maintenance de systèmes électroniques embarqués. En développant nos services, HTviva a élargi sa gamme avec des services à haute valeur ajoutée.'
                    : 'We are a leading French supplier in the conception, manufacture and maintenance of embedded electronic systems. By upscaling services, HTviva has broadened its range with high added value services. To become your privileged partner, we create dedicated solutions according to your needs.'
                  }
                </p>

                {/* CTA Button */}
                <div className="flex items-center space-x-4">
                  <Button 
                    asChild
                    className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/contact">
                      {language === 'fr' ? 'NOUS CONTACTER' : 'CONTACT US'}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave/Curve Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#f3f4f6"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#f3f4f6"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f3f4f6"></path>
          </svg>
        </div>
      </section>

      {/* Fixed Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fixedServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="card-shadow hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 text-center">
                      <div className={`p-4 ${service.bgColorClass} rounded-full mx-auto w-16 h-16 flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${service.textColorClass}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {language === 'en' ? service.name_en : service.name_fr}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en' ? service.description_en : service.description_fr}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise & Consulting Detailed Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Expertise & Consulting</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {language === 'fr' 
                ? "Notre expertise approfondie en systèmes électroniques embarqués nous permet d'offrir des services de conseil et de développement sur mesure pour répondre aux besoins spécifiques de votre entreprise."
                : "Our deep expertise in embedded electronic systems allows us to offer tailored consulting and development services to meet your company's specific needs."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testing Tools */}
            <div className="flip-card group perspective-1000">
              <div className="flip-card-inner relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <Card className="flip-card-front absolute inset-0 w-full h-full border-2 border-gray-200 hover:border-brand-red transition-colors duration-300 backface-hidden">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <ClipboardCheck className="h-8 w-8 text-gray-800" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-6">
                        {language === 'fr' ? 'OUTILS DE TEST' : 'TESTING TOOLS'}
                      </h3>
                    </div>
                    <div className="space-y-2 flex-grow">
                      <div className="flex items-start">
                        <span className="text-gray-600 mr-3">-</span>
                        <span className="text-gray-700">
                          {language === 'fr' 
                            ? 'Développement et fourniture de bancs de test spécifiques.'
                            : 'Development and supply of specific test benches.'
                          }
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-600 mr-3">-</span>
                        <span className="text-gray-700">
                          {language === 'fr' ? 'Formation.' : 'Training.'}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-600 mr-3">-</span>
                        <span className="text-gray-700">
                          {language === 'fr' ? 'Documentation.' : 'Documentation.'}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-600 mr-3">-</span>
                        <span className="text-gray-700">
                          {language === 'fr' ? 'Support technique.' : 'Technical support.'}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-600 mr-3">-</span>
                        <span className="text-gray-700">
                          {language === 'fr' ? 'Maintenance.' : 'Maintenance.'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card className="flip-card-back absolute inset-0 w-full h-full border-2 border-brand-red bg-gradient-to-br from-gray-50 to-white backface-hidden rotate-y-180">
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6">
                      <ClipboardCheck className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-8">
                      {language === 'fr' ? 'OUTILS DE TEST' : 'TESTING TOOLS'}
                    </h3>
                    <Button 
                      asChild
                      className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 text-lg font-semibold"
                    >
                      <Link to="/contact">
                        {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Software Developments */}
            <div className="flip-card group perspective-1000">
              <div className="flip-card-inner relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <Card className="flip-card-front absolute inset-0 w-full h-full border-2 border-gray-200 hover:border-brand-red transition-colors duration-300 backface-hidden">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <SquareCode className="h-8 w-8 text-gray-800" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-6">
                        {language === 'fr' 
                          ? 'DÉVELOPPEMENTS LOGICIELS CLIENTS' 
                          : 'CUSTOMER SOFTWARE DEVELOPMENTS'
                        }
                      </h3>
                    </div>
                    <div className="text-center flex-grow flex items-center">
                      <p className="text-gray-700 leading-relaxed">
                        {language === 'fr'
                          ? 'Nous développons des logiciels spécifiques aux clients en utilisant différents langages informatiques, outils de programmation et nous assurons leur maintenance préventive, corrective et évolutive.'
                          : 'We develop customer specific software using different computers languages, programming tools and we ensure their preventative, corrective and evolutionary maintenance.'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card className="flip-card-back absolute inset-0 w-full h-full border-2 border-brand-red bg-gradient-to-br from-gray-50 to-white backface-hidden rotate-y-180">
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6">
                      <SquareCode className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-8">
                      {language === 'fr' 
                        ? 'DÉVELOPPEMENTS LOGICIELS' 
                        : 'SOFTWARE DEVELOPMENTS'
                      }
                    </h3>
                    <Button 
                      asChild
                      className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 text-lg font-semibold"
                    >
                      <Link to="/contact">
                        {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Technical Support */}
            <div className="flip-card group perspective-1000">
              <div className="flip-card-inner relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <Card className="flip-card-front absolute inset-0 w-full h-full border-2 border-gray-200 hover:border-brand-red transition-colors duration-300 backface-hidden">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Headphones className="h-8 w-8 text-gray-800" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-6">
                        {language === 'fr' ? 'SUPPORT TECHNIQUE' : 'TECHNICAL SUPPORT'}
                      </h3>
                    </div>
                    <div className="text-center flex-grow flex items-center">
                      <p className="text-gray-700 leading-relaxed">
                        {language === 'fr'
                          ? 'Notre équipe de support dédiée est à votre disposition pour résoudre vos problèmes dans le monde entier.'
                          : 'Our dedicated support team is at your disposal to solve your problems worldwide.'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card className="flip-card-back absolute inset-0 w-full h-full border-2 border-brand-red bg-gradient-to-br from-gray-50 to-white backface-hidden rotate-y-180">
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6">
                      <Headphones className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-8">
                      {language === 'fr' ? 'SUPPORT TECHNIQUE' : 'TECHNICAL SUPPORT'}
                    </h3>
                    <Button 
                      asChild
                      className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 text-lg font-semibold"
                    >
                      <Link to="/contact">
                        {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RepairSection />

      {/* Quality Certifications Section */}
      <section className="py-16 bg-gray-900 text-white relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/certifications/buroly-care.jpg"
            alt="Htviva-care"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-wide relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quality</h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto">
              We are involved in validation and certification of our processes.
              We validate a stable level of performance and a constant quality of services and products throughout the life of projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {certifications.map((cert) => (
              <div key={cert.id} className="w-40 h-40 bg-transparent rounded-lg p-4 flex items-center justify-center hover:bg-white/20 transition-colors">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-w-full max-h-full object-contain"
                  
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
