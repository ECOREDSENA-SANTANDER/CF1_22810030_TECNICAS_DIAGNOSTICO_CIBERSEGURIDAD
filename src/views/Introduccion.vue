<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8
        p La transformación digital ha cambiado la forma en que las personas, instituciones y organizaciones gestionan información, prestan servicios y se comunican. Una institución educativa puede administrar matrículas en una plataforma web, almacenar documentos en servicios digitales y desarrollar procesos de formación virtual. Una pequeña empresa puede recibir pedidos por internet, usar facturación electrónica y proteger datos de clientes. Estos escenarios muestran que la tecnología facilita muchas actividades, pero también genera condiciones que deben analizarse con criterio preventivo.
        .bg-color-1.bg-complm-1.p-4
          p.mb-0 La ciberseguridad permite reconocer esas condiciones y comprender qué información, sistemas y servicios requieren protección. No se limita a instalar herramientas ni a reaccionar cuando ocurre un incidente; implica identificar vulnerabilidades, reconocer amenazas y valorar riesgos antes de que se materialicen. Por ello, el diagnóstico de ciberseguridad es importante para anticipar posibles afectaciones, fortalecer la protección de los activos de información y tomar decisiones responsables frente al uso de la tecnología.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    p.mb-4 Este componente formativo se orienta al resultado de aprendizaje “Explorar vulnerabilidades, amenazas y riesgos según técnicas de análisis y herramientas tecnológicas de seguridad”. A partir de este propósito, la persona aprendiz desarrollará una mirada analítica frente a los entornos digitales, diferenciará conceptos esenciales de ciberseguridad y comprenderá la relación entre activos, vulnerabilidades, amenazas, riesgos, eventos, incidentes y contramedidas.

    .row.justify-content-center.mb-5 
      .col-lg-3.d-none.d-lg-block
        .bg-color-2.px-5.py-2
          img.w-75.m-auto(src='@/assets/curso/temas/intro/2.svg', alt='')
      .col-lg-9
        .bg-color-3.p-4.h-100.d-flex.align-items-center
          p.mb-0 El contenido se abordará de manera progresiva, mediante explicaciones, ejemplos aplicados, tablas comparativas y recursos educativos digitales que faciliten el estudio autónomo. Primero se presentarán los fundamentos de ciberseguridad y seguridad de la información; luego se analizarán técnicas de diagnóstico, referentes normativos, malware, vulnerabilidades, amenazas e ingeniería social. Además, se promoverá una postura ética, porque toda exploración técnica debe realizarse con autorización, alcance definido y respeto por la normativa vigente. 

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
