<template>
  <section
    id="heroSection"
    ref="heroSection"
    class="hero-section relative min-h-screen flex items-start justify-center bg-gray-800 pt-32 overflow-hidden"
  >
    <!-- Background Image with smooth parallax -->
    <img 
      ref="heroBackground"
      src="/img/adw_mans.jpg"
      alt="Background hands"
      class="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-75 ease-out blur-none opacity-90"
      style="z-index: 1; transform: translate3d(0, 0, 0) scale(1.1);"
      @error="onImageError"
      @load="onImageLoad"
    />
    
    <!-- Content Container with subtle parallax -->
    <div 
      ref="heroContent"
      class="relative text-center text-white px-6 will-change-transform transition-all duration-75 ease-out" 
      style="z-index: 3; transform: translate3d(0, 0, 0); opacity: 1;"
    >
      <!-- Main Logo/Title -->
      <div class="mb-8 mt-20">
        <h1 class="font-hussar text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-wider text-white">
          {{ t('home.hero.title') }}
        </h1>
        <h2 class="font-barlow text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mt-2 text-white">
          {{ t('home.hero.subtitle') }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { t, getCurrentLang } from '../config/i18n.js';

export default {
  name: 'Hero',
  props: {
    lang: {
      type: String,
      default: 'ca'
    }
  },
  data() {
    return {
      scrollY: 0
    }
  },
  computed: {
    currentLang() {
      return this.lang || getCurrentLang();
    },
    heroImageUrl() {
      return `${import.meta.env.BASE_URL || '/'}adw_mans.jpg`.replace('//', '/');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    t(key) {
      return t(key, this.currentLang);
    },
    handleScroll() {
      this.scrollY = window.pageYOffset;
      this.updateParallax();
    },
    updateParallax() {
      const scrolled = this.scrollY;
      const heroSection = this.$refs.heroSection;
      
      if (heroSection && scrolled < heroSection.offsetHeight) {
        // More noticeable parallax for testing
        if (this.$refs.heroBackground) {
          const bgTranslateY = scrolled * 0.5; // More noticeable movement (50% of scroll)
          this.$refs.heroBackground.style.transform = `translate3d(0, ${bgTranslateY}px, 0) scale(1.1)`;
        }
        
        // Content moves more noticeably
        if (this.$refs.heroContent) {
          const contentTranslateY = scrolled * 0.3; // More noticeable (30% of scroll)
          const opacity = Math.max(0.3, 1 - (scrolled / heroSection.offsetHeight) * 0.7); // Fade but not completely
          this.$refs.heroContent.style.transform = `translate3d(0, ${contentTranslateY}px, 0)`;
          this.$refs.heroContent.style.opacity = opacity;
        }
      }
    },
    onImageError(event) {
      console.error('Image failed to load:', event.target.src);
      const fallbacks = [
        '/img/adw_mans.jpg',
        'http://localhost:4321/adw_mans.jpg',
        '../../../public/img/adw_mans.jpg'
      ];
      
      const currentSrc = event.target.src;
      const currentIndex = fallbacks.findIndex(url => currentSrc.includes(url));
      if (currentIndex < fallbacks.length - 1) {
        event.target.src = fallbacks[currentIndex + 1];
      } else {
        event.target.style.display = 'none';
      }
    },
    onImageLoad(event) {
      console.log('Image loaded successfully:', event.target.src);
    }
  }
}
</script>

<style scoped>
/* Hero section styling */
.hero-section {
  min-height: 100vh;
  position: relative;
  background-color: #4a5568;
}

/* Ensure proper z-index layering */
.hero-section img {
  z-index: 0 !important;
}

.hero-section .z-10 {
  z-index: 10 !important;
}

.hero-section .z-20 {
  z-index: 20 !important;
}
</style>