export default {
  global: {
    componenteFormativo:
      'Controles y estándares para el manejo de la seguridad de la información',
    descripcionCurso:
      'En este componente formativo se trabajarán las políticas para el manejo del riesgo y amenazas de seguridad, herramientas para la prevención y cuidado del uso del ciberespacio y el marco de trabajo de ciberseguridad NIST para la gestión de riesgos.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/1.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Riesgo y estimación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Controles de seguridad en una red',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguridad física y políticas de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Estándar ISO 27001 y estándares para el manejo de la seguridad informática',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Análisis de riesgo y recuperación de desastres',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia: 'ESAP. (2018). Plan de recuperación de desastres.',
      link:
        'https://www.esap.edu.co/portal/wp-content/uploads/2019/03/Plan-de-Recuperaci%C3%B3n-de-Desastres-v1.pdf',
    },
    {
      referencia: 'ISACA. (s.f.). Cobit 5',
      link:
        'http://cotana.informatica.edu.bo/downloads/COBIT5-Framework-Spanish.pdf ',
    },
    {
      referencia:
        'NQA. (s.f.). ISO 27001:2013. Guía de implantación para la seguridad de la información.',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cobit',
      significado:
        'Es un estándar de buenas prácticas para generar cultura organizacional y administrar los procesos que involucren tecnología, personas y procesos.',
    },
    {
      termino: 'Contingencia',
      significado:
        'Componente que se establece cuando se generan situaciones de riesgo que pueden colocar en peligro la información o procesos de una organización.',
    },
    {
      termino: 'ISO 27001',
      significado:
        'Es un estándar que permite la administración de la tecnología y los procesos que conlleva el aseguramiento de la seguridad de la información.',
    },
    {
      termino: 'Modelo OSI',
      significado:
        'Es un estándar establecido para la comunicación entre dispositivos en todo el mundo.',
    },
    {
      termino: 'PHVA',
      significado:
        'Es un enfoque de trabajo que permite gestionar procesos empresariales y realizar procesos de mejora continua.',
    },
    {
      termino: 'Planificación',
      significado:
        'Es la manera como se debe estructurar la ruta de trabajo para que los procesos en una organización funcionen de manera correcta.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que suceda un inconveniente que no permita el correcto funcionamiento del sistema.',
    },
  ],
  complementario: [
    {
      texto: 'Presidencia de la República. (2020).',
      tipo: 'Manual',
      descarga: '/downloads/M-TI-01-Manual-Politicas-Seguridad-Informacion.pdf',
    },
    {
      texto:
        'NQA. (s.f.). ISO 27001:2013. <em>Guía de implantación para la seguridad de la información</em>. ',
      tipo: 'Guía',
      descarga: '/downloads/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      texto:
        'Jiménez, A. & Salazar, L. X. (2016). <em>Análisis de riesgos, amenazas y vulnerabilidades de la Compañía pinzón pinzón & asociados en su área de TI</em>. [Trabajo de grado, Ingeniería de Sistemas Universidad Piloto de Colombia]. ',
      tipo: 'Trabajo de grado',
      descarga: '/downloads/00003291.pdf',
    },
    {
      texto:
        'CRA. (2009). Norma NTC-ISO/IEC 27001 Sistema de gestión de seguridad de información.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_virtualprovpro4403&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      texto:
        'Merino Bada, C. & Cañizares Sales, R. (2011). <em>Implantación de un sistema de gestión de seguridad de la información según ISO 27001: un enfoque práctico</em>. Fundación Confemetal. ',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000069696&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      texto: 'ESAP. (2018). <em>Plan de recuperación de desastres</em>.',
      tipo: 'Documento',
      descarga: '/downloads/Plan-de-Recuperacion-de-Desastres-v1.pdf',
    },
    {
      texto: 'ISACA. (s.f.). <em>Cobit 5</em>.',
      tipo: 'Documento',
      descarga: '/downloads/COBIT5-Framework-Spanish.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Dulfran Antonio Montaño Montaño',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora y Evaluadora Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edinson Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
