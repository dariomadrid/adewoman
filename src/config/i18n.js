// Internationalization configuration
export const defaultLang = 'ca';
export const languages = {
  ca: 'Català',
  es: 'Español'
};

// Translation keys and values
export const translations = {
  ca: {
    // Navigation
    navigation: {
      home: 'Inici',
      about: 'Sobre Mi',
      services: 'Serveis',
      portfolio: 'Casos Clínics',
      contact: 'Contacta\'m'
    },
    
    // Home page
    home: {
      hero: {
        slogan: 'Moviment sense dolor',
        title: 'Fisioteràpia Especialitzada',
        subtitle: 'Dedicada a millorar la qualitat de vida de les dones a través de tractaments personalitzats i una atenció integral centrada en el seu benestar.',
        cta: 'Reserva la teva cita'
      },
      about: {
        title: 'Qui soc',
        greeting: 'Hola! Soc AdE',
        description1: 'Soc una fisioterapeuta apassionada per ajudar a les dones a recuperar el seu benestar físic i emocional a través de tractaments personalitzats.',
        description2: 'La meva filosofia es basa en l\'escolta activa, el tracte humà i l\'aplicació de les tècniques més efectives per a cada persona i situació.',
        creativity: 'Empatia',
        cta: 'Reserva una cita',
        specialties: [
          'Fisioteràpia Musculoesquelètica',
          'Rehabilitació Postural',
          'Teràpia Manual',
          'Exercici Terapèutic',
          'Drenatge Limfàtic'
        ]
      },
      services: {
        title: 'Els meus serveis',
        subtitle: 'Tractaments especialitzats pensats per al benestar integral de cada dona',
        items: [
          {
            title: 'Fisioteràpia Musculoesquelètica',
            description: 'Tractament especialitzat per a dolors musculars, articulars i lesions esportives.'
          },
          {
            title: 'Rehabilitació Postural',
            description: 'Correcció de desequilibris posturals i prevenció de dolors crònics.'
          },
          {
            title: 'Teràpia Manual',
            description: 'Tècniques de mobilització articular i manipulació per a l\'alliberament de tensions.'
          },
          {
            title: 'Exercici Terapèutic',
            description: 'Plans d\'exercicis personalitzats per a la recuperació i el manteniment de la salut.'
          }
        ]
      },
      opinions: {
        title: '¿QUÉ CUENTAN DE NOSOTROS?'
      }
    },
    
    // Contact
    contact: {
      title: 'CONTACTA AMB MI',
      description: 'Especialista en fisioterapia per a la salut de la dona. Reserva la teva consulta i descobreix com puc ajudar-te.',
      form: {
        name: 'El teu nom',
        email: 'El teu correu electrònic',
        message: 'Explica\'m com et puc ajudar...',
        submit: 'Envia missatge',
        sending: 'Enviant...'
      },
      success: 'Missatge enviat correctament! Et contactaré aviat per programar la teva cita.',
      error: 'Error en enviar el missatge. Si us plau, torna-ho a intentar.',
      findMe: 'O troba\'m a:'
    },
    
    // Footer
    footer: {
      contact: {
        title: 'Contacta\'ns'
      },
      services: {
        title: 'Els nostres serveis'
      },
      legal: {
        title: 'Informació legal',
        notice: 'Avís legal',
        privacy: 'Política de privacitat',
        cookies: 'Política de cookies',
        terms: 'Termes i condicions'
      },
      copyright: 'Tots els drets reservats.'
    },
        
    // Common
    common: {
      loading: 'Carregant...',
      readMore: 'Llegir més',
      backToTop: 'Tornar a dalt',
      close: 'Tancar',
      next: 'Següent',
      previous: 'Anterior',
      image: 'Imatge',
      of: 'de',
      all: 'Tots'
    }
  },
  
  es: {
    // Navigation
    navigation: {
      home: 'Inicio',
      about: 'Sobre Mí',
      services: 'Servicios',
      contact: 'Contacta'
    },
    
    // Home page
    home: {
      hero: {
        slogan: 'Movimiento sin dolor',
        title: 'Fisioterapia Especializada',
        subtitle: 'Dedicada a mejorar la calidad de vida de las mujeres a través de tratamientos personalizados y una atención integral centrada en su bienestar.',
        cta: 'Reserva tu cita'
      },
      about: {
        title: 'Quién soy',
        greeting: '¡Hola! Soy AdE',
        description1: 'Soy una diseñadora gráfica apasionada por crear identidades visuales que reflejan la esencia auténtica de cada mujer emprendedora.',
        description2: 'Mi enfoque combina creatividad y estrategia para desarrollar diseños que no solo son hermosos, sino que también comunican con claridad e impacto.',
        creativity: 'Creatividad',
        cta: 'Trabajemos juntas',
        specialties: [
          'Identidad Visual',
          'Diseño Gráfico',
          'Branding Femenino',
          'Diseño Editorial',
          'Ilustración'
        ]
      },
      opinions: {
        title: 'Proyectos que me enorgullecen',
        subtitle: 'Mi portafolio',
        viewAll: 'Ver todos los proyectos'
      }
    },
        
    // Contact
    contact: {
      title: 'Contacta conmigo',
      description: 'Especialista en fisioterapia para la salud de la mujer. Reserva tu consulta y descubre cómo puedo ayudarte.',
      form: {
        name: 'Tu nombre',
        email: 'Tu correo electrónico',
        message: 'Cuéntame cómo puedo ayudarte...',
        submit: 'Enviar mensaje',
        sending: 'Enviando...'
      },
      success: '¡Mensaje enviado correctamente! Te contactaré pronto para programar tu cita.',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      findMe: 'O encuéntrame en:'
    },
    
    // Footer
    footer: {
      contact: {
        title: 'Contáctanos'
      },
      services: {
        title: 'Nuestros servicios'
      },
      legal: {
        title: 'Información legal',
        notice: 'Aviso legal',
        privacy: 'Política de privacidad',
        cookies: 'Política de cookies',
        terms: 'Términos y condiciones'
      },
      copyright: 'Todos los derechos reservados.'
    },    
    
    // Common
    common: {
      loading: 'Cargando...',
      readMore: 'Leer más',
      backToTop: 'Volver arriba',
      close: 'Cerrar',
      next: 'Siguiente',
      previous: 'Anterior',
      image: 'Imagen',
      of: 'de',
      all: 'Todos'
    }    
  }
};

// Helper functions
export function useTranslations(lang = defaultLang) {
  return translations[lang] || translations[defaultLang];
}

export function t(key, lang = null) {
  const currentLang = lang || getCurrentLang();
  const keys = key.split('.');
  let result = translations[currentLang] || translations[defaultLang];
  
  for (const k of keys) {
    result = result?.[k];
  }
  
  return result || key;
}

export function getLanguageFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}

export function localizedUrl(url, lang) {
  // Always prefix with language since Astro config uses prefixDefaultLocale: true
  return `/${lang}${url}`;
}

export function getAlternateLanguages(currentLang) {
  return Object.keys(languages).filter(lang => lang !== currentLang);
}

// Client-side language detection and management
export function getCurrentLang() {
  if (typeof window === 'undefined') return defaultLang;
  
  // Try to get from URL first
  const urlLang = getLanguageFromUrl(window.location);
  if (urlLang !== defaultLang) return urlLang;
  
  // Try to get from localStorage
  const saved = localStorage.getItem('preferred-language');
  if (saved && saved in languages) return saved;
  
  // Fall back to browser language
  const browserLang = navigator.language.split('-')[0];
  if (browserLang in languages) return browserLang;
  
  return defaultLang;
}

export function switchToLanguage(lang) {
  if (typeof window === 'undefined') return;
  
  if (lang in languages) {
    localStorage.setItem('preferred-language', lang);
  }
}

export function getLocalizedUrl(path, lang = null) {
  const targetLang = lang || getCurrentLang();
  return localizedUrl(path, targetLang);
}

export default { translations, useTranslations, t, languages, defaultLang };