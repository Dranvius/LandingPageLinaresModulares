import { useEffect, useState } from "react";
import heroImage from "../img/oficcecomplete.jpg";
import modularDesk from "../img/Oficinas_Modulares_12.png";
import coworking from "../img/desk2.jpg";
import meeting from "../img/Oficina5.jpg";
import ergonomic from "../img/deskdarkside.jpg";
import storage from "../img/archivoRodante.jpg";
import { Header } from "../components/Header";
import { servicesList } from "../data/services";
import logo from "../img/logoB.png";

const heroImages = [
  { src: ergonomic, alt: "Sillas ergonómicas certificadas para oficinas en Bogotá" },
  { src: modularDesk, alt: "Puestos de trabajo modulares para equipos en crecimiento" },
  { src: meeting, alt: "Sala de juntas ejecutiva con conectividad oculta" },
];

const services = servicesList.map((service, idx) => ({
  ...service,
  visual: heroImages[idx % heroImages.length].src,
  label: service.navLabel || service.title,
  desc: service.summary || service.heroSubtitle || service.metaDescription || "Mobiliario corporativo a la medida.",
}));

const products = [
  {
    title: "Puestos de trabajo modulares empresariales",
    description: "Estaciones colaborativas y premium con cableado oculto y acústica cuidada.",
    image: modularDesk,
    keywords: ["puestos modulares", "muebles de oficina Bogotá"],
  },
  {
    title: "Sillas ergonómicas certificadas",
    description: "Soporte lumbar, ajustes completos y materiales de alto tráfico.",
    image: ergonomic,
    keywords: ["sillas ergonómicas", "ergonomía corporativa"],
  },
  {
    title: "Muebles para coworking corporativo",
    description: "Hot desks, lockers y phone booths para máxima rotación y comodidad.",
    image: coworking,
    keywords: ["muebles coworking", "mobiliario empresarial"],
  },
  {
    title: "Salas de juntas ejecutivas",
    description: "Mesas a medida, sillería directiva y conectividad lista para videollamadas.",
    image: meeting,
    keywords: ["salas de juntas", "muebles de oficina premium"],
  },
  {
    title: "Archivadores y almacenamiento",
    description: "Archivo rodante, bibliotecas y cajoneras modulares para equipos y documentos.",
    image: storage,
    keywords: ["archivo rodante", "almacenamiento corporativo"],
  },
];

const differentiators = [
  { label: "Diseño estratégico", detail: "Layouts que maximizan m² y productividad." },
  { label: "Ergonomía certificada", detail: "Cumplimiento de normativas y bienestar del equipo." },
  { label: "Montaje llave en mano", detail: "Producción, logística e instalación coordinada." },
  { label: "Branding aplicado", detail: "Materiales, acabados y señalización con tu marca." },
  { label: "Escalabilidad", detail: "Módulos que se reconfiguran para equipos híbridos." },
];

const steps = [
  "Diagnóstico gratuito presencial o virtual en Bogotá",
  "Layout 3D, moodboard y propuesta económica optimizada",
  "Fabricación local, logística y montaje sincronizado con tu agenda",
  "Entrega llave en mano, ajustes y mantenimiento programado",
];

const testimonials = [
  {
    name: "Laura Méndez",
    role: "Gerente de Operaciones · Fintech Bogotá",
    quote: "Optimizaron nuestra oficina y el equipo rinde mejor. Montaje limpio y en los tiempos prometidos.",
  },
  {
    name: "Andrés Cárdenas",
    role: "Director de Compras · Firma Legal",
    quote: "La sala de juntas quedó impecable. Conectividad oculta y lista para videoconferencias sin fallas.",
  },
];

const projects = [
  {
    title: "Headquarters tech · Zona T",
    description: "Puestos colaborativos, phone booths y salas creativas en 450 m² con entrega en 15 días.",
    image: heroImage,
  },
  {
    title: "Coworking corporativo · Chicó",
    description: "Hot desks, lockers y zonas lounge con mobiliario modular de alto tráfico.",
    image: coworking,
  },
  {
    title: "Sala de juntas ejecutiva",
    description: "Mesa premium a medida con conectividad oculta y sillas directivas de alta ergonomía.",
    image: meeting,
  },
];

export const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [formValues, setFormValues] = useState({
    company: "",
    contact: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const apiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || `${window.location.origin.replace(/\/$/, "")}`;

  useEffect(() => {
    document.title = "Mobiliario Empresarial en Bogotá | Linares Modulares";

    const description =
      "Soluciones de mobiliario empresarial en Bogotá: diseño de oficinas, adecuación integral, puestos modulares y ergonomía para empresas modernas.";

    const ensureMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    ensureMeta("description", description);
    ensureMeta(
      "keywords",
      "mobiliario empresarial en Bogotá, muebles de oficina Bogotá, puestos de trabajo modulares, mobiliario corporativo Bogotá, sillas ergonómicas para oficina Bogotá, diseño de oficinas corporativas Bogotá, adecuación de oficinas Bogotá"
    );

    const baseUrl = window.location.origin.replace(/\/$/, "");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${baseUrl}/`);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === "loading") return;

    if (!formValues.company || !formValues.contact || !formValues.email || !formValues.message) {
      setFormError("Por favor completa los campos obligatorios.");
      return;
    }

    setFormStatus("loading");
    setFormError("");

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "No pudimos enviar tu mensaje. Intenta de nuevo.");
      }

      setFormStatus("success");
      setFormValues({ company: "", contact: "", phone: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      setFormError(error.message || "No pudimos enviar tu mensaje.");
    }
  };

  return (
    <div className="page" id="inicio">
      <Header />

      <section className="hero hero-apartment">
        <div className="hero-shell">
          <div className="hero-head">
            <div className="hero-copy">
              <p className="hero-eyebrow">Adecuacion corporativa de alto nivel</p>
              <h1>Tu futuro, nuestra mision</h1>
              <p className="hero-sub">
                Disenamos, fabricamos e instalamos espacios elite con ergonomia certificada y entrega llave en mano.
              </p>
            </div>
            <a className="btn pill dark" href="#contacto">
              Conoce mas
            </a>
          </div>

          <div className="hero-media">
            <img key={heroIndex} className="hero-photo" src={heroImages[heroIndex].src} alt={heroImages[heroIndex].alt} />
            <div className="hero-overlay">
              <span className="tag">Caso</span>
              <div>
                <p className="overlay-title">Lideres en mobiliario corporativo</p>
                <p className="overlay-desc">Diseno, interiorismo, construccion ligera, mobiliario y mantenimiento preventivo.</p>
              </div>
              <a className="overlay-cta" href="#proyectos" aria-label="Ver proyectos">
                &rarr;
              </a>
            </div>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-value">34</span>
              <span className="metric-label">Proyectos llave en mano</span>
            </div>
            <div className="metric">
              <span className="metric-value">49K</span>
              <span className="metric-label">m2 disenados y montados</span>
              <span className="metric-pill">Confiable</span>
            </div>
            <div className="metric dark">
              <span className="metric-value">256M</span>
              <span className="metric-label">Valor de portafolio ($)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-header">
          <p className="eyebrow">Servicios corporativos</p>
          <h2>Soluciones integrales de mobiliario y adecuación de oficinas</h2>
          <p className="section-desc">
            Desde el layout hasta la instalación final, entregamos espacios coherentes con tu marca, eficientes para tu equipo y listos
            para campañas de adquisición.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const cardKey = service.slug || service.label;
            const descLimit = 160;
            const sourceDesc = service.shortDesc || service.desc || "";
            const displayDesc = sourceDesc.length > descLimit ? `${sourceDesc.slice(0, descLimit)}...` : sourceDesc;
            const baseTitle = service.shortTitle || service.label || "";
            const title = baseTitle.length > 18 ? `${baseTitle.slice(0, 17)}...` : baseTitle;
            return (
              <a
                key={cardKey}
                href={`/servicios/${service.slug}`}
                className="service-card vega-card"
              itemScope
              itemType="https://schema.org/Service"
              >
                <div className="service-media fade-photo">
                  <img src={service.visual} alt={service.label} loading="lazy" />
                </div>
                <div className="vega-gradient" />
                <div className="service-body vega-overlay">
                  <h3 itemProp="name">{title}</h3>
                  <p className="card-desc" itemProp="description">
                    {displayDesc}
                  </p>
                <span className="link">Ver mas</span>
              </div>
              <div className="service-brand-mark">
                <img src={logo} alt="Linares Modulares" />
              </div>
            </a>
          );
          })}
        </div>
      </section>

      <section className="section products" id="productos">
        <div className="section-header">
          <p className="eyebrow">Línea de productos</p>
          <h2>Mobiliario empresarial listo para crecer</h2>
          <p className="section-desc">
            Módulos configurables, sillería ergonómica y almacenamiento inteligente para equipos híbridos y en expansión.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.title} className="product-card" itemScope itemType="https://schema.org/Product">
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" itemProp="image" />
                <div className="product-chip">{product.keywords.join(" · ")}</div>
              </div>
              <div className="product-body">
                <h3 itemProp="name">{product.title}</h3>
                <p itemProp="description">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section value" id="propuesta">
        <div className="section-header">
          <p className="eyebrow">Propuesta de valor</p>
          <h2>Espacios inteligentes, listos para tu marca</h2>
          <p className="section-desc">Integramos ergonomía, estética corporativa y eficiencia operativa en cada proyecto.</p>
        </div>
        <div className="pill-grid">
          {differentiators.map((item) => (
            <div key={item.label} className="pill">
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section stats" id="proceso">
        <div className="stat-card">
          <h3>Proceso claro</h3>
          <ul>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="stat-card secondary">
          <h3>Impacto en tu equipo</h3>
          <ul>
            <li>Productividad +30% con layouts y ergonomía correcta</li>
            <li>Menos tiempos muertos con cableado y conectividad integrados</li>
            <li>Espacios listos para visitas, demos y eventos internos</li>
          </ul>
        </div>
      </section>

      <section className="section projects" id="proyectos">
        <div className="section-header">
          <p className="eyebrow">Casos reales</p>
          <h2>Proyectos que ya confían en Linares Modulares</h2>
          <p className="section-desc">Implementaciones llave en mano con mobiliario modular, ergonomía y montaje express.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials" id="testimonios">
        <div className="section-header">
          <p className="eyebrow">Testimonios</p>
          <h2>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((test) => (
            <blockquote key={test.name} className="testimonial">
              <p>“{test.quote}”</p>
              <footer>
                <strong>{test.name}</strong>
                <span>{test.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section contact" id="contacto" itemScope itemType="https://schema.org/ContactPoint">
        <div className="contact-info">
          <p className="eyebrow">Contacto</p>
          <h2>Solicita tu diagnóstico gratuito</h2>
          <p className="section-desc">Recibe una propuesta personalizada sin costo y acelera tu proyecto corporativo.</p>
          <div className="contact-list">
            <span>
              <strong>Teléfono:</strong> <a href="tel:+573193014722">+57 319 301 4722</a>
            </span>
            <span>
              <strong>Email:</strong> <a href="mailto:contacto@linaresmodulares.com">contacto@linaresmodulares.com</a>
            </span>
            <span>
              <strong>Ubicación:</strong> Bogotá, Colombia
            </span>
          </div>
          <div className="map-wrapper" aria-label="Mapa de Linares Modulares en Bogotá">
            <iframe
              title="Mapa Linares Modulares"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9075710514245!2d-74.1019719!3d4.6286383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c2b1e466d7%3A0x9f0a219c2f478255!2sBogotá!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Nombre empresa*
              <input
                type="text"
                value={formValues.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Ej: Grupo Andino"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Contacto*
              <input
                type="text"
                value={formValues.contact}
                onChange={(e) => handleChange("contact", e.target.value)}
                placeholder="Nombre y cargo"
              />
            </label>
          </div>
          <div className="form-row two-cols">
            <label>
              Teléfono
              <input
                type="tel"
                value={formValues.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Celular o fijo"
              />
            </label>
            <label>
              Email corporativo*
              <input
                type="email"
                value={formValues.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="correo@empresa.com"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Mensaje*
              <textarea
                rows="4"
                value={formValues.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Cuéntanos metraje, fechas y necesidades de mobiliario"
              />
            </label>
          </div>
          {formError && <p className="form-error">{formError}</p>}
          {formStatus === "success" && <p className="form-success">¡Recibimos tu mensaje! Te contactaremos muy pronto.</p>}
          <button className="btn primary" type="submit" disabled={formStatus === "loading"}>
            {formStatus === "loading" ? "Enviando..." : "Solicitar diagnóstico gratuito"}
          </button>
          <p className="form-note">Respuesta en menos de 24 horas hábiles.</p>
        </form>
      </section>
    </div>
  );
};
