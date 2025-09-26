<template>
  <section class="bg-accent">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      
      <!-- Left Image -->
      <div class="order-1 md:order-1">
        <div class="relative w-full h-full">
          <img 
            src="/img/adw_aw.jpg" 
            alt="Jéssica González Sánchez - Fisioterapeuta especialista en salud femenina"
            class="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="order-2 md:order-2 flex items-center">
        <div class="text-primary px-10 pb-10">
          <h2 class="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            {{ t('home.quisoc.title') }}
          </h2>
          
          <p class="text-primary text-xl md:text-2xl text-justify mb-6 leading-relaxed">
            {{ t('home.quisoc.intro') }}
          </p>
          
          <p class="text-primary text-xl md:text-2xl text-justify mb-6 leading-relaxed">
            {{ t('home.quisoc.introDescription1') }}
          </p>
          
          <p class="text-primary text-xl md:text-2xl text-justify leading-relaxed">
            {{ t('home.quisoc.introDescription2') }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { t, getCurrentLang } from '../config/i18n.js';

export default {
  name: 'quisoc',
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