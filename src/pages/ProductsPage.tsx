import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

const ProductsPage = () => {
  const { t, language } = useLanguage();
  const [products, setProducts] = useState<Tables<'products'>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('status', 'active')
          .order('name_en', { ascending: true });

        if (error) throw error;
        
        setProducts(data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy bg-[url('/images/crane-control-panel-in-the-driver.JPG')] bg-cover bg-center bg-blend-overlay relative h-screen flex items-center">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('products.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('products.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-16">
        <div className="container-wide">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="card-shadow overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={product.image_url || 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80'}
                      alt={language === 'en' ? product.name_en : product.name_fr}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-brand-red font-medium mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === 'en' ? product.name_en : product.name_fr}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {language === 'en' ? product.description_en : product.description_fr}
                    </p>
                    <Button 
                      asChild
                      className="bg-brand-red hover:bg-brand-red/90"
                    >
                      <Link to={`/products/${product.id}`}>
                        View Product
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {!isLoading && products.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-500">No products available at the moment.</h3>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team can develop tailored train monitoring systems to meet your specific requirements.
            </p>
            <Button 
              asChild
              className="bg-brand-red hover:bg-brand-red/90"
            >
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
