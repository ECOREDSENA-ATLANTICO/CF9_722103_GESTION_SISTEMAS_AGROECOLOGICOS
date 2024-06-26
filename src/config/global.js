export default {
  global: {
    componenteFormativo: 'Poscosecha',
    descripcionCurso:
      'Durante la fase de poscosecha se llevan a cabo una serie de operaciones y actividades de acondicionamiento, desinfección, empaque, almacenamiento y transporte, con el objetivo de evitar las pérdidas y conservar la calidad de los productos desde la producción (cosecha) hasta su comercialización, siendo de fundamental en todas y cada una de las etapas aplicar buenas prácticas de manufactura.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Poscosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manejo poscosecha',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Limpieza',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Clasificación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Procedimiento y dosificación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Envase y empaques ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Embalaje',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Métodos de transporte',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Herramientas, maquinaria y equipos',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF09_DU.pdf',
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
      referencia:
        'Borrero Ortiz, M., & Urrea López, M. (2007). Modulo Poscosecha. Escuela de Ciencias Agrícolas, Pecuarias y del Medio Ambiente.',
    },
    {
      referencia:
        'Chala, L. A. (2009). Empaques y embalajes para exportación. Cámara de comercio de Bogotá, Bogotá, Colombia, 19-26.',
    },
    {
      referencia:
        'Colombia, P. (2003). Cartilla empaques y embalajes para exportación. Proexport Colombia.',
    },
    {
      referencia:
        'Ministerio de Agricultura. (2016) Convenio 20160339. Módulo 2. Buenas prácticas de manufactura es la postcosecha BPM.',
    },
    {
      referencia:
        'Ministerio de salud pública. (1979). Decreto 3075 de 1995. Buenas prácticas de manufactura.',
    },
    {
      referencia: 'Ministerio de salud pública. (2013). Decreto 2674 de 2013.',
    },
    {
      referencia:
        'Norma Técnica Colombiana NTC 5422. (2007). Empaque y embalaje de frutas, hortalizas y tubérculos frescos.',
    },
    {
      referencia:
        'Ponce D’León, L. F., & Rodríguez Hernández, A. (1992). Buenas prácticas de manufactura vigentes y su relación con la garantía de calidad. Revista Colombiana de Ciencias Químico-Farmacéuticas, 20(1), 63-68',
      link:
        'https://revistas.unal.edu.co/index.php/rccquifa/article/view/56533',
    },
    {
      referencia:
        'Salguero R, S. I., & Gutiérrez, A (2009). Sistemas de empaque, envase, embalaje y etiquetas. Cámara de comercio de Bogotá, Bogotá, Colombia,',
    },
  ],
  glosario: [
    {
      termino: 'Buenas prácticas de manufactura BPM',
      significado:
        'conjunto de medidas mínimas de higiene necesarias para evitar la contaminación y así lograr obtener productos inocuos y seguros para el consumo, debido a que se enfocan en la higiene, manipulación y seguridad de los alimentos.',
    },
    {
      termino: 'Desinfección',
      significado:
        'destruir microorganismos que puedan causar infección. Labor que se realiza para eliminar impurezas y agentes patógenos tales como bacterias, virus y hongos.',
    },
    {
      termino: 'Embalaje',
      significado:
        'recipiente o envoltura que contiene productos temporalmente y sirve principalmente para agrupar unidades de un producto pensando en su manipulación, transporte y almacenaje',
    },
    {
      termino: 'Empaque',
      significado:
        'recipiente o envoltura que contenga algún producto de consumo para su entrega o exhibición a los consumidores-',
    },
    {
      termino: 'Equipo',
      significado:
        'es el conjunto de maquinaria, utensilios, recipientes, tuberías, vajillas y demás accesorios que se empleen en la fabricación, procesamiento, preparación, envase, fraccionamiento, almacenamiento, distribución, transporte, y expendio de alimentos y sus materias primas.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que los alimentos no causarán daños al consumidor cuando se preparen y/o consuman.',
    },
    {
      termino: 'Limpieza',
      significado:
        'proceso u operación de eliminación de residuos de alimentos u otras materias extrañas o indeseables.',
    },
    {
      termino: 'Manejo poscosecha',
      significado:
        'conjunto de actividades realizadas a partir de la recolección de los productos y que están encaminadas a mantener la calidad de estos hasta su consumo.',
    },
    {
      termino: 'Peligro',
      significado:
        'agente biológico, químico o físico presente en los alimentos, o una propiedad de éste, que pueda provocar un efecto nocivo para la salud.',
    },
    {
      termino: 'Perecedero',
      significado: 'alimento que tiene una vida corta',
    },
    {
      termino: 'Poscosecha',
      significado:
        'lapso o periodo que transcurre desde el momento mismo en que el producto es retirado de su fuente natural y acondicionado en la finca hasta el momento en que es consumido bajo su forma original o sometido a la preparación culinaria o al procesamiento y transformación industrial.',
    },
    {
      termino: 'Riesgo',
      significado:
        'unción de la probabilidad de un efecto nocivo para la salud y de la gravedad de dicho efecto, como consecuencia de un peligro o peligros presente en los alimentos',
    },
  ],
  complementario: [
    {
      tema: 'Poscosecha',
      referencia:
        'Villamizar de Borrero, F., & Ospina Camacho, J. E. (2000). Frutas y hortalizas: manejo tecnológico postcosecha.',
      tipo: 'Artículo',
      link: 'https://repository.agrosavia.co/handle/20.500.12324/31661',
    },
    {
      tema: 'Limpieza',
      referencia:
        'Nayla Redondo Noches. (2022, 17 de enero). Cultura en higiene alimentaria.  Calidad e inocuidad. Limpieza y desinfección. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nx9cVkJiVcc',
    },
    {
      tema: 'Desinfección',
      referencia:
        'Garmendia, G., & Vero, S. (2006). Métodos para la desinfección de frutas y hortalizas. Horticultura, 197, 18-27.',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/profile/Silvana-Vero/publication/28282408_Metodos_para_la_desinfeccion_de_frutas_y_hortalizas/links/571c023d08ae408367bd7448/Metodos-para-la-desinfeccion-de-frutas-y-hortalizas.pdf',
    },
    {
      tema: 'Desinfección',
      referencia:
        'García-Robles, J. M., Medina-Rodríguez, L. J., Mercado-Ruiz, J. N., & Báez-Sañudo, R. (2017). Evaluación de desinfectantes para el control de microorganismos en frutas y verduras. Revista Iberoamericana de Tecnología Postcosecha, 18(1), 9-22.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/journal/813/81351597002/html/',
    },
    {
      tema: 'Envases y empaques',
      referencia:
        'Ospina Arias, J. C. (2015). Fundamentos de envases y embalajes.',
      tipo: 'Artículo',
      link:
        'https://repositorio.cuc.edu.co/bitstream/handle/11323/1105/Fundamentos%20de%20envases%20y%20embalajes.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Envases y empaques',
      referencia:
        'López Millán, M., & Díaz Gutiérrez, A. (2001). Empaques y embalajes para frutas y hortalizas frescas.',
      tipo: 'Artículo',
      link: 'https://core.ac.uk/download/421923673.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yisela Andrea Vidales Vásquez',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Diseño y Metrología- Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología- Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro: 'Centro de Diseño y Metrología- Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología- Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson vera',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
