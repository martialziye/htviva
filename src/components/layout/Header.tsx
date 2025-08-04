
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

// Import all screen product images
import screen7HT2505 from '/src/public/asset/img/screen/7-HT-2505.png';
import screen10HT1419 from '/src/public/asset/img/screen/10-HT-1419-s2s5.png';
import screen10HTEPC419 from '/src/public/asset/img/screen/10-HT-EPC-419.png';
import screen12HT1408S from '/src/public/asset/img/screen/12-HT-1408-S.png';
import screen12HT1503 from '/src/public/asset/img/screen/12-HT-1503.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user } = useAuth();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // All 5 products for dropdown menu
  const products = [
    { 
      id: '7-HT-2505',
      name: '7-HT-2505', 
      nameFR: '7-HT-2505',
      path: '/products/7-HT-2505',
      image: screen7HT2505,
      description: language === 'en' ? '7" Industrial Display' : 'Écran industriel 7"'
    },
    { 
      id: '10-HT-1419-s2s5',
      name: '10-HT-1419-s2s5', 
      nameFR: '10-HT-1419-s2s5',
      path: '/products/10-HT-1419-s2s5',
      image: screen10HT1419,
      description: language === 'en' ? '10" Industrial Display' : 'Écran industriel 10"'
    },
    { 
      id: '10-HT-EPC-419',
      name: '10-HT-EPC-419', 
      nameFR: '10-HT-EPC-419',
      path: '/products/10-HT-EPC-419',
      image: screen10HTEPC419,
      description: language === 'en' ? '10" EPC Industrial Display' : 'Écran industriel EPC 10"'
    },
    { 
      id: '12-HT-1408-S',
      name: '12-HT-1408-S', 
      nameFR: '12-HT-1408-S',
      path: '/products/12-HT-1408-S',
      image: screen12HT1408S,
      description: language === 'en' ? '12" Industrial Display' : 'Écran industriel 12"'
    },
    { 
      id: '12-HT-1503',
      name: '12-HT-1503', 
      nameFR: '12-HT-1503',
      path: '/products/12-HT-1503',
      image: screen12HT1503,
      description: language === 'en' ? '12" Industrial Display' : 'Écran industriel 12"'
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-navy">
              <span className="text-brand-red">HTVIV</span>A
            </div>
          </Link>

          {/* Desktop Navigation - 靠右对齐 */}
          <nav className="hidden md:flex items-center justify-end flex-1 ml-8">
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'text-brand-red' : ''}`}
              >
                {t('nav.home')}
              </Link>
              
              {/* Products with Image Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleProductsDropdown}
                  className={`nav-link flex items-center gap-1 ${
                    isActive('/products') || location.pathname.startsWith('/products/') 
                      ? 'text-brand-red' 
                      : ''
                  }`}
                >
                  {t('nav.products')}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Image-based Dropdown Menu - All 5 Products */}
                {productsDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] bg-white shadow-2xl border border-gray-100 rounded-lg py-8 px-8 z-50">
                    <div className="grid grid-cols-5 gap-6">
                      {products.map((product, index) => (
                        <Link
                          key={index}
                          to={product.path}
                          className="group flex flex-col items-center text-center transition-all duration-200 hover:scale-105"
                          onClick={() => setProductsDropdownOpen(false)}
                        >
                          <div className="w-48 h-36 mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="font-semibold text-base text-gray-800 group-hover:text-brand-red transition-colors leading-tight mb-1">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </Link>
                      ))}
                    </div>
                    
                    {/* View All Products Link */}
                    <div className="border-t border-gray-200 mt-8 pt-8">
                      <Link
                        to="/products"
                        className="block text-center text-brand-red font-semibold hover:text-brand-red/80 transition-colors text-lg"
                        onClick={() => setProductsDropdownOpen(false)}
                      >
                        {language === 'en' ? 'View All Products' : 'Voir tous les produits'} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'text-brand-red' : ''}`}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/expertise" 
                className={`nav-link ${isActive('/expertise') ? 'text-brand-red' : ''}`}
              >
                {t('nav.expertise')}
              </Link>
              {/* About link hidden */}
              {/* <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'text-brand-red' : ''}`}
              >
                {t('nav.about')}
              </Link> */}
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'text-brand-red' : ''}`}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/news" 
                className={`nav-link ${isActive('/news') ? 'text-brand-red' : ''}`}
              >
                {t('nav.news')}
              </Link>
              
              {/* Language Toggle */}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-navy hover:text-brand-red ml-4"
              >
                <Globe size={18} />
                <span className="font-medium">{language === 'en' ? 'FR' : 'EN'}</span>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`nav-link px-4 py-2 ${isActive('/') ? 'text-brand-red' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              
              {/* Mobile Products with Dropdown */}
              <div className="px-4">
                <button
                  onClick={toggleProductsDropdown}
                  className={`nav-link flex items-center justify-between w-full py-2 ${
                    isActive('/products') || location.pathname.startsWith('/products/') 
                      ? 'text-brand-red' 
                      : ''
                  }`}
                >
                  {t('nav.products')}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Mobile Dropdown Items */}
                {productsDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/products"
                      className="block py-2 text-gray-600 hover:text-brand-red transition-colors font-medium"
                      onClick={() => {
                        setProductsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {language === 'en' ? 'View All Products' : 'Voir tous les produits'}
                    </Link>
                    <div className="h-px bg-gray-200 my-2"></div>
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        to={product.path}
                        className="flex items-center gap-4 py-3 text-gray-600 hover:text-brand-red transition-colors"
                        onClick={() => {
                          setProductsDropdownOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-gray-50 rounded-md">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-base font-medium">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/services" 
                className={`nav-link px-4 py-2 ${isActive('/services') ? 'text-brand-red' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/expertise" 
                className={`nav-link px-4 py-2 ${isActive('/expertise') ? 'text-brand-red' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.expertise')}
              </Link>
              {/* About link hidden */}
              {/* <Link 
                to="/about" 
                className={`nav-link px-4 py-2 ${isActive('/about') ? 'text-brand-red' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link> */}
              <Link 
                to="/contact" 
                className={`nav-link px-4 py-2 ${isActive('/contact') ? 'text-brand-red' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                to="/news" 
                className={`nav-link px-4 py-2 ${isActive('/news') ? 'text-brand-red' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.news')}
              </Link>

              {/* Mobile Language Toggle */}
              <div className="px-4 pt-4 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1"
                >
                  <Globe size={18} />
                  <span>{language === 'en' ? 'FR' : 'EN'}</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
