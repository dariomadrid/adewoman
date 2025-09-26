<template>
  <div class="language-switcher">
    <button 
      @click="toggleDropdown"
      type="button" 
      class="language-switcher__button" 
      aria-label="Language switcher"
    >
      <span class="language-switcher__icon">
        <svg width="1em" height="1em" viewBox="0 0 24 24" class="size-5">
          <path 
            fill="none" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="1.5" 
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </span>
    </button>
    
    <div 
      v-show="isDropdownOpen"
      class="language-switcher__dropdown"
    >
      <a 
        href="/es/" 
        class="language-switcher__option" 
        data-lang="es"
        @click="switchLanguage('es')"
      >
        Español
      </a>
      <a 
        href="/ca/" 
        class="language-switcher__option" 
        data-lang="ca"
        @click="switchLanguage('ca')"
      >
        Català
      </a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getCurrentLang, switchToLanguage } from '../config/i18n.js';

export default {
  name: 'LanguageSwitcher',
  setup() {
    const currentLang = ref('ca');
    const isDropdownOpen = ref(false);

    const updateCurrentLang = () => {
      currentLang.value = getCurrentLang();
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = () => {
      isDropdownOpen.value = false;
    };

    const switchLanguage = (lang) => {
      switchToLanguage(lang);
      currentLang.value = lang;
      closeDropdown();
      
      // Get current path without language prefix
      const currentPath = window.location.pathname.replace(/^\/[a-z]{2}/, '') || '/';
      
      // Navigate to the correct language URL
      let newUrl;
      if (lang === 'ca') {
        // For Catalan (default), use root paths
        newUrl = currentPath === '/' ? '/' : currentPath;
      } else {
        // For other languages, add language prefix
        newUrl = `/${lang}${currentPath}`;
      }
      
      // Navigate to the new URL
      window.location.href = newUrl;
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-switcher')) {
        closeDropdown();
      }
    };

    onMounted(() => {
      updateCurrentLang();
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    return {
      currentLang,
      isDropdownOpen,
      toggleDropdown,
      switchLanguage
    };
  }
};
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-switcher__button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  color: var(--color-neutral-500);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.language-switcher__button:hover {
  color: var(--color-accent-hover);
}

.language-switcher__icon {
  display: flex;
  align-items: center;
}

.language-switcher__dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.25rem;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 50;
}

.language-switcher__option {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--color-neutral-500);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  border-bottom: none;
}

.language-switcher__option:last-child {
  border-bottom: none;
}

.language-switcher__option:hover {
  color: var(--color-accent-hover);
}

.language-switcher__option:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.language-switcher__option:last-child {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.size-5 {
  width: 1.25rem;
  height: 1.25rem;
}

.size-4 {
  width: 1rem;
  height: 1rem;
}
</style>