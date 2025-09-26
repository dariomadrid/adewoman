<template>
  <section class="py-12 md:py-20 px-4 md:px-8 bg-accent relative animate-on-scroll">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-primary animate-on-scroll stagger-1">{{ t('home.opinions.title') }}</h2>
      
      <!-- Debug info (remove after testing) -->
      <div class="mb-4 text-sm text-primary/70">
        Screen: {{ windowWidth }}px | Items: {{ itemsPerSlide }} | Slide: {{ currentSlide + 1 }}/{{ totalSlides }}
      </div>
            
      <!-- Carousel Container -->
      <div class="relative w-full animate-on-scroll stagger-2">
        <!-- Carousel Wrapper -->
        <div 
          class="overflow-hidden rounded-2xl animate-on-scroll stagger-3"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <!-- Mobile View: Single Carousel -->
          <div 
            v-if="windowWidth < 768"
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ 
              transform: `translateX(-${currentSlide * 100}%)` 
            }"
          >
            <div
              v-for="(opinion, index) in patientOpinions"
              :key="opinion.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white rounded-2xl p-6 md:p-8 mx-2 min-h-[350px] md:min-h-[400px] flex flex-col justify-center opinions-card">
                <!-- Stars -->
                <div class="flex justify-center mb-4 md:mb-6">
                  <div class="flex space-x-1">
                    <svg 
                      v-for="star in 5" 
                      :key="star"
                      class="w-4 h-4 md:w-5 md:h-5"
                      :class="star <= opinion.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                
                <!-- Description -->
                <blockquote class="text-slate-700 text-sm md:text-base lg:text-lg mb-4 md:mb-6 italic text-center leading-relaxed font-light line-clamp-4">
                  "{{ opinion.description }}"
                </blockquote>
                
                <!-- Name -->
                <h3 class="text-base md:text-lg lg:text-xl font-bold text-slate-800 mb-2 text-center">{{ opinion.name }}</h3>
                
                <!-- Date -->
                <p class="text-xs md:text-sm text-slate-500 text-center">{{ formatDate(opinion.date) }}</p>
              </div>
            </div>
          </div>

          <!-- Desktop/Tablet View: Multi-item Carousel -->
          <div 
            v-else
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ 
              transform: `translateX(-${currentSlide * slideWidth}%)`
            }"
          >
            <div
              v-for="(opinion, index) in patientOpinions"
              :key="opinion.id"
              class="flex-shrink-0 px-2 md:px-4"
              :class="{
                'w-1/2': windowWidth >= 768 && windowWidth < 1024,
                'w-1/3': windowWidth >= 1024
              }"
            >
              <div class="bg-white rounded-2xl p-6 md:p-8 mx-2 min-h-[350px] md:min-h-[400px] flex flex-col justify-center">
                <!-- Stars -->
                <div class="flex justify-center mb-4 md:mb-6">
                  <div class="flex space-x-1">
                    <svg 
                      v-for="star in 5" 
                      :key="star"
                      class="w-4 h-4 md:w-5 md:h-5"
                      :class="star <= opinion.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                
                <!-- Description -->
                <blockquote class="text-slate-700 text-sm md:text-base lg:text-lg mb-4 md:mb-6 italic text-center leading-relaxed font-light line-clamp-4">
                  "{{ opinion.description }}"
                </blockquote>
                
                <!-- Name -->
                <h3 class="text-base md:text-lg lg:text-xl font-bold text-slate-800 mb-2 text-center">{{ opinion.name }}</h3>
                
                <!-- Date -->
                <p class="text-xs md:text-sm text-slate-500 text-center">{{ formatDate(opinion.date) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows - Visible on desktop -->
        <button 
          v-if="windowWidth >= 1024"
          @click="previousSlide"
          class="absolute left-0 xl:-left-16 top-1/2 transform -translate-y-1/2 bg-accent-dark hover:bg-accent text-white rounded-full p-3 xl:p-4 transition-all duration-300 hover:scale-110 cursor-pointer z-10"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        >
          <svg class="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          v-if="windowWidth >= 1024"
          @click="nextSlide"
          class="absolute right-0 xl:-right-16 top-1/2 transform -translate-y-1/2 bg-accent-dark hover:bg-accent text-white rounded-full p-3 xl:p-4 transition-all duration-300 hover:scale-110 cursor-pointer z-10"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlide }"
        >
          <svg class="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Dots Indicators -->
        <div class="flex justify-center mt-8 md:mt-12 space-x-2 md:space-x-3">
          <button
            v-for="slideIndex in totalSlides"
            :key="slideIndex - 1"
            @click="goToSlide(slideIndex - 1)"
            class="w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300"
            :class="currentSlide === slideIndex - 1 ? 'bg-primary scale-125' : 'bg-white/60 hover:bg-white/80'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { t, getCurrentLang, getLocalizedUrl } from '../config/i18n.js'

export default {
  name: 'Opinions',
  props: {
    lang: {
      type: String,
      default: 'ca'
    }
  },
  data() {
    return {
      currentSlide: 0,
      screenSize: 'lg', // Track screen size
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1200,
      touchStartX: 0,
      touchEndX: 0,
      patientOpinions: [
        {
          id: 'maria-lopez',
          name: 'Mariona Morales',
          description: 'La mejor fisioterapeuta que he encontrado en mucho tiempo, en una única sesión ha entendido mi problema! La mejor manera de describir a Jess: manos mágicas.',
          stars: 5,
          date: '2024-02-15'
        },
        {
          id: 'anna-garcia',
          name: 'Anna Valverde',
          description: 'Por fin he encontrado lo que buscaba, Jess es una gran profesional y también una experta en toda la complejidad de la fisiolología femenina. Os la recomiendo mucho.',
          stars: 5,
          date: '2024-01-28'
        },
        {
          id: 'laura-martinez',
          name: 'Judith Marqués',
          description: 'Jess es muy buena fisioterapeuta en Girona, que me está ayudando con la endometriosis ya trabajar el suelo pélvico. ¡Muy contenta con el trato y con los resultados!',
          stars: 5,
          date: '2024-03-10'
        },
        {
          id: 'sofia-rodriguez',
          name: 'Sofia Rodríguez',
          description: 'Molt professional i atenta. Ha resolt el meu problema de tensions cervicals amb exercicis molt efectius.',
          stars: 5,
          date: '2024-02-22'
        },
        {
          id: 'carmen-fernandez',
          name: 'Carmen Fernández',
          description: 'Excepcional atenció i resultats molt satisfactoris. L\'ambient de la consulta és molt relaxant i acollidor.',
          stars: 5,
          date: '2024-03-05'
        }
      ]
    }
  },
  computed: {
    currentLang() {
      return this.lang || getCurrentLang();
    },
    itemsPerSlide() {
      // Mobile: 1 item, Tablet: 2 items, Desktop: 3 items
      let items;
      if (this.windowWidth < 768) {
        items = 1;
      } else if (this.windowWidth < 1024) {
        items = 2; 
      } else {
        items = 3;
      }
      console.log('Window width:', this.windowWidth, 'Items per slide:', items);
      return items;
    },
    slideWidth() {
      return 100 / this.itemsPerSlide;
    },
    maxSlide() {
      if (this.windowWidth < 768) {
        // Mobile: Each slide shows 1 opinion
        return Math.max(0, this.patientOpinions.length - 1);
      }
      // Desktop/Tablet: Multiple opinions per slide
      return Math.max(0, this.patientOpinions.length - this.itemsPerSlide);
    },
    totalSlides() {
      if (this.windowWidth < 768) {
        // Mobile: One slide per opinion
        return this.patientOpinions.length;
      }
      // Desktop/Tablet: Multiple opinions per slide
      return Math.ceil(this.patientOpinions.length / this.itemsPerSlide);
    }
  },
  mounted() {
    // Handle window resize for responsive behavior
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
      window.addEventListener('resize', this.handleResize);
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  methods: {
    handleResize() {
      // Update window width for reactivity
      this.windowWidth = window.innerWidth;
      // Reset to first slide if current slide is beyond new max
      if (this.currentSlide > this.maxSlide) {
        this.currentSlide = this.maxSlide;
      }
    },
    t(key) {
      return t(key, this.currentLang);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(this.currentLang === 'ca' ? 'ca-ES' : 'es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    nextSlide() {
      console.log('Next slide clicked. Current:', this.currentSlide, 'Max:', this.maxSlide);
      if (this.currentSlide < this.maxSlide) {
        this.currentSlide++;
      }
    },
    previousSlide() {
      console.log('Previous slide clicked. Current:', this.currentSlide);
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = Math.min(index, this.maxSlide);
    },
    handleTouchStart(event) {
      this.touchStartX = event.changedTouches[0].screenX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.changedTouches[0].screenX;
    },
    handleTouchEnd() {
      const swipeThreshold = 50;
      const swipeDistance = this.touchStartX - this.touchEndX;
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swiped left - next slide
          this.nextSlide();
        } else {
          // Swiped right - previous slide
          this.previousSlide();
        }
      }
    },
    openOpinion(opinion) {
      // Handle opinion opening - could navigate to detail page or open modal
      console.log('Opening opinion:', opinion);
      this.$emit('opinion-selected', opinion);
    },
    viewAllOpinions() {
      // Navigate to testimonials/opinions page
      const opinionsUrl = getLocalizedUrl('/testimonials', this.currentLang);
      if (typeof window !== 'undefined') {
        window.location.href = opinionsUrl;
      }
    }
  }
}
</script>