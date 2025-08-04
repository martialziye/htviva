import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-navy text-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your electronic systems?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how our expertise can bring your projects to life with reliable, high-performance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90"
            >
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link to="/products">
                Explore Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 