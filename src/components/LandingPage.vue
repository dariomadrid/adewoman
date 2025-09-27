<template>
  <div class="min-h-screen font-sans bg-white">
    <!-- Header -->
    <Navbar :lang="currentLang" />

    <!-- Hero -->
    <Hero :lang="currentLang" />

    <!-- About -->
    <About :lang="currentLang" />

    <!-- QUI SOC -->
    <div 
      ref="quisocSection"
      class="transition-transform duration-300 ease-out"
      :style="{ 
        transform: quisocVisible ? 'translateY(0)' : 'translateY(30px)',
        opacity: quisocVisible ? 1 : 0.8
      }"
    >
      <quisoc :lang="currentLang" />
    </div>

    <!-- Formación -->
    <Formacion :lang="currentLang" />

    <!-- ¿Por qué Elegirnos? -->
    <WhyChooseUs :lang="currentLang" />

    <!-- Centro -->
    <Centro :lang="currentLang" />

    <!-- Opinions -->
    <div 
      id="opinions"
      ref="opinions"
      class="transition-transform duration-700 ease-out"
      :style="{         
        opacity: portfolioVisible ? 1 : 0.9
      }"
    >
      <Opinions @opinion-selected="handleOpinionSelected" :lang="currentLang" />
    </div>

    <!-- Contacto -->
    <Contact :lang="currentLang" />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import About from './About.vue';
import quisoc from './quisoc.vue';
import Formacion from './Formacion.vue';
import WhyChooseUs from './WhyChooseUs.vue';
import Centro from './Centro.vue';
import Opinions from './Opinions.vue';
import Contact from './Contact.vue';
import { t, getCurrentLang } from '../config/i18n.js';
import { siteConfig } from '../config/site.js';

export default {
  name: 'LandingPage',
  props: {
    lang: {
      type: String,
      default: 'ca'
    }
  },
  components: {
    Navbar,
    Hero,
    About,
    quisoc,
    Formacion,
    WhyChooseUs,
    Centro,
    Opinions,
    Contact
  },
  data() {
    return {
      scrollY: 0,
      quisocVisible: false,
      portfolioVisible: false,
      ticking: false
    }
  },
  computed: {
    currentLang() {
      return this.lang || getCurrentLang();
    },
    siteConfig() {
      return siteConfig;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    this.initScrollAnimations();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    t(key) {
      return t(key, this.currentLang);
    },
    handleScroll() {
      this.scrollY = window.pageYOffset;
      this.updateSectionVisibility();
    },
    updateParallax() {
      // Hero parallax now handled by Hero component
    },
    updateSectionVisibility() {
      const windowHeight = window.innerHeight;
      const scrollTop = this.scrollY;
      
      if (this.$refs.quisocSection) {
        const aboutTop = this.$refs.quisocSection.offsetTop;
        this.quisocVisible = scrollTop + windowHeight > aboutTop + 100;
      }
      
      if (this.$refs.portfolioSection) {
        const portfolioTop = this.$refs.portfolioSection.offsetTop;
        this.portfolioVisible = scrollTop + windowHeight > portfolioTop + 100;
      }
    },
    initScrollAnimations() {
      // Create intersection observer for scroll animations
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Wait for next tick to ensure DOM is fully rendered
      this.$nextTick(() => {
        // Find all sections and elements to animate
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => {
          this.observer.observe(el);
        });
      });
    },
    handleOpinionSelected(opinion) {
      console.log('Opinion selected in LandingPage:', opinion);
    }
  }
}
</script>

<style scoped>
/* Component-specific styles can be added here */
</style>
