import { createContext } from "react";

export const Context = createContext();

const services = [
  {
    service: "Servicio ",
    title: "Construcción y arquitectura empresarial",
    body: "Servicio profesional de construcción para empresas",
    url: "../src/icons/icon/build.png",
  },
  {
    service: "Servicio ",
    title: "Diseño e instalación de oficinas modulares",
    body: "Instalación de oficinas modulares.",
    url: "../src/icons/oficinasModulares/oficinasModulares.png",
  },
  {
    service: "Servicio ",
    title: "Instalación de sistemas CCTV",
    body: "Instalación de sistemas de seguridad",
    url: "../src/icons/sistemaCctv/camaraSeguridad.png",
  },
  {
    service: "Servicio ",
    title: "Trabajos de obra civil",
    body: "Servicios de construcción",
    url: "../src/icons/obraCivil/obraCivil.png",
  },
  {
    service: "Servicio ",
    title: "Mantenimiento correctivo y preventivo de sillas de oficina",
    body: "Mantenimiento de todo tipo de mobiliario empresarial",
    url: "../src/icons/SillaOficina/Sillas.png",
  },
  {
    service: "Servicio ",
    title: "Instalación y mantenimineto de archivos rodantes",
    body: "Instalación,Translado y mantenimiento",
    url: "../src/icons/archivoRodante/archivo.png",
  },
];

const serviciosRealizados = [
  {
    titleText: "MANTENIMIENTO DE MOBILIARIO EMPRESARIAL",
    bodyText:
      "Nuestro servicio de mantenimiento de mprimero:sobiliario empresarial está diseñado para garantizar que tus muebles se mantengan en óptimas condiciones a lo largo del tiempo. Contamos con un equipo de técnicos especializados que se encargan de realizar inspecciones regulares, reparaciones y mantenimiento preventivo para maximizar la durabilidad y funcionalidad de tus muebles. Nos ocupamos de aspectos como la limpieza, ajustes, lubricación y reemplazo de componentes, asegurando que tu mobiliario se mantenga en perfecto estado. Con nuestro servicio de mantenimiento, puedes tener la tranquilidad de que tus muebles estarán siempre listos para brindar comodidad y eficiencia a tus empleados",
    list: [
      "Inspección y mantenimiento preventivo",
      "Reparaciones y ajustes.",
      "Limpieza y cuidado.",
      "Reemplazo de piezas y suministros",
      "Asesoramiento y recomendaciones.",
    ],
    URLIMAGE: "../src/iconswhite/icon/buildWhite.png",
  },
  {
    titleText: "DISEÑO E INSTALACION DE OFICINAS MODULARES",
    bodyText:
      "Nuestro servicio de diseño e instalación de oficinas modulares se enfoca en brindar soluciones flexibles y personalizadas para optimizar tus espacios de trabajo, colaborando con nuestros clientes para comprender sus necesidades y ajustar la solución a su visión y requerimientos. Por ello nuestro acompañamiento se efectúa desde la ideación de la solución hasta la implementación y terminación del montaje.",
    list: [
      "Análisis de necesidades y diseño personalizado",
      "Flexibilidad y adaptabilidad.",
      "Eficiencia energética y sostenibilidad.",
      "Ergonomía y confort.",
      "Calidad de construcción y acabados",
    ],
    URLIMAGE:
      "../src/iconswhite/oficinasModulares/oficinasmodulareswhite.png",
  },
  {
    titleText: "INSTALACION DE SISTEMAS CCTV",
    bodyText:
      "Nuestro servicio de instalación de sistemas CCTV se enfoca en brindarte tranquilidad y seguridad en sus instalaciones. Nuestro equipo de expertos trabaja diligentemente para diseñar un sistema de circuito cerrado personalizado que se ajuste a sus necesidades específicas. Utilizando tecnología de vanguardia, instalamos cámaras de alta resolución estratégicamente ubicadas para monitorear y grabar áreas clave de tu propiedad. Nuestra instalación profesional garantiza un funcionamiento óptimo del sistema, mientras que nuestros servicios de configuración y capacitación te permiten sacar el máximo provecho de tu sistema CCTV. Confía en nosotros para proteger tus activos y mantener un entorno seguro",
    list: [
      "Evaluación y diseño de sistema.",
      "Selección de equipos de calidad.",
      "Instalación y configuración profesional.",
      "Integración con otros sistemas de seguridad",
      "Mantenimiento y soporte técnico.",
    ],
    URLIMAGE: "../src/iconswhite/sistemacctv/camaraseguridadwhite.png",
  },
  {
    titleText: "TRABAJOS DE OBRA CIVIL",
    bodyText:
      "Nuestro servicio de trabajos de obra civil se dedica a brindarte soluciones integrales para sus proyectos de construcción. Contamos con un equipo de profesionales altamente capacitados en diversas disciplinas que se encargaran de gestionar y ejecutar todas las etapas del proceso. Desde la planificación y diseño hasta la construcción y finalización, nos aseguramos de cumplir con los más altos estándares de calidad y eficiencia. Ya sea que necesites construir una nueva estructura, realizar modificaciones o renovaciones, nuestro equipo se compromete a entregar resultados excepcionales, cumpliendo con tus requerimientos y plazos establecidos",
    list: [
      "Planificación y gestión de proyectos",
      "Ingeniería y diseño estructural.",
      "Calidad de construcción y materiales.",
      "Seguridad en el lugar de trabajo",
    ],
    URLIMAGE: "../src/iconswhite/Obra civil/obracivilwhite.png",
  },
  {
    titleText: "MANTENIMIENTO PREVENTIVO Y CORRECTIVO DE SILLAS PARA OFICINA",
    bodyText:
      "Nuestro servicio de mantenimiento preventivo y correctivo de sillas para oficina está diseñado para asegurar que tus sillas se mantengan en óptimas condiciones de funcionamiento y comodidad. Nuestro equipo se encarga de realizar inspecciones regulares, ajustes y limpieza exhaustiva para prevenir posibles problemas y garantizar un rendimiento óptimo. Además, en caso de cualquier avería o daño, ofrecemos servicios de reparación y reemplazo de componentes para que tus sillas sigan siendo funcionales y duraderas. Con nuestro servicio, puedes tener la confianza de que tus sillas para oficina estarán siempre en excelentes condiciones, proporcionando comodidad y ergonomía a tus empleados",
    list: [
      "Inspección y mantenimiento regular.",
      "Reparaciones y ajustes.",
      "Lubricación y limpieza.",
      "Reemplazo de partes y componentes.",
      "Asesoramiento y recomendaciones.",
    ],
    URLIMAGE: "../src/iconswhite/Silla oficina/Sillaswhite.png",
  },
  {
    titleText: "MANTENIMIENTO DE ARCHIVO RODANTE",
    bodyText:
      "Nuestro servicio de mantenimiento de archivo rodante está diseñado para garantizar la durabilidad y funcionalidad de tus sistemas de almacenamiento de archivo. Nuestro equipo de técnicos se encarga de realizar inspecciones regulares, ajustes y lubricación para prevenir problemas y asegurar un deslizamiento suave de los estantes. Además, ofrecemos servicios de reparación y reemplazo de componentes en caso de desgaste o daño. Con nuestro enfoque en el mantenimiento preventivo, puedes confiar en que tus archivos estarán organizados, protegidos y de fácil acceso, optimizando la eficiencia y productividad en tu entorno de trabajo",
    list: [
      "Inspección y mantenimiento general.",
      "Reparaciones y ajustes.",
      "Lubricación y limpieza.",
      "Seguridad y bloqueo.",
      "Asesoramiento y optimización del espacio.",
    ],
    URLIMAGE: "../img/test.jpg",
  },
];

const envio = {
  services,
  serviciosRealizados,
};

export function ContextProvider(props) {
  return <Context.Provider value={envio}>{props.children}</Context.Provider>;
}
