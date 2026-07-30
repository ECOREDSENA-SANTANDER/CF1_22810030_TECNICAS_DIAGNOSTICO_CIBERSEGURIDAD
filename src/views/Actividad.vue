<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico de vulnerabilidades y amenazas de ciberseguridad',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los fundamentos de ciberseguridad, los principios de protección de la información, la relación entre vulnerabilidades, amenazas y riesgos, el diagnóstico sistemático y autorizado, el <em>malware</em>, la gestión de seguridad de la información, la clasificación de vulnerabilidades y amenazas y la prevención de la ingeniería social.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de un diagnóstico de ciberseguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instalar herramientas sin revisar las necesidades de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar todos los equipos que presentan un funcionamiento lento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reconocer condiciones que pueden afectar la protección de la información y la continuidad de los servicios tecnológicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar el análisis únicamente a la apariencia visual de las aplicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué diferencia principalmente la seguridad de la información de la ciberseguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La seguridad de la información protege los datos en cualquier medio; la ciberseguridad se enfoca especialmente en sistemas, redes y servicios digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La seguridad de la información solo se aplica a documentos impresos y la ciberseguridad únicamente a contraseñas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ciberseguridad excluye la protección de aplicaciones y dispositivos conectados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ambos conceptos se refieren exclusivamente al mantenimiento físico de equipos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué principio busca que la información solo sea consultada por personas, procesos o sistemas autorizados?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disponibilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confidencialidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Trazabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Continuidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué principio se afecta cuando se modifican calificaciones en una plataforma sin autorización ni trazabilidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Privacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disponibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Confidencialidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Integridad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cómo se define una vulnerabilidad en el contexto de ciberseguridad?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como una debilidad o condición inadecuada que puede facilitar una afectación de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Como una acción correctiva aplicada después de finalizar un diagnóstico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como cualquier evento legítimo registrado en una plataforma.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como una política institucional para proteger datos personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué describe mejor un riesgo de ciberseguridad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una lista de usuarios autorizados para ingresar a una aplicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una actualización programada del sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La posibilidad de que una amenaza aproveche una vulnerabilidad y genere consecuencias sobre activos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un inventario de equipos que no requiere análisis adicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál situación corresponde a un incidente de seguridad?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El acceso habitual de un instructor a la plataforma durante su jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La programación de una copia de respaldo institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La actualización autorizada de una aplicación instalada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La comprobación de que una cuenta fue utilizada sin autorización para descargar información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál secuencia corresponde a un diagnóstico sistemático de ciberseguridad?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instalar herramientas, eliminar registros y divulgar todos los resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delimitar el alcance, identificar activos, recopilar información, aplicar técnicas autorizadas y documentar hallazgos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Analizar únicamente los equipos que presentan lentitud y descartar los demás activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar escaneos sobre cualquier sistema disponible sin establecer restricciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué función cumplen los marcos de referencia, estándares y normas dentro del diagnóstico?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de documentar los hallazgos obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir completamente el análisis del contexto organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir la ejecución de herramientas sobre sistemas sin autorización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aportar criterios para interpretar, clasificar y documentar los hallazgos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué condición debe cumplirse antes de utilizar herramientas de escaneo o análisis?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contar con autorización expresa, delimitar el alcance y respetar las restricciones definidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aplicar la herramienta sobre cualquier sistema accesible desde internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desactivar los controles de seguridad para obtener más resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar inmediatamente todos los datos identificados durante la exploración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Por qué un resultado automatizado debe validarse antes de incorporarlo al informe?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque todas las herramientas eliminan los datos después del escaneo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque puede incluir falsos positivos y requiere contraste con el inventario y el contexto organizacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque ningún resultado técnico puede documentarse dentro de un diagnóstico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque la exploración solo debe realizarse mediante entrevistas a usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué es el <em>malware</em>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un procedimiento administrativo para asignar cuentas institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un registro legítimo generado por un sistema durante su operación habitual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un <em>software</em> o código diseñado para realizar acciones perjudiciales o no autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un mecanismo físico para almacenar copias de respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué modalidad de <em>malware</em> puede propagarse entre sistemas o redes sin depender necesariamente de una interacción directa del usuario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Spyware</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gusano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Ransomware</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Troyano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza principalmente al <em>ransomware</em>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar el rendimiento de los equipos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear cuentas de usuario para facilitar el acceso a una plataforma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente eventos normales de una red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bloquear el acceso a archivos o sistemas, comúnmente mediante cifrado, con fines de extorsión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál señal requiere revisión porque podría asociarse con una posible infección de <em>malware</em>?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La aparición de aplicaciones desconocidas, conexiones inusuales o modificaciones no autorizadas de archivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El ingreso de un usuario autorizado dentro de su jornada habitual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La lectura de una política institucional aprobada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La creación programada de una copia de respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué función cumple una política de seguridad de la información?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de asignar responsabilidades dentro de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permitir que todos los usuarios compartan una misma cuenta administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer orientaciones institucionales para proteger activos, definir responsabilidades y guiar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar todos los procedimientos técnicos por instrucciones informales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué caracteriza a un sistema de gestión de seguridad de la información o SGSI?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se limita a instalar una herramienta <em>antimalware</em> en un solo equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Articula políticas, procesos, responsabilidades, controles y mejora continua para proteger activos de información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Excluye la evaluación de riesgos y la revisión periódica de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo se aplica cuando ya ocurrió un incidente de seguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Cuál ejemplo corresponde a una vulnerabilidad de configuración?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una interrupción eléctrica prolongada en las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un mensaje fraudulento que solicita credenciales por correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El daño físico de un dispositivo de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una cuenta administrativa que conserva credenciales predeterminadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál situación corresponde a una amenaza interna accidental?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un funcionario comparte un archivo con permisos públicos sin advertirlo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un actor externo envía un correo fraudulento para obtener credenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una persona ajena a la organización intenta afectar un sitio <em>web</em> público.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un atacante utiliza información obtenida para mantener acceso no autorizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué práctica ayuda a reducir el riesgo de <em>phishing</em> e ingeniería social?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entregar códigos de verificación cuando una persona los solicite por teléfono.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Abrir inmediatamente los enlaces enviados con mensajes urgentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instalar archivos descargados desde cualquier sitio <em>web</em> para comprobar su contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar las solicitudes por canales oficiales, evitar enlaces dudosos y reportar mensajes sospechosos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado: 'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
