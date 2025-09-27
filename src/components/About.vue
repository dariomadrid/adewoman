<template>
  <!-- About -->
  <section id="about" class="py-16 px-6 bg-accent-dark animate-on-scroll">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
      
      <!-- Left Content -->
      <div class="text-light order-2 md:order-1 text-justify animate-on-scroll animate-slide-left">
        <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-on-scroll stagger-1">
          {{ t('home.about.title') }}
        </h2>
        
        <h4 class="font-barlow text-light text-2xl md:text-2xl lg:text-2xl font-semibold mb-6 animate-on-scroll stagger-2">
          {{ t('home.about.subtitle') }}
        </h4>
        
        <p class="text-xl md:text-2xl mb-6">
          {{ t('home.about.intro') }}
        </p>
        
        <p class="text-xl md:text-2xl mb-6 leading-relaxed">
          {{ t('home.about.introDescription1') }}
        </p>
        
        <p class="text-xl md:text-2xl mb-6 leading-relaxed">
          {{ t('home.about.introDescription2') }}
        </p>
        
        <p class="text-xl md:text-2xl leading-relaxed">
          {{ t('home.about.introConclusion') }}
        </p>
      </div>

      <!-- Right Image -->
      <div class="flex justify-center md:justify-end order-1 md:order-2">
        <div class="relative w-full max-w-md md:max-w-none">
          <img 
            src="/img/adw_pelvis.jpg" 
            alt="Fisioterapeuta especialista en salud femenina"
            class="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover rounded-3xl shadow-2xl border-8 border-white"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { t, getCurrentLang } from '../config/i18n.js';

export default {
  name: 'About',
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
/* About section specific styles */
.animate-on-scroll {
  transition: all 0.6s ease-out;
}

.animate-slide-left {
  animation: slideInFromLeft 0.8s ease-out;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>