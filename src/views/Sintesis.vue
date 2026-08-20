<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p El diagnóstico de vulnerabilidades, amenazas y riesgos de ciberseguridad constituye un proceso sistemático que permite reconocer condiciones de exposición antes de que se materialicen afectaciones sobre la información, los sistemas o los servicios digitales. Su desarrollo requiere comprender los principios de confidencialidad, integridad, disponibilidad y privacidad; diferenciar eventos, incidentes, vulnerabilidades, amenazas y riesgos; reconocer posibles señales de #[em malware]; e identificar el papel de las personas frente a la ingeniería social y la protección de la información. Por ello, la seguridad no depende exclusivamente de herramientas tecnológicas, sino también de políticas, procedimientos, responsabilidades, controles, referentes técnicos y procesos de gestión continúa orientados a la prevención.

    p La exploración de vulnerabilidades adquiere sentido cuando se conecta con el contexto organizacional. La delimitación del alcance, el inventario de activos, la revisión de configuraciones, el análisis de servicios, el uso autorizado de herramientas, la validación de hallazgos y la clasificación de amenazas aportan información para sustentar decisiones de seguridad. De esta manera, el aprendiz fortalece una actuación técnica, ética y crítica: interpreta evidencias, evita conclusiones automáticas y documenta resultados útiles para proteger infraestructuras tecnológicas, servicios digitales y datos personales. Esta base le permitirá avanzar hacia la selección de controles, la mitigación de riesgos y la validación de acciones preventivas en los siguientes momentos del proceso formativo.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del diagnóstico de vulnerabilidades y amenazas de ciberseguridad. Presenta cinco ejes: fundamentos, análisis, técnicas, amenazas digitales y gestión. Relaciona principios de protección, vulnerabilidades, amenazas, riesgos, inventario de activos, escaneo controlado, malware, ingeniería social, políticas, mejora continua y registro de hallazgos para fortalecer decisiones de prevención, protección y mitigación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
