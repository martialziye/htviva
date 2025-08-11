
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.form.messages.success'),
        description: t('contact.form.messages.successDescription'),
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6">{t('contact.info.getInTouch')}</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-red mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.address')}</h3>
                    <p className="text-gray-600">
                      200 rue de la Croix Nivert <br />
                      75015 PARIS <br />
                      FRANCE
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-red mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.email')}</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@Htviva.fr" className="hover:text-brand-red transition-colors">
                        contact@Htviva.fr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-red mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.phone')}</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33983316255" className="hover:text-brand-red transition-colors">
                        09 83 31 62 55
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-red mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">{t('contact.info.businessHours')}</h3>
                    <p className="text-gray-600">
                      {t('contact.info.hours.weekdays')} <br />
                      {t('contact.info.hours.weekends')}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          {t('contact.form.name')} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={t('contact.form.placeholders.name')}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t('contact.form.email')} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t('contact.form.placeholders.email')}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          {t('contact.form.phone')}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('contact.form.placeholders.phone')}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          {t('contact.form.company')}
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t('contact.form.placeholders.company')}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        {t('contact.form.subject')} *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.placeholders.subject')}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t('contact.form.message')} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.placeholders.message')}
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-brand-red hover:bg-brand-red/90 w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('contact.form.sending')}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          {t('contact.form.submit')}
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
