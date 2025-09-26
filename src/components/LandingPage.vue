<template>
  <div class="min-h-screen font-sans bg-white">
    <!-- Header -->
    <Navbar :lang="currentLang" />

    <!-- Hero -->
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
        class="absolute inset-0 w-full h-full object-cover will-change-transform transition-transform duration-75 ease-out"
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
            AW
          </h1>
          <h2 class="font-barlow text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mt-2 text-white">
            FISIOTERAPIA
          </h2>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-16 px-6 bg-accent-dark animate-on-scroll">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        
        <!-- Left Content -->
        <div class="text-light order-2 md:order-1 animate-on-scroll animate-slide-left">
          <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-on-scroll stagger-1">
            ADEWOMAN<br>
            FISIOTERAPIA
          </h2>
          
          <h4 class="font-barlow text-light text-2xl md:text-2xl lg:text-2xl font-semibold mb-6 animate-on-scroll stagger-2">
            FISIOTERAPIA PARA LA SALUD DE LA MUJER.
          </h4>
          
          <p class="text-xl md:text-2xl mb-6">
            Soy Jéssica González Sánchez, aunque todos me llaman Jess.
          </p>
          
          <p class="text-xl md:text-2xl mb-6 leading-relaxed">
            Después de varios años trabajando para otras empresas, creé un espacio donde mujeres de todas las edades pudieran aprender a escuchar y cuidar de su cuerpo.
          </p>
          
          <p class="text-xl md:text-2xl mb-6 leading-relaxed">
            Un espacio seguro, donde la comunicación y el aprendizaje sobre el cuerpo son claves para un tratamiento con éxito.
          </p>
          
          <p class="text-xl md:text-2xl leading-relaxed">
            Así nace Adewoman Fisioterapia.
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

    <!-- Qui soc (About Me) with entrance parallax -->
    <div 
      ref="aboutSection"
      class="transition-transform duration-300 ease-out"
      :style="{ 
        transform: aboutVisible ? 'translateY(0)' : 'translateY(30px)',
        opacity: aboutVisible ? 1 : 0.8
      }"
    >
      <AboutMe :lang="currentLang" />
    </div>

    <!-- Formación -->
    <section class="py-16 px-6 bg-accent-dark">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
        
        <!-- Left Content -->
        <div class="text-light order-2 md:order-1 flex flex-col justify-center">
          <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            FORMACIÓN
          </h2>
          
          <ul class="text-xl md:text-2xl space-y-2 leading-relaxed">
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">DIPLOMADA EN FISIOTERAPIA</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">MÁSTER EN REEDUCACIÓN DE SUELO PÉLVICO</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">OSTEOPATÍA</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">CONCEPTO GDP</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">FISIOSEXÓLOGA</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">ACTIVIDAD FÍSICA Y EJERCICIO TERAPÉUTICO EN EL EMBARAZO</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">TRATAMIENTO DE LA DIÁSTASIS</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">ESCUELA DE LA ESPALDA: PILATES TERAPÉUTICO, HIPOPRESIVO Y EJERCICIO FUNCIONAL</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">CÓLICO DEL LACTANTE</span>
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div class="flex justify-center md:justify-end order-1 md:order-2 items-center">
          <div class="relative w-full max-w-md md:max-w-none h-full">
            <img 
              src="/img/adw_formacio.jpg" 
              alt="Fisioterapeuta especialista en salud femenina"
              class="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover rounded-3xl shadow-2xl border-8 border-white"
            />
          </div>
        </div>

      </div>
    </section>

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
          <div class="text-primary">
            <h2 class="font-barlow text-primary text-3xl md:text-5xl lg:text-5xl font-bold mb-8">
              ¿POR QUÉ ELEGIRNOS?
            </h2>
            
            <p class="text-primary text-xl md:text-2xl mb-6 leading-relaxed">
              Vivir y entender el DOLOR, me ha enseñado a conectar a un nivel mayor con mis pacientes.
            </p>
            
            <p class="text-primary text-xl md:text-2xl mb-6 leading-relaxed">
              Conocer tu cuerpo y como funciona, es la mayor herramienta que te puedo proporcionar.
            </p>
            
            <p class="text-primary text-xl md:text-2xl leading-relaxed">
              Poco a poco iremos trabajando sobre el problema, y buscaremos el tratamiento que mejor se adecue a tus necesidades.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Centro -->
    <section id="centro-especializado" class="py-16 px-6 bg-accent-dark animate-on-scroll">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        <!-- Left Content -->
        <div class="text-light order-1 md:order-1 animate-on-scroll animate-slide-left">
          <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-5xl font-bold mb-8 animate-on-scroll stagger-1">
            CENTRO<br>
            ESPECIALIZADO
          </h2>
          
          <p class="text-light text-xl md:text-2xl mb-8 leading-relaxed animate-on-scroll stagger-2">
            Llevamos más de 9 años acompañando a mujeres en todas sus etapas.
          </p>
          
          <ul class="text-xl md:text-2xl space-y-3 leading-relaxed">
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">ENDOMETRIOSIS / ADENOMIOSIS</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">FERTILIDAD Y EMBARAZO</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">DOLOR / DISFUNCIONES SEXUALES</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">PROLAPSOS</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">POSTPARTO</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">TRATAMIENTO CICATRICES</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">DISFUNCIONES SUELO PÉLVICO</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">EJERCICIO TERAPÉUTICO</span>
            </li>
            <li class="flex items-start">
              <span class="text-light mr-3">•</span>
              <span class="text-light">RESPIRACIÓN Y CONSCIENCIA CORPORAL</span>
            </li>
          </ul>
        </div>

        <!-- Right Image -->
        <div class="flex justify-center md:justify-end order-2 md:order-2">
          <div class="relative w-full max-w-md md:max-w-lg">
            <img 
              src="/img/adw_pelvis2.jpg" 
              alt="Centro especializado en fisioterapia para la mujer"
              class="w-full h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[700px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>

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
import AboutMe from './AboutMe.vue';
import Formation from './Formation.vue';
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
    AboutMe,
    Formation,
    Opinions,
    Contact
  },
  data() {
    return {
      scrollY: 0,
      aboutVisible: false,
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
    },
    heroImageUrl() {
      return `${import.meta.env.BASE_URL || '/'}adw_mans.jpg`.replace('//', '/');
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
      this.updateParallax();
      this.updateSectionVisibility();
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
    updateSectionVisibility() {
      const windowHeight = window.innerHeight;
      const scrollTop = this.scrollY;
      
      if (this.$refs.aboutSection) {
        const aboutTop = this.$refs.aboutSection.offsetTop;
        this.aboutVisible = scrollTop + windowHeight > aboutTop + 100;
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
