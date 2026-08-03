<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de vulnerabilidades, amenazas y riesgos

    .bloque-texto-g.bg-color-secundario.br-b1.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.br-b1
        p La interpretación de situaciones de riesgo en ciberseguridad requiere comprender la relación entre los activos de información, las vulnerabilidades, las amenazas y los posibles impactos sobre una organización. Una vulnerabilidad corresponde a una debilidad que puede ser aprovechada por una amenaza, mientras que el riesgo representa la probabilidad de que esta situación ocurra y genere consecuencias sobre la confidencialidad, integridad, disponibilidad o privacidad de la información. #[br] #[br]
        p.mb-0 Frente a estas situaciones, las contramedidas y los controles de seguridad permiten prevenir, detectar o reducir afectaciones. La comprensión articulada de estos conceptos facilita el estudio de casos aplicados y orienta la identificación, exploración y clasificación de vulnerabilidades y amenazas en contextos tecnológicos reales.
    
    p En ciberseguridad, una vulnerabilidad representa una debilidad, una amenaza corresponde a aquello que podría aprovecharla y el riesgo expresa la posibilidad de afectación y sus consecuencias. Analizar estos tres elementos de manera conjunta permite clasificar hallazgos y priorizar acciones.


    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.1 Relación entre vulnerabilidad, amenaza y riesgo

    .tarjeta.bg-color-1.p-4.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-3.col-5.mb-3.mb-lg-0
          img.px-lg-4(src='@/assets/curso/temas/t2/2.svg', alt='')
        .col-lg-9
          p.mb-0 La distinción entre vulnerabilidad, amenaza y riesgo constituye uno de los fundamentos del diagnóstico. Estos términos están relacionados, pero representan elementos diferentes. Confundirlos dificulta la clasificación de hallazgos y puede conducir a decisiones poco acertadas.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Comparación entre vulnerabilidad, amenaza y riesgo en el diagnóstico de ciberseguridad
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Concepto
              th Definición
              th Característica principal
              th Ejemplo aplicado
              th Pregunta orientadora para el diagnóstico
          tbody
            tr
              td Vulnerabilidad
              td Debilidad o condición inadecuada en un sistema, proceso, configuración o comportamiento humano que puede facilitar una afectación de seguridad.
              td Representa una falla o punto de exposición que requiere identificación y análisis.
              td Una plataforma virtual conserva una versión desactualizada de uno de sus componentes o permite el uso de contraseñas débiles.
              td ¿Qué debilidad podría ser aprovechada para afectar el sistema o la información?
            tr
              td Amenaza
              td Circunstancia, acción, evento o actor con capacidad de aprovechar una vulnerabilidad y causar daño a un activo de información.
              td Puede originarse de manera intencional, accidental o técnica.
              td Una persona intenta acceder sin autorización a las cuentas de los usuarios mediante credenciales obtenidas de forma fraudulenta.
              td ¿Qué situación o actor podría aprovechar la debilidad identificada?
            tr
              td Riesgo
              td Posibilidad de que una amenaza aproveche una vulnerabilidad y produzca consecuencias sobre los activos, los servicios o los usuarios.
              td Se valora considerando la probabilidad de ocurrencia y el impacto potencial.
              td El acceso no autorizado a una plataforma puede ocasionar exposición de datos personales, modificación de registros o interrupción del servicio.
              td ¿Qué consecuencias podrían generarse si la amenaza se materializa?

    img.mb-4(src='@/assets/curso/temas/t2/3.png', alt='', data-aos='fade')

    p La vulnerabilidad corresponde a la debilidad existente; la amenaza representa aquello que podría aprovecharla; y el riesgo expresa la posibilidad de afectación y sus consecuencias. Estos conceptos deben analizarse de manera articulada para priorizar los hallazgos obtenidos durante el diagnóstico.

    p Una analogía facilita la comprensión. Una puerta sin cerradura representa una vulnerabilidad; una persona que intenta ingresar sin autorización constituye una amenaza; y la posibilidad de pérdida de equipos o documentos expresa un riesgo. Instalar una cerradura, controlar el acceso y verificar periódicamente su funcionamiento son contramedidas. La misma lógica puede trasladarse a los entornos tecnológicos.


    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.2 Clasificación de vulnerabilidades

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/4.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/5.svg', alt='')
          .col-lg-10
            p.mb-0 El diagnóstico de ciberseguridad requiere analizar las condiciones que podrían facilitar una afectación sobre los activos tecnológicos y la información de una organización. Entre dichas condiciones se encuentran las vulnerabilidades, entendidas como debilidades que pueden presentarse en aplicaciones, equipos, redes, configuraciones, procesos o prácticas de los usuarios. Su identificación constituye una actividad central del componente formativo, debido a que permite pasar de una comprensión general de la seguridad al análisis concreto de posibles puntos de exposición.
        .bg-color-3.bg-complr-3.p-4.mb-4
          p.mb-0 Una vulnerabilidad es una debilidad que puede ser aprovechada por una amenaza para afectar la confidencialidad, integridad, disponibilidad o privacidad de la información. Puede originarse en una falla de programación, una configuración inadecuada, una versión desactualizada, un procedimiento incompleto, un control insuficiente o una práctica insegura por parte de los usuarios.

    p Debe distinguirse entre una vulnerabilidad concreta y una debilidad general. Una vulnerabilidad puede asociarse con una versión particular de un componente tecnológico y registrarse mediante un identificador CVE. En cambio, una debilidad describe un patrón que podría originar múltiples vulnerabilidades. El proyecto Common Weakness Enumeration (CWE) reúne tipos de debilidades de software y hardware, como errores en el control de acceso, validación insuficiente de entradas o manejo inadecuado de información sensible.

    p.mb-4 Las vulnerabilidades pueden clasificarse de acuerdo con su origen, el activo afectado y la forma en que podrían facilitar una afectación. Esta clasificación orienta la exploración y permite ordenar los hallazgos obtenidos mediante herramientas o procedimientos de diagnóstico.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 3.
        span Clasificación general de vulnerabilidades según su origen
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Tipo de vulnerabilidad
              th Descripción
              th Ejemplo aplicado
              th Posible afectación
              th Evidencia que requiere revisión
          tbody
            tr
              td Software
              td Debilidad asociada con el diseño, desarrollo o mantenimiento de una aplicación o componente.
              td Un sitio web utiliza una biblioteca desactualizada.
              td Exposición de datos, modificación no autorizada o interrupción del servicio.
              td Versión instalada, documentación técnica y registros de actualización.
            tr
              td Configuración
              td Ajuste inadecuado que amplía la exposición de un activo.
              td Una cuenta administrativa conserva credenciales predeterminadas.
              td Acceso no autorizado y pérdida de trazabilidad.
              td Políticas de acceso, configuración de cuentas y permisos asignados.
            tr
              td Red
              td Condición insegura relacionada con conectividad, servicios o segmentación.
              td Un servicio interno se encuentra disponible para usuarios que no lo requieren.
              td Acceso indebido, propagación de malware o exploración no autorizada.
              td Inventario de servicios, topología de red y resultados del escaneo autorizado.
            tr
              td Física
              td Debilidad asociada con el acceso material a equipos, documentos o medios de almacenamiento.
              td Un dispositivo externo con información institucional no dispone de protección adecuada.
              td Pérdida, divulgación o uso no autorizado de información.
              td Procedimientos de custodia, controles de acceso y registro de activos.
            tr
              td Humana u organizacional
              td Práctica, procedimiento o comportamiento que facilita una afectación.
              td Varios usuarios comparten una misma contraseña para ingresar a una plataforma.
              td Suplantación, pérdida de trazabilidad o exposición de información.
              td Política de autenticación, entrevistas, registros de acceso y procedimientos internos.
    
    p La tabla muestra que las vulnerabilidades no pertenecen exclusivamente al software. Un diagnóstico integral debe considerar la relación entre tecnología, personas y procesos. Esta mirada evita que la exploración se reduzca a los resultados de una herramienta automatizada.


    Separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.3 Fuentes y tipos de amenazas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/6.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/7.svg', alt='')
          .col-lg-10
            p.mb-0 La identificación de vulnerabilidades permite reconocer debilidades, pero el diagnóstico no estaría completo sin analizar las amenazas que podrían aprovecharlas. Una amenaza corresponde a una circunstancia, actor o evento con capacidad de generar una afectación. Puede originarse dentro o fuera de la organización, ser intencional o accidental y utilizar medios técnicos o sociales.
        .bg-color-8.bg-complr-8.p-4.mb-4
          p.mb-0 Las amenazas pueden clasificarse según su origen. Las amenazas externas proceden de actores o eventos ajenos a la organización, como intentos de acceso no autorizado, campañas de suplantación o interrupciones de servicios externos. Las amenazas internas se relacionan con personas, procesos o condiciones dentro de la organización. Un usuario puede provocar una afectación de forma deliberada, pero también cometer un error sin intención maliciosa.
        p Otra clasificación distingue las amenazas intencionales, accidentales, técnicas y ambientales. Las intencionales buscan causar daño, obtener acceso o extraer información. Las accidentales surgen de errores, omisiones o desconocimiento. Las técnicas incluyen fallas de hardware, software o conectividad. Las ambientales comprenden eventos que afectan instalaciones o infraestructura, como interrupciones eléctricas o daños físicos.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 4.
        span Clasificación de amenazas según su origen y comportamiento
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Tipo de amenaza
              th Característica
              th Ejemplo aplicado
              th Activo expuesto
              th Posible impacto
          tbody
            tr
              td Externa intencional
              td Proviene de un actor ajeno a la organización que busca obtener acceso o causar daño.
              td Un mensaje fraudulento solicita credenciales de acceso a la plataforma virtual.
              td Cuenta de usuario y datos institucionales.
              td Suplantación, acceso indebido o exposición de información.
            tr
              td Interna intencional
              td Se origina dentro de la organización mediante una acción deliberada.
              td Un usuario utiliza permisos excesivos para consultar información que no requiere.
              td Base de datos o documentos internos.
              td Pérdida de confidencialidad y trazabilidad.
            tr
              td Interna accidental
              td Se produce por error, desconocimiento u omisión.
              td Un funcionario comparte un archivo con permisos públicos sin advertirlo.
              td Documento institucional.
              td Divulgación no autorizada.
            tr
              td Técnica
              td Surge de fallas en equipos, software o conectividad.
              td Un dispositivo de almacenamiento presenta daños y no existe copia de respaldo.
              td Archivos operativos.
              td Pérdida de disponibilidad.
            tr
              td Ambiental o física
              td Afecta instalaciones o infraestructura material.
              td Una interrupción eléctrica prolongada afecta un servicio local.
              td Equipos y plataforma institucional.
              td Interrupción de actividades y pérdida de continuidad.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
