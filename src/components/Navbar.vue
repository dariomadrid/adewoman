<template>
  <header 
    :class="['fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300', {
      'bg-light shadow-md': isScrolled,
      'bg-transparent': !isScrolled
    }]"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center md:justify-center">
        
        <!-- Logo (visible on mobile) -->
        <div class="flex items-center md:hidden">
          <button class="btn btn-navbar-visible font-hussar">AW</button>
        </div>
        
        <!-- Navigation Buttons -->
        <nav class="hidden md:flex items-center space-x-4">        
          <button 
            @click="scrollToSection('about')"
            class="btn btn-navbar-visible"
          >
            ADEWOMAN
          </button>
          
          <button 
            @click="scrollToSection('about')"
            class="btn btn-navbar-visible"
          >
            SOBRE MÍ
          </button>
          <button 
            @click="scrollToSection('centro-especializado')"
            class="btn btn-navbar-visible"
          >
            SERVICIOS
          </button>
          <button 
            @click="scrollToSection('opinions')"
            class="btn btn-navbar-visible"
          >
            OPINIONES
          </button>
          <button 
            @click="scrollToSection('contact')"
            class="btn btn-navbar-visible"
          >
            CONTACTO
          </button>

          <!-- Language Switcher -->
          <div class="language-switcher ml-2 relative">
            <button 
              type="button" 
              class="language-switcher__button btn btn-navbar-visible p-2" 
              aria-label="Language switcher"
              @click="toggleLanguageDropdown"
            >
              <span class="language-switcher__icon">
                <svg width="1em" height="1em" viewBox="0 0 24 24" class="size-5">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </span>
            </button>
            <div 
              v-show="languageDropdownOpen" 
              class="language-switcher__dropdown absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
            >
              <a href="/es/" class="language-switcher__option block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg" data-lang="es">
                Español
              </a>
              <a href="/ca/" class="language-switcher__option block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg" data-lang="ca">
                Català
              </a>
            </div>
          </div>
        </nav>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 z-50 relative"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-light z-[60] flex flex-col justify-center items-center text-center pt-16 animate-fade-in">
        <!-- Close Button -->
        <button
          @click="toggleMobileMenu"
          class="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Logo -->
        <div class="mb-16 animate-slide-up" style="animation-delay: 0.1s;">
          <span class="text-6xl font-hussar font-bold text-primary">AW</span>
        </div>

        <!-- Menu Items -->
        <nav class="flex flex-col space-y-8 mb-16">
          <button 
            @click="scrollToSection('heroSection'); toggleMobileMenu()" 
            class="text-2xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up"
            style="animation-delay: 0.2s;"
          >
            Inici
          </button>
          <button 
            @click="scrollToSection('about'); toggleMobileMenu()" 
            class="text-2xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up"
            style="animation-delay: 0.25s;"
          >
            Sobre Mi
          </button>
          <button 
            @click="scrollToSection('centro-especializado'); toggleMobileMenu()" 
            class="text-2xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up"
            style="animation-delay: 0.3s;"
          >
            Serveis
          </button>
          <button 
            @click="scrollToSection('opinions'); toggleMobileMenu()" 
            class="text-2xl font-medium text-primary hover:text-accent-hover transition-colors animate-slide-up"
            style="animation-delay: 0.35s;"
          >
            Opinions
          </button>
        </nav>

        <!-- Language Switcher Icon -->
        <div class="mb-8 animate-slide-up" style="animation-delay: 0.4s;">
          <button class="p-2 text-primary hover:text-accent-hover transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </button>
        </div>

        <!-- Contact Button -->
        <button 
          @click="scrollToSection('contact'); toggleMobileMenu()" 
          class="bg-accent-dark text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-hover transition-colors animate-slide-up"
          style="animation-delay: 0.45s;"
        >
          Contacta'm
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false,
      languageDropdownOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Close dropdowns when clicking outside
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      console.log('Mobile menu open:', this.isMobileMenuOpen);
      // Close language dropdown when opening mobile menu
      this.languageDropdownOpen = false;
    },
    toggleLanguageDropdown() {
      this.languageDropdownOpen = !this.languageDropdownOpen;
    },
    handleOutsideClick(event) {
      // Close language dropdown if clicking outside
      if (!event.target.closest('.language-switcher')) {
        this.languageDropdownOpen = false;
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
</script>