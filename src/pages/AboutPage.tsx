
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, History, Award, MapPin, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1975, Htviva has evolved from a small electronics workshop to a leading provider of embedded systems for transportation and industrial applications.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With over 40 years of expertise, we've established ourselves as a trusted partner for companies seeking reliable electronic solutions for harsh environments.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, our systems can be found in trains, metros, and trams across the globe, ensuring safe and efficient operations for millions of passengers daily.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
                alt="Company office"
                className="rounded-lg shadow-lg object-cover w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Htviva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-brand-red/10 rounded-full">
                    <Shield className="h-8 w-8 text-brand-red" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Quality & Reliability
                </h3>
                <p className="text-gray-600 text-center">
                  We are uncompromising in our commitment to quality, designing systems that perform reliably in the most demanding environments.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-brand-teal/10 rounded-full">
                    <Target className="h-8 w-8 text-brand-teal" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600 text-center">
                  We continuously invest in research and development to stay at the forefront of embedded systems technology and meet evolving industry needs.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-navy/10 rounded-full">
                    <Users className="h-8 w-8 text-navy" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  Customer Partnership
                </h3>
                <p className="text-gray-600 text-center">
                  We believe in building long-term relationships with our clients, working collaboratively to understand and meet their specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Key Figures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Htviva in numbers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-brand-red mb-2">40+</div>
              <div className="text-lg text-gray-700">Years of Experience</div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-brand-red mb-2">120+</div>
              <div className="text-lg text-gray-700">Employees</div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-brand-red mb-2">25+</div>
              <div className="text-lg text-gray-700">Countries Served</div>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-brand-red mb-2">1000+</div>
              <div className="text-lg text-gray-700">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals guiding our company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="card-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="CEO portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Jean Dupont</h3>
                <p className="text-brand-red font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With 25 years of experience in embedded systems, Jean leads our company's strategic vision and operations.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="card-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="CTO portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Marie Lambert</h3>
                <p className="text-brand-red font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Marie oversees our technical innovation, driving the development of next-generation train monitoring systems.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="card-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                  alt="COO portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Thomas Bernard</h3>
                <p className="text-brand-red font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Thomas ensures the efficient production and delivery of our electronic systems to clients worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Chalon-sur-Saône, France, with global reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-brand-red mr-2" />
                <h3 className="text-xl font-semibold">Headquarters</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                200 rue de la Croix Nivert <br />
                75015 PARIS <br />
                FRANCE
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our state-of-the-art facility houses our design, development, and production teams, enabling us to maintain the highest quality standards throughout the product lifecycle.
              </p>
              <Button 
                asChild
                className="bg-brand-red hover:bg-brand-red/90"
              >
                <Link to="/contact">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* Placeholder for map image - would typically be replaced by an interactive map */}
                <img
                  src="https://www.mapquestapi.com/staticmap/v5/map?key=YOUR_KEY&center=200 rue de la Croix Nivert,75015 Paris,France&size=600,400&zoom=14&locations=200 rue de la Croix Nivert,75015 Paris,France||marker-sm-3B5998-22407F&type=map"
                  alt="Map showing Htviva headquarters location"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join our team</h2>
            <p className="text-xl text-white/80 mb-8">
              We're always looking for talented professionals to help us create tomorrow's electronic systems.
            </p>
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90"
            >
              <Link to="/contact">
                View Career Opportunities
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
