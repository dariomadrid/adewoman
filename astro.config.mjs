// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  
  // Removed i18n configuration to prevent automatic redirects
  
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
});