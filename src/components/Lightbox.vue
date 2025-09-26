<template>
  <div 
    v-if="isOpen" 
    class="lightbox-overlay fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    @click="handleOverlayClick"
    tabindex="0"
  >
    <div 
      class="lightbox-container relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
      @click.stop
    >
      <!-- Close Button -->
      <button 
        @click="handleCloseButtonClick"
        class="absolute top-4 right-4 z-10 w-14 h-14 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all duration-300 border-2 border-white/30 shadow-lg cursor-pointer"
      >
        <span class="text-3xl font-black leading-none select-none" style="font-family: Arial, sans-serif;">×</span>
      </button>

      <!-- Navigation Arrows -->
      <button 
        v-if="galleryImages.length > 1"
        @click.stop="previousImage"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all duration-300 border-2 border-white/30 shadow-lg cursor-pointer"
      >
        <span class="text-3xl font-black leading-none select-none" style="font-family: Arial, sans-serif;">‹</span>
      </button>

      <button 
        v-if="galleryImages.length > 1"
        @click.stop="nextImage"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-black bg-opacity-60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition-all duration-300 border-2 border-white/30 shadow-lg cursor-pointer"
      >
        <span class="text-3xl font-black leading-none select-none" style="font-family: Arial, sans-serif;">›</span>
      </button>

      <!-- Image Container -->
      <div 
        class="relative max-w-full max-h-full flex items-center justify-center"
        @click.stop
      >
        <img 
          :src="currentImage" 
          :alt="`${projectTitle} - Imatge ${currentIndex + 1}`"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          @load="handleImageLoad"
          @error="handleImageError"
        />
        
        <!-- Loading indicator -->
        <div 
          v-if="imageLoading"
          class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg"
        >
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>

      <!-- Image Counter -->
      <div 
        v-if="galleryImages.length > 1"
        class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 backdrop-blur-sm rounded-full px-6 py-3 text-white text-base font-semibold border-2 border-white/40 shadow-2xl z-20"
      >
        {{ currentIndex + 1 }} / {{ galleryImages.length }}
      </div>

      <!-- Thumbnails -->
      <div 
        v-if="galleryImages.length > 1"
        class="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4"
      >
        <button
          v-for="(image, index) in galleryImages"
          :key="index"
          @click.stop="setCurrentImage(index)"
          class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer"
          :class="index === currentIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'"
        >
          <img 
            :src="image" 
            :alt="`Miniatura ${index + 1}`"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    images: {
      type: [Array, String],
      default: () => []
    },
    projectTitle: {
      type: String,
      default: 'Projecte'
    }
  },
  data() {
    return {
      currentIndex: 0,
      imageLoading: false,
      isOpen: false,
      isClosing: false,
      instanceId: ''
    }
  },
  computed: {
    galleryImages() {
      let images = [];
      
      if (typeof this.images === 'string') {
        try {
          images = JSON.parse(this.images);
        } catch (e) {
          console.error('Error parsing gallery images:', e);
          images = [];
        }
      } else if (Array.isArray(this.images)) {
        images = this.images;
      }
      
      console.log('Gallery images computed:', images);
      return Array.isArray(images) ? images : [];
    },
    currentImage() {
      if (this.galleryImages.length === 0) {
        return '';
      }
      return this.galleryImages[this.currentIndex] || '';
    }
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
        this.$nextTick(() => {
          this.$el?.focus();
        });
      } else {
        document.body.style.overflow = '';
      }
    },
    currentIndex() {
      this.imageLoading = true;
    }
  },
  methods: {
    closeLightbox() {
      console.log('closeLightbox called, current isOpen:', this.isOpen, 'isClosing:', this.isClosing);
      if (!this.isOpen || this.isClosing) {
        console.log('Lightbox already closed or closing, ignoring');
        return;
      }
      
      this.isClosing = true;
      this.isOpen = false;
      document.body.style.overflow = '';
      this.$emit('close');
      console.log('Lightbox closed, isOpen now:', this.isOpen);
      
      // Reset closing flag after a short delay
      setTimeout(() => {
        this.isClosing = false;
        console.log('Reset closing flag');
      }, 100);
    },
    handleCloseButtonClick(event) {
      console.log('Close button clicked on lightbox:', this.instanceId);
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      this.closeLightbox();
    },
    handleOverlayClick(event) {
      console.log('Overlay clicked');
      // Only close if clicking the overlay itself, not its children
      if (event.target === event.currentTarget) {
        this.closeLightbox();
      }
    },
    nextImage() {
      if (this.currentIndex < this.galleryImages.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to first image
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.galleryImages.length - 1; // Loop to last image
      }
    },
    setCurrentImage(index) {
      this.currentIndex = index;
    },
    handleImageLoad() {
      this.imageLoading = false;
    },
    handleImageError() {
      this.imageLoading = false;
      console.error('Error loading lightbox image:', this.currentImage);
      console.log('Available images:', this.galleryImages);
      console.log('Current index:', this.currentIndex);
      
      // Try to use a fallback image
      const img = this.$el?.querySelector('img');
      if (img) {
        img.src = '/leopard_silouette_404.png';
      }
    },
    handleKeydown(event) {
      console.log('Keydown event:', event.key, 'isOpen:', this.isOpen);
      if (!this.isOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
        case 'Escape':
          console.log('Escape key pressed, closing lightbox');
          this.closeLightbox();
          break;
      }
    },
    handleLightboxOpen(event) {
      console.log('Lightbox', this.instanceId, 'received openLightbox event:', event.detail);
      
      // Only respond if this is the active instance
      if (window.activeLightboxInstance !== this.instanceId) {
        console.log('Lightbox', this.instanceId, 'ignoring event - not active instance');
        return;
      }
      
      // Only open if we have images
      if (this.galleryImages.length === 0) {
        console.warn('Cannot open lightbox: no images available');
        return;
      }
      
      this.currentIndex = event.detail.index || 0;
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
      console.log('Lightbox', this.instanceId, 'opened with index:', this.currentIndex, 'isOpen:', this.isOpen);
    }
  },
  mounted() {
    // Generate a unique ID for this lightbox instance
    this.instanceId = Math.random().toString(36).substr(2, 9);
    console.log('Lightbox component mounted with ID:', this.instanceId);
    console.log('Gallery images:', this.galleryImages);
    
    // Store this instance as the active one
    window.activeLightboxInstance = this.instanceId;
    console.log('Set active lightbox instance to:', this.instanceId);
    
    // Remove any existing listeners first to prevent duplicates
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('openLightbox', this.handleLightboxOpen);
    
    // Add fresh listeners
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('openLightbox', this.handleLightboxOpen);
    console.log('Event listeners added for lightbox:', this.instanceId);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('openLightbox', this.handleLightboxOpen);
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>
.lightbox-overlay {
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;
}

.lightbox-container img {
  animation: scaleIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Smooth transitions for navigation */
.lightbox-container button {
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.lightbox-container button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.lightbox-container button:active {
  transform: scale(0.95);
}

/* Custom scrollbar for thumbnails */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>