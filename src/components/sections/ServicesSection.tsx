import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Wrench, Search } from 'lucide-react';

const ServicesSection = () => {
  const { language } = useLanguage();

  const services = [
    {
      id: 'service-1',
      icon: Award,
      name_en: "EXPERTISE AND CONSULTING",
      name_fr: "EXPERTISE ET CONSEIL",
      description_en: "Our experience in embedded electronics systems and software allow us to propose adapted tools and developments for your company.",
      description_fr: "Notre expérience en systèmes électroniques embarqués et en logiciels nous permet de proposer des outils et des développements adaptés à votre entreprise.",
      bgColorClass: "bg-blue-50",
      iconColorClass: "text-blue-600",
      borderColorClass: "border-blue-100"
    },
    {
      id: 'service-2',
      icon: Wrench,
      name_en: "MAINTAIN, REPAIR AND OVERHAUL",
      name_fr: "MAINTENANCE, RÉPARATION ET RÉVISION",
      description_en: "HTVIVA offers customised MRO solutions that allow your company to operate without unintentional stoppages.",
      description_fr: "HTVIVA propose des solutions MRO personnalisées qui permettent à votre entreprise de fonctionner sans arrêts imprévus.",
      bgColorClass: "bg-green-50",
      iconColorClass: "text-green-600",
      borderColorClass: "border-green-100"
    },
    {
      id: 'service-3',
      icon: Search,
      name_en: "OBSOLESCENCE MANAGEMENT",
      name_fr: "GESTION DE L'OBSOLESCENCE",
      description_en: "HTVIVA proposes different services adapted to customer needs in order to optimize the life cycle of its products.",
      description_fr: "HTVIVA propose différents services adaptés aux besoins des clients afin d'optimiser le cycle de vie de ses produits.",
      bgColorClass: "bg-purple-50",
      iconColorClass: "text-purple-600",
      borderColorClass: "border-purple-100"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {language === 'fr' ? 'Nos Services' : 'Our Services'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Nous proposons une gamme complète de services pour accompagner votre entreprise dans ses projets technologiques les plus exigeants.'
              : 'We offer a comprehensive range of services to support your company in its most demanding technological projects.'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`border-2 ${service.borderColorClass} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white`}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 mx-auto ${service.bgColorClass} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColorClass}`} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy mb-4 leading-tight">
                    {language === 'en' ? service.name_en : service.name_fr}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en' ? service.description_en : service.description_fr}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 