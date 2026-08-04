<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos para el diagnóstico de ciberseguridad


    .bloque-texto-g.bg-color-adicional-1.br-b1.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5.br-b1
        p.mb-0 El diagnóstico de ciberseguridad constituye un proceso fundamental para reconocer las condiciones que pueden afectar la protección de la información y la continuidad de los servicios tecnológicos de una organización. Su desarrollo parte de la comprensión de la ciberseguridad como una capacidad organizacional que integra personas, procesos, tecnologías y prácticas de gestión.
        
    p.mb-1 En este sentido, resulta necesario diferenciar la ciberseguridad de la seguridad de la información y de la seguridad digital, debido a que cada enfoque aporta elementos específicos para analizar los sistemas, los datos y los servicios conectados. Asimismo, los principios de confidencialidad, integridad, disponibilidad y privacidad permiten valorar las posibles consecuencias que podrían derivarse de una falla, una configuración inadecuada o una acción no autorizada.
    p La realización de un diagnóstico requiere identificar previamente los activos de información y comprender su relación con el contexto de negocio, ya que la importancia de un hallazgo depende del servicio o proceso que podría verse afectado. Una plataforma virtual de aprendizaje, una base de datos institucional o un sistema de autenticación no poseen el mismo nivel de criticidad que un recurso de uso temporal o restringido.

    .tarjeta.bg-color-1.p-4.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3.col-5.mb-3.mb-lg-0
          img.px-lg-4(src='@/assets/curso/temas/t1/2.svg', alt='')
        .col-lg-9
          p.mb-0 Por esta razón, la exploración debe efectuarse mediante procedimientos planificados, herramientas autorizadas y criterios éticos que delimiten claramente su alcance. Esta perspectiva permite que el aprendiz interprete el diagnóstico no como una actividad técnica aislada, sino como una práctica responsable orientada a reconocer vulnerabilidades, amenazas y riesgos para fortalecer la seguridad de la infraestructura tecnológica.

    p El diagnóstico de ciberseguridad permite reconocer las condiciones que pueden afectar la información, los sistemas y los servicios tecnológicos antes de proponer controles o ejecutar acciones de seguridad. Por ello, debe realizarse con alcance definido, autorización expresa, criterios técnicos y responsabilidad ética.


    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1. Seguridad de la información, ciberseguridad y seguridad digital   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p Los términos ciberseguridad, seguridad de la información y seguridad digital se relacionan, pero no deben tratarse como expresiones completamente equivalentes. La distinción contribuye a delimitar el objeto de análisis y evita que el diagnóstico se reduzca a la revisión de equipos informáticos.
        .bg-color-1.bg-compll-1.p-4.mb-4
          p.mb-0 La seguridad de la información se concentra en preservar las propiedades de la información, independientemente del medio en el que esta se encuentre. Un documento impreso con datos personales, una base de datos de aprendices, una copia de respaldo, un mensaje institucional y un archivo almacenado en una plataforma virtual requieren medidas de protección. El Decreto 338 de 2022 define la seguridad de la información como la preservación de la autenticidad, confidencialidad, integridad y disponibilidad de la información en cualquier medio de almacenamiento, junto con la aplicación de procesos de resiliencia operativa.
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img.px-lg-2(src='@/assets/curso/temas/t1/3.svg', alt='')
          .col-lg-10
            p.mb-0 La ciberseguridad se ocupa especialmente de los riesgos relacionados con sistemas, redes, aplicaciones, dispositivos y servicios conectados o dependientes del entorno digital. Una plataforma #[em web] con un formulario de autenticación, un servidor institucional, una red inalámbrica, un dispositivo móvil o un servicio alojado en la nube forman parte de este ámbito. En estos escenarios, la protección exige comprender tanto la información como la infraestructura que permite procesarla, transmitirla y almacenarla.
        .tarjeta.bg-color-4.p-4
          p.mb-0 La seguridad digital, en el contexto colombiano, posee un alcance amplio y se relaciona con la construcción de condiciones de confianza en el entorno digital. El Decreto 338 de 2022 la define como una situación de normalidad y tranquilidad alcanzada mediante la apropiación de políticas, buenas prácticas, gestión del riesgo, implementación efectiva de medidas de ciberseguridad y uso de capacidades institucionales. Este enfoque reconoce que la seguridad no depende de un solo actor: requiere coordinación entre entidades públicas, organizaciones privadas, academia y sociedad civil.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/4.png', alt='')

    p Puede establecerse una analogía sencilla. La información equivale al contenido valioso que debe preservarse; la ciberseguridad reúne las medidas para proteger los entornos tecnológicos en los que ese contenido circula; y la seguridad digital representa una condición más amplia de confianza, gobernanza y resiliencia. En la práctica, estas dimensiones se complementan.

    p.mb-5 En un centro de formación, por ejemplo, el registro de calificaciones constituye información que debe mantenerse íntegra y disponible. La plataforma que almacena dichos datos debe contar con controles de acceso, copias de respaldo y configuraciones adecuadas. A su vez, la institución debe definir procedimientos, responsabilidades y mecanismos para responder ante incidentes. El diagnóstico de vulnerabilidades y amenazas requiere analizar las tres dimensiones: el valor de la información, las condiciones técnicas de los sistemas y la gestión organizacional que orienta su protección.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Tres enfoques que se complementan

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
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
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/5.png', alt='')


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.2 Principios de protección de la información

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/6.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img.px-lg-2(src='@/assets/curso/temas/t1/7.svg', alt='')
          .col-lg-10
            p.mb-0 La protección de la información se sustenta en principios que permiten analizar las posibles consecuencias de un incidente. Los tres principios tradicionalmente reconocidos son la confidencialidad, la integridad y la disponibilidad. En el presente componente se incorpora también la privacidad, debido a su importancia para la protección de las personas.
        p Estos principios funcionan como criterios para formular preguntas durante el diagnóstico. ¿Qué información podría ser consultada por una persona no autorizada? ¿Qué datos podrían alterarse sin que exista trazabilidad? ¿Qué servicios deben permanecer disponibles para evitar interrupciones significativas? ¿Qué consecuencias tendría una exposición de datos personales? Tales preguntas permiten conectar el análisis técnico con las necesidades reales de los usuarios.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Comparación de los principios de protección de la información
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Principio
              th Definición
              th Finalidad
              th Ejemplo de afectación
              th Medidas de protección
              th Aplicación en un contexto educativo
          tbody
            tr
              td Confidencialidad
              td Garantiza que la información solo pueda ser consultada por personas, procesos o sistemas autorizados.
              td Evitar la divulgación o el acceso indebido a datos sensibles.
              td Una persona sin autorización accede a las calificaciones o a los datos personales de los aprendices.
              td Control de acceso, autenticación segura, asignación de permisos, cifrado y gestión responsable de contraseñas.
              td Restringir el acceso a expedientes académicos, evidencias de aprendizaje y bases de datos institucionales según el rol del usuario.
            tr
              td Integridad
              td Asegura que la información se conserve exacta, completa y sin modificaciones no autorizadas.
              td Evitar alteraciones que puedan afectar la confiabilidad de los datos y la toma de decisiones.
              td Se modifican las calificaciones registradas en una plataforma virtual sin autorización ni trazabilidad.
              td Registros de auditoría, control de versiones, copias de respaldo, permisos de edición y verificación de cambios.
              td Garantizar que las actividades, evaluaciones y registros académicos mantengan su contenido original y que cualquier modificación quede registrada.
            tr
              td Disponibilidad
              td Permite que la información, los sistemas y los servicios estén accesibles cuando las personas autorizadas los requieren.
              td Evitar interrupciones que afecten la continuidad de los servicios.
              td La plataforma virtual no está disponible durante el desarrollo de una actividad formativa.
              td Copias de respaldo, mantenimiento preventivo, monitoreo, redundancia y planes de continuidad.
              td Asegurar el acceso oportuno a plataformas, recursos de formación, registros académicos y servicios institucionales.
            tr
              td Privacidad
              td Protege el tratamiento adecuado de la información relacionada con las personas, de acuerdo con su finalidad y con los derechos de los titulares.
              td Evitar el uso excesivo, inadecuado o no autorizado de datos personales.
              td Se publica una lista de aprendices con números de identificación, correos electrónicos o datos de contacto sin una justificación válida.
              td Recolección mínima de datos, consentimiento cuando corresponda, definición de finalidades, anonimización y acceso restringido.
              td Utilizar únicamente los datos personales necesarios para el proceso formativo y proteger la información de aprendices, instructores y personal administrativo.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Preguntas clave para el diagnóstico

    .row.justify-content-center(data-aos='fade')
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Confidencialidad
          p.text-center.mb-0 ¿Qué información podría ser consultada por una persona no autorizada?
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center Integridad
          p.text-center.mb-0 ¿Qué datos podrían alterarse sin autorización o sin trazabilidad?
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Disponibilidad
          p.text-center.mb-0 ¿Qué servicios deben permanecer disponibles para evitar interrupciones significativas?
      .col-lg-3.col-md-6.mb-3
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Privacidad
          p.text-center.mb-0 ¿Qué consecuencias tendría una exposición de datos personales?


    Separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.3 Eventos, incidentes y contramedidas de seguridad

    .tarjeta.bg-color-5.mb-4(data-aos='fade')
      .row.justify-content-center
        .col-lg-5.col-md-7.col-9
          img.w-75.m-auto.pt-lg-4(src='@/assets/curso/temas/t1/8.svg', alt='')
        .col-lg-7
          .d-flex.justify-content-center.align-items-center.flex-column.h-100.p-4.p-lg-5         
            p Un evento de seguridad es una ocurrencia identificable dentro de un sistema o red. Puede corresponder a una actividad legítima, una condición técnica o una señal que requiere análisis. Un inicio de sesión, una modificación de archivo, una conexión a un servicio o un aumento inusual del tráfico pueden considerarse eventos.
            p Un incidente de seguridad ocurre cuando una situación pone en peligro la confidencialidad, integridad o disponibilidad de un sistema o de la información que este procesa, almacena o transmite, o cuando se presenta una violación de las políticas y procedimientos establecidos. Esta definición se encuentra recogida en el Decreto 338 de 2022 y permite comprender que no todo evento constituye un incidente, aunque algunos eventos pueden aportar evidencias para detectarlo.         

    p La diferencia puede ilustrarse mediante un ejemplo. El acceso de un instructor a la plataforma virtual durante su jornada constituye un evento normal. Diez intentos fallidos de acceso en pocos minutos pueden ser una señal que requiere revisión. Si posteriormente se comprueba que una cuenta fue utilizada sin autorización para descargar información, se configura un incidente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos='fade-right')
        .bg-color-4.bg-compll-4.p-4.mb-4
          p.mb-0 Frente a estas condiciones, las contramedidas y los controles de seguridad permiten prevenir, detectar o reducir afectaciones. Pueden incluir autenticación segura, revisión de permisos, bloqueo de accesos no autorizados, registro de evidencias y comunicación de los indicios identificados durante la exploración.
        p El diagnóstico de vulnerabilidades no siempre detecta incidentes en curso. Su finalidad principal consiste en identificar condiciones que podrían favorecerlos. Sin embargo, durante la exploración pueden aparecer indicios que deben registrarse y comunicarse. La capacidad de distinguir entre hallazgo, evento e incidente contribuye a elaborar informes claros y evita conclusiones apresuradas.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/9.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Del evento al incidente

    .tarjeta--container.row.mb-5
      .col-lg.col-md-6.tarjeta.bg-color-6.p-5
        .row.justify-content-center.mb-4
          .col-lg-6.col-md-5.col-4
            img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')          
        h4.text-center Evento normal
        p.mb-0 Un instructor ingresa a la plataforma virtual durante su jornada habitual. Esta acción corresponde a una actividad esperada dentro del sistema. 
      .col-lg.col-md-6.tarjeta.bg-color-5.p-5
        .row.justify-content-center.mb-4
          .col-lg-8.col-md-7.col-5
            img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')          
        h4.text-center Señal que requiere análisis
        p.mb-0 Se presentan varios intentos fallidos de acceso en pocos minutos. Esta situación no confirma un incidente, pero exige revisión.      
      .col-lg.col-md-6.tarjeta.bg-color-7.p-5
        .row.justify-content-center.mb-4
          .col-lg-8.col-md-6.col-5
            img(src='@/assets/curso/temas/t1/tarj1-3.svg', alt='')          
        h4.text-center Incidente de seguridad
        p.mb-0 Se comprueba que una cuenta fue utilizada sin autorización para descargar información. En este caso existe una afectación real o potencial.
      .col-lg.col-md-6.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-lg-9.col-md-7.col-5
            img(src='@/assets/curso/temas/t1/tarj1-4.svg', alt='')          
        h4.text-center Contramedida
        p.mb-0 Se aplican controles para prevenir, detectar o reducir afectaciones, como autenticación segura, revisión de permisos, bloqueo de accesos no autorizados y registro de evidencias.


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
