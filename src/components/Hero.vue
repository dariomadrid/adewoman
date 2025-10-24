<template>
  <section
    id="heroSection"
    ref="heroSection"
    class="hero-section relative min-h-screen flex items-end justify-center bg-gray-800 pb-16 overflow-hidden"
  >
    <!-- Loading Spinner -->
    <div v-if="isVideoLoading" class="absolute inset-0 flex items-center justify-center z-20 bg-black/40">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-accent"></div>
      <span class="sr-only">Loading video...</span>
    </div>
    <!-- Background Video with smooth parallax -->
    <video 
      ref="heroBackground"
      src="/videos/jess_portada_compressed.mov"
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-75 ease-out blur-none opacity-90"
      style="z-index: 1; transform: translate3d(0, 0, 0) scale(1.1);"
  @error="onVideoError"
  @loadeddata="onVideoLoad"
    />
    
    <!-- Content Container with subtle parallax -->
    <div 
      ref="heroContent"
      class="relative text-center text-white px-6 will-change-transform transition-all duration-75 ease-out" 
      style="z-index: 3; transform: translate3d(0, 0, 0); opacity: 1;"
    >
      <!-- Main Logo/Title -->
      <div class="mb-8">
        <h1 class="font-hussar text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white">
          {{ t('home.hero.title') }}
        </h1>
        <h2 class="font-barlow text-2xl md:text-4xl lg:text-5xl font-light tracking-widest mt-2 text-white">
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
      scrollY: 0,
      isVideoLoading: true
    }
  },
  computed: {
    currentLang() {
      return this.lang || getCurrentLang();
    },
    heroVideoUrl() {
      return `${import.meta.env.BASE_URL || '/'}videos/jess_portada.mov`.replace('//', '/');
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
    onVideoError(event) {
      console.error('Video failed to load:', event.target.src);
      const fallbacks = [
        '/videos/jess_portada_compressed.mov',
        'http://localhost:4321/videos/jess_portada_compressed.mov',
        '../../../public/videos/jess_portada_compressed.mov'
      ];
      
      const currentSrc = event.target.src;
      const currentIndex = fallbacks.findIndex(url => currentSrc.includes(url));
      if (currentIndex < fallbacks.length - 1) {
        event.target.src = fallbacks[currentIndex + 1];
      } else {
        // If video fails, fallback to the original image
        const img = document.createElement('img');
        img.src = '/img/adw_mans.jpg';
        img.className = event.target.className;
        img.style.cssText = event.target.style.cssText;
        event.target.parentNode.replaceChild(img, event.target);
        this.$refs.heroBackground = img;
      }
    },
    onVideoLoad(event) {
      if (this.isVideoLoading) {
        this.isVideoLoading = false;
        console.log('Video loaded successfully:', event.target.src);
      }
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

/* Video opacity */
.hero-section video {
  opacity: 0.7;
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