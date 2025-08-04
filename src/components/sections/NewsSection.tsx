import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-title">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest news and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <Card className="card-shadow">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
              alt="Team at exhibition"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <div className="flex items-center mb-3 text-brand-red">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">June 15, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-brand-red transition-colors">
                <Link to="#">Join us at InnoTrans 2025 in Berlin</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                We'll be showcasing our latest train monitoring solutions at the world's leading transport technology exhibition.
              </p>
              <Button variant="link" asChild className="p-0 text-brand-red">
                <Link to="#">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* News Item 2 */}
          <Card className="card-shadow">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
              alt="Software development"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <div className="flex items-center mb-3 text-brand-red">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">May 22, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-brand-red transition-colors">
                <Link to="#">New Software Release for TrainVision System</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Our latest software update brings enhanced monitoring capabilities and improved user interface for train operators.
              </p>
              <Button variant="link" asChild className="p-0 text-brand-red">
                <Link to="#">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* News Item 3 */}
          <Card className="card-shadow">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
              alt="Code on screen"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <div className="flex items-center mb-3 text-brand-red">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">April 10, 2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-brand-red transition-colors">
                <Link to="#">Htviva Achieves ISO 9001:2015 Recertification</Link>
              </h3>
              <p className="text-gray-600 mb-4">
                This recertification demonstrates our ongoing commitment to quality management and continuous improvement.
              </p>
              <Button variant="link" asChild className="p-0 text-brand-red">
                <Link to="#">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 