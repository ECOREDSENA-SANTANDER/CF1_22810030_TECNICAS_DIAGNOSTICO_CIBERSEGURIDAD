<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos para el diagnóstico de ciberseguridad


    .bloque-texto-g.bg-color-adicional-1.br-b1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5.br-b1
        p.mb-0 El diagnóstico de ciberseguridad constituye un proceso fundamental para reconocer las condiciones que pueden afectar la protección de la información y la continuidad de los servicios tecnológicos de una organización. Su desarrollo parte de la comprensión de la ciberseguridad como una capacidad organizacional que integra personas, procesos, tecnologías y prácticas de gestión.
        
    p.mb-1 En este sentido, resulta necesario diferenciar la ciberseguridad de la seguridad de la información y de la seguridad digital, debido a que cada enfoque aporta elementos específicos para analizar los sistemas, los datos y los servicios conectados. Asimismo, los principios de confidencialidad, integridad, disponibilidad y privacidad permiten valorar las posibles consecuencias que podrían derivarse de una falla, una configuración inadecuada o una acción no autorizada.
    p La realización de un diagnóstico requiere identificar previamente los activos de información y comprender su relación con el contexto de negocio, ya que la importancia de un hallazgo depende del servicio o proceso que podría verse afectado. Una plataforma virtual de aprendizaje, una base de datos institucional o un sistema de autenticación no poseen el mismo nivel de criticidad que un recurso de uso temporal o restringido.

    .tarjeta.bg-color-1.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-2
          img.px-lg-4(src='@/assets/curso/temas/t1/2.svg', alt='')
        .col-lg-9
          p.mb-0 Por esta razón, la exploración debe efectuarse mediante procedimientos planificados, herramientas autorizadas y criterios éticos que delimiten claramente su alcance. Esta perspectiva permite que el aprendiz interprete el diagnóstico no como una actividad técnica aislada, sino como una práctica responsable orientada a reconocer vulnerabilidades, amenazas y riesgos para fortalecer la seguridad de la infraestructura tecnológica.

    p El diagnóstico de ciberseguridad permite reconocer las condiciones que pueden afectar la información, los sistemas y los servicios tecnológicos antes de proponer controles o ejecutar acciones de seguridad. Por ello, debe realizarse con alcance definido, autorización expresa, criterios técnicos y responsabilidad ética.


    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1. Seguridad de la información, ciberseguridad y seguridad digital   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p Los términos ciberseguridad, seguridad de la información y seguridad digital se relacionan, pero no deben tratarse como expresiones completamente equivalentes. La distinción contribuye a delimitar el objeto de análisis y evita que el diagnóstico se reduzca a la revisión de equipos informáticos.
        .bg-color-1.bg-complm-1.p-4.mb-4
          p.mb-0 La seguridad de la información se concentra en preservar las propiedades de la información, independientemente del medio en el que esta se encuentre. Un documento impreso con datos personales, una base de datos de aprendices, una copia de respaldo, un mensaje institucional y un archivo almacenado en una plataforma virtual requieren medidas de protección. El Decreto 338 de 2022 define la seguridad de la información como la preservación de la autenticidad, confidencialidad, integridad y disponibilidad de la información en cualquier medio de almacenamiento, junto con la aplicación de procesos de resiliencia operativa.
        .row.justify-content-center.mb-4
          .col-lg-2
            img.px-lg-2(src='@/assets/curso/temas/t1/3.svg', alt='')
          .col-lg-10
            p.mb-0 La ciberseguridad se ocupa especialmente de los riesgos relacionados con sistemas, redes, aplicaciones, dispositivos y servicios conectados o dependientes del entorno digital. Una plataforma web con un formulario de autenticación, un servidor institucional, una red inalámbrica, un dispositivo móvil o un servicio alojado en la nube forman parte de este ámbito. En estos escenarios, la protección exige comprender tanto la información como la infraestructura que permite procesarla, transmitirla y almacenarla.
        .tarjeta.bg-color-4.p-4
          p.mb-0 La seguridad digital, en el contexto colombiano, posee un alcance amplio y se relaciona con la construcción de condiciones de confianza en el entorno digital. El Decreto 338 de 2022 la define como una situación de normalidad y tranquilidad alcanzada mediante la apropiación de políticas, buenas prácticas, gestión del riesgo, implementación efectiva de medidas de ciberseguridad y uso de capacidades institucionales. Este enfoque reconoce que la seguridad no depende de un solo actor: requiere coordinación entre entidades públicas, organizaciones privadas, academia y sociedad civil.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/4.png', alt='')

    p Puede establecerse una analogía sencilla. La información equivale al contenido valioso que debe preservarse; la ciberseguridad reúne las medidas para proteger los entornos tecnológicos en los que ese contenido circula; y la seguridad digital representa una condición más amplia de confianza, gobernanza y resiliencia. En la práctica, estas dimensiones se complementan.

    p.mb-5 En un centro de formación, por ejemplo, el registro de calificaciones constituye información que debe mantenerse íntegra y disponible. La plataforma que almacena dichos datos debe contar con controles de acceso, copias de respaldo y configuraciones adecuadas. A su vez, la institución debe definir procedimientos, responsabilidades y mecanismos para responder ante incidentes. El diagnóstico de vulnerabilidades y amenazas requiere analizar las tres dimensiones: el valor de la información, las condiciones técnicas de los sistemas y la gestión organizacional que orienta su protección.

    .titulo-tercero.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Tres enfoques que se complementan

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Seguridad de la información")
            .col-md-11.mb-4.mb-md-0
              p Preserva las propiedades de la información en cualquier medio: documentos físicos, bases de datos, copias de respaldo, mensajes institucionales o archivos almacenados en plataformas digitales.
          .row(titulo="Ciberseguridad")
            .col-md-11.mb-4.mb-md-0
              p Se enfoca en los riesgos asociados con sistemas, redes, aplicaciones, dispositivos y servicios conectados o dependientes del entorno digital.
          .row(titulo="Seguridad digital")
            .col-md-11.mb-4.mb-md-0
              p Se relaciona con la construcción de confianza en el entorno digital mediante políticas, buenas prácticas, gestión del riesgo, medidas de ciberseguridad y capacidades institucionales.
          .row(titulo="Relación entre los tres enfoques")
            .col-md-11.mb-4.mb-md-0
              p La seguridad de la información protege el contenido; la ciberseguridad protege los entornos tecnológicos donde ese contenido circula; y la seguridad digital promueve confianza, gobernanza y resiliencia.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/5.png', alt='')


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2 Principios de protección de la información





    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.3 Eventos, incidentes y contramedidas de seguridad





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
