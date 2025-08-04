import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Briefcase, Users, Globe, ChevronRight, Mail } from 'lucide-react';

const NewsPage = () => {
  const { t, language } = useLanguage();

  // Helper function to get array data from translations
  const getResponsibilities = () => {
    if (language === 'fr') {
      return [
        'Développer et entretenir un portefeuille de clients dans les secteurs ferroviaire et du transport urbain en France',
        'Prospecter de nouveaux marchés et identifier des opportunités commerciales',
        'Promouvoir les solutions de HT-Viva auprès des acteurs locaux : opérateurs ferroviaires, intégrateurs, constructeurs de matériel roulant, etc.',
        'Assurer le suivi des projets, de la prospection initiale à la signature des contrats',
        'Travailler en étroite collaboration avec les équipes techniques et marketing basées en Chine pour adapter les offres aux besoins locaux',
        'Représenter l\'entreprise lors d\'événements professionnels (salons, conférences, etc.)'
      ];
    }
    return [
      'Develop and maintain a client portfolio in the railway and urban transport sectors in France',
      'Prospect new markets and identify commercial opportunities',
      'Promote HT-Viva solutions to local players: railway operators, integrators, rolling stock manufacturers, etc.',
      'Follow up on projects from initial prospecting to contract signing',
      'Work closely with technical and marketing teams based in China to adapt offers to local needs',
      'Represent the company at professional events (trade shows, conferences, etc.)'
    ];
  };

  const getRequirements = () => {
    if (language === 'fr') {
      return [
        'Expérience réussie de 1 à 2 ans minimum dans la vente BtoB, idéalement dans les secteurs ferroviaire, transport ou équipements industriels',
        'Bonne connaissance des circuits de décision dans le secteur industriel en France',
        'Excellentes compétences en prospection, négociation et relation client',
        'Maîtrise professionnelle du français et de l\'anglais, à l\'oral comme à l\'écrit',
        'Autonomie, sens de l\'initiative et forte orientation résultats',
        'Une première expérience avec des entreprises asiatiques serait un plus'
      ];
    }
    return [
      '1-2 years minimum successful experience in B2B sales, ideally in railway, transport or industrial equipment sectors',
      'Good knowledge of decision-making processes in the industrial sector in France',
      'Excellent prospecting, negotiation and customer relationship skills',
      'Professional command of French and English, both spoken and written',
      'Autonomy, initiative and strong results orientation',
      'Previous experience with Asian companies would be a plus'
    ];
  };

  const getOffers = () => {
    if (language === 'fr') {
      return [
        'L\'opportunité de rejoindre une entreprise à fort potentiel en Europe',
        'Un environnement international, dynamique et en pleine croissance',
        'Un package attractif composé d\'un fixe et d\'un variable motivant, en fonction des résultats'
      ];
    }
    return [
      'The opportunity to join a high-potential company in Europe',
      'An international, dynamic and growing environment',
      'An attractive package consisting of a fixed salary and motivating variable compensation based on results'
    ];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t('news.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('news.description')}
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Careers Section - Takes 2 columns on large screens */}
          <div className="xl:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-brand-red" />
              <h2 className="text-3xl font-bold text-navy">
                {t('news.careers.title')}
              </h2>
            </div>

            <Card className="overflow-hidden shadow-xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-brand-red to-red-600 text-white p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {t('news.careers.jobTitle')}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-red-100">
                      <MapPin className="h-4 w-4" />
                      {t('news.careers.location')}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    <Users className="h-3 w-3 mr-1" />
                    {language === 'fr' ? 'Nouveau' : 'New'}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t('news.careers.description')}
                </p>

                <div className="space-y-8">
                  {/* Job Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red" />
                      {t('news.careers.responsibilities.title')}
                    </h3>
                    <ul className="space-y-3">
                      {getResponsibilities().map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red" />
                      {t('news.careers.requirements.title')}
                    </h3>
                    <ul className="space-y-3">
                      {getRequirements().map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* What We Offer */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-4 flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-brand-red" />
                      {t('news.careers.offer.title')}
                    </h3>
                    <ul className="space-y-3">
                      {getOffers().map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-3 text-lg">
                      <Mail className="h-5 w-5 mr-2" />
                      {language === 'fr' ? 'Postuler maintenant' : 'Apply Now'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company News Section */}
          <div className="xl:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="h-8 w-8 text-brand-red" />
              <h2 className="text-3xl font-bold text-navy">
                {t('news.companyNews.title')}
              </h2>
            </div>

            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="p-6">
                <div className="flex items-center gap-2 text-brand-red mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {t('news.companyNews.innotrans.date')}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {t('news.companyNews.innotrans.title')}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <div className="mb-6">
                  <img
                    src="/assets/img/news/InnoTrans-2024.jpg"
                    alt="INNOTRANS Trade Show"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('news.companyNews.innotrans.description')}
                </p>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 text-brand-red" />
                    Berlin, Germany
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-brand-red" />
                    {t('news.companyNews.innotrans.date')}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                >
                  {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsPage; 