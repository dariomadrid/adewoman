<template>
  <section id="centro-especializado" class="py-16 px-6 bg-accent-dark animate-on-scroll">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      
      <!-- Left Content -->
      <div class="text-light order-1 md:order-1 animate-on-scroll animate-slide-left">
        <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-5xl font-bold mb-8 animate-on-scroll stagger-1">
          {{ t('home.centro.title') }}
        </h2>
        
        <p class="text-light text-xl md:text-2xl mb-8 leading-relaxed animate-on-scroll stagger-2">
          {{ t('home.centro.description') }}
        </p>
        
        <ul class="text-xl md:text-2xl space-y-3 leading-relaxed">
          <li v-for="service in t('home.centro.services')" :key="service" class="flex items-start">
            <span class="text-light mr-3">•</span>
            <span class="text-light">{{ service }}</span>
          </li>
        </ul>
      </div>

      <!-- Right Image -->
      <div class="flex justify-center md:justify-end order-2 md:order-2">
        <div class="relative w-full max-w-md md:max-w-lg">
          <img 
            src="/img/adw_pelvis2.jpg" 
            alt="Centro especializado en fisioterapia para la mujer"
            class="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[700px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { t } from '../config/i18n.js';

export default {
  name: 'Centro',
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  methods: {
    t(key) {
      return t(key, this.lang);
    }
  }
}
</script>

<style scoped>
/* Centro-specific styles */
</style>