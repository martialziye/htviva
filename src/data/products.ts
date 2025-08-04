// Import all product images
import screen17HT0003 from '/src/public/asset/img/screen/17-HT-0003.png';
import screen7HT2505 from '/src/public/asset/img/screen/7-HT-2505.png';
import screen10HT1419 from '/src/public/asset/img/screen/10-HT-1419-s2s5.png';
import screen10HTEPC419 from '/src/public/asset/img/screen/10-HT-EPC-419.png';
import screen12HT1408S from '/src/public/asset/img/screen/12-HT-1408-S.png';
import screen12HT1503 from '/src/public/asset/img/screen/12-HT-1503.png';

// Product data configuration
export const productsData = {
  '17-HT-0003': {
    id: '17-HT-0003',
    name: '17-HT-0003',
    image: screen17HT0003,
    descriptions: {
      en: [
        'The 17-HT-0003 is a high-performance 17.3-inch industrial display with Intel® N3160 1.6 GHz processor.',
        'Features a robust aluminum alloy casing with IP65 front panel and IP54 rear panel protection.',
        'Advanced light sensing with 1-100 Lux range and 5-level automatic brightness control (0-400cd/m²).',
        'Rich connectivity with 6x Network ports, 4x TRDP, 4x MVB, and overall heat dissipation design without fan.'
      ],
      fr: [
        'Le 17-HT-0003 est un écran industriel 17,3 pouces haute performance avec processeur Intel® N3160 1.6 GHz.',
        'Doté d\'un boîtier en alliage d\'aluminium robuste avec protection IP65 en façade et IP54 à l\'arrière.',
        'Détection de lumière avancée avec plage 1-100 Lux et contrôle automatique de luminosité à 5 niveaux (0-400cd/m²).',
        'Connectivité riche avec 6x ports réseau, 4x TRDP, 4x MVB, et conception de dissipation thermique globale sans ventilateur.'
      ]
    },
    specs: {
      display: {
        en: { title: 'Display & Physical', items: [
          'Size: 17.3 inches',
          'Resolution: 1920x1080 Full HD',
          'Brightness: 400 cd/m²',
          'Touch Screen: Resistive touchscreen',
          'Dimensions: 476mm W x 256mm H x 70mm D',
          'Weight: Less than 10kg',
          'Casing: Aluminum alloy',
          'Protection: Front panel IP65 / rear panel IP54',
          'Light Sensing: 5-level brightness control (1-100 Lux range)',
          'Status Indicator: 1x Green LED'
        ]},
        fr: { title: 'Affichage & Physique', items: [
          'Taille : 17,3 pouces',
          'Résolution : 1920x1080 Full HD',
          'Luminosité : 400 cd/m²',
          'Écran tactile : Tactile résistif',
          'Dimensions : 476mm L x 256mm H x 70mm P',
          'Poids : Moins de 10kg',
          'Boîtier : Alliage d\'aluminium',
          'Protection : Façade IP65 / arrière IP54',
          'Détection lumière : Contrôle de luminosité à 5 niveaux (plage 1-100 Lux)',
          'Indicateur d\'état : 1x LED verte'
        ]}
      },
      interface: {
        en: { title: 'System & Interface', items: [
          'CPU: Intel® N3160 1.6 GHz',
          'Memory: 4GB',
          'Storage: 16GB',
          'OS: Ubuntu 16.04',
          'Network: 6x M12',
          'TRDP: 4x M12',
          'MVB: 4x DB9',
          'USB: 2x M8',
          'Power Input: 72VDC ±30% (50.4VDC~143VDC)',
          'Rated Power: 60W',
          'Watchdog: Hardware watchdog (1-255s timeout)'
        ]},
        fr: { title: 'Système & Interface', items: [
          'CPU : Intel® N3160 1.6 GHz',
          'Mémoire : 4GB',
          'Stockage : 16GB',
          'OS : Ubuntu 16.04',
          'Réseau : 6x M12',
          'TRDP : 4x M12',
          'MVB : 4x DB9',
          'USB : 2x M8',
          'Alimentation : 72VDC ±30% (50.4VDC~143VDC)',
          'Puissance nominale : 60W',
          'Watchdog : Watchdog matériel (timeout 1-255s)'
        ]}
      }
    }
  },
  '7-HT-2505': {
    id: '7-HT-2505',
    name: '7-HT-2505',
    image: screen7HT2505,
    descriptions: {
      en: [
        'The 7-HT-2505 is a high-performance 7-inch industrial display with Intel® N3160 1.6 GHz processor.',
        'Features a robust aluminum alloy casing with IP65 front panel and IP54 rear panel protection.',
        'Overall heat dissipation design without fan for reliable operation in industrial environments.',
        'Perfect for industrial control panels, HMI applications, and embedded systems requiring reliable display solutions.'
      ],
      fr: [
        'Le 7-HT-2505 est un écran industriel 7 pouces haute performance avec processeur Intel® N3160 1.6 GHz.',
        'Doté d\'un boîtier en alliage d\'aluminium robuste avec protection IP65 en façade et IP54 à l\'arrière.',
        'Conception de dissipation thermique globale sans ventilateur pour un fonctionnement fiable en environnement industriel.',
        'Parfait pour les panneaux de contrôle industriels, les applications IHM et les systèmes embarqués nécessitant des solutions d\'affichage fiables.'
      ]
    },
    specs: {
      display: {
        en: { title: 'Display & Physical', items: [
          'Size: 7 inches',
          'Resolution: 800x480',
          'Touch Screen: Resistive touchscreen',
          'Dimensions: 195mm W x 140mm H x 72mm D',
          'Weight: Less than 3kg',
          'Casing: Aluminum alloy',
          'Protection: Front panel IP65 / rear panel IP54',
          'Light Sensing: 5-level backlight brightness control'
        ]},
        fr: { title: 'Affichage & Physique', items: [
          'Taille : 7 pouces',
          'Résolution : 800x480',
          'Écran tactile : Tactile résistif',
          'Dimensions : 195mm L x 140mm H x 72mm P',
          'Poids : Moins de 3kg',
          'Boîtier : Alliage d\'aluminium',
          'Protection : Façade IP65 / arrière IP54',
          'Détection lumière : Contrôle de luminosité à 5 niveaux'
        ]}
      },
      interface: {
        en: { title: 'System & Interface', items: [
          'CPU: Intel® N3160 1.6 GHz',
          'Memory: 4GB',
          'Storage: 16GB',
          'OS: Linux',
          'Network: 2x M12',
          'USB: 2x M8',
          'Audio: 2x Rear speakers',
          'Power: 24VDC / 30W rated',
          'Watchdog: Hardware watchdog (1-255s timeout)'
        ]},
        fr: { title: 'Système & Interface', items: [
          'CPU : Intel® N3160 1.6 GHz',
          'Mémoire : 4GB',
          'Stockage : 16GB',
          'OS : Linux',
          'Réseau : 2x M12',
          'USB : 2x M8',
          'Audio : 2x Haut-parleurs arrière',
          'Alimentation : 24VDC / 30W nominal',
          'Watchdog : Watchdog matériel (timeout 1-255s)'
        ]}
      }
    }
  },
  '10-HT-1419-s2s5': {
    id: '10-HT-1419-s2s5',
    name: '10-HT-1419-s2s5',
    image: screen10HT1419,
    descriptions: {
      en: [
        'The 10-HT-1419-s2s5 industrial display delivers exceptional performance for demanding applications.',
        'Advanced 10-inch display technology with superior image quality and reliability.',
        'Designed for industrial environments with rugged construction and long service life.',
        'Ideal for process control, automation systems, and industrial monitoring applications.'
      ],
      fr: [
        'L\'écran industriel 10-HT-1419-s2s5 offre des performances exceptionnelles pour les applications exigeantes.',
        'Technologie d\'affichage 10 pouces avancée avec une qualité d\'image et une fiabilité supérieures.',
        'Conçu pour les environnements industriels avec une construction robuste et une longue durée de vie.',
        'Idéal pour le contrôle de processus, les systèmes d\'automatisation et les applications de surveillance industrielle.'
      ]
    },
    specs: {
      display: {
        en: { title: 'Display', items: [
          'Size: 10.1 inches',
          'Resolution: 1280x800 WXGA',
          'Brightness: 350 cd/m²',
          'Contrast Ratio: 500:1',
          'Viewing Angle: 170°/170°'
        ]},
        fr: { title: 'Affichage', items: [
          'Taille : 10,1 pouces',
          'Résolution : 1280x800 WXGA',
          'Luminosité : 350 cd/m²',
          'Rapport de contraste : 500:1',
          'Angle de vision : 170°/170°'
        ]}
      },
      interface: {
        en: { title: 'Interface', items: [
          'Touch: Multi-touch capacitive',
          'USB: 2x USB 2.0',
          'Ethernet: 10/100 Mbps',
          'Serial: RS232/RS485',
          'Video: HDMI, VGA'
        ]},
        fr: { title: 'Interface', items: [
          'Tactile : Capacitif multi-touch',
          'USB : 2x USB 2.0',
          'Ethernet : 10/100 Mbps',
          'Série : RS232/RS485',
          'Vidéo : HDMI, VGA'
        ]}
      }
    }
  },
  '10-HT-EPC-419': {
    id: '10-HT-EPC-419',
    name: '10-HT-EPC-419',
    image: screen10HTEPC419,
    descriptions: {
      en: [
        'The 10-HT-EPC-419 is an advanced 10.4-inch industrial display with Intel® N2600 processor and embedded PC capabilities.',
        'Features a robust aluminum alloy casing with IP65 front panel and IP54 rear panel protection.',
        'High brightness display of 1200cd/m² with 5-level automatic brightness control.',
        'Overall heat dissipation design without fan for reliable operation in industrial environments.'
      ],
      fr: [
        'Le 10-HT-EPC-419 est un écran industriel 10.4 pouces avancé avec processeur Intel® N2600 et capacités PC embarquées.',
        'Doté d\'un boîtier en alliage d\'aluminium robuste avec protection IP65 en façade et IP54 à l\'arrière.',
        'Écran haute luminosité de 1200cd/m² avec contrôle automatique de la luminosité à 5 niveaux.',
        'Conception de dissipation thermique globale sans ventilateur pour un fonctionnement fiable en environnement industriel.'
      ]
    },
    specs: {
      display: {
        en: { title: 'Display & Physical', items: [
          'Size: 10.4 inches',
          'Resolution: 800x600',
          'Brightness: 1200 cd/m²',
          'Touch Screen: Resistive touchscreen',
          'Dimensions: 310mm W x 227mm H x 65mm D',
          'Weight: Less than 5kg',
          'Casing: Aluminum alloy',
          'Protection: Front panel IP65 / rear panel IP54',
          'Light Sensing: 5-level backlight brightness control',
          'Status Indicator: 1x Green LED'
        ]},
        fr: { title: 'Affichage & Physique', items: [
          'Taille : 10,4 pouces',
          'Résolution : 800x600',
          'Luminosité : 1200 cd/m²',
          'Écran tactile : Tactile résistif',
          'Dimensions : 310mm L x 227mm H x 65mm P',
          'Poids : Moins de 5kg',
          'Boîtier : Alliage d\'aluminium',
          'Protection : Façade IP65 / arrière IP54',
          'Détection lumière : Contrôle de luminosité à 5 niveaux',
          'Indicateur d\'état : 1x LED verte'
        ]}
      },
      interface: {
        en: { title: 'System & Interface', items: [
          'CPU: Intel® N2600',
          'Memory: 2GB',
          'Storage: 8GB',
          'OS: Ubuntu/Linux/QNX',
          'Network: 2x M12',
          'USB: 2x M8',
          'Serial: 2x DB9',
          'Power Input: 72VDC ±30% (50.4VDC~143VDC)',
          'Rated Power: 30W',
          'Watchdog: Hardware watchdog (1-255s timeout)'
        ]},
        fr: { title: 'Système & Interface', items: [
          'CPU : Intel® N2600',
          'Mémoire : 2GB',
          'Stockage : 8GB',
          'OS : Ubuntu/Linux/QNX',
          'Réseau : 2x M12',
          'USB : 2x M8',
          'Série : 2x DB9',
          'Alimentation : 72VDC ±30% (50.4VDC~143VDC)',
          'Puissance nominale : 30W',
          'Watchdog : Watchdog matériel (timeout 1-255s)'
        ]}
      }
    }
  },
  '12-HT-1408-S': {
    id: '12-HT-1408-S',
    name: '12-HT-1408-S',
    image: screen12HT1408S,
    descriptions: {
      en: [
        'The 12-HT-1408-S is a premium 12.1-inch industrial display with Intel® N3160 1.6 GHz processor and high brightness of 1200cd/m².',
        'Features a robust aluminum alloy casing with IP65 front panel and IP54 rear panel protection.',
        'Advanced 5-wire resistive touch screen with 3H hardness and <10ms response time.',
        'Multi-color status indicators and overall heat dissipation design without fan for reliable operation.'
      ],
      fr: [
        'Le 12-HT-1408-S est un écran industriel 12,1 pouces haut de gamme avec processeur Intel® N3160 1.6 GHz et haute luminosité de 1200cd/m².',
        'Doté d\'un boîtier en alliage d\'aluminium robuste avec protection IP65 en façade et IP54 à l\'arrière.',
        'Écran tactile résistif 5 fils avancé avec dureté 3H et temps de réponse <10ms.',
        'Indicateurs d\'état multicolores et conception de dissipation thermique globale sans ventilateur pour un fonctionnement fiable.'
      ]
    },
    specs: {
      display: {
        en: { title: 'Display & Physical', items: [
          'Size: 12.1 inches',
          'Resolution: 1024x768',
          'Brightness: 1200 cd/m²',
          'Touch Screen: 5-wire resistive (3H hardness, <10ms response)',
          'Dimensions: 349mm W x 245mm H x 53mm D',
          'Weight: Less than 6kg',
          'Casing: Aluminum alloy',
          'Protection: Front panel IP65 / rear panel IP54',
          'Light Sensing: 5-level backlight brightness control',
          'Status Indicators: Red (Application), Yellow (Status), Blue (Control)'
        ]},
        fr: { title: 'Affichage & Physique', items: [
          'Taille : 12,1 pouces',
          'Résolution : 1024x768',
          'Luminosité : 1200 cd/m²',
          'Écran tactile : Résistif 5 fils (dureté 3H, réponse <10ms)',
          'Dimensions : 349mm L x 245mm H x 53mm P',
          'Poids : Moins de 6kg',
          'Boîtier : Alliage d\'aluminium',
          'Protection : Façade IP65 / arrière IP54',
          'Détection lumière : Contrôle de luminosité à 5 niveaux',
          'Indicateurs d\'état : Rouge (Application), Jaune (État), Bleu (Contrôle)'
        ]}
      },
      interface: {
        en: { title: 'System & Interface', items: [
          'CPU: Intel® N3160 1.6 GHz',
          'Memory: 4GB',
          'Storage: 16GB',
          'OS: Ubuntu 14.04',
          'Network: 2x M12',
          'USB: 2x M8',
          'Serial: 1x DB9',
          'Audio: 1x Port',
          'Power Input: 72VDC ±30% (50.4VDC~143VDC)',
          'Rated Power: 30W',
          'Watchdog: Hardware watchdog (1-255s timeout)'
        ]},
        fr: { title: 'Système & Interface', items: [
          'CPU : Intel® N3160 1.6 GHz',
          'Mémoire : 4GB',
          'Stockage : 16GB',
          'OS : Ubuntu 14.04',
          'Réseau : 2x M12',
          'USB : 2x M8',
          'Série : 1x DB9',
          'Audio : 1x Port',
          'Alimentation : 72VDC ±30% (50.4VDC~143VDC)',
          'Puissance nominale : 30W',
          'Watchdog : Watchdog matériel (timeout 1-255s)'
        ]}
      }
    }
  },
  '12-HT-1503': {
    id: '12-HT-1503',
    name: '12-HT-1503',
    image: screen12HT1503,
    descriptions: {
      en: [
        'The 12-HT-1503 is a robust 12.1-inch industrial display with Intel® N2600 processor and high brightness of 1200cd/m².',
        'Features a rugged aluminum alloy casing with IP65 front panel and IP54 rear panel protection.',
        'Advanced 4-wire resistive touch screen with 3H hardness and <10ms response time.',
        'Overall heat dissipation design without fan for reliable operation in industrial environments.'
      ],
      fr: [
        'Le 12-HT-1503 est un écran industriel 12,1 pouces robuste avec processeur Intel® N2600 et haute luminosité de 1200cd/m².',
        'Doté d\'un boîtier en alliage d\'aluminium robuste avec protection IP65 en façade et IP54 à l\'arrière.',
        'Écran tactile résistif 4 fils avancé avec dureté 3H et temps de réponse <10ms.',
        'Conception de dissipation thermique globale sans ventilateur pour un fonctionnement fiable en environnement industriel.'
      ]
    },
    specs: {
      display: {
        en: { title: 'Display & Physical', items: [
          'Size: 12.1 inches',
          'Resolution: 1024x768',
          'Brightness: 1200 cd/m²',
          'Touch Screen: 4-wire resistive (3H hardness, <10ms response)',
          'Dimensions: 349mm W x 245mm H x 80mm D',
          'Weight: Less than 5.5kg',
          'Casing: Aluminum alloy',
          'Protection: Front panel IP65 / rear panel IP54',
          'Light Sensing: 5-level backlight brightness control',
          'Status Indicator: 1x Green LED'
        ]},
        fr: { title: 'Affichage & Physique', items: [
          'Taille : 12,1 pouces',
          'Résolution : 1024x768',
          'Luminosité : 1200 cd/m²',
          'Écran tactile : Résistif 4 fils (dureté 3H, réponse <10ms)',
          'Dimensions : 349mm L x 245mm H x 80mm P',
          'Poids : Moins de 5,5kg',
          'Boîtier : Alliage d\'aluminium',
          'Protection : Façade IP65 / arrière IP54',
          'Détection lumière : Contrôle de luminosité à 5 niveaux',
          'Indicateur d\'état : 1x LED verte'
        ]}
      },
      interface: {
        en: { title: 'System & Interface', items: [
          'CPU: Intel® N2600',
          'Memory: 2GB',
          'Storage: 2GB',
          'OS: RedHat 2.6.18',
          'Network: 2x M12',
          'USB: 2x M8',
          'MVB: 2x DB9',
          'Power Input: 72VDC ±30% (50.4VDC~143VDC)',
          'Rated Power: 30W',
          'Watchdog: Hardware watchdog (1-255s timeout)'
        ]},
        fr: { title: 'Système & Interface', items: [
          'CPU : Intel® N2600',
          'Mémoire : 2GB',
          'Stockage : 2GB',
          'OS : RedHat 2.6.18',
          'Réseau : 2x M12',
          'USB : 2x M8',
          'MVB : 2x DB9',
          'Alimentation : 72VDC ±30% (50.4VDC~143VDC)',
          'Puissance nominale : 30W',
          'Watchdog : Watchdog matériel (timeout 1-255s)'
        ]}
      }
    }
  }
} as const;

// Type for product data
export type ProductData = typeof productsData;
export type ProductId = keyof ProductData;