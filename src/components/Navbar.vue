<template>
  <header class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-transparent">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center">
        
        <!-- Logo - Always visible -->
        <div class="flex items-center">
          <a 
            href="/"
            :class="[
              'flex items-center justify-center font-hussar text-sm md:text-base font-medium tracking-wider hover:text-accent-hover transition-all duration-300 cursor-pointer',
              isScrolled ? 'bg-light text-dark px-4 py-2 rounded-lg shadow-sm' : 'text-light px-4 py-2'
            ]"
          >
            AW <span class="font-barlow text-sm md:text-base font-light tracking-widest ml-2">ADEWOMAN</span>
          </a>
        </div>
        
        <!-- Hamburger menu button with text and light background - Always visible -->
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-light text-dark hover:bg-accent hover:text-dark transition-colors z-50 shadow-sm cursor-pointer w-32"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <span class="font-barlow text-sm md:text-base font-bold tracking-wide">{{ t('navigation.menu') }}</span>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-light z-[60] flex flex-col justify-center items-center text-center pt-16 animate-fade-in">
        <!-- Close Button - Same position as menu button -->
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-light-gray text-dark hover:bg-accent hover:text-dark transition-colors shadow-sm cursor-pointer w-32"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <span class="font-barlow text-sm md:text-base font-bold tracking-wide">{{ t('common.close') }}</span>
        </button>

        <!-- Logo -->
        <div class="mb-16 animate-slide-up flex flex-col items-center" style="animation-delay: 0.1s;">
          <span class="text-5xl md:text-6xl font-hussar font-medium text-primary tracking-wider">{{ t('home.hero.title') }}</span>
          <span class="text-xl md:text-2xl font-barlow font-light text-primary tracking-widest mt-2">{{ t('home.hero.subtitle') }}</span>
        </div>

        <!-- Menu Items -->
        <nav class="flex flex-col space-y-6 mb-12">
          <button 
            @click="scrollToSection('about'); toggleMobileMenu()" 
            class="text-xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up cursor-pointer"
            style="animation-delay: 0.2s;"
          >
            {{ t('navigation.adewoman') }}
          </button>
          <button 
            @click="scrollToSection('sobremi'); toggleMobileMenu()" 
            class="text-xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up cursor-pointer"
            style="animation-delay: 0.25s;"
          >
            {{ t('navigation.sobremi') }}
          </button>
          <button 
            @click="scrollToSection('centro-especializado'); toggleMobileMenu()" 
            class="text-xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up cursor-pointer"
            style="animation-delay: 0.3s;"
          >
            {{ t('navigation.serveis') }}
          </button>
          <button 
            @click="scrollToSection('opinions'); toggleMobileMenu()" 
            class="text-xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up cursor-pointer"
            style="animation-delay: 0.35s;"
          >
            {{ t('navigation.opinions') }}
          </button>
          <button 
            @click="scrollToSection('contact'); toggleMobileMenu()" 
            class="text-xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up cursor-pointer"
            style="animation-delay: 0.4s;"
          >
            {{ t('navigation.contacta') }}
          </button>
        </nav>

        <!-- Language Switcher -->
        <div class="mb-8 animate-slide-up" style="animation-delay: 0.45s;">
          <div class="flex space-x-4">
            <a href="/es/" class="btn btn-contact cursor-pointer">
              Español
            </a>
            <a href="/ca/" class="btn btn-contact cursor-pointer">
              Català
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getCurrentLang, t } from '../config/i18n.js';

export default {
  name: 'Navbar',
  setup() {
    const isMobileMenuOpen = ref(false);
    const isScrolled = ref(false);
    const currentLang = ref('ca');

    const handleScroll = () => {
      const heroSection = document.getElementById('heroSection');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        isScrolled.value = window.scrollY > heroBottom - 100;
      } else {
        isScrolled.value = window.scrollY > 100;
      }
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleLanguageChange = (event) => {
      currentLang.value = event.detail.lang;
    };

    onMounted(() => {
      currentLang.value = getCurrentLang();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('languageChanged', handleLanguageChange);
      handleScroll();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('languageChanged', handleLanguageChange);
    });

    return {
      isMobileMenuOpen,
      isScrolled,
      currentLang,
      handleScroll,
      toggleMobileMenu,
      scrollToSection,
      t: (key) => t(key, currentLang.value)
    };
  }
}
</script>