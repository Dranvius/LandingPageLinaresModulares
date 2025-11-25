import logo from "../img/logoB.png";
import heroImage from "../img/oficcecomplete.jpg";
import modularDesk from "../img/Oficinas_Modulares_12.png";
import coworking from "../img/desk2.jpg";
import meeting from "../img/Oficina5.jpg";
import ergonomic from "../img/deskdarkside.jpg";
import storage from "../img/archivoRodante.jpg";

const productLines = [
  {
    title: "Puestos de trabajo modulares",
    description: "Soluciones configurables para equipos de 2 a 30 personas con acústica, energía y cableado limpio.",
    bullets: ["Puestos colaborativos y premium", "Divisiones acústicas y privacidad", "Listos para crecer por módulos"],
    image: modularDesk,
  },
  {
    title: "Mobiliario ergonómico corporativo",
    description: "Sillas certificadas, escritorios de altura regulable y accesorios que cuidan la salud laboral.",
    bullets: ["Sillas ergonómicas con respaldo lumbar", "Escritorios eléctricos y manuales", "Accesorios: apoyapiés, brazos para monitor"],
    image: ergonomic,
  },
  {
    title: "Salas de juntas ejecutivas",
    description: "Mesas premium, sillas directivas y soluciones audiovisuales integradas para reuniones sin fricción.",
    bullets: ["Mesas a medida con conectividad oculta", "Sillas ejecutivas de alto nivel", "Pantallas y videoconferencia listas"],
    image: meeting,
  },
  {
    title: "Muebles para coworking",
    description: "Estaciones flexibles, lockers y cabinas individuales que optimizan cada m² de tu operación.",
    bullets: ["Hot desks y phone booths", "Lockers empresariales seguros", "Mobiliario compartido de alto tráfico"],
    image: coworking,
  },
  {
    title: "Almacenamiento corporativo",
    description: "Archivadores metálicos, bibliotecas y cajoneras modulares para mantener documentos y equipos bajo control.",
    bullets: ["Archivo rodante y fijo", "Cajoneras móviles", "Soluciones para archivo muerto"],
    image: storage,
  },
];

const services = [
  {
    title: "Diseño de oficinas corporativas",
    description: "Render 3D, distribución inteligente y planificación por productividad.",
  },
  {
    title: "Adecuación integral de oficinas",
    description: "Diseño + fabricación + instalación con un solo proveedor.",
  },
  {
    title: "Consultoría en ergonomía",
    description: "Diagnóstico, recomendaciones de mobiliario y capacitación básica para tu equipo.",
  },
  {
    title: "Mantenimiento y renovación",
    description: "Reparación, actualización de módulos y soporte recurrente.",
  },
  {
    title: "Proyectos llave en mano",
    description: "Oficina lista en 15 días con cronograma, instalación y postventa incluidos.",
  },
];

const differentiators = [
  {
    title: "Especialistas en Bogotá",
    body: "Conocemos la normativa local, tiempos de obra y logística corporativa de la ciudad.",
    tags: ["SEO local listo", "Mapas y reseñas", "Atención en sitio"],
  },
  {
    title: "Proveedor de soluciones, no solo muebles",
    body: "Diseñamos, fabricamos, instalamos y medimos productividad. Menos fricción y más resultados.",
    tags: ["Rutas de proyecto claras", "Equipo de arquitectura", "Instalación certificada"],
  },
  {
    title: "Listo para performance digital",
    body: "Secciones optimizadas para Google Ads y SEO con llamadas a acción directas a WhatsApp y teléfono.",
    tags: ["CTA de conversión", "Keywords locales", "Páginas específicas"],
  },
];

const seoTargets = [
  {
    path: "/mobiliario-empresarial-bogota",
    keywords: ["mobiliario empresarial en Bogotá", "muebles de oficina Bogotá"],
  },
  {
    path: "/puestos-de-trabajo-modulares",
    keywords: ["puestos de trabajo modulares", "estaciones colaborativas"],
  },
  {
    path: "/diseno-de-oficinas-corporativas",
    keywords: ["diseño de oficinas corporativas Bogotá", "optimización de espacios"],
  },
  {
    path: "/sillas-ergonomicas-bogota",
    keywords: ["sillas ergonómicas para oficina Bogotá", "ergonomía corporativa"],
  },
  {
    path: "/adecuacion-de-oficinas",
    keywords: ["adecuación de oficinas Bogotá", "proyectos llave en mano"],
  },
];

const steps = [
  "Diagnóstico gratuito: levantamiento y fotos del espacio en Bogotá",
  "Render 3D y propuesta económica optimizada por m²",
  "Fabricación, logística y montaje rápido en calendario corporativo",
  "Acompañamiento postventa, ajustes y mantenimiento programado",
];

export const Home = () => {
  return (
    <div className="landing">
      <header className="topbar" id="inicio">
        <div className="navbar">
          <div className="brand">
            <img src={logo} alt="Linares Modulares logo" />
            <span>Linares Modulares</span>
          </div>
          <nav className="nav-links" aria-label="Secciones principales">
            <a href="#productos">Productos</a>
            <a href="#servicios">Servicios</a>
            <a href="#valor">Propuesta</a>
            <a href="#seo">SEO Local</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="nav-cta">
            <a className="btn secondary" href="tel:+573193014722">Llamar</a>
            <a
              className="btn primary"
              href="https://wa.me/573193014722?text=Quiero%20una%20asesor%C3%ADa%20de%20oficina%20modular"
              target="_blank"
              rel="noreferrer"
              data-ads-conversion="lead"
            >
              Asesoría inmediata
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="badges">
            <span className="badge">Mobiliario empresarial en Bogotá</span>
            <span className="badge">Proyectos llave en mano</span>
            <span className="badge">SEO & Ads ready</span>
          </div>
          <h1>Diseño, fabricación e instalación de mobiliario empresarial inteligente</h1>
          <p>
            Espacios flexibles, ergonómicos y listos para crecer. Combinamos diseño corporativo, fabricación propia y
            montaje rápido para que tu oficina rinda desde el día uno.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto" data-ads-conversion="cta-principal">
              Agenda diagnóstico gratuito
            </a>
            <a className="btn secondary" href="tel:+573193014722">
              📞 Llamar a un especialista
            </a>
          </div>
          <div className="hero-note">
            <strong>Lo que más piden en Bogotá:</strong>
            <span>puestos de trabajo modulares · sillas ergonómicas · salas de juntas ejecutivas · coworking · archivo rodante</span>
          </div>
        </div>
        <div className="hero-figure" aria-hidden="true">
          <img src={heroImage} alt="Instalación de oficina moderna" loading="lazy" />
        </div>
      </section>

      <section className="section" id="productos">
        <h2>Productos con mayor demanda</h2>
        <p className="lead">Soluciones modulares y ergonómicas con alto retorno. Selecciona la línea que necesitas y recibe un plan de instalación.</p>
        <div className="cards">
          {productLines.map((item) => (
            <article className="card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="servicios">
        <h2>Servicios que generan crecimiento</h2>
        <p className="lead">Integramos diseño, fabricación e instalación para que tengas un solo responsable de tu oficina.</p>
        <div className="grid-split">
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="highlight">
            <h3>Propuesta de valor</h3>
            <p>Linares Modulares: especialistas en diseño, fabricación e implementación de soluciones de mobiliario empresarial inteligente en Bogotá.</p>
            <ul>
              <li>Optimización de espacio y productividad</li>
              <li>Instalaciones rápidas con mínima interrupción</li>
              <li>Equipos certificados en ergonomía y acústica</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="valor">
        <h2>Por qué las empresas nos eligen</h2>
        <p className="lead">Pensado para corporativos, startups, coworkings y oficinas híbridas que necesitan resultados medibles.</p>
        <div className="cards">
          {differentiators.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Proceso express para proyectos corporativos</h2>
        <p className="lead">De la cotización al montaje en cuatro pasos claros, con seguimiento comercial y técnico.</p>
        <div className="process">
          {steps.map((step, index) => (
            <div className="process-step" key={step}>
              <strong>Paso {index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="seo">
        <h2>Listo para SEO local y Google Ads</h2>
        <p className="lead">Estructura de páginas específicas para atacar keywords prioritarias sin sobrecargar el contenido.</p>
        <div className="cards">
          {seoTargets.map((target) => (
            <article className="card" key={target.path}>
              <h3>{target.path}</h3>
              <p>Optimizado para:</p>
              <ul>
                {target.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="cta-panel">
          <div>
            <h2>Diagnóstico gratuito y cotización personalizada</h2>
            <p>Agenda tu visita técnica o videollamada. Integramos el formulario con Google Ads para rastrear cada conversión.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <strong>Whatsapp inmediato</strong>
              <p><a href="https://wa.me/573193014722" target="_blank" rel="noreferrer" data-ads-conversion="whatsapp">+57 319 301 4722</a></p>
            </div>
            <div className="contact-card">
              <strong>Teléfono</strong>
              <p><a href="tel:+573193014722">+57 319 301 4722</a></p>
            </div>
            <div className="contact-card">
              <strong>Email</strong>
              <p><a href="mailto:contacto@linaresmodulares.com">contacto@linaresmodulares.com</a></p>
            </div>
            <div className="contact-card">
              <strong>Oferta rápida</strong>
              <p>Enviamos propuesta en menos de 24 horas con layout y cronograma.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-note">
        Optimiza tu oficina con puestos modulares, sillas ergonómicas, coworking, salas de juntas y archivo rodante. Atendemos Bogotá y alrededores.
      </div>
    </div>
  );
};
