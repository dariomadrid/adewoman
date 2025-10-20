<template>
  <section id="contact" class="bg-accent-dark animate-on-scroll">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      
      <!-- Left Google Maps (50% width) -->
      <div class="order-1 md:order-1 animate-on-scroll animate-slide-left h-full">
        <div class="relative w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.4268574282647!2d2.8193313153123077!3d41.979407179218896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae72f0b1e2b51%3A0x8f8b0f9e7a7f8f9f!2sCarrer%20Marqu%C3%A8s%20de%20Caldes%20de%20Montbu%C3%AD%2C%2062%2C%2017003%20Girona%2C%20Spain!5e0!3m2!1sen!2sus!4v1698000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0;"
            class="w-full h-full absolute inset-0 rounded-lg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación de ADEWOMAN - Carrer Marquès de Caldes de Montbuí, 62, Girona"
          ></iframe>
        </div>
      </div>

      <!-- Right Content (50% width) -->
      <div class="order-2 md:order-2 flex items-center">
        <div class="text-light px-6 py-16">
          <h2 class="font-barlow text-light text-4xl md:text-5xl lg:text-4xl font-bold mb-8">
            {{ t('contact.title') }}
          </h2>
       
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input
              v-model="form.name"
              type="text"
              :placeholder="t('contact.form.name')"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <input
              v-model="form.email"
              type="email"
              :placeholder="t('contact.form.email')"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <textarea
              v-model="form.message"
              :placeholder="t('contact.form.message')"
              rows="4"
              required
              class="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
            />
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn btn-contact btn-full"
            >
              {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submit') }}
            </button>
          </form>
          
          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="mt-4 p-3 rounded-lg" :class="submitMessageClass">
            {{ submitMessage }}
          </div>
          
          <!-- Social Links -->
          <div class="mt-8 pt-6 border-t border-light/20">
            <p class="text-center text-light text-sm mb-4">{{ t('contact.findMe') }}</p>
            <div class="flex justify-center space-x-4">
              <a :href="`mailto:${siteConfig.contact.email}`" class="text-light hover:text-accent transition-colors transform hover:scale-110 duration-300">
                <Mail class="w-6 h-6" />
              </a>
              <a :href="`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`" class="text-light hover:text-accent transition-colors transform hover:scale-110 duration-300">
                <Phone class="w-6 h-6" />
              </a>
              <a v-if="siteConfig.social?.whatsapp?.url" :href="siteConfig.social.whatsapp.url" target="_blank" class="text-light hover:text-accent transition-colors transform hover:scale-110 duration-300">
                <MessageCircle class="w-6 h-6" />
              </a>
              <a v-if="siteConfig.social?.instagram?.url" :href="siteConfig.social.instagram.url" target="_blank" class="text-light hover:text-accent transition-colors transform hover:scale-110 duration-300">
                <Instagram class="w-6 h-6" />
              </a>              
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue';
import { Mail, Phone, MessageCircle, Instagram, Linkedin } from 'lucide-vue-next';
import { siteConfig } from '../config/site.js';
import { getCurrentLang, t } from '../config/i18n.js';

export default {
  name: 'Contact',
  components: {
    Mail,
    Phone,
    MessageCircle,
    Instagram,
    Linkedin
  },
  setup() {
    const currentLang = ref('ca');
    const isSubmitting = ref(false);
    const submitMessage = ref('');
    const submitMessageClass = ref('');

    const form = reactive({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = async () => {
      isSubmitting.value = true;
      submitMessage.value = '';
      
      try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form
        form.name = '';
        form.email = '';
        form.message = '';
        
        submitMessage.value = t('contact.form.success');
        submitMessageClass.value = 'bg-green-100 text-green-800 border border-green-300';
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          submitMessage.value = '';
        }, 5000);
        
      } catch (error) {
        submitMessage.value = t('contact.form.error');
        submitMessageClass.value = 'bg-red-100 text-red-800 border border-red-300';
      } finally {
        isSubmitting.value = false;
      }
    };

    const handleLanguageChange = (event) => {
      currentLang.value = event.detail.lang;
    };

    onMounted(() => {
      currentLang.value = getCurrentLang();
      window.addEventListener('languageChanged', handleLanguageChange);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('languageChanged', handleLanguageChange);
    });

    // Simple Google Maps embed URL
    const googleMapsEmbedUrl = computed(() => {
      const address = "Carrer Marquès de Caldes de Montbuí, 62, Girona 17003";
      const encodedAddress = encodeURIComponent(address);
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.0!2d2.8214!3d41.9794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU4JzQ1LjgiTiAywrA0OScxNy4wIkU!5e0!3m2!1ses!2ses!4v1000000000000!5m2!1ses!2ses&q=${encodedAddress}`;
    });

    return {
      currentLang,
      siteConfig,
      form,
      isSubmitting,
      submitMessage,
      submitMessageClass,
      handleSubmit,
      googleMapsEmbedUrl,
      t: (key) => t(key, currentLang.value)
    };
  }
};
</script>