<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Amenazas digitales y afectación de los sistemas

    .bloque-texto-g.color-acento-botones.br-b1.p-3.p-sm-4.mb-4(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.br-b1
        p.mb-0 Una vez establecidos los fundamentos, las estrategias y los referentes que orientan el diagnóstico, resulta necesario estudiar una de las manifestaciones más frecuentes de las amenazas digitales: el #[em software] malicioso o #[em malware]. Su análisis permite comprender cómo una vulnerabilidad técnica, una configuración inadecuada o una decisión poco segura de un usuario pueden facilitar la afectación de un sistema de información. #[br] #[br]
        p.mb-0 En contextos educativos y empresariales, el #[em malware] puede comprometer equipos de usuario, redes, aplicaciones, servidores y archivos compartidos. Un computador utilizado para acceder a una plataforma virtual podría infectarse después de abrir un archivo adjunto fraudulento. Un sitio #[em web] construido para promocionar servicios podría incorporar componentes inseguros o desactualizados. Una memoria USB conectada a diferentes equipos de laboratorio podría facilitar la propagación de código malicioso si no existen controles adecuados. Cada situación requiere reconocer señales, identificar activos expuestos y establecer una relación razonada entre la amenaza, la vulnerabilidad y el posible impacto.

    p El #[em malware], los ataques y la ingeniería social no deben analizarse como hechos aislados. Cada amenaza debe relacionarse con activos expuestos, vulnerabilidades existentes, señales identificables y posibles consecuencias sobre la información, los sistemas y los servicios digitales.


    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 4.1. #[em Malware] y señales de posible infección

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p El término #[em malware] procede de la expresión inglesa #[em malicious software] y se utiliza para describir programas, fragmentos de código o componentes diseñados para realizar acciones perjudiciales o no autorizadas sobre sistemas, redes, dispositivos o información. La #[em Cybersecurity and Infrastructure Security Agency] (CISA) señala que el #[em malware] puede utilizarse para interrumpir servicios, sustraer información sensible o acceder de manera indebida a sistemas informáticos privados (CISA, s. f.-a).
        .bg-color-1.bg-compll-1.p-4.mb-4
          p.mb-0 La característica central del #[em malware] no depende exclusivamente de su forma técnica, sino de su finalidad y comportamiento. Un archivo puede parecer legítimo, pero ejecutar acciones ocultas al abrirse. Una aplicación aparentemente útil puede recolectar información sin autorización. Un programa puede permanecer inactivo durante un periodo y activarse posteriormente bajo determinadas condiciones. Por ello, el diagnóstico debe evitar una mirada limitada a los nombres de los archivos o a la apariencia de los programas. La exploración requiere analizar el contexto, los cambios identificados y las señales que podrían indicar una afectación.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/2.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right') 
        .tarjeta.bg-color-10.p-4.h-100.d-flex.align-items-center
          img(src='@/assets/curso/temas/t4/3.svg', alt='')
      .col-lg-9(data-aos='fade-left')
        p En términos pedagógicos, el #[em malware] puede compararse con un elemento extraño que ingresa a una organización y altera su funcionamiento desde el interior. La analogía no implica que todos los casos se desarrollen de la misma manera. Algunos programas buscan propagarse; otros intentan permanecer ocultos; algunos bloquean archivos; y otros recopilan información. Comprender estas diferencias permite clasificar las amenazas con mayor precisión.
        p En una institución de formación, por ejemplo, un aprendiz podría descargar una herramienta desde un sitio #[em web] no confiable para realizar una actividad práctica. Si el archivo contiene código malicioso y el equipo no dispone de controles adecuados, la amenaza podría materializarse. El problema no reside únicamente en la descarga. También intervienen la ausencia de validación de la fuente, la posible falta de actualización del sistema, el nivel de privilegios asignado al usuario y la capacidad institucional para detectar comportamientos anómalos.

    .tarjeta.bg-color-3.p-4.mb-5(data-aos='fade')
      p.mb-0 La clasificación del #[em malware] facilita la interpretación de sus comportamientos y posibles afectaciones. CISA incluye entre las modalidades comunes los virus, gusanos, troyanos, #[em ransomware], #[em spyware] y #[em rootkits], entre otras variantes (CISA, 2022). Estas categorías no deben entenderse como compartimentos completamente cerrados. Un mismo programa puede combinar funciones, evolucionar con el tiempo o emplearse como parte de una cadena de ataque más amplia.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Modalidades frecuentes de #[em malware]

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-primario t4")
      .row.justify-content-around.align-items-center(titulo="Virus")
        .col-lg-5.col-11
          p Se vincula con archivos o programas y puede ejecutarse cuando el usuario abre o activa el elemento infectado. Puede alterar archivos, afectar el funcionamiento del equipo o facilitar otras acciones maliciosas. En un contexto formativo, un archivo compartido entre equipos de laboratorio podría contener código malicioso y ejecutarse cuando varios usuarios lo abren. La pregunta orientadora sería: ¿qué archivos fueron utilizados antes de que aparecieran los cambios anómalos?
        .col-lg-5.col-md-8.col-10
          img(src='@/assets/curso/temas/t4/acord1-1.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Gusano")
        .col-lg-5.col-11
          p Puede propagarse entre sistemas o redes sin depender necesariamente de una interacción directa del usuario. Puede consumir recursos, afectar la disponibilidad o facilitar el acceso remoto no autorizado. En una red de práctica, un equipo desactualizado podría permitir que el código malicioso se propague hacia otros dispositivos conectados. La pregunta orientadora sería: ¿qué equipos presentan condiciones similares y cómo se encuentran segmentados?
        .col-lg-5.col-md-8.col-10
          img(src='@/assets/curso/temas/t4/acord1-2.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Troyano")
        .col-lg-5.col-11
          p Se presenta como un archivo o programa aparentemente legítimo para inducir su ejecución. Puede instalar componentes adicionales, obtener acceso o facilitar la extracción de información. En un computador institucional, un supuesto instalador de una herramienta gratuita podría contener funcionalidades ocultas. La pregunta orientadora sería: ¿la aplicación proviene de una fuente confiable y cuenta con validación previa?
        .col-lg-5.col-md-8.col-10
          img(src='@/assets/curso/temas/t4/acord1-3.png', alt='')
      .row.justify-content-around.align-items-center(titulo="<em>Spyware</em>")
        .col-lg-5.col-11
          p Busca recopilar información sin autorización. Puede capturar credenciales, hábitos de navegación, datos personales u otra información sensible. En una plataforma virtual, un complemento instalado en el navegador podría registrar información ingresada por el usuario. La pregunta orientadora sería: ¿existen extensiones, procesos o conexiones que no corresponden con la operación esperada?
        .col-lg-5.col-md-8.col-10
          img(src='@/assets/curso/temas/t4/acord1-4.png', alt='')
      .row.justify-content-around.align-items-center(titulo="<em>Ransomware</em>")
        .col-lg-5.col-11
          p Busca bloquear el acceso a archivos o sistemas, comúnmente mediante cifrado, y puede utilizarse con fines de extorsión. Puede afectar la disponibilidad, interrumpir servicios y comprometer información crítica. En una carpeta compartida, un equipo que ejecuta un archivo malicioso podría afectar varios documentos institucionales. La pregunta orientadora sería: ¿qué activos podrían verse comprometidos si una cuenta o un dispositivo obtiene acceso indebido a archivos compartidos?
        .col-lg-5.col-md-8.col-10
          img(src='@/assets/curso/temas/t4/acord1-5.png', alt='')
      .row.justify-content-around.align-items-center(titulo="Otras modalidades")
        .col-lg-5.col-11
          p Comprenden componentes con funciones diversas, como acceso remoto indebido, ocultamiento, registro de pulsaciones o incorporación del equipo a redes controladas por terceros. Pueden combinar vigilancia, persistencia, control remoto o uso no autorizado de recursos. La pregunta orientadora sería: ¿qué comportamiento se aparta de la línea base esperada para el dispositivo?
          p La clasificación no debe reducirse a memorizar nombres. Cada modalidad debe relacionarse con activos, vectores de ingreso, señales identificables y posibles consecuencias. Este enfoque contribuye a interpretar hallazgos durante la exploración de una infraestructura.
        .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t4/acord1-6.png', alt='')
        .col-lg-11.col-11
          p El diagnóstico de #[em malware] comienza con la revisión de señales. Algunos indicios pueden orientar una revisión, pero no deben tratarse como pruebas definitivas de infección. La lentitud de un equipo, por ejemplo, puede deberse a diferentes causas: limitaciones de #[em hardware], fallas de almacenamiento, exceso de aplicaciones legítimas o presencia de #[em software] malicioso. El análisis profesional evita atribuir una única explicación sin recopilar evidencia.
          .tarjeta.bg-color-6.p-4.mb-4
            p Entre las señales que requieren revisión se encuentran los cambios inesperados en el comportamiento de los equipos, la aparición de aplicaciones desconocidas, las conexiones inusuales, el consumo excesivo de recursos, la modificación no autorizada de archivos, los mensajes emergentes atípicos, la imposibilidad de acceder a documentos o la ejecución de procesos que no corresponden con el inventario esperado. La interpretación adecuada exige comparar el comportamiento identificado con una línea base o condición habitual.
            p.mb-0 La línea base puede entenderse como una referencia del funcionamiento normal. En un laboratorio de formación, por ejemplo, se espera encontrar determinadas aplicaciones, servicios y configuraciones. Si aparecen procesos no autorizados o conexiones que no corresponden con la práctica realizada, el hallazgo debe registrarse y analizarse. Esta metodología permite que el aprendiz comprenda la diferencia entre revisión y conclusión.
          p También debe evitarse que la exploración formativa convierta al aprendiz en un analista de muestras maliciosas sin el entorno apropiado. La manipulación de archivos sospechosos requiere laboratorios especializados, aislamiento y procedimientos estrictos. Para el alcance de este componente, el énfasis se encuentra en reconocer señales, clasificar amenazas, comprender posibles afectaciones y documentar hallazgos dentro de ambientes controlados.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Señales que requieren revisión

    SlyderF(columnas="col-lg-4 col-md-6")
      .tarjeta-numerada.color-primario.p-5.h-100
        .tarjeta-numerada__numero
          .h2 1
        h5.text-center Cambios inesperados
        p.text-center.mb-0 El equipo presenta comportamientos diferentes a los habituales o ejecuta procesos que no corresponden con el inventario esperado.
      .tarjeta-numerada.color-acento-botones.p-5.h-100
        .tarjeta-numerada__numero
          .h2 2
        h5.text-center Aplicaciones desconocidas
        p.text-center.mb-0 Aparecen programas, complementos o extensiones que no han sido autorizados o que no hacen parte de la práctica realizada.
      .tarjeta-numerada.color-secundario.p-5.h-100
        .tarjeta-numerada__numero
          .h2 3
        h5.text-center Conexiones inusuales
        p.text-center.mb-0 Se identifican conexiones que no corresponden con la operación esperada del dispositivo o del servicio.
      .tarjeta-numerada.color-primario.p-5.h-100
        .tarjeta-numerada__numero
          .h2 4
        h5.text-center Consumo excesivo de recursos
        p.text-center.mb-0 El equipo presenta uso inusual de recursos, aunque esta señal debe contrastarse con otras posibles causas.
      .tarjeta-numerada.color-acento-contenido.p-5.h-100
        .tarjeta-numerada__numero
          .h2 5
        h5.text-center Modificación de archivos
        p.text-center.mb-0 Se presentan cambios no autorizados, imposibilidad de acceder a documentos o mensajes emergentes atípicos.


    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 4.2. Características generales de los ataques

    p Un ataque puede comprender diferentes fases y objetivos. Algunos actores buscan recopilar información antes de actuar. Otros intentan obtener un primer acceso mediante credenciales comprometidas, ingeniería social o aprovechamiento de debilidades expuestas. Posteriormente, pueden buscar mantener el acceso, ampliar privilegios, desplazarse hacia otros sistemas o extraer información.

    p La base de conocimiento #[em MITRE ATT&CK] organiza tácticas y técnicas identificadas en situaciones reales. Las tácticas expresan el propósito de una acción, es decir, el motivo por el cual un adversario realiza una actividad. Las técnicas describen cómo intenta lograr ese propósito. Por ejemplo, el acceso inicial reúne mecanismos utilizados para obtener un primer punto de entrada, mientras que el acceso a credenciales comprende técnicas orientadas a obtener nombres de usuario, contraseñas u otros elementos de autenticación.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Secuencia general de un ataque

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/4.png', alt='')
      .col-lg-8(data-aos='fade-left')
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Recopilar información")
            .col-11
              p Algunos actores buscan información antes de actuar, con el fin de reconocer servicios, usuarios, prácticas o posibles puntos de entrada.
          .row(numero="2" titulo="Obtener acceso inicial")
            .col-11
              p El primer acceso puede lograrse mediante credenciales comprometidas, ingeniería social o aprovechamiento de debilidades expuestas.
          .row(numero="3" titulo="Mantener el acceso")
            .col-11
              p Después del ingreso inicial, el atacante puede intentar conservar la posibilidad de acceder nuevamente al sistema.
          .row(numero="4" titulo="Ampliar privilegios")
            .col-11
              p El actor puede buscar permisos superiores para acceder a más información, servicios o funciones.
          .row(numero="5" titulo="Desplazarse hacia otros sistemas")
            .col-11
              p El ataque puede extenderse hacia otros equipos, servicios o áreas de la infraestructura.
          .row(numero="6" titulo="Extraer información")
            .col-11
              p Una de las finalidades posibles es sustraer información, credenciales u otros elementos de valor para la organización.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Tácticas y técnicas según #[em MITRE ATT&CK]

    .row.justify-content-center(data-aos='fade')
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Tácticas
          p.text-center.mb-0 Expresan el propósito de una acción. Indican el motivo por el cual un adversario realiza una actividad.
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center  Técnicas
          p.text-center.mb-0 Describen cómo el adversario intenta lograr ese propósito.
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Acceso inicial
          p.text-center.mb-0 Reúne mecanismos utilizados para obtener un primer punto de entrada.
      .col-lg-3.col-md-6.mb-3.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Acceso a credenciales
          p.text-center.mb-0 Comprende técnicas orientadas a obtener nombres de usuario, contraseñas u otros elementos de autenticación.
        

    Separador
    #t_4_3.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 4.3. Ingeniería social y técnicas frecuentes

    .bg-color-primario.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/5.png', alt='')
        .col-lg-7
          .p-4.text-white
            img.w-85x.mb-3(src='@/assets/curso/temas/t4/6.svg', alt='')
            p La seguridad de la información no depende únicamente del funcionamiento técnico de las herramientas. Las personas toman decisiones cotidianas: reciben correos, consultan enlaces, descargan archivos, responden solicitudes, utilizan contraseñas y comparten información. Estas acciones pueden fortalecer la protección o facilitar una afectación. La ingeniería social aprovecha precisamente esta dimensión humana.
            p.mb-0 El análisis debe evitar responsabilizar de manera simplista al usuario. Una organización segura no espera que cada persona detecte por sí sola todas las amenazas. Debe combinar formación, procedimientos claros, canales de reporte y controles tecnológicos. La cultura de seguridad se construye cuando los usuarios comprenden los riesgos y cuentan con recursos para actuar de manera adecuada.
    
    p.mb-1 La ingeniería social comprende técnicas de manipulación orientadas a inducir a una persona a entregar información, realizar una acción o permitir un acceso que normalmente no autorizaría. Su efectividad se relaciona con factores humanos como la confianza, la urgencia, la curiosidad, el temor o el deseo de ayudar.
    p El #[em phishing] constituye una modalidad frecuente. El atacante se presenta como una persona u organización confiable e intenta inducir a la víctima a abrir un enlace, descargar un archivo o proporcionar información. CISA también identifica variantes como el #[em smishing], que utiliza mensajes de texto, y otras formas de engaño adaptadas a diferentes canales.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p En una institución educativa, un mensaje podría aparentar provenir de un área administrativa y solicitar que el usuario actualice su contraseña mediante un enlace. Otro mensaje podría ofrecer acceso a un certificado o recurso académico inexistente. La apariencia institucional, la presión temporal y el lenguaje persuasivo pueden incrementar la probabilidad de interacción.
        .bg-color-3.bg-compll-3.p-4.mb-4
          p.mb-0 La ingeniería social aprovecha decisiones cotidianas de las personas, como abrir enlaces, descargar archivos, responder solicitudes o compartir información. Por eso, la protección no depende solo de herramientas técnicas, sino también de formación, procedimientos claros, canales de reporte y controles tecnológicos.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/7.png', alt='')

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right') 
        .bg-color-2.p-4.h-100.d-flex.align-items-center
          img(src='@/assets/curso/temas/t4/8.svg', alt='')
      .col-lg-7(data-aos='fade-left')
        p Un ataque de ingeniería social puede comprender varias fases. En primer lugar, el actor recopila información sobre la organización, sus servicios, usuarios o prácticas habituales. Posteriormente, selecciona un pretexto creíble, establece contacto y busca generar confianza o presión. Finalmente, intenta obtener una acción: entregar datos, abrir un archivo, ingresar credenciales o permitir acceso.
        p.mb-0 La recopilación de información puede aprovechar datos públicos disponibles en sitios #[em web], redes sociales o directorios. La organización debe analizar qué información pública y si dicha divulgación resulta necesaria. La transparencia institucional es importante, pero debe equilibrarse con criterios de privacidad y seguridad.

    p La construcción del pretexto busca presentar una historia aparentemente válida. Un mensaje puede simular una solicitud del área técnica, una notificación de entrega o una actualización urgente. La capacidad crítica del usuario se fortalece cuando conoce los canales institucionales y sabe cómo verificar una solicitud.

    .tarjeta.bg-color-1.p-4.mb-4(data-aos='fade')
      p.mb-0 La interacción procura inducir una decisión rápida. El atacante puede utilizar urgencia, temor o recompensa. Ante esta situación, una pausa breve puede prevenir un incidente: revisar el remitente, revisar el enlace, confirmar por otro canal y reportar el mensaje.

    p.mb-5 La acción final puede consistir en abrir un archivo, proporcionar credenciales o transferir información. Una organización debe implementar controles que reduzcan el impacto incluso cuando un usuario comete un error. La autenticación multifactor, los permisos limitados y el monitoreo contribuyen a este propósito.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Fases de un ataque de ingeniería social

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos='fade-right')
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Recopilar información")
            .col-11
              p.mb-0 El actor obtiene información sobre la organización, sus servicios, usuarios o prácticas habituales, incluso a partir de datos públicos disponibles.
          .row(numero="2" titulo="Construir un pretexto")
            .col-11
              p.mb-0 Se crea una historia aparentemente válida, como una solicitud del área técnica, una notificación de entrega o una actualización urgente.
          .row(numero="3" titulo="Establecer contacto")
            .col-11
              p.mb-0 El atacante se comunica con la persona y busca generar confianza o presión mediante urgencia, temor o recompensa.
          .row(numero="4" titulo="Inducir una acción")
            .col-11
              p.mb-0 La acción final puede consistir en entregar datos, abrir un archivo, ingresar credenciales, transferir información o permitir acceso.
          .row(numero="5" titulo="Reducir el impacto")
            .col-11
              p.mb-0 La organización debe aplicar controles como autenticación multifactor, permisos limitados y monitoreo para disminuir las consecuencias de un error.
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/9.png', alt='')

    p Las técnicas varían según el medio utilizado y el objetivo perseguido. El #[em phishing] emplea mensajes digitales para inducir una acción. El #[em spear phishing] adapta el contenido a una persona o grupo específico. 

    p El #[em smishing] utiliza mensajes de texto. El #[em vishing] recurre a llamadas de voz. El #[em pretexting] construye una situación ficticia para solicitar información o acceso. El #[em baiting] ofrece un incentivo para despertar interés.

    p Estas técnicas pueden combinarse. Un actor puede recopilar información pública, enviar un correo personalizado y realizar una llamada posterior para reforzar la credibilidad. Por esta razón, la formación no debe concentrarse únicamente en reconocer errores ortográficos o mensajes evidentemente sospechosos. Las campañas pueden utilizar diseños convincentes, información real y canales diversos.

    .subt.mb-4(data-aos='fade-right')
      img.mx-3(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.me-5 Técnicas frecuentes de ingeniería social

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-acento-contenido")
          .row(titulo="<em>Phishing</em>")
            .col-md-11.mb-4.mb-md-0
              p Utiliza correo electrónico, mensajería o sitio #[em web] fraudulento. Un ejemplo sería un mensaje que solicita ingresar a un enlace para evitar el bloqueo de una cuenta institucional. La señal que requiere revisión puede ser un remitente inusual, urgencia injustificada o un enlace que no corresponde con el dominio esperado. La acción preventiva consiste en verificar el canal oficial, evitar abrir enlaces dudosos y reportar el mensaje.
          .row(titulo="<em>Spear phishing</em>")
            .col-md-11.mb-4.mb-md-0
              p Emplea un mensaje dirigido a una persona o grupo específico. Un supuesto coordinador podría solicitar a un instructor descargar un archivo relacionado con una actividad. La señal que requiere revisión es el uso de información contextual para generar confianza y una solicitud no habitual. La acción preventiva consiste en confirmar la solicitud mediante un canal alternativo.
          .row(titulo="<em>Smishing</em>")
            .col-md-11.mb-4.mb-md-0
              p Utiliza mensajes de texto o aplicaciones de mensajería. El usuario puede recibir una notificación falsa sobre un trámite pendiente. La señal que requiere revisión puede ser un enlace abreviado, un número desconocido o una solicitud urgente de datos. La acción preventiva consiste en evitar abrir enlaces y consultar directamente la plataforma oficial.
          .row(titulo="<em>Vishing</em>")
            .col-md-11.mb-4.mb-md-0
              p Recurre a llamadas telefónicas o mensajes de voz. Una persona puede afirmar que pertenece al área técnica y solicitar un código de verificación. La señal que requiere revisión es la solicitud de credenciales, códigos o datos confidenciales. La acción preventiva consiste en finalizar la llamada y verificar la identidad por canales institucionales.
          .row(titulo="<em>Pretexting</em>")
            .col-md-11.mb-4.mb-md-0
              p Construye una historia o situación ficticia utilizada como argumento. Un supuesto proveedor podría solicitar información interna para completar una actualización. La señal que requiere revisión es una solicitud que excede la información necesaria o que no sigue el procedimiento habitual. La acción preventiva consiste en aplicar protocolos de verificación y limitar la información compartida.
          .row(titulo="<em>Baiting</em>")
            .col-md-11.mb-4.mb-md-0
              p Ofrece un incentivo, recurso gratuito o elemento atractivo. Un archivo puede prometer acceso a una herramienta gratuita para realizar una actividad. La señal que requiere revisión es una descarga desde una fuente no validada o una exigencia de permisos innecesarios. La acción preventiva consiste en utilizar repositorios autorizados y validar la procedencia del #[em software].
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/10.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
