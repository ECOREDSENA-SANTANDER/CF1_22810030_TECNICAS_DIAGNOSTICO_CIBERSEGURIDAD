export default {
  global: {
    Name: 'Diagnóstico de vulnerabilidades y amenazas de ciberseguridad',
    Description:
      'Este componente orienta la exploración de vulnerabilidades, amenazas y riesgos en infraestructuras tecnológicas, mediante conceptos de ciberseguridad, seguridad de la información, <em>malware</em>, ingeniería social y técnicas de diagnóstico. Además, promueve el análisis responsable de activos, la clasificación de riesgos y el reconocimiento de medidas iniciales para proteger sistemas, información y servicios digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos para el diagnóstico de ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Seguridad de la información, ciberseguridad y seguridad digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de protección de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Eventos, incidentes y contramedidas de seguridad',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de vulnerabilidades, amenazas y riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Relación entre vulnerabilidad, amenaza y riesgo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de vulnerabilidades',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Fuentes y tipos de amenazas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas y referentes para orientar el diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagnóstico como proceso sistemático',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Metodologías y técnicas en entornos controlados',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normas, estándares y buenas prácticas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Amenazas digitales y afectación de los sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Malware y señales de posible infección',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características generales de los ataques',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ingeniería social y técnicas frecuentes',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de seguridad y documentación del diagnóstico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Políticas, procedimientos y responsabilidades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Gestión de riesgos y mejora continua',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Registro y clasificación de hallazgos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Activo de información',
      significado:
        'recurso que posee valor para una organización, como una base de datos, una aplicación, una cuenta, un servidor, un servicio en la nube o un documento institucional.',
    },
    {
      termino: 'Amenaza',
      significado:
        'actor, evento o circunstancia con capacidad de aprovechar una vulnerabilidad y generar una afectación sobre un activo.',
    },
    {
      termino: 'Autenticación multifactor',
      significado:
        'mecanismo que exige más de una evidencia para verificar la identidad de un usuario, como una contraseña y un código temporal.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto articulado de prácticas, procesos y tecnologías orientados a proteger sistemas, redes, aplicaciones y datos frente a riesgos digitales.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'principio que limita el acceso a la información únicamente a personas, procesos o sistemas autorizados.',
    },
    {
      termino: 'Contramedida',
      significado:
        'acción, práctica o herramienta que reduce la probabilidad o el impacto de una amenaza.',
    },
    {
      termino: 'Control de seguridad',
      significado:
        'medida preventiva, detectiva o correctiva utilizada para proteger activos y gestionar riesgos.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'principio que busca asegurar el acceso oportuno a la información y a los servicios cuando los usuarios autorizados los requieren.',
    },
    {
      termino: 'Escaneo de infraestructura',
      significado:
        'proceso autorizado de revisión técnica que permite identificar activos, puertos, servicios o posibles condiciones de exposición.',
    },
    {
      termino: 'Evento de seguridad',
      significado:
        'ocurrencia identificable dentro de un sistema o red, como un inicio de sesión, una modificación de archivo o una conexión inusual.',
    },
    {
      termino: 'Incidente de seguridad',
      significado:
        'situación que afecta o pone en riesgo la confidencialidad, integridad, disponibilidad o privacidad de la información.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'conjunto de técnicas de manipulación utilizadas para inducir a una persona a entregar información o realizar una acción insegura.',
    },
    {
      termino: 'Integridad',
      significado:
        'principio que busca conservar la información exacta, completa y sin modificaciones no autorizadas.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        'programa, fragmento de código o componente diseñado para realizar acciones perjudiciales o no autorizadas sobre sistemas, redes, dispositivos o información.',
    },
    {
      termino: '<em>Phishing</em>',
      significado:
        'técnica de ingeniería social que utiliza mensajes, enlaces o sitios fraudulentos para inducir a una persona a entregar información, abrir archivos o realizar acciones inseguras.',
    },
    {
      termino: 'Privacidad',
      significado:
        'principio orientado al tratamiento adecuado de la información personal, de acuerdo con su finalidad y con los derechos de los titulares.',
    },
    {
      termino: '<em>Ransomware</em>',
      significado:
        'modalidad de malware que busca bloquear el acceso a archivos o sistemas, comúnmente mediante cifrado, y puede utilizarse con fines de extorsión.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que una amenaza aproveche una vulnerabilidad y genere consecuencias sobre activos, servicios o usuarios.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'conjunto de prácticas orientadas a preservar la confidencialidad, integridad, disponibilidad y privacidad de la información, independientemente del medio en que se encuentre.',
    },
    {
      termino: 'Sistema de gestión de seguridad de la información ---SGSI---',
      significado:
        'conjunto organizado de políticas, procesos, responsabilidades, recursos y mecanismos de mejora para proteger los activos de información.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'debilidad técnica, organizacional o humana que puede facilitar una afectación de seguridad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Center for Internet Security. (2021). CIS Critical Security Controls Version 8.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeacion. (2020). Documento CONPES 3995: Politica Nacional de Confianza y Seguridad Digital.',
      link: '',
    },
    {
      referencia:
        'European Union Agency for Cybersecurity. (2024). ENISA threat landscape 2024. Publications Office of the European Union.',
      link: '',
    },
    {
      referencia:
        'Forum of Incident Response and Security Teams. (2023). Common Vulnerability Scoring System Version 4.0: Specification document.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022a). ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection --- Information security management systems --- Requirements.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022b). ISO/IEC 27002:2022. Information security, cybersecurity and privacy protection --- Information security controls.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022c). ISO/IEC 27005:2022. Information security, cybersecurity and privacy protection --- Guidance on managing information security risks.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologias de la Informacion y las Comunicaciones. (2022). Decreto 338 de 2022: Lineamientos generales para fortalecer la gobernanza de la seguridad digital.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2021). Phishing. Small Business Cybersecurity Corner.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2024). The NIST Cybersecurity Framework (CSF) 2.0 (NIST Cybersecurity White Paper 29). U.S. Department of Commerce.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Boza Reyes ',
          cargo: 'Experto temático TIC ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero ',
          cargo: 'Evaluadora instruccional  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
