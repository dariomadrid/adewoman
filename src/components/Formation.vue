<template>
  <section class="bg-accent-dark">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      
      <!-- Left Image -->
      <div class="order-1 md:order-1">
        <div class="relative w-full h-full p-4">
          <img 
            src="/img/adw_pelvis.jpg" 
            alt="Jéssica González Sánchez - Formación en fisioterapia especializada"
            class="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover rounded-2xl border-4 border-white"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="order-2 md:order-2 flex items-center">
        <div class="text-light">
          <h2 class="text-light text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            FORMACIÓN
          </h2>
          
          <ul class="text-xl md:text-2xl space-y-4 leading-relaxed">
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
              <span class="text-light">FISIOSEXOLOGÍA</span>
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
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Formation',
  props: {
    lang: {
      type: String,
      default: 'ca'
    }
  }
}
</script>