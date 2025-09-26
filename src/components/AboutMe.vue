<template>
  <section class="bg-accent">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
      
      <!-- Left Image -->
      <div class="order-1 md:order-1">
        <div class="relative w-full h-full">
          <img 
            src="/img/adw_aw.jpg" 
            alt="Jéssica González Sánchez - Fisioterapeuta especialista en salud femenina"
            class="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-h-[800px] object-cover"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="order-2 md:order-2 flex items-center">
        <div class="text-primary">
          <h2 class="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            SOBRE MI
          </h2>
          
          <p class="text-primary text-xl md:text-2xl mb-6 leading-relaxed">
            Aunque siempre he sufrido dolor durante la menstruación, mediante medicación y la falta de respuestas de profesionales, normalicé que la regla duele.
          </p>
          
          <p class="text-primary text-xl md:text-2xl mb-6 leading-relaxed">
            No fue hasta 2020 que empecé a buscar respuestas, ya que la intensidad del dolor llegó a incapacitarme provocándome desmayos.
          </p>
          
          <p class="text-primary text-xl md:text-2xl leading-relaxed">
            Tras varias visitas a diferentes ginecólogo/as me diagnosticaron adenomiosis y un foco de endometriosis. Fue entonces cuando fui consciente de la necesidad de muchas mujeres, y que debía enfocar mi trabajo (mi pasión) a buscar herramientas para el bienestar de todas ellas.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    lang: {
      type: String,
      default: 'ca'
    }
  }
}
</script>