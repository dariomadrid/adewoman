<template>
  <!-- ¿Por qué Elegirnos? -->
  <section class="bg-accent">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      
      <!-- Left Image (50% width) -->
      <div class="order-1 md:order-1">
        <div class="relative w-full h-full">
          <img 
            src="/img/adw_tattoo.jpg" 
            alt="Jess - Adewoman Fisioterapia"
            class="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover"
          />
        </div>
      </div>

      <!-- Right Content (50% width) -->
      <div class="order-2 md:order-2 flex items-center">
        <div class="text-primary px-10 pb-10">
          <h2 class="font-barlow text-primary text-3xl md:text-5xl lg:text-5xl font-bold mb-8">
            {{ t('home.elegirnos.title') }}
          </h2>
          
          <p class="text-primary text-xl md:text-2xl text-justify mb-6 leading-relaxed">
            {{ t('home.elegirnos.description1') }}
          </p>
          
          <p class="text-primary text-xl md:text-2xl mb-6 leading-relaxed">
            {{ t('home.elegirnos.description2') }}
          </p>
          
          <p class="text-primary text-xl md:text-2xl text-justify leading-relaxed">
            {{ t('home.elegirnos.description3') }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { t, getCurrentLang } from '../config/i18n.js';

export default {
  name: 'WhyChooseUs',
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
/* WhyChooseUs section specific styles */
.text-primary {
  color: #2d3748;
}

.bg-accent {
  background-color: #f7fafc;
}

/* Image hover effects */
.relative img {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.relative:hover img {
  transform: scale(1.02);
  filter: brightness(1.05);
}

/* Text content animations */
.text-primary p {
  transition: opacity 0.3s ease;
}

/* Responsive text alignment */
@media (max-width: 768px) {
  .text-justify {
    text-align: left;
  }
  
  .px-10 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>