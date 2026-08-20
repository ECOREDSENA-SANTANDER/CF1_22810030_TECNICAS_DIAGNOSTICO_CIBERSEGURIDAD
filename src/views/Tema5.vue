<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión de seguridad y documentación del diagnóstico

    .bloque-texto-g.color-acento-botones.br-b1.p-3.p-sm-4.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.br-b1
        p.mb-0 El estudio del #[em malware] permite reconocer amenazas concretas, pero el diagnóstico requiere una mirada más amplia. Una organización no protege sus activos únicamente mediante herramientas #[em antimalware]. También necesita políticas, responsabilidades, procedimientos, controles, mecanismos de evaluación y procesos de mejora. Esta perspectiva corresponde a la seguridad de la información y a su gestión organizacional. #[br] #[br]
        p.mb-0 La transición resulta importante para el aprendizaje. Identificar una amenaza constituye un avance, pero no resuelve por sí solo la situación. El aprendiz debe comprender cómo una organización establece criterios para prevenir incidentes, administrar riesgos y revisar periódicamente sus prácticas. De este modo, la exploración de vulnerabilidades adquiere sentido dentro de un proceso institucional y no se limita a una actividad técnica aislada.

    p El diagnóstico de ciberseguridad no termina cuando se identifica una amenaza o una vulnerabilidad. Sus resultados deben integrarse a políticas, procedimientos, controles, mecanismos de evaluación y procesos de mejora que permitan proteger los activos de información de manera continua.


    Separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 5.1 Políticas, procedimientos y responsabilidades 

    p La seguridad de la información comprende las prácticas orientadas a preservar las propiedades necesarias para que los datos y servicios mantengan su valor. Como se explicó en el primer bloque, la confidencialidad restringe el acceso a usuarios autorizados; la integridad busca evitar alteraciones indebidas; la disponibilidad procura garantizar el acceso oportuno a los recursos; y la privacidad promueve el tratamiento responsable de la información personal.
    
    img.mb-4(src='@/assets/curso/temas/t5/2.png', alt='', data-aos='fade')

    p Estas propiedades deben analizarse de manera transversal. Una organización puede implementar controles técnicos robustos y, al mismo tiempo, exponer información mediante procedimientos administrativos inadecuados. También puede proteger una base de datos, pero descuidar los archivos descargados por los usuarios o las copias impresas. La gestión debe analizar el ciclo completo de la información: creación, consulta, modificación, transmisión, almacenamiento, respaldo y eliminación.

    .tarjeta.bg-color-1.p-4.mb-4(data-aos='fade')
      p.mb-0 En formación profesional, esta mirada puede aplicarse mediante un caso sencillo. Una unidad productiva crea un sitio #[em web] para recibir solicitudes de sus clientes. El formulario recopila nombre, correo electrónico y descripción del servicio requerido. El diagnóstico no debe concentrarse únicamente en la disponibilidad del sitio. También debe preguntar quién consulta los datos, dónde se almacenan, durante cuánto tiempo se conservan, qué permisos existen y cómo se protege la información personal.
    
    p Una política de seguridad de la información establece orientaciones institucionales para proteger activos, definir responsabilidades y guiar decisiones. No se trata de un documento elaborado únicamente para cumplir un requisito formal. Su valor depende de que pueda comprenderse, aplicarse y revisarse de acuerdo con el contexto organizacional.

    p Los procedimientos traducen las políticas en acciones concretas. Una política puede indicar que los accesos deben controlarse; el procedimiento define cómo se crean, modifican y eliminan las cuentas. Una política puede establecer que los incidentes deben reportarse; el procedimiento especifica el canal, la información requerida y el responsable de recibir el reporte. Una política puede exigir copias de respaldo; el procedimiento determina la periodicidad, ubicación, validación y recuperación de la información.

    p Las responsabilidades deben ser explícitas. La seguridad no corresponde únicamente al equipo técnico. Los directivos definen prioridades y recursos; los responsables tecnológicos implementan y revisan controles; los usuarios aplican prácticas seguras; y quienes administran procesos identifican la criticidad de la información. Una institución educativa requiere esta articulación porque la plataforma virtual, los datos académicos, los equipos de laboratorio y los servicios administrativos involucran actores diferentes.

    p.mb-5 Los #[em CIS Critical Security Controls] constituyen un conjunto priorizado de salvaguardas orientadas a defender sistemas y redes frente a ataques frecuentes. Su versión actual enfatiza la necesidad de aplicar prácticas específicas, medibles y pertinentes para entornos modernos que pueden incluir nube, virtualización, movilidad y trabajo remoto (Center for Internet Security [CIS], s. f.-a). Estos controles no reemplazan el análisis institucional, pero aportan criterios prácticos para orientar acciones.


    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 De la política a la acción

    .row.justify-content-center(data-aos='fade')
      .col-xl-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.pb-4.h-100
          .tarjeta-numerada__numero
            .h2 a
          h5.text-center Política de seguridad
          p.text-center.mb-0 Establece orientaciones institucionales para proteger activos, definir responsabilidades y guiar decisiones de acuerdo con el contexto organizacional.
      .col-xl-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-acento-botones.p-5.pb-4.h-100
          .tarjeta-numerada__numero
            .h2 b
          h5.text-center Procedimiento
          p.text-center.mb-0 Convierte la política en acciones concretas. Define cómo se crean cuentas, cómo se reportan incidentes o cómo se realizan copias de respaldo.
      .col-xl-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-secundario.p-5.pb-4.h-100
          .tarjeta-numerada__numero
            .h2 c
          h5.text-center Responsabilidades
          p.text-center.mb-0 Aclara el papel de directivos, responsables tecnológicos, usuarios y administradores de procesos frente a la protección de la información.
      .col-xl-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.h-100
          .tarjeta-numerada__numero
            .h2 d
          h5.text-center Controles
          p.text-center.mb-0 Permiten aplicar medidas específicas, medibles y pertinentes para proteger sistemas, redes, datos, accesos y servicios institucionales.  


    Separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 5.2. Gestión de riesgos y mejora continua 

    p La gestión de seguridad de la información integra los conceptos anteriores dentro de un sistema organizado. Su propósito es evitar que las acciones dependan únicamente de decisiones reactivas o esfuerzos aislados. Una organización necesita reconocer sus activos, establecer responsabilidades, valorar riesgos, aplicar controles y revisar periódicamente su eficacia.

    .tarjeta.bg-color-7.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-6
          .p-4.px-lg-5
            p Un sistema de gestión de seguridad de la información, conocido como SGSI, articula políticas, procesos, responsabilidades, recursos y mecanismos de mejora para proteger los activos de información. ISO/IEC 27001:2022 establece requisitos para implementar, mantener y mejorar continuamente este tipo de sistema de gestión (ISO, 2022a).
            p.mb-0 La ventaja principal del enfoque consiste en transformar la seguridad en un proceso organizacional. La institución deja de actuar únicamente después de un incidente y desarrolla capacidades para anticipar riesgos, asignar prioridades y revisar resultados. Esto no significa eliminar por completo la posibilidad de afectación. Significa tomar decisiones fundamentadas y fortalecer la capacidad de respuesta.
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/3.png', alt='')

    p En una organización educativa, un SGSI puede ayudar a coordinar la protección de plataformas, datos académicos, cuentas institucionales, equipos administrativos y servicios digitales. El diagnóstico aporta información para esta gestión: señala activos, identifica vulnerabilidades, reconoce amenazas y documenta hallazgos que requieren tratamiento.

    p La gestión se apoya en componentes relacionados entre sí. La comprensión del contexto permite establecer qué procesos y activos requieren protección. La valoración de riesgos ayuda a priorizar. Las políticas orientan la actuación. Los controles reducen la exposición. La formación fortalece las decisiones de los usuarios. El monitoreo permite analizar cambios. La documentación conserva trazabilidad. La revisión facilita la mejora.

    p #[em NIST SP 800-53 Rev. 5] presenta un catálogo flexible y personalizable de controles de seguridad y privacidad destinado a proteger operaciones, activos, personas y organizaciones frente a amenazas diversas, entre ellas ataques hostiles, errores humanos, fallas estructurales y riesgos de privacidad (NIST, 2020). Su enfoque confirma que la protección no debe limitarse a amenazas intencionales. Un error de configuración o una práctica cotidiana también puede generar consecuencias significativas.
    

    img.mb-4(src='@/assets/curso/temas/t5/4.png', alt='', data-aos='fade')

    p Por ejemplo, una base de datos puede quedar expuesta por una acción deliberada, pero también por una configuración incorrecta realizada sin intención perjudicial. En ambos casos, el diagnóstico debe identificar la vulnerabilidad y analizar el riesgo. La clasificación de la causa facilita seleccionar posteriormente las medidas apropiadas.

    p La mejora continua implica revisar periódicamente las condiciones de seguridad. Un diagnóstico realizado una sola vez pierde vigencia cuando cambian los activos, aparecen nuevas amenazas o se modifican los servicios. La incorporación de una nueva aplicación, la apertura de un sitio #[em web], el uso de dispositivos personales o la actualización de una plataforma pueden introducir nuevas condiciones de riesgo.

    p Una comparación facilita la comprensión. El mantenimiento de la seguridad se asemeja a la revisión periódica de una infraestructura física. No basta con verificar una puerta una única vez; deben analizarse los cambios, corregirse daños y comprobarse los controles. En entornos digitales, esta necesidad es aún más evidente porque los sistemas evolucionan continuamente.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Componentes de la gestión de seguridad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Contexto")
            .col-md-11.mb-4.mb-md-0
              p Permite establecer qué procesos y activos requieren protección dentro de la organización.
          .row(titulo="Valoración de riesgos")
            .col-md-11.mb-4.mb-md-0
              p Ayuda a priorizar las condiciones que podrían afectar la confidencialidad, integridad, disponibilidad o privacidad de la información.
          .row(titulo="Políticas y controles")
            .col-md-11.mb-4.mb-md-0
              p Las políticas orientan la actuación institucional y los controles reducen la exposición de los activos.
          .row(titulo="Formación y monitoreo")
            .col-md-11.mb-4.mb-md-0
              p La formación fortalece las decisiones de los usuarios y el monitoreo permite analizar cambios en los sistemas y servicios.
          .row(titulo="Documentación y revisión")
            .col-md-11.mb-4.mb-md-0
              p La documentación conserva trazabilidad y la revisión facilita la mejora continua del proceso de seguridad.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t5/5.png', alt='')

    p.mb-5 Estos componentes se relacionan entre sí y permiten que la gestión de seguridad no funcione como una acción aislada, sino como un proceso permanente. A partir del contexto, la valoración de riesgos, las políticas, los controles, la formación, el monitoreo, la documentación y la revisión, la organización puede reconocer cambios, verificar condiciones de seguridad y ajustar sus acciones de manera continua. Por ello, la mejora del diagnóstico depende de la capacidad para registrar, analizar y actualizar la información obtenida durante cada revisión.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Mejora continua del diagnóstico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t5/6.png', alt='')
      .col-lg-8(data-aos='fade-left')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="Reconocer cambios")
            .col-md-11.mb-4.mb-md-0
              p Se identifican modificaciones en activos, servicios, aplicaciones, plataformas o formas de uso.
          .row(titulo="Revisar condiciones de seguridad")
            .col-md-11.mb-4.mb-md-0
              p Se analizan vulnerabilidades, amenazas y riesgos que pueden surgir por esos cambios.
          .row(titulo="Comprobar controles")
            .col-md-11.mb-4.mb-md-0
              p Se verifica si los controles existentes reducen suficientemente la exposición.
          .row(titulo="Documentar resultados")
            .col-md-11.mb-4.mb-md-0
              p Se registran hallazgos, evidencias, prioridades y decisiones asociadas.
          .row(titulo="Ajustar acciones")
            .col-md-11.mb-4.mb-md-0
              p Se fortalecen controles, procedimientos o prácticas según los resultados del diagnóstico.


    Separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 5.3. Registro y clasificación de hallazgos 

    .tarjeta.bg-color-8.mb-4.pt-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-7.col-9.mb-3.mb-lg-0
          img.w-75.m-auto(src='@/assets/curso/temas/t5/7.svg', alt='')
        .col-lg-7
          .d-flex.justify-content-center.align-items-center.flex-column.h-100.p-3  
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t5/8.svg', alt='')
              .col-lg-10
                p.mb-0 La mejora requiere documentación. Los hallazgos deben registrar el activo afectado, la descripción de la vulnerabilidad, la amenaza relacionada, el impacto posible, la evidencia disponible y la prioridad asignada. Este registro permite comparar diagnósticos, verificar avances y sustentar acciones preventivas.
            p El registro de hallazgos no debe entenderse como una actividad final aislada. Durante el diagnóstico, la documentación permite conservar trazabilidad, organizar evidencias y evitar conclusiones apresuradas. Además, facilita diferenciar una debilidad técnica, una condición de configuración, una práctica insegura o una situación que requiere validación adicional.

    .tarjeta.bg-color-3.p-4.mb-4(data-aos='fade')
      p.mb-0 La clasificación de hallazgos permite establecer prioridades. No todos los resultados tienen el mismo nivel de importancia. Algunos hallazgos pueden corresponder a situaciones irrelevantes, otros pueden ser falsos positivos y otros pueden requerir atención prioritaria. Por esta razón, el registro debe relacionar la evidencia técnica con el contexto de negocio, el activo afectado y el posible impacto.

    p.mb-5 En una organización educativa, por ejemplo, un hallazgo sobre una plataforma virtual, una base de datos académica o una cuenta institucional debe analizarse según el servicio comprometido, el tipo de información involucrada, la exposición del activo y los controles existentes. Esta relación permite que el informe técnico no sea una simple lista de resultados, sino una herramienta para orientar decisiones de seguridad.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Ruta para registrar hallazgos del diagnóstico

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-lg-10
        PasosA.color-acento-botones(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-8.col-md-6.mb-3.mb-md-0
              h4 Identificar el activo afectado
              p Se registra el sistema, servicio, equipo, aplicación, base de datos o recurso asociado con el hallazgo.
            .col-lg-4.col-md-6.col-9
              img(src='@/assets/curso/temas/t5/paso1-1.svg', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-6.col-9.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t5/paso1-2.svg', alt='')              
            .col-lg-8.col-md-6
              h4 Describir la vulnerabilidad
              p Se explica la debilidad identificada, evitando conclusiones generales sin evidencia.
          .row.justify-content-center.align-items-center
            .col-lg-8.col-md-6.mb-3.mb-md-0
              h4 Relacionar la amenaza
              p Se indica qué circunstancia, actor o evento podría aprovechar la vulnerabilidad.
            .col-lg-4.col-md-6.col-9
              img(src='@/assets/curso/temas/t5/paso1-3.svg', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-6.col-9.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t5/paso1-4.svg', alt='')              
            .col-lg-8.col-md-6
              h4 Analizar el impacto posible
              p Se determina cómo podría afectarse la confidencialidad, integridad, disponibilidad o privacidad de la información.
          .row.justify-content-center.align-items-center
            .col-lg-8.col-md-6.mb-3.mb-md-0
              h4 Incorporar evidencia disponible
              p Se conservan registros, resultados de herramientas, capturas, inventarios, configuraciones o soportes que permitan sustentar el hallazgo.
            .col-lg-4.col-md-6.col-9
              img(src='@/assets/curso/temas/t5/paso1-5.svg', alt='')
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-6.col-9.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t5/paso1-6.svg', alt='')              
            .col-lg-8.col-md-6
              h4 Asignar prioridad
              p Se clasifica el hallazgo según criterios técnicos y contextuales, considerando probabilidad, impacto, exposición y controles existentes.              

    .bg-color-3.mb-4
      img(src='@/assets/curso/temas/t5/podcast.svg', alt='')
      .bg-color-acento-botones.p-4
        .tarjeta.bg-white.p-4
          p Para complementar el estudio del registro y la clasificación de hallazgos, escuche el pódcast Del hallazgo al informe técnico. En este recurso se explica cómo documentar una vulnerabilidad, relacionarla con una amenaza, analizar su impacto posible, conservar evidencia y asignar una prioridad. Esta información le ayudará a comprender por qué un diagnóstico de ciberseguridad no debe limitarse a una lista de resultados, sino convertirse en una herramienta para orientar decisiones de protección, mejora y prevención dentro de la organización.
          TarjetaAudio.color-acento-botones(
          texto="<b>Pódcast:</b> del hallazgo al informe técnico"
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
