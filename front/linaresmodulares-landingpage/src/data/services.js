import heroImage from "../img/oficcecomplete.jpg";
import modularDesk from "../img/Oficinas_Modulares_12.png";
import coworking from "../img/desk2.jpg";
import meeting from "../img/Oficina5.jpg";
import ergonomic from "../img/deskdarkside.jpg";
import storage from "../img/archivoRodante.jpg";

export const servicesList = [
  {
    slug: "sillas-oficina",
    navLabel: "Sillas",
    title: "Sillas de oficina ergonómicas en Bogotá",
    shortTitle: "Sillas ergo",
    shortDesc: "Ergonomia certificada, ajuste y mantenimiento para tus sillas.",
    heroTitle: "Mejora tu productividad con nuestras soluciones para sillas de oficina",
    heroSubtitle:
      "Transformamos tu entorno laboral con mantenimiento, ajuste y ergonomía para sillas de oficina. Diseñamos experiencias cómodas y saludables para tu equipo.",
    heroImage: ergonomic,
    metaDescription:
      "Sillas ergonómicas de oficina en Bogotá con ajuste, mantenimiento y asesoría para cuidar la postura de tus equipos empresariales.",
    keywords: [
      "sillas ergonómicas para oficina Bogotá",
      "mantenimiento de sillas de oficina",
      "sillas corporativas Bogotá",
    ],
    benefits: [
      "Sillería certificada con soporte lumbar y materiales de alto tráfico",
      "Ajuste y mantenimiento preventivo para alargar la vida útil",
      "Diagnóstico ergonómico para equipos intensivos en computadora",
    ],
    deliverables: [
      "Selección y suministro de sillas ergonómicas",
      "Plan de mantenimiento y ajuste periódico",
      "Guías de postura y mini capacitaciones",
    ],
    featuredProducts: [
      {
        name: "Silla ejecutiva premium",
        description: "Reposacabezas, soporte lumbar 3D y malla transpirable para largas jornadas.",
        keywords: ["silla ejecutiva", "ergonomía certificada"],
        image: ergonomic,
      },
      {
        name: "Silla operativa con ajuste completo",
        description: "Brazos ajustables, pistón certificado y respaldo flexible para uso intensivo.",
        keywords: ["silla operativa Bogotá", "mobiliario ergonómico"],
        image: modularDesk,
      },
      {
        name: "Programa de mantenimiento de sillas",
        description: "Limpieza técnica, ajustes de herrajes y cambio de partes de desgaste.",
        keywords: ["mantenimiento sillas", "servicio técnico sillas"],
        image: coworking,
      },
    ],
    focusLines: ["Sillas ergonómicas", "Sillas ejecutivas", "Mantenimiento preventivo"],
  },
  {
    slug: "adecuacion-de-oficinas",
    navLabel: "Oficinas",
    title: "Adecuación integral de oficinas en Bogotá",
    shortTitle: "Oficinas express",
    heroTitle: "Oficinas listas sin frenar tu operación",
    heroSubtitle:
      "Diseño, fabricación e instalación con un solo proveedor. Coordinamos obra liviana, mobiliario modular y cableado para una entrega express.",
    heroImage: meeting,
    metaDescription:
      "Adecuación integral de oficinas en Bogotá con obra liviana, mobiliario modular, cableado y montaje controlado.",
    keywords: ["adecuación de oficinas Bogotá", "montaje de oficinas", "obra liviana corporativa"],
    benefits: [
      "Planeación por frentes para no interrumpir la operación",
      "Mobiliario modular con electrificación oculta",
      "Supervisión diaria y reportes para compras y proyectos",
    ],
    deliverables: [
      "Cronograma de obra y montaje",
      "Instalación de mobiliario y archivo",
      "Puesta en marcha y ajustes post entrega",
    ],
    featuredProducts: [
      {
        name: "Puestos colaborativos electrificados",
        description: "Islas de 4-8 personas con divisiones acústicas y cableado oculto.",
        keywords: ["puestos de trabajo modulares", "muebles de oficina Bogotá"],
        image: modularDesk,
      },
      {
        name: "Sala de juntas ejecutiva",
        description: "Mesa a medida con conectividad oculta y sillas directivas de alto nivel.",
        keywords: ["sala de juntas ejecutiva", "muebles corporativos"],
        image: meeting,
      },
      {
        name: "Cabinas y lockers corporativos",
        description: "Soluciones para phone booths y almacenamiento seguro en coworking.",
        keywords: ["muebles para coworking", "lockers empresariales"],
        image: coworking,
      },
    ],
    focusLines: ["Puestos colaborativos", "Salas de reunión", "Cabinas y lockers"],
  },
  {
    slug: "archivadores-corporativos",
    navLabel: "Archivadores",
    title: "Archivadores y almacenamiento corporativo",
    shortTitle: "Archivadores",
    heroTitle: "Control documental y seguridad para tu oficina",
    heroSubtitle:
      "Archivadores metálicos, bibliotecas y archivo rodante que optimizan espacio y protegen documentos sensibles.",
    heroImage: storage,
    metaDescription:
      "Archivadores corporativos en Bogotá: archivo rodante, bibliotecas y cajoneras modulares para empresas.",
    keywords: ["archivadores corporativos", "archivo rodante Bogotá", "almacenamiento oficina"],
    benefits: [
      "Soluciones metálicas de alto tráfico",
      "Sistemas móviles que duplican la capacidad de almacenamiento",
      "Configuraciones modulares para crecer con tu empresa",
    ],
    deliverables: [
      "Levantamiento de inventario y necesidades",
      "Diseño modular y cálculo de capacidad",
      "Instalación y capacitación de uso seguro",
    ],
    featuredProducts: [
      {
        name: "Archivo rodante de alta densidad",
        description: "Carriles reforzados y cerraduras de seguridad para documentos críticos.",
        keywords: ["archivo rodante", "seguridad documental"],
        image: storage,
      },
      {
        name: "Cajoneras modulares",
        description: "Módulos móviles con llave y organizadores para estaciones de trabajo.",
        keywords: ["cajoneras oficina", "almacenamiento personal"],
        image: modularDesk,
      },
      {
        name: "Bibliotecas corporativas",
        description: "Estantería metálica y madera con acabados corporativos.",
        keywords: ["bibliotecas oficina", "almacenamiento corporativo"],
        image: meeting,
      },
    ],
    focusLines: ["Archivo rodante", "Cajoneras", "Bibliotecas"],
  },
  {
    slug: "estanteria-oficina",
    navLabel: "Estantería oficina",
    title: "Estantería y organización de oficina",
    shortTitle: "Estanteria",
    heroTitle: "Orden visible y accesible para equipos en crecimiento",
    heroSubtitle: "Estantería metálica y de diseño para bodegas ligeras, back office y áreas de soporte.",
    heroImage: heroImage,
    metaDescription:
      "Estantería para oficina en Bogotá: estructuras metálicas y modulares para back office y soporte logístico.",
    keywords: ["estantería oficina Bogotá", "estantería metálica", "organización corporativa"],
    benefits: [
      "Estructuras modulares ajustables por nivel",
      "Capacidad calculada para seguridad y durabilidad",
      "Integración con lockers y archivo para soporte completo",
    ],
    deliverables: [
      "Diseño de layout de almacenamiento",
      "Instalación rápida y segura",
      "Manual de carga y mantenimiento",
    ],
    featuredProducts: [
      {
        name: "Estantería metálica regulable",
        description: "Niveles ajustables y refuerzos para material de oficina y TI.",
        keywords: ["estantería metálica", "bodega ligera"],
        image: storage,
      },
      {
        name: "Estantería showroom",
        description: "Acabados premium para áreas visibles y salas de exposición interna.",
        keywords: ["estantería diseño", "muebles corporativos"],
        image: heroImage,
      },
      {
        name: "Lockers híbridos",
        description: "Integración de lockers con estantería para equipos híbridos y rotación.",
        keywords: ["lockers empresariales", "coworking Bogotá"],
        image: coworking,
      },
    ],
    focusLines: ["Estantería metálica", "Showroom", "Lockers integrados"],
  },
  {
    slug: "tableros-acrilicos",
    navLabel: "Tableros acrílicos",
    title: "Tableros acrílicos y soluciones de colaboración",
    shortTitle: "Tableros",
    heroTitle: "Ideas claras y reuniones efectivas",
    heroSubtitle: "Tableros acrílicos, vidrio y móviles con accesorios para salas de juntas y training.",
    shortTitle: "Tableros",
    heroImage: meeting,
    metaDescription:
      "Tableros acrílicos corporativos en Bogotá: fijos y móviles con accesorios para salas de juntas y capacitación.",
    keywords: ["tableros acrílicos", "tableros móviles", "salas de juntas"],
    benefits: [
      "Superficies de escritura de alta claridad",
      "Opciones móviles para equipos híbridos",
      "Integración con sistemas audiovisuales",
    ],
    deliverables: [
      "Selección de tablero y accesorios",
      "Instalación y fijación segura",
      "Kit de marcadores y borradores",
    ],
    featuredProducts: [
      {
        name: "Tablero acrílico mural",
        description: "Superficie cristalina con herrajes ocultos para salas ejecutivas.",
        keywords: ["tablero acrílico", "sala de juntas"],
        image: meeting,
      },
      {
        name: "Tablero móvil doble cara",
        description: "Ideal para training y sesiones colaborativas en espacios flexibles.",
        keywords: ["tablero móvil", "capacitaciones"],
        image: heroImage,
      },
      {
        name: "Tablero de vidrio templado",
        description: "Acabado premium resistente a manchas para dirección y boardrooms.",
        keywords: ["tablero vidrio", "directorio"],
        image: modularDesk,
      },
    ],
    focusLines: ["Tableros murales", "Tableros móviles", "Vidrio premium"],
  },
  {
    slug: "diseno-oficinas-corporativas",
    title: "Diseño de oficinas corporativas en Bogotá",
    shortTitle: "Diseno oficinas",
    heroTitle: "Diseño inteligente con renders y productividad",
    heroSubtitle:
      "Planificamos espacios con renders 3D, flujos productivos y branding corporativo para decisiones rápidas de compras.",
    heroImage: heroImage,
    metaDescription:
      "Diseño de oficinas corporativas en Bogotá con renders, distribución por productividad y mobiliario modular.",
    keywords: ["diseño de oficinas corporativas Bogotá", "render 3D oficinas", "optimización de espacios laborales"],
    benefits: [
      "Layouts optimizados por equipos y flujo de trabajo",
      "Renders 3D rápidos para aprobación directiva",
      "Guías de ergonomía y acústica para cada estación",
    ],
    deliverables: [
      "Plano de distribución con áreas de colaboración y enfoque",
      "Moodboard y acabados corporativos",
      "Cronograma de montaje y logística en Bogotá",
      "Checklist de puntos eléctricos y de cableado",
    ],
    featuredProducts: [
      {
        name: "Master plan corporativo",
        description: "Planeación de espacios, estaciones modulares y salas clave con ruta crítica.",
        keywords: ["plan de espacios", "diseño oficinas"],
        image: modularDesk,
      },
      {
        name: "Set de materiales y acabados",
        description: "Selección de tapizados, melaminas y metálicos alineados a tu marca.",
        keywords: ["acabados corporativos", "materiales"],
        image: meeting,
      },
      {
        name: "Kit de ergonomía",
        description: "Sillas certificadas, apoyapiés y brazos monitor según cada rol.",
        keywords: ["ergonomía corporativa", "accesorios"],
        image: ergonomic,
      },
    ],
    focusLines: ["Renders 3D", "Layouts productivos", "Ergonomía"],
  },
  {
    slug: "consultoria-ergonomia",
    title: "Consultoría en ergonomía corporativa",
    shortTitle: "Ergonomia corp",
    heroTitle: "Salud laboral con mobiliario certificado",
    heroSubtitle:
      "Diagnóstico, sillas certificadas, escritorios regulables y capacitación básica para cuidar la salud laboral.",
    heroImage: ergonomic,
    metaDescription:
      "Consultoría en ergonomía empresarial en Bogotá con diagnóstico, sillas certificadas y escritorios ajustables.",
    keywords: ["consultoría ergonomía Bogotá", "sillas ergonómicas certificadas", "escritorios ajustables"],
    benefits: [
      "Evaluación ergonómica por puestos críticos",
      "Recomendaciones de sillas y accesorios certificados",
      "Capacitación corta para equipos internos",
    ],
    deliverables: [
      "Informe de riesgos ergonómicos y mejoras",
      "Kit de sillas, apoyapiés y brazos monitor",
      "Plan de ajustes y seguimiento trimestral",
    ],
    featuredProducts: [
      {
        name: "Diagnóstico ergonómico",
        description: "Evaluación individual con plan de mejoras por puesto.",
        keywords: ["diagnóstico ergonómico", "salud laboral"],
        image: ergonomic,
      },
      {
        name: "Escritorios ajustables",
        description: "Altura regulable con memorias para posturas activas e híbridas.",
        keywords: ["escritorios ajustables", "postura activa"],
        image: modularDesk,
      },
      {
        name: "Kit de accesorios",
        description: "Apoyapiés, brazos de monitor y soportes que completan la estación saludable.",
        keywords: ["accesorios ergonómicos", "salud laboral"],
        image: coworking,
      },
    ],
    focusLines: ["Diagnóstico", "Sillería certificada", "Accesorios"],
  },
  {
    slug: "mantenimiento-mobiliario",
    title: "Mantenimiento y renovación de mobiliario",
    shortTitle: "Mantenimiento",
    heroTitle: "Soporte recurrente para crecer sin detener la operación",
    heroSubtitle: "Planes preventivos y correctivos, reconfiguración modular y soporte recurrente para crecer sin fricción.",
    heroImage: storage,
    metaDescription:
      "Mantenimiento de mobiliario empresarial en Bogotá: ajustes, renovación de módulos y extensión de vida útil.",
    keywords: ["mantenimiento de mobiliario", "ajustes de oficinas", "renovación de módulos"],
    benefits: [
      "Planes preventivos y correctivos programados",
      "Reparación y reemplazo de superficies, herrajes y sillas",
      "Reconfiguración modular para ampliaciones",
    ],
    deliverables: [
      "Inventario técnico y estado de mobiliario",
      "Cronograma de visitas y SLA de respuesta",
      "Actualización de módulos y archivo rodante",
    ],
    featuredProducts: [
      {
        name: "Renovación de superficies",
        description: "Cambio de tapas, cantos y herrajes para extender la vida de estaciones.",
        keywords: ["renovación estaciones", "mantenimiento"],
        image: modularDesk,
      },
      {
        name: "Reacondicionamiento de sillas",
        description: "Limpieza técnica, ajustes y cambio de repuestos críticos.",
        keywords: ["mantenimiento sillas", "servicio técnico"],
        image: ergonomic,
      },
      {
        name: "Reconfiguración modular",
        description: "Ajustamos estaciones y archivos para nuevos equipos o ampliaciones.",
        keywords: ["reconfiguración modular", "expansión"],
        image: coworking,
      },
    ],
    focusLines: ["Renovación", "Repuestos", "Reconfiguración"],
  },
  {
    slug: "proyectos-llave-en-mano",
    title: "Proyectos llave en mano para empresas",
    shortTitle: "Llave en mano",
    heroTitle: "Oficina lista en 15 días",
    heroSubtitle: "Un solo responsable para diseño, fabricación e instalación completa con reportes diarios.",
    heroImage: modularDesk,
    metaDescription:
      "Proyectos llave en mano de oficinas en Bogotá: diseño, fabricación e instalación completa en tiempos corporativos.",
    keywords: ["proyectos llave en mano oficina", "oficina lista 15 días", "mobiliario corporativo Bogotá"],
    benefits: [
      "Un frente único para diseño, fabricación e instalación",
      "Equipo dedicado de arquitectura y obra",
      "Reportes diarios y pruebas de funcionamiento",
    ],
    deliverables: [
      "Master plan con hitos y entregables",
      "Fabricación local de mobiliario modular",
      "Cableado y conectividad listas para uso",
      "Postventa y ajustes en garantía",
    ],
    featuredProducts: [
      {
        name: "Oficina express",
        description: "Proyecto completo con mobiliario modular y montaje acelerado.",
        keywords: ["oficina express", "montaje rápido"],
        image: heroImage,
      },
      {
        name: "Sala ejecutiva premium",
        description: "Mesa y sillería directiva con conectividad integrada.",
        keywords: ["sala ejecutiva", "muebles premium"],
        image: meeting,
      },
      {
        name: "Kit de coworking",
        description: "Hot desks, lockers y phone booths para ocupación flexible.",
        keywords: ["coworking Bogotá", "muebles flex"],
        image: coworking,
      },
    ],
    focusLines: ["Entrega 15 días", "Mobiliario modular", "Postventa"],
  },
  {
    slug: "puestos-de-trabajo-modulares",
    title: "Puestos de trabajo modulares",
    shortTitle: "Puestos modulares",
    heroTitle: "Estaciones configurables para equipos de 2 a 30 personas",
    heroSubtitle: "Divisiones acústicas, cableado limpio y modularidad que crece con tu headcount.",
    heroImage: coworking,
    metaDescription:
      "Puestos de trabajo modulares en Bogotá con acústica, cableado limpio y expansión por módulos.",
    keywords: ["puestos de trabajo modulares", "mobiliario colaborativo", "workstations Bogotá"],
    benefits: [
      "Divisiones acústicas y privacidad donde se necesita",
      "Power & data oculto para escritorios ordenados",
      "Modularidad que crece con tu headcount",
    ],
    deliverables: [
      "Configuraciones colaborativas e individuales",
      "Instalación de electrificación y canaletas",
      "Sillas ergonómicas y accesorios incluidos",
    ],
    featuredProducts: [
      {
        name: "Isla colaborativa",
        description: "Estaciones de 4 a 8 puestos con divisiones acústicas fonoabsorbentes.",
        keywords: ["estaciones colaborativas", "puestos modulares"],
        image: coworking,
      },
      {
        name: "Puesto premium individual",
        description: "Privacidad perimetral, electrificación y almacenaje integrado.",
        keywords: ["puesto individual premium", "ergonomía"],
        image: modularDesk,
      },
      {
        name: "Configuración híbrida",
        description: "Mix de estaciones fijas y hot desks para equipos híbridos.",
        keywords: ["hot desk", "puesto híbrido"],
        image: heroImage,
      },
    ],
    focusLines: ["Puestos colaborativos", "Puestos premium", "Configuraciones híbridas"],
  },
];

export const servicesMap = servicesList.reduce((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {});
