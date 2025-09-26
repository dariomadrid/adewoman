<template>
  <section class="py-20 px-8 relative bg-gray-50">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-800">{{ t('home.services.title') }}</h2>
      <div class="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded"></div>
      <p class="mb-16 max-w-2xl mx-auto text-slate-600 text-lg">{{ t('home.services.subtitle') }}</p>
      
      <div class="grid md:grid-cols-4 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          ref="serviceItems"
          class="bg-white p-8 rounded-xl shadow-lg text-center group transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2"
          :style="{ 
            transitionDelay: service.isVisible ? `${index * 150}ms` : '0ms',
            filter: service.isVisible ? 'blur(0px)' : 'blur(8px)',
            opacity: service.isVisible ? 1 : 0.3,
            transform: service.isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
          }"
        >
          <!-- Icon -->
          <div class="mb-6 flex justify-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <component :is="service.icon" class="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <!-- Title -->
          <h3 class="text-xl font-semibold mb-4 text-slate-800">{{ service.title }}</h3>
          
          <!-- Description -->
          <p class="text-sm leading-relaxed text-slate-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Activity, Users, Heart, Target } from 'lucide-vue-next'
import { t } from '../config/i18n.js'

export default {
  name: 'Services',
  components: {
    Activity,
    Users,
    Heart,
    Target
  },
  data() {
    return {
      services: [
        {
          icon: 'Activity',
          title: 'Fisioteràpia Musculoesquelètica',
          description: 'Tractament especialitzat per a dolors musculars, articulars i lesions esportives.',
          isVisible: false
        },
        {
          icon: 'Users',
          title: 'Rehabilitació Postural',
          description: 'Correcció de desequilibris posturals i prevenció de dolors crònics.',
          isVisible: false
        },
        {
          icon: 'Heart',
          title: 'Teràpia Manual',
          description: 'Tècniques de mobilització articular i manipulació per a l\'alliberament de tensions.',
          isVisible: false
        },
        {
          icon: 'Target',
          title: 'Exercici Terapèutic',
          description: 'Plans d\'exercicis personalitzats per a la recuperació i el manteniment de la salut.',
          isVisible: false
        }
      ]
    }
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    t,
    setupIntersectionObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const index = Array.from(this.$refs.serviceItems).indexOf(entry.target);
            if (index !== -1 && entry.isIntersecting) {
              this.services[index].isVisible = true;
            }
          });
        }, {
          threshold: 0.2, // Trigger when 20% of the item is visible
          rootMargin: '0px 0px -10% 0px' // Items need to be a bit into viewport
        });

        this.$nextTick(() => {
          if (this.$refs.serviceItems) {
            this.$refs.serviceItems.forEach(item => {
              this.observer.observe(item);
            });
          }
        });
      }
    }
  }
}
</script>