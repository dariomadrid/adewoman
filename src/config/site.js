// Central site configuration
import { defaultLang, translations } from './i18n.js';

export const siteConfig = {
  // Basic site information
  name: "ADEWOMAN",  
  title: {
    ca: "ADEWOMAN - Fisioteràpia",
    es: "ADEWOMAN - Fisioterapia"
  },
  description: {
    ca: "Fisioteràpia especialitzada per a dones. Tractaments personalitzats per al dolor, rehabilitació i benestar integral.",
    es: "Fisioterapia especializada para mujeres. Tratamientos personalizados para el dolor, rehabilitación y bienestar integral."
  },
  url: "https://adefisio.com",
  defaultLang: defaultLang,
  supportedLangs: ['ca', 'es'],
  
  // Contact information
  contact: {
    email: "info@adefisio.com",
    phone: "+34 625 789 456",
    address: {
      street: "Carrer Marquès de Caldes de Montbuí, 62",
      city: "Girona",
      postalCode: "17003",
      country: "Espanya"
    }
  },
  
  // Social media links
  social: {
    instagram: {
      url: "https://instagram.com/adewomanfisioterapia",
      username: "@adewomanfisioterapia",
      label: "Instagram"
    },
    linkedin: {
      url: "https://linkedin.com/in/adewoman-fisioterapia",
      username: "adewoman-fisioterapia",
      label: "LinkedIn"
    }
  },
  
  // Legal information
  legal: {
    privacyPolicy: "/politica-privacitat",
    termsOfService: "/termes-servei",
    cookiePolicy: "/politica-cookies",
    legalNotice: "/avis-legal"
  },
  
  // Business information
  business: {
    founded: "2018",
    specialties: [
      "Fisioteràpia Musculoesquelètica",
      "Rehabilitació Postural",
      "Teràpia Manual",
      "Exercici Terapèutic",
      "Drenatge Limfàtic"
    ],
    services: [
      {
        id: "musculoskeletal",
        name: "Fisioteràpia Musculoesquelètica",
        description: "Tractament especialitzat per a dolors musculars, articulars i lesions esportives."
      },
      {
        id: "postural-rehab",
        name: "Rehabilitació Postural",
        description: "Correcció de desequilibris posturals i prevenció de dolors crònics."
      },
      {
        id: "manual-therapy",
        name: "Teràpia Manual",
        description: "Tècniques de mobilització articular i manipulació per a l'alliberament de tensions."
      },
      {
        id: "therapeutic-exercise",
        name: "Exercici Terapèutic",
        description: "Plans d'exercicis personalitzats per a la recuperació i el manteniment de la salut."
      }
    ]
  },
  
  // Navigation structure
  navigation: {
    main: [
      { name: "navigation.home", href: "/" },
      { name: "navigation.about", href: "/#about" },
      { name: "navigation.services", href: "/#services" },
      { name: "navigation.portfolio", href: "/#works" }
    ],
    footer: [
      { name: "navigation.home", href: "/" },
      { name: "navigation.portfolio", href: "/#works" },
      { name: "navigation.services", href: "/#services" }
    ]
  },
  
  // SEO and meta data
  seo: {
    defaultTitle: "AdE Fisio - Fisioteràpia Especialitzada per a Dones",
    titleTemplate: "%s | AdE Fisio",
    defaultDescription: "Fisioteràpia especialitzada per a dones. Tractaments personalitzats per al dolor, rehabilitació i benestar integral a Barcelona.",
    defaultKeywords: [
      "fisioteràpia",
      "fisioterapeuta",
      "rehabilitació",
      "teràpia manual",
      "dolor muscular",
      "Barcelona",
      "dones",
      "benestar",
      "salut"
    ],
    ogImage: "/og-image.jpg",
    twitterCard: "summary_large_image"
  },
  
  // Theme and styling
  theme: {
    primaryColor: "#2D5A87",
    accentColor: "#68A0C4",
    backgroundColor: "#F8FAFB"
  },
  
  // Contact form configuration
  forms: {
    contact: {
      subjects: [
        "Consulta General",
        "Primera Visita",
        "Dolor Muscular",
        "Rehabilitació",
        "Teràpia Manual",
        "Altres"
      ],
      scheduleOptions: [
        "Matí (9:00 - 13:00)",
        "Tarda (15:00 - 19:00)",
        "Vespre (19:00 - 21:00)",
        "Cap de setmana",
        "Flexible"
      ]
    }
  }
};

// Helper functions
export const getSocialLinks = () => {
  return Object.values(siteConfig.social);
};

export const getNavigationItems = (section = 'main') => {
  return siteConfig.navigation[section] || [];
};

export const getServiceById = (id) => {
  return siteConfig.business.services.find(service => service.id === id);
};

export const formatAddress = () => {
  const { address } = siteConfig.contact;
  return `${address.street}, ${address.city} ${address.postalCode}, ${address.country}`;
};

export const getPageTitle = (pageTitle) => {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return siteConfig.seo.titleTemplate.replace('%s', pageTitle);
};

export default siteConfig;