
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're already on the home page
    if (window.location.pathname === '/') {
      // If on home page, just scroll to products section
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('products');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand-red">HTVIV</span>A
            </div>
            <p className="text-gray-300 mb-4">
              200 rue de la Croix Nivert <br />
              75015 PARIS <br />
              FRANCE
            </p>
            <p className="text-gray-300">
              Tel: 09 83 31 62 55 <br />
              Email: contact@htviva.fr
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleProductsClick}
                >
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                  {t('footer.legal')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={22} />
              </a>
            </div>
            <div>
              <p className="text-gray-300">
                Part of <span className="font-semibold">Wisetec Group</span>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-navy-light" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </div>
          <div className="text-gray-400 text-sm">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              {t('footer.legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
