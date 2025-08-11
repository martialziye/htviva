
import React, { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      services: 'Services',
      expertise: 'Expertise',
      about: 'About',
      contact: 'Contact',
      news: 'News',
      admin: 'Admin Dashboard',
    },
    home: {
      hero: {
        title: 'Innovative Electronic Solutions for Critical Applications',
        subtitle: 'High-performance embedded systems designed for demanding environments'
      },
      section1: {
        title: 'Designing the Electronics Solutions of Tomorrow',
        description: 'Founded in 2010, HT-Viva Technology Co., Ltd. is a high-tech enterprise specializing in the development and manufacturing of onboard display equipment (DMI) as well as customized hardware and software solutions for trains, metros, trams, and urban rail transit networks.'
      },
      section2: {
        title: 'Tailor-made solutions for your specific needs',
        col1: {
          title: 'Standard Products'
        },
        col2: {
          title: 'Adapted Solutions'
        },
        col3: {
          title: 'Custom Development'
        }
      }
    },
    footer: {
      copyright: '© 2025 Htviva. All rights reserved.',
      legal: 'Legal Information',
    },
    products:{
      title: 'Products',
      description: 'Our products are designed for critical applications and are built to last. We offer a range of products that are designed to meet the needs of our customers.',
      categories: {
        screen7: '7-inch Screen',
        screen10: '10-inch Screen', 
        screen12: '12-inch Screen',
        viewAll: 'View All Products'
      }
    },
    services:{
      title: 'Services',
      description: 'For over 15 years, HT-Viva has met the demands of the railway sector (ERTMS/ETCS/CBTC, TCMS, CCTV) by delivering high-performance, technical, and reliable solutions. Our service strategy ensures forward compatibility, making certain that today\'s solutions meet tomorrow\'s request.',
    },
    expertise:{
      title: 'Expertise',
      description: 'We support you at each step of your project',
    },
    about:{
      title: 'About',
      description: 'We are a team of experts in the field of electronic solutions. We are dedicated to providing the best possible solutions to our customers.',
    },
    contact:{
      title: 'Contact',
      description: 'We are a team of experts in the field of electronic solutions. We are dedicated to providing the best possible solutions to our customers.',
      info: {
        getInTouch: 'Get in Touch',
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        businessHours: 'Business Hours',
        connectWithUs: 'Connect With Us',
        hours: {
          weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
          weekends: 'Saturday - Sunday: Closed'
        }
      },
      form: {
        title: 'Send Us a Message',
        name: 'Name',
        email: 'Email',
        phone: 'Phone Number',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        placeholders: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+33 1 23 45 67 89',
          company: 'Your Company',
          subject: 'How can we help you?',
          message: 'Your message...'
        },
        messages: {
          success: 'Message sent successfully',
          successDescription: 'We\'ll get back to you as soon as possible.'
        }
      }
    },
    news: {
      title: 'News & Careers',
      description: 'Stay updated with our latest news and career opportunities',
      careers: {
        title: 'Careers',
        jobTitle: 'Sales Representative - French Market',
        location: 'France (Remote with frequent client visits)',
        description: 'As part of our European expansion, we are recruiting a Sales Representative to actively develop our presence in the French market.',
        responsibilities: {
          title: 'Job Description',
          items: [
            'Develop and maintain a client portfolio in the railway and urban transport sectors in France',
            'Prospect new markets and identify commercial opportunities',
            'Promote HT-Viva solutions to local players: railway operators, integrators, rolling stock manufacturers, etc.',
            'Follow up on projects from initial prospecting to contract signing',
            'Work closely with technical and marketing teams based in China to adapt offers to local needs',
            'Represent the company at professional events (trade shows, conferences, etc.)'
          ]
        },
        requirements: {
          title: 'Profile Required',
          items: [
            '1-2 years minimum successful experience in B2B sales, ideally in railway, transport or industrial equipment sectors',
            'Good knowledge of decision-making processes in the industrial sector in France',
            'Excellent prospecting, negotiation and customer relationship skills',
            'Professional command of French and English, both spoken and written',
            'Autonomy, initiative and strong results orientation',
            'Previous experience with Asian companies would be a plus'
          ]
        },
        offer: {
          title: 'What We Offer',
          items: [
            'The opportunity to join a high-potential company in Europe',
            'An international, dynamic and growing environment',
            'An attractive package consisting of a fixed salary and motivating variable compensation based on results'
          ]
        }
      },
      companyNews: {
        title: 'Company News',
        innotrans: {
          title: 'HT-VIVA at INNOTRANS - World Railway Transport Trade Show in Berlin',
          date: 'September 24-27',
          description: 'Our commercial and technical teams will be on site to welcome you, present our products and listen to your projects.'
        }
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      products: 'Produits',
      services: 'Services',
      expertise: 'Expertise',
      about: 'À propos',
      contact: 'Contact',
      news: 'Actualités',
      admin: 'Tableau de bord',
    },
    home: {
      hero: {
        title: 'Solutions Électroniques Innovantes pour Applications Critiques',
        subtitle: 'Systèmes embarqués haute performance conçus pour des environnements exigeants'
      },
      section1: {
        title: 'Nous concevons les solutions électroniques de demain',
        description: 'Fondée en 2010, HT-Viva Technologie Co., Ltd. est une entreprise de haute technologie spécialisée dans le développement et la production d\'équipements d\'affichage embarqués (DMI) et de solutions matérielles et logicielles personnalisées pour les trains, métros, tramways et réseaux ferroviaires urbains.'
      },
      section2: {
        title: 'Solutions sur mesure pour vos besoins spécifiques',
        col1: {
          title: 'Produits Standard'
        },
        col2: {
          title: 'Solutions Adaptées'
        },
        col3: {
          title: 'Développement Sur Mesure'
        }
      }
    },
    footer: {
      copyright: '© 2025 Htviva. Tous droits réservés.',
      legal: 'Informations Légales',
    },
    products:{
      title: 'Produits',
      description: 'Nos produits sont conçus pour des applications critiques et sont conçus pour durer. Nous offrons une gamme de produits conçus pour répondre aux besoins de nos clients.',
      categories: {
        screen7: 'Écran 7 pouces',
        screen10: 'Écran 10 pouces', 
        screen12: 'Écran 12 pouces',
        viewAll: 'Voir Tous les Produits'
      }
    },
    services:{
      title: 'Services',
      description: 'Depuis 15 ans, HT-Viva répondons aux exigences du secteur ferroviaire (ERTMS/ETCS/CBTC, TCMS, CCTV) en proposant des solutions performantes, techniques et fiables. Nos services ont mis en place une stratégie pertinente de compatibilité pour garantir que les solutions d\'aujourd\'hui répondront aux besoins de demain de clients.',
    },
    expertise:{
      title: 'Expertise',
      description: 'Nous vous accompagnons à chaque étape de votre projet',
    },
    about:{
      title: 'À propos',
      description: 'Nous sommes un équipe d\'experts dans le domaine des solutions électroniques. Nous sommes dédiés à fournir les meilleures solutions possibles à nos clients.',
    },
    contact:{
      title: 'Contact',
      description: 'Nous sommes un équipe d\'experts dans le domaine des solutions électroniques. Nous sommes dédiés à fournir les meilleures solutions possibles à nos clients.',
      info: {
        getInTouch: 'Prendre contact',
        address: 'Adresse',
        email: 'Email',
        phone: 'Téléphone',
        businessHours: 'Horaires d\'ouverture',
        connectWithUs: 'Nous contacter',
        hours: {
          weekdays: 'Lundi - Vendredi: 9:00 AM - 18:00 PM',
          weekends: 'Samedi - Dimanche: Fermé'
        }
      },
      form: {
        title: 'Envoyez-nous un message',
        name: 'Nom',
        email: 'Email',
        phone: 'Numéro de téléphone',
        company: 'Société',
        subject: 'Sujet',
        message: 'Message',
        submit: 'Envoyer le message',
        sending: 'Envoi...',
        placeholders: {
          name: 'Jean Dupont',
          email: 'jean@example.com',
          phone: '+33 1 23 45 67 89',
          company: 'Votre société',
          subject: 'Comment pouvons-nous vous aider?',
          message: 'Votre message...'
        },
        messages: {
          success: 'Message envoyé avec succès',
          successDescription: 'Nous vous répondrons dès que possible.'
        }
      }
    },
    news: {
      title: 'Actualités & Carrières',
      description: 'Restez informé de nos dernières actualités et opportunités de carrière',
      careers: {
        title: 'Carrières',
        jobTitle: 'Commercial(e) - Marché Français',
        location: 'France (télétravail), avec déplacements fréquents auprès des clients',
        description: 'Dans le cadre de notre expansion en Europe, nous recrutons aujourd\'hui un(e) Commercial(e) pour développer activement notre présence sur le marché français.',
        responsibilities: {
          title: 'Description du poste',
          items: [
            'Développer et entretenir un portefeuille de clients dans les secteurs ferroviaire et du transport urbain en France',
            'Prospecter de nouveaux marchés et identifier des opportunités commerciales',
            'Promouvoir les solutions de HT-Viva auprès des acteurs locaux : opérateurs ferroviaires, intégrateurs, constructeurs de matériel roulant, etc.',
            'Assurer le suivi des projets, de la prospection initiale à la signature des contrats',
            'Travailler en étroite collaboration avec les équipes techniques et marketing basées en Chine pour adapter les offres aux besoins locaux',
            'Représenter l\'entreprise lors d\'événements professionnels (salons, conférences, etc.)'
          ]
        },
        requirements: {
          title: 'Profil recherché',
          items: [
            'Expérience réussie de 1 à 2 ans minimum dans la vente BtoB, idéalement dans les secteurs ferroviaire, transport ou équipements industriels',
            'Bonne connaissance des circuits de décision dans le secteur industriel en France',
            'Excellentes compétences en prospection, négociation et relation client',
            'Maîtrise professionnelle du français et de l\'anglais, à l\'oral comme à l\'écrit',
            'Autonomie, sens de l\'initiative et forte orientation résultats',
            'Une première expérience avec des entreprises asiatiques serait un plus'
          ]
        },
        offer: {
          title: 'Ce que nous offrons',
          items: [
            'L\'opportunité de rejoindre une entreprise à fort potentiel en Europe',
            'Un environnement international, dynamique et en pleine croissance',
            'Un package attractif composé d\'un fixe et d\'un variable motivant, en fonction des résultats'
          ]
        }
      },
      companyNews: {
        title: 'Actualités de l\'entreprise',
        innotrans: {
          title: 'HT-VIVA est présent sur INNOTRANS – le salon mondial du transport ferroviaire à Berlin',
          date: 'du 24 au 27 Septembre',
          description: 'Nos équipes commerciales et techniques se relayeront sur place pour vous accueillir, vous présenter nos produits et écouter vos projets.'
        }
      }
    }
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    
    let result: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k as keyof typeof result];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key itself if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
