# Site Configuration Guide

This project uses a centralized configuration system to manage all site information from a single source.

## Configuration File

All site data is stored in `/src/config/site.js` and includes:

- **Basic site information** (name, title, description)
- **Contact information** (email, phone, address)
- **Social media links** (Instagram, LinkedIn, Behance, etc.)
- **Legal information** (privacy policy, terms, etc.)
- **Business information** (services, specialties)
- **Navigation structure** (main nav, footer nav)
- **SEO metadata** (default titles, descriptions, keywords)
- **Contact form configuration** (subjects, budget ranges)

## How to Use

### 1. Import the configuration in your component:

```javascript
import siteConfig, { getSocialLinks, getNavigationItems } from '../config/site.js';
```

### 2. Add to component data or use directly:

```javascript
export default {
  data() {
    return {
      siteConfig
    }
  }
}
```

### 3. Use in templates:

```vue
<template>
  <!-- Site name -->
  <h1>{{ siteConfig.name }}</h1>
  
  <!-- Contact email -->
  <a :href="`mailto:${siteConfig.contact.email}`">
    {{ siteConfig.contact.email }}
  </a>
  
  <!-- Social links -->
  <a 
    v-for="social in getSocialLinks()" 
    :key="social.label"
    :href="social.url"
  >
    {{ social.label }}
  </a>
  
  <!-- Navigation items -->
  <nav>
    <a 
      v-for="item in getNavigationItems('main')" 
      :key="item.label"
      :href="item.href"
    >
      {{ item.label }}
    </a>
  </nav>
</template>
```

## Helper Functions

The configuration includes several helper functions:

- `getSocialLinks()` - Returns all social media links
- `getNavigationItems(section)` - Returns navigation items for a specific section
- `getServiceById(id)` - Returns a specific service by ID
- `formatAddress()` - Returns formatted address string
- `getPageTitle(pageTitle)` - Returns formatted page title

## Updating Information

To update any site information:

1. Edit `/src/config/site.js`
2. All components using the configuration will automatically update
3. No need to search and replace across multiple files

## Examples of Updated Components

- **Navbar.vue** - Uses navigation items and site name
- **Footer.vue** - Uses contact info, social links, legal links, and services
- **Contact.vue** - Uses contact information and social links

## Benefits

✅ **Centralized management** - Update once, change everywhere
✅ **Consistency** - Same data across all components
✅ **Easy maintenance** - No more hunting for hardcoded values
✅ **Type safety** - Clear structure for all site data
✅ **Scalability** - Easy to add new configuration options

## Adding New Configuration

To add new configuration options:

1. Add the new property to `siteConfig` object in `/src/config/site.js`
2. Create helper functions if needed
3. Import and use in your components

Example:
```javascript
// In site.js
export const siteConfig = {
  // ... existing config
  analytics: {
    googleAnalyticsId: 'GA-XXXXXXX',
    facebookPixelId: 'FB-XXXXXXX'
  }
};

// In component
<script>
import siteConfig from '../config/site.js';

export default {
  mounted() {
    // Use analytics IDs
    if (siteConfig.analytics.googleAnalyticsId) {
      // Initialize Google Analytics
    }
  }
}
</script>
```

This system makes the codebase much more maintainable and professional! 🚀