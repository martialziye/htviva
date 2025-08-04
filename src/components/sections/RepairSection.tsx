import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RepairSection() {
    const { language } = useLanguage();

    const afterSalesItems = [
        {
            en: 'Supply and production of spare parts.',
            fr: 'Fourniture et production de pièces de rechange.'
        },
        {
            en: 'Obsolete spare parts repair.',
            fr: 'Réparation de pièces de rechange obsolètes.'
        }
    ];

    const maintenanceItems = [
        {
            en: "Facilities' audits – Adapted Programs.",
            fr: 'Audits des installations – Programmes adaptés.'
        },
        {
            en: 'Spare parts storage.',
            fr: 'Stockage de pièces de rechange.'
        },
        {
            en: 'Research and analysis of on-site malfunctions.',
            fr: 'Recherche et analyse des dysfonctionnements sur site.'
        },
        {
            en: 'Preventative and corrective components replacement.',
            fr: 'Remplacement préventif et correctif des composants.'
        },
        {
            en: 'Metrological verification.',
            fr: 'Vérification métrologique.'
        },
        {
            en: 'Hardware and software upgrades.',
            fr: 'Mises à niveau matérielles et logicielles.'
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Image Section */}
                    <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/img/home/engineer-chip.jpg"
                                    alt="Technical team working on electronic systems maintenance"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            
                            {/* Decorative background elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl"></div>
                            
                            {/* Geometric pattern overlay */}
                            <div className="absolute top-4 left-4 w-16 h-16 border-2 border-brand-red/20 rounded-lg"></div>
                            <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-brand-red/30 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                                {language === 'fr' 
                                    ? 'Maintenance, Réparation et Révision' 
                                    : 'Maintain, Repair and Overhaul'
                                }
                            </h2>

                            {/* After-sales solution Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {language === 'fr' ? 'Solution après-vente' : 'After-sales solution'}
                                </h3>
                                <div className="space-y-3">
                                    {afterSalesItems.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">
                                                {language === 'fr' ? item.fr : item.en}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Maintenance Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {language === 'fr' ? 'Maintenance' : 'Maintenance'}
                                </h3>
                                <div className="space-y-3">
                                    {maintenanceItems.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">
                                                {language === 'fr' ? item.fr : item.en}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-6">
                                <Button
                                    asChild
                                    className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Link to="/contact">
                                        {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
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
