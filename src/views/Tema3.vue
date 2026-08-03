<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas y referentes para orientar el diagnóstico
    
    .bloque-texto-g.bg-color-9.br-b1.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.br-b1
        p.mb-0 Las estrategias y referentes para orientar el diagnóstico de ciberseguridad permiten desarrollar un proceso sistemático, ordenado y verificable para identificar posibles debilidades en una infraestructura tecnológica. Este proceso requiere definir previamente el alcance del análisis, reconocer los activos involucrados y seleccionar metodologías y técnicas acordes con las características del entorno. #[br] #[br]
        p.mb-0 Asimismo, el uso de marcos de referencia, estándares y normativa vigente facilita la interpretación de los hallazgos y aporta criterios para su clasificación y documentación. En contextos formativos, las técnicas de diagnóstico deben aplicarse en ambientes controlados y autorizados, mediante procedimientos que integren revisión documental, análisis de configuraciones, análisis de servicios y uso responsable de herramientas tecnológicas, con el propósito de fortalecer la capacidad del aprendiz para explorar vulnerabilidades, amenazas y riesgos de manera ética y fundamentada.

    p El diagnóstico de ciberseguridad debe realizarse de manera sistemática, verificable y ética. Antes de aplicar una herramienta, es necesario definir el alcance, reconocer los activos, seleccionar técnicas pertinentes y documentar los hallazgos con criterios técnicos y contextuales.


    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.1. Diagnóstico como proceso sistemático

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/2.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/3.svg', alt='')
          .col-lg-10
            p.mb-0 El diagnóstico de ciberseguridad es un proceso estructurado para obtener información sobre un entorno tecnológico, identificar posibles debilidades y analizar su relación con amenazas y riesgos. Su finalidad no consiste en emitir juicios generales, sino en generar evidencias útiles para la toma de decisiones.
        p Una exploración básica puede iniciar con la delimitación del alcance: qué infraestructura se analizará, cuál es el propósito de la revisión y qué restricciones deben respetarse. Posteriormente, se identifican los activos, se recopila información, se aplican técnicas de diagnóstico autorizadas, se documentan los hallazgos y se clasifican según criterios técnicos y contextuales.

    p.mb-5 Este orden evita que las herramientas definan el proceso. Ejecutar un escáner sin comprender el entorno puede generar numerosos resultados difíciles de interpretar. Algunos hallazgos pueden ser irrelevantes, otros pueden corresponder a falsos positivos y otros requieren atención prioritaria. La competencia profesional consiste en relacionar la evidencia técnica con el contexto de negocio.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Ruta básica del diagnóstico de ciberseguridad

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos='fade-right')
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Delimitar el alcance")
            .col-11
              p Se define qué infraestructura se analizará, cuál es el propósito de la revisión y qué restricciones deben respetarse.
          .row(numero="2" titulo="Identificar los activos")
            .col-11
              p Se reconocen los activos involucrados y su relación con el contexto de negocio o con el servicio que podría verse afectado.
          .row(numero="3" titulo="Recopilar información")
            .col-11
              p Se reúne información técnica, documental y contextual necesaria para comprender el entorno tecnológico.
          .row(numero="4" titulo="Aplicar técnicas autorizadas")
            .col-11
              p Se utilizan procedimientos y herramientas de diagnóstico dentro del alcance permitido y bajo condiciones controladas.
          .row(numero="5" titulo="Documentar hallazgos")
            .col-11
              p Se registran las evidencias obtenidas para sustentar el análisis y facilitar la toma de decisiones.
          .row(numero="6" titulo="Clasificar resultados")
            .col-11
              p Los hallazgos se organizan según criterios técnicos y contextuales, diferenciando resultados irrelevantes, falsos positivos y situaciones que requieren atención prioritaria.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/4.png', alt='')


    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.2 Metodologías y técnicas en entornos controlados

    .bg-color-primario.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png', alt='')
        .col-lg-7
          .p-4.text-white
            img.w-85x.mb-3(src='@/assets/curso/temas/t3/6.svg', alt='')
            p Una metodología proporciona una secuencia lógica para desarrollar el diagnóstico. No todas las evaluaciones requieren el mismo nivel de profundidad, pero deben conservar criterios de organización y trazabilidad. Entre las actividades habituales se encuentran la identificación de activos, la revisión documental, el análisis de configuraciones, la revisión de servicios disponibles, la recopilación de información técnica y el uso controlado de herramientas de exploración.
            p.mb-0 Las técnicas pueden clasificarse según la forma en que obtienen información. Algunas se basan en la revisión de documentación e inventarios; otras requieren analizar configuraciones; algunas analizan registros; y otras permiten reconocer servicios o posibles vulnerabilidades mediante herramientas automatizadas. El uso de una técnica depende del alcance autorizado, la criticidad de los activos y el propósito de la evaluación.

    p En un entorno educativo, por ejemplo, una actividad inicial puede solicitar la construcción de un inventario básico de activos y la clasificación de posibles afectaciones. Una actividad posterior puede incorporar una herramienta de escaneo en un laboratorio controlado. Esta secuencia favorece el aprendizaje autónomo porque permite comprender primero el sentido del análisis y utilizar después los recursos tecnológicos.

    p La metodología también debe incluir validación. Un resultado automatizado no debe aceptarse sin revisión. Si una herramienta identifica una versión potencialmente vulnerable, el aprendiz debe contrastar la evidencia, verificar la pertinencia del hallazgo y analizar el contexto. Esta práctica evita que el informe se convierta en una copia de resultados y fortalece el pensamiento crítico.

     .row.justify-content-center.mb-4
        .col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.svg', alt='')
        .col-lg-11
          p.mb-0 Las técnicas de diagnóstico deben seleccionarse de acuerdo con el propósito del análisis y el alcance autorizado. Una evaluación inicial puede combinar revisión documental, inventario de activos, análisis de configuraciones, identificación de servicios y exploración automatizada. La secuencia debe avanzar desde acciones menos intrusivas hacia procedimientos más específicos, siempre bajo condiciones controladas.
    
    .row.justify-content-end.mb-4
      .col-lg-11
        .bg-color-3.bg-complr-3.p-4
          p El inventario permite responder qué activos existen y qué función cumplen. La revisión de configuraciones ayuda a detectar cuentas innecesarias, permisos excesivos o servicios habilitados sin justificación. El análisis de registros aporta información sobre eventos relevantes. El escaneo controlado permite identificar equipos, puertos, servicios o posibles vulnerabilidades. La comparación de resultados con referentes técnicos facilita clasificar los hallazgos.
          p.mb-0 Una herramienta de exploración no interpreta por sí sola las necesidades de una organización. Puede señalar que un servicio está disponible o que una versión merece revisión, pero no determina automáticamente el impacto sobre el proceso formativo, comercial o administrativo. Por ello, el aprendiz debe formular preguntas contextualizadas: ¿el servicio detectado es necesario?, ¿se encuentra expuesto a usuarios que no lo requieren?, ¿el activo procesa información sensible?, ¿existe una medida compensatoria?, ¿el resultado debe validarse mediante otra fuente?

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/8.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p Los procedimientos de diagnóstico permiten verificar si los controles se aplican de manera consistente. Su desarrollo debe mantener relación con el alcance autorizado y con la criticidad de los activos. Una revisión inicial puede incluir inventario de hardware y software, verificación de actualizaciones, análisis de permisos, revisión de configuraciones, análisis de registros y exploración controlada de servicios.
        p La secuencia pedagógica debe comenzar por preguntas comprensibles. ¿Qué activos existen? ¿Qué usuarios acceden a ellos? ¿Qué aplicaciones se encuentran instaladas? ¿Qué servicios están disponibles? ¿Qué información procesa el sistema? ¿Qué configuraciones requieren validación? Estas preguntas orientan la recopilación de evidencia y evitan que la actividad se reduzca a ejecutar una herramienta sin propósito definido.

    .tarjeta.bg-color-8.mb-4.p-4(data-aos='fade')
      p.mb-0 Una herramienta automatizada puede indicar que un servicio se encuentra activo, pero el aprendiz debe determinar si su presencia resulta necesaria. Puede señalar una versión desactualizada, pero requiere contrastar el dato y comprender el impacto contextual. Puede identificar un puerto abierto, pero no establecer por sí sola si existe un riesgo crítico. La interpretación profesional integra la evidencia técnica con el proceso organizacional.

    p.mb-5 En un escenario de aprendizaje, una red de laboratorio puede contener tres equipos con funciones diferentes: un servidor de práctica, un computador de usuario y un dispositivo utilizado para compartir archivos. El aprendiz delimita el alcance, identifica los activos, ejecuta una exploración autorizada y compara los resultados con el inventario. Si encuentra un servicio inesperado o una configuración débil, debe clasificar el hallazgo y explicar su relación con una amenaza posible.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Técnicas aplicables en un diagnóstico controlado

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/9.png', alt='')
      .col-lg-8(data-aos='fade-left')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Inventario de activos")
            .col-md-11.mb-4.mb-md-0
              p Permite responder qué activos existen, qué función cumplen y cómo se relacionan con el entorno tecnológico analizado.
          .row(titulo="Revisión documental")
            .col-md-11.mb-4.mb-md-0
              p Ayuda a reconocer información previa, inventarios, políticas, procedimientos y registros que orientan el análisis.
          .row(titulo="Análisis de configuraciones")
            .col-md-11.mb-4.mb-md-0
              p Permite identificar cuentas innecesarias, permisos excesivos, servicios habilitados sin justificación o configuraciones que requieren validación.
          .row(titulo="Análisis de registros")
            .col-md-11.mb-4.mb-md-0
              p Aporta información sobre eventos relevantes y facilita la revisión de comportamientos asociados con los sistemas o servicios.
          .row(titulo="Escaneo controlado")
            .col-md-11.mb-4.mb-md-0
              p Permite identificar equipos, puertos, servicios o posibles vulnerabilidades, siempre dentro del alcance autorizado.
          .row(titulo="Validación de resultados")
            .col-md-11.mb-4.mb-md-0
              p Exige contrastar la evidencia, revisar la pertinencia del hallazgo y analizar el contexto antes de emitir conclusiones.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Preguntas para evitar diagnósticos automáticos

    SlyderF(columnas="col-lg-4 col-md-6")
      .tarjeta-numerada.color-primario.p-5.h-100
        .tarjeta-numerada__numero
          .h2 1
        h5.text-center Necesidad del servicio
        p.text-center.mb-0 ¿El servicio detectado es necesario para el proceso formativo, comercial o administrativo?
      .tarjeta-numerada.color-acento-botones.p-5.h-100
        .tarjeta-numerada__numero
          .h2 2
        h5.text-center Exposición del activo
        p.text-center.mb-0 ¿El servicio se encuentra expuesto a usuarios que no lo requieren?
      .tarjeta-numerada.color-secundario.p-5.h-100
        .tarjeta-numerada__numero
          .h2 3
        h5.text-center Sensibilidad de la información
        p.text-center.mb-0 ¿El activo procesa información sensible?
      .tarjeta-numerada.color-primario.p-5.h-100
        .tarjeta-numerada__numero
          .h2 4
        h5.text-center Medidas compensatorias
        p.text-center.mb-0 ¿Existe una medida compensatoria que reduzca la exposición?
      .tarjeta-numerada.color-acento-contenido.p-5.h-100
        .tarjeta-numerada__numero
          .h2 5
        h5.text-center Validación del resultado
        p.text-center.mb-0 ¿El resultado debe validarse mediante otra fuente antes de clasificarlo como hallazgo?


    Separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 3.3 Normas, estándares y buenas prácticas

    .tarjeta.bg-color-1.p-4.p-lg-5.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-7.col-9.mb-3.mb-lg-0
          img.w-75.m-auto(src='@/assets/curso/temas/t3/10.svg', alt='')
        .col-lg-7
          .d-flex.justify-content-center.align-items-center.flex-column.h-100        
            p La gestión de seguridad de la información requiere valorar riesgos de manera estructurada. ISO/IEC 27005:2022 ofrece orientaciones para identificar, evaluar y tratar riesgos de seguridad de la información como apoyo a la implementación de un sistema de gestión basado en ISO/IEC 27001 (International Organization for Standardization [ISO], 2022b).
            p.mb-0 La evaluación debe considerar el activo, la vulnerabilidad, la amenaza, la probabilidad de materialización y el impacto posible. La organización también necesita analizar los controles existentes y determinar si reducen suficientemente la exposición. En contextos básicos de formación, esta valoración puede representarse mediante escalas cualitativas, como bajo, medio y alto, siempre que se expliquen los criterios empleados.

    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t3/11.png', alt='', data-aos='fade')

    p Considérese una aplicación web creada por una pequeña empresa para recibir solicitudes. El sitio utiliza un componente desactualizado. La vulnerabilidad puede relacionarse con una amenaza externa que intente aprovechar la falla. El impacto podría involucrar modificación del contenido, acceso indebido o interrupción del servicio. Para priorizar el hallazgo, deben analizarse la exposición del sitio, la criticidad de los datos y la existencia de medidas de protección.

    p La evaluación no debe confundirse con una certeza absoluta. Un riesgo expresa una posibilidad fundamentada y requiere revisión periódica. Los cambios tecnológicos, las nuevas amenazas y la evolución del servicio pueden modificar la prioridad de un hallazgo. Esta idea fortalece una competencia esencial: el diagnóstico es un proceso continuo y no una fotografía permanente.

    .row.justify-content-center.align-items-center.mb-4      
      .col-lg-7(data-aos='fade-right')
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img.px-lg-2(src='@/assets/curso/temas/t3/12.svg', alt='')
          .col-lg-10
            p.mb-0 Los mecanismos de evaluación pueden incluir listas de verificación, matrices de riesgo, revisión de configuraciones, análisis de registros, pruebas autorizadas, entrevistas con responsables y comparación con referentes técnicos. La selección depende del propósito del diagnóstico. En formación mediada por TIC, estos recursos pueden integrarse mediante plantillas digitales, laboratorios virtuales y actividades de análisis de caso.
        p ISO/IEC 27001:2022 constituye un referente central porque establece requisitos para un SGSI. ISO/IEC 27002:2022 complementa este enfoque mediante orientaciones y buenas prácticas relacionadas con controles de seguridad. ISO/IEC 27005:2022 aporta directrices para gestionar riesgos de seguridad de la información. Estas normas cumplen funciones distintas, pero articuladas: requisitos de gestión, orientación sobre controles y administración estructurada de riesgos (ISO, 2022a, 2022b, 2022c).
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/13.png', alt='')

    .tarjeta.bg-color-1.p-4.mb-4(data-aos='fade')
      p.mb-0 El #[em NIST Cybersecurity Framework] 2.0 organiza los resultados de ciberseguridad en seis funciones: gobernar, identificar, proteger, detectar, responder y recuperar. Esta estructura facilita comprender el ciclo completo de gestión. El presente componente se concentra principalmente en identificar y explorar, pero los hallazgos deben contribuir posteriormente a la protección, detección, respuesta y recuperación (NIST, 2024).

    p Los CIS Controls aportan una aproximación práctica mediante salvaguardas priorizadas. Su utilidad pedagógica reside en mostrar que la seguridad puede traducirse en acciones verificables: inventariar activos, mantener configuraciones seguras, administrar vulnerabilidades, proteger datos, controlar accesos y fortalecer la respuesta ante incidentes. El aprendiz no necesita aplicar todos los controles durante este componente, pero debe reconocer que los hallazgos del diagnóstico orientan decisiones posteriores.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Referentes para orientar el diagnóstico

    .row.justify-content-between.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/14.png', alt='')
      .col-lg-6(data-aos='fade-left')
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="ISO/IEC 27001:2022")
            .col-11
              p Establece requisitos para un SGSI y permite orientar la implementación, mantenimiento y mejora de la gestión de seguridad de la información.
          .row(numero="2" titulo="ISO/IEC 27002:2022")
            .col-11
              p Complementa el enfoque de gestión mediante orientaciones y buenas prácticas relacionadas con controles de seguridad.
          .row(numero="3" titulo="ISO/IEC 27005:2022")
            .col-11
              p Aporta directrices para identificar, evaluar y tratar riesgos de seguridad de la información de manera estructurada.
          .row(numero="4" titulo="<em>NIST Cybersecurity Framework</em> 2.0")
            .col-11
              p Organiza los resultados de ciberseguridad en seis funciones: gobernar, identificar, proteger, detectar, responder y recuperar.
          .row(numero="5" titulo="<em>CIS Controls</em>")
            .col-11
              p Presenta salvaguardas priorizadas que permiten traducir la seguridad en acciones verificables, como inventariar activos, administrar vulnerabilidades, proteger datos y controlar accesos.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Ciclo de gestión según el #[em NIST Cybersecurity Framework]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos='fade-right')
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Gobernar")
            .col-11
              p Permite orientar las decisiones, responsabilidades y prioridades de ciberseguridad.
          .row(numero="2" titulo="Identificar")
            .col-11
              p Facilita reconocer activos, vulnerabilidades, amenazas y riesgos.
          .row(numero="3" titulo="Proteger")
            .col-11
              p Agrupa acciones orientadas a reducir la exposición de los activos y servicios.
          .row(numero="4" titulo="Detectar")
            .col-11
              p Permite reconocer eventos o condiciones que puedan indicar una afectación.
          .row(numero="5" titulo="Responder")
            .col-11
              p Orienta la actuación frente a situaciones que requieren análisis y atención.
          .row(numero="6" titulo="Recuperar")
            .col-11
              p Busca restablecer servicios y fortalecer la continuidad después de una afectación.
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/15.png', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
