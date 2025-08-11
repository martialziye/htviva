import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, MonitorUp, Cpu, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HowItWorksSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Service Commitment",
      items: [
        {
          title: "Free Quality Warranty",
          description: "We provide a one-year free warranty with unwavering commitment. During this extensive period, you won't have to worry about product quality issues."
        },
        {
          title: "Lifetime Software Support",
          description: "We offer lifetime software upgrade maintenance services, allowing you to continuously enjoy the latest and most outstanding software experience."
        },
        {
          title: "Professional Technical Support",
          description: "Our experienced and highly skilled technical team is always on standby, ready to help you solve any hardware or software issues promptly."
        }
      ],
      summary: {
        title: "Comprehensive Service Guarantee",
        description: [
          "Whether it's unexpected hardware failures or complex software issues, our team can respond quickly and handle them with precision. We ensure comprehensive verification of terminal program operation, providing you with solid practical guarantees.",
          "With our professional technical team and efficient maintenance system, we guarantee smooth operation of your equipment and worry-free usage experience."
        ]
      },
      ctaButton: "Contact Us"
    },
    fr: {
      title: "Notre Engagement de Service",
      items: [
        {
          title: "Garantie Qualité",
          description: "Nous offrons une garantie de qualité durable sur l’ensemble du cycle de vie du produit, avec un engagement constant envers la fiabilité"
        },
        {
          title: "Support Logiciel à Vie",
          description: "Nous proposons des services de maintenance et de mise à niveau logicielle à vie, vous permettant de profiter continuellement de l'expérience logicielle la plus récente."
        },
        {
          title: "Support Technique Professionnel",
          description: "Notre équipe technique expérimentée et hautement qualifiée est toujours prête à vous aider à résoudre rapidement tout problème matériel ou logiciel."
        }
      ],
      summary: {
        title: "Garantie de Service Complète",
        description: [
          "Que ce soit pour des pannes matérielles imprévues ou des dysfonctionnement logiciels complexes, notre équipe intervient avec réactivité et précision. Nous réalisons un contrôle approfondi du programme terminal, afin de garantir une fiabilité et des performance durable.",
          "Avec notre équipe technique professionnelle et notre système de maintenance efficace, nous garantissons le fonctionnement fluide de votre équipement ainsi qu’une expériences d’utilisation fiable et optimale."
        ]
      },
      ctaButton: "Contactez-nous"
    }
  };

  const currentContent = language === 'fr' ? content.fr : content.en;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-title">{currentContent.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Service Items */}
          <div className="space-y-6">
            {currentContent.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center">
                      {index === 0 && <MonitorUp className="h-6 w-6 text-brand-red" />}
                      {index === 1 && <Cpu className="h-6 w-6 text-brand-red" />}
                      {index === 2 && <Wrench className="h-6 w-6 text-brand-red" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Summary Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {currentContent.summary.title}
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              {currentContent.summary.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded-lg inline-flex items-center"
            >
              <Link to="/contact">
                {currentContent.ctaButton}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;