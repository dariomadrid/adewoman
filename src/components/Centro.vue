<template>
  <section id="centro-especializado" class="py-16 px-6 bg-accent-dark animate-on-scroll">
    <div class="max-w-7xl mx-auto">
      
      <!-- Two Column Layout: Left (title + cards), Right (image) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Title and Cards -->
        <div>
          <h2 class="font-barlow text-light text-3xl md:text-5xl lg:text-5xl font-bold mb-2 animate-on-scroll stagger-1">
            {{ t('home.centro.title') }}
          </h2>
          <p class="text-light text-xl md:text-1xl max-w-3xl leading-relaxed mb-8 animate-on-scroll stagger-2">
            {{ t('home.centro.description') }}
          </p>
          <div class="grid grid-cols-1 gap-4">
            <div 
              v-for="(service, index) in t('home.centro.services')" 
              :key="service" 
              class="bg-white/10 rounded-xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-on-scroll"
              :class="`stagger-${index + 3}`"
            >
              <h3 class="text-light font-barlow text-base md:text-lg font-semibold leading-tight text-center">
                {{ service }}
              </h3>
            </div>
          </div>
        </div>
        <!-- Right Column: Only Image -->
        <div class="flex justify-center">
          <div class="relative w-full max-w-2xl">
            <img 
              src="/img/sessio/4.jpg" 
              alt="Centro especializado en fisioterapia para la mujer"
              class="w-full h-auto min-h-[400px] md:min-h-[600px] max-h-[700px] object-cover rounded-3xl shadow-2xl border-4 border-white/30"
            />
          </div>
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