# Multilingual System Implementation

## Overview
The site now supports multiple languages (Catalan and Spanish) with a centralized translation system.

## Key Components

### 1. i18n Configuration (`src/config/i18n.js`)
- **Translation Keys**: Organized hierarchically for easy maintenance
- **Helper Functions**: `t()`, `getCurrentLang()`, `switchToLanguage()`, `getLocalizedUrl()`
- **Language Detection**: Browser language, localStorage, and URL-based detection
- **Default Language**: Catalan (ca)
- **Supported Languages**: Catalan (ca), Spanish (es)

### 2. Site Configuration (`src/config/site.js`)
- **Multilingual Titles**: Site title and description in both languages
- **Navigation Keys**: Uses translation keys instead of hardcoded text
- **Language Settings**: `defaultLang`, `supportedLangs` properties

### 3. Language Switcher (`src/components/LanguageSwitcher.vue`)
- **UI Component**: Shows CA/ES buttons
- **Language Switching**: Updates localStorage and reloads page
- **Visual States**: Active/inactive button styling
- **Accessibility**: ARIA labels for screen readers

## Updated Components

### Navigation (`src/components/Navbar.vue`)
- ✅ Uses translation keys for all menu items
- ✅ Includes language switcher in desktop and mobile views
- ✅ Localizes URLs based on current language
- ✅ Composition API with reactive language detection

### Footer (`src/components/Footer.vue`)
- ✅ Translated section headings and content
- ✅ Localized legal links
- ✅ Dynamic service names from translations
- ✅ Multilingual copyright text

### Contact (`src/components/Contact.vue`)
- ✅ Form labels and placeholders translated
- ✅ Success/error messages localized
- ✅ Call-to-action text translated

### Pages
- ✅ `index.astro`: Uses translated page title
- ✅ `portfolio.astro`: Translated headings and descriptions
- ✅ `[id].astro`: Portfolio detail pages with localized content

## Translation Keys Structure

```
translations: {
  ca: {
    navigation: {
      home: 'Inici',
      about: 'Sobre Mi',
      services: 'Serveis',
      portfolio: 'Portafoli',
      contact: 'Contacta\'m'
    },
    pages: {
      home: { title: 'Inici - ABE Wild' },
      portfolio: { 
        title: 'Portafoli - ABE Wild',
        heading: 'El meu Portafoli',
        description: 'Una selecció dels meus projectes més destacats...'
      }
    },
    contact: {
      title: 'Treballem Junts!',
      form: {
        name: 'El teu nom',
        email: 'El teu correu electrònic',
        message: 'Explica\'m sobre el teu projecte...'
      }
    },
    footer: {
      contact: { title: 'Contacta\'ns' },
      services: { title: 'Els nostres serveis' },
      legal: { title: 'Informació legal' }
    }
  },
  es: {
    // Spanish translations...
  }
}
```

## Usage in Components

```javascript
// In Vue components
import { getCurrentLang, t, getLocalizedUrl } from '../config/i18n.js';

setup() {
  const currentLang = ref('ca');
  
  onMounted(() => {
    currentLang.value = getCurrentLang();
  });
  
  return { t, currentLang };
}
```

```html
<!-- In templates -->
<h1>{{ t('pages.home.title') }}</h1>
<a :href="getLocalizedUrl('/portfolio')">{{ t('navigation.portfolio') }}</a>
```

## Language Switching Flow

1. **User clicks language button** → `LanguageSwitcher.vue`
2. **Updates localStorage** → `switchToLanguage(lang)`
3. **Page reloads** → Fresh content in new language
4. **Components detect language** → `getCurrentLang()` reads from localStorage
5. **Content updates** → All `t()` calls use new language

## URL Localization (Future Enhancement)

The system is prepared for URL-based localization:
- Default language (ca): `/`, `/portfolio`
- Spanish: `/es/`, `/es/portfolio`

## Browser Language Detection

Automatically detects user's browser language and sets as default if supported.

## Maintenance

- **Adding new text**: Add to both `ca` and `es` sections in `i18n.js`
- **New languages**: Add to `languages` object and create translation section
- **Components**: Use `t('key')` instead of hardcoded text
- **URLs**: Use `getLocalizedUrl()` for all internal links

## Benefits

✅ **Centralized**: All translations in one file
✅ **Type-safe**: Translation keys prevent typos
✅ **Scalable**: Easy to add new languages
✅ **SEO-ready**: Prepared for localized URLs
✅ **User-friendly**: Remembers language preference
✅ **Accessible**: Proper ARIA labels and semantic HTML