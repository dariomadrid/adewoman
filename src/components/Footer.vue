<template>
  <footer class="bg-footer text-light pt-12 pb-8 px-6">
    <div class="max-w-6xl mx-auto">
      
      <!-- Main Brand and Social -->
      <div class="text-left mb-6">
        <!-- Logo -->
        <div class="mb-8">
          <div class="flex items-center space-x-2">
            <h1 class="font-hussar text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider text-light">
              AW
            </h1>
            <h2 class="font-barlow text-lg md:text-xl lg:text-2xl font-light tracking-widest text-light">
              FISIOTERAPIA
            </h2>
          </div>
        </div>
      </div>

      <!-- Contact Information Grid and Button -->
      <div class="flex flex-col md:flex-row justify-between items-start mb-4">
        
        <!-- Three Columns Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
          
          <!-- Location and Contact Section -->
          <div class="text-left">
            <h3 class="font-barlow text-base md:text-lg font-medium mb-3 text-light">
              DÓNDE ESTAMOS
            </h3>
            
            <div class="space-y-2 mb-4">
              <div class="flex items-start">
                <div class="mr-2 mt-1">
                  <svg class="w-3 h-3 text-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs md:text-sm leading-snug">
                    <span class="underline">C/ Marquès de Caldes de Montbui, 62</span><br>
                    <span class="underline">Girona, 17003</span>
                  </p>
                </div>
              </div>
            </div>

            <h3 class="font-barlow text-base md:text-lg font-medium mb-3 text-light">
              CONTACTO
            </h3>
            
            <div class="space-y-2">
                            <div class="flex items-start">
                <div class="mr-2 mt-1">
                  <svg class="w-3 h-3 text-light" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <a 
                    :href="`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`"
                    class="text-xs md:text-sm hover:underline transition-all"
                  >
                    {{ siteConfig.contact.phone }}
                  </a>
                </div>
              </div>

              <!-- WhatsApp Contact -->
              <div class="flex items-start">
                <div class="mr-2 mt-1">
                  <svg class="w-3 h-3 text-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                  </svg>
                </div>
                <div>
                  <a 
                    :href="siteConfig.social.whatsapp.url" 
                    target="_blank"
                    class="text-xs md:text-sm hover:underline transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-2 mt-1">
                  <svg class="w-3 h-3 text-light" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs md:text-sm">adewomanfisioterapia@gmail.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="mr-2 mt-1">
                  <svg class="w-3 h-3 text-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <a 
                    href="https://instagram.com/adewomanfisioterapia" 
                    target="_blank"
                    class="text-xs md:text-sm hover:underline transition-all"
                  >
                    @adewomanfisioterapia
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Schedule Section -->
          <div class="text-left">
            <h3 class="font-barlow text-base md:text-lg font-medium mb-3 text-light">
              HORARIO
            </h3>
            
            <div class="space-y-2">
              <div>
                <p class="text-xs md:text-sm font-normal mb-1">Lunes, Martes y Jueves</p>
                <p class="text-xs md:text-sm">14.00 - 20.00</p>
              </div>
              
              <div>
                <p class="text-xs md:text-sm font-normal mb-1">Miércoles y Viernes</p>
                <p class="text-xs md:text-sm">8.00 - 15.00</p>
              </div>
              
              <div>
                <p class="text-xs md:text-sm font-normal mb-1">Sábado y Domingo</p>
                <p class="text-xs md:text-sm">CERRADO</p>
              </div>
            </div>
          </div>

          <!-- Legal Links Section -->
          <div class="text-left">
            <h3 class="font-barlow text-base md:text-lg font-medium mb-3 text-light">
              LEGAL
            </h3>
            
            <div class="space-y-2">
              <div>
                <a 
                  href="#" 
                  class="text-xs md:text-sm hover:underline transition-all block"
                >
                  Política de Privacidad
                </a>
              </div>
              
              <div>
                <a 
                  href="#" 
                  class="text-xs md:text-sm hover:underline transition-all block"
                >
                  Términos y Condiciones
                </a>
              </div>
              
              <div>
                <a 
                  href="#" 
                  class="text-xs md:text-sm hover:underline transition-all block"
                >
                  Política de Cookies
                </a>
              </div>

              <div>
                <a 
                  href="#" 
                  class="text-xs md:text-sm hover:underline transition-all block"
                >
                  Aviso Legal
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- Button on the Right -->
        <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
          <button 
            @click="scrollToTop" 
            class="bg-accent-dark hover:bg-accent text-white rounded-full p-3 xl:p-4 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center cursor-pointer"
            aria-label="Volver al inicio"
          >
            <svg class="w-5 h-5 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
import { siteConfig } from '../config/site.js';

export default {
  name: 'Footer',
  data() {
    return {
      siteConfig
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
/* Clean modern footer styling */
.footer-social-icon {
  transition: all 0.3s ease;
}

.footer-social-icon:hover {
  transform: scale(1.1);
}
</style>