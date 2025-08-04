import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

// Import all product images
import screen7HT2505 from '/src/public/asset/img/screen/7-HT-2505.png';
import screen10HT1419 from '/src/public/asset/img/screen/10-HT-1419-s2s5.png';
import screen10HTEPC419 from '/src/public/asset/img/screen/10-HT-EPC-419.png';
import screen12HT1408S from '/src/public/asset/img/screen/12-HT-1408-S.png';
import screen12HT1503 from '/src/public/asset/img/screen/12-HT-1503.png';

// Product data
const products = [
  {
    id: '7-HT-2505',
    name: '7-HT-2505',
    image: screen7HT2505,
    description: {
      en: '7" Industrial Display',
      fr: 'Écran industriel 7"'
    }
  },
  {
    id: '10-HT-1419-s2s5',
    name: '10-HT-1419-s2s5',
    image: screen10HT1419,
    description: {
      en: '10" Industrial Display',
      fr: 'Écran industriel 10"'
    }
  },
  {
    id: '10-HT-EPC-419',
    name: '10-HT-EPC-419',
    image: screen10HTEPC419,
    description: {
      en: '10" EPC Industrial Display',
      fr: 'Écran industriel EPC 10"'
    }
  },
  {
    id: '12-HT-1408-S',
    name: '12-HT-1408-S',
    image: screen12HT1408S,
    description: {
      en: '12" Industrial Display',
      fr: 'Écran industriel 12"'
    }
  },
  {
    id: '12-HT-1503',
    name: '12-HT-1503',
    image: screen12HT1503,
    description: {
      en: '12" Industrial Display',
      fr: 'Écran industriel 12"'
    }
  }
];

interface ProductShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  title, 
  subtitle, 
  className = "" 
}) => {
  const { language } = useLanguage();

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container-wide">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold text-navy mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Product Title with Red Underline */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand-red transition-colors duration-300 mb-2">
                  {product.name}
                </h3>
                <div className="w-16 h-0.5 bg-brand-red mx-auto"></div>
              </div>

              {/* Product Image */}
              <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Description */}
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {product.description[language]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 