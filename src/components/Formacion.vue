<template>
  <!-- Formación -->
  <section class="py-16 px-6 bg-accent-dark">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
      
      <!-- Left Content -->
      <div class="text-light order-2 md:order-1 flex flex-col justify-center pl-5">
        <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          {{ t('home.formacio.title') }}
        </h2>
        
        <ul class="text-xl md:text-2xl space-y-2 leading-relaxed">
          <li v-for="item in t('home.formacio.items')" :key="item" class="flex items-start">
            <span class="text-light mr-3">•</span>
            <span class="text-light">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Right Image -->
      <div class="flex justify-center md:justify-end order-1 md:order-2 items-center">
        <div class="relative w-full max-w-md md:max-w-none h-full">
          <img 
            src="/img/adw_formacio.jpg" 
            alt="Fisioterapeuta especialista en salud femenina"
            class="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover rounded-3xl shadow-2xl border-8 border-white"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { t, getCurrentLang } from '../config/i18n.js';

export default {
  name: 'Formacion',
  props: {
    lang: {
      type: String,
      default: 'ca'
    }
  },
  computed: {
    currentLang() {
      return this.lang || getCurrentLang();
    }
  },
  methods: {
    t(key) {
      return t(key, this.currentLang);
    }
  }
}
</script>

<style scoped>
/* Formacion section specific styles */
.text-light {
  color: #f7fafc;
}

/* Responsive image styling */
.relative img {
  transition: transform 0.3s ease;
}

.relative:hover img {
  transform: scale(1.02);
}

/* List styling */
ul li {
  transition: opacity 0.3s ease;
}

ul:hover li:not(:hover) {
  opacity: 0.7;
}
</style>