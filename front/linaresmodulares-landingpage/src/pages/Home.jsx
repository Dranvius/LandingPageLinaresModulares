import { useEffect, useState } from "react";
import heroImage from "../img/oficcecomplete.jpg";
import modularDesk from "../img/Oficinas_Modulares_12.png";
import coworking from "../img/desk2.jpg";
import meeting from "../img/Oficina5.jpg";
import ergonomic from "../img/deskdarkside.jpg";
import storage from "../img/archivoRodante.jpg";
import { Header } from "../components/Header";
import { servicesList } from "../data/services";

const services = servicesList;

const products = [
  {
    title: "Puestos de trabajo modulares empresariales",
    description:
      "Estaciones colaborativas, individuales y premium que se adaptan al crecimiento de tu equipo con cableado limpio y acústica.",
    image: modularDesk,
    keywords: ["puestos de trabajo modulares", "muebles de oficina Bogotá"],
  },
  {
    title: "Sillas ergonómicas para oficina en Bogotá",
    description: "Sillería certificada con soporte lumbar, ajuste de altura y materiales de alto tráfico para equipos ejecutivos.",
    image: ergonomic,
    keywords: ["sillas ergonómicas para oficina Bogotá", "ergonomía corporativa"],
  },
  {
    title: "Muebles para coworking corporativo",
    description: "Hot desks, lockers y cabinas phone booth que optimizan el espacio y la rotación de usuarios.",
    image: coworking,
    keywords: ["muebles para coworking", "mobiliario empresarial en Bogotá"],
  },
  {
    title: "Salas de juntas ejecutivas premium",
    description: "Mesas a medida con conectividad oculta, sillas directivas y soporte audiovisual listo para reuniones clave.",
    image: meeting,
    keywords: ["salas de juntas ejecutivas", "muebles de oficina Bogotá"],
  },
  {
    title: "Archivadores y almacenamiento corporativo",
    description: "Archivo rodante, bibliotecas y cajoneras modulares para controlar documentos, equipos y suministros.",
    image: storage,
    keywords: ["archivadores corporativos", "almacenamiento oficinas"],
  },
];

const differentiators = [
  { label: "✔ Optimización del espacio", detail: "Layouts modulares que aprovechan cada m² y facilitan el crecimiento." },
  { label: "✔ Ergonomía certificada", detail: "Sillería y accesorios alineados a normativas de salud laboral." },
  { label: "✔ Diseño corporativo moderno", detail: "Materiales premium, acabados sobrios y branding aplicado al mobiliario." },
  { label: "✔ Cumplimiento normativo", detail: "Experiencia en estándares de seguridad y cableado en Bogotá." },
  { label: "✔ Soluciones escalables", detail: "Módulos que se reconfiguran para equipos híbridos y ampliaciones." },
];

const testimonials = [
  {
    name: "Laura Méndez",
    role: "Gerente de Operaciones, Fintech Bogotá",
    quote:
      "Gracias a Linares Modulares optimizamos nuestra oficina y mejoramos el rendimiento del equipo en un 30%. Montaje limpio y en tiempo récord.",
  },
  {
    name: "Andrés Cárdenas",
    role: "Director de Compras, Firma Legal",
    quote:
      "La sala de juntas ejecutiva quedó impecable. El cableado y la conectividad quedaron ocultos y listos para videoconferencias sin fallas.",
  },
];

const projects = [
  {
    title: "Headquarters tech en Zona T",
    description: "Puestos colaborativos, phone booths y salas creativas en 450 m² con entrega en 15 días.",
    image: heroImage,
  },
  {
    title: "Coworking corporativo en Chicó",
    description: "Hot desks, lockers y zonas lounge con mobiliario modular de alto tráfico.",
    image: coworking,
  },
  {
    title: "Sala de juntas ejecutiva",
    description: "Mesa premium a medida con conectividad oculta y sillas directivas de alta ergonomía.",
    image: meeting,
  },
];

const seoTargets = [
  { path: "/mobiliario-empresarial-bogota", keywords: ["mobiliario empresarial en Bogotá", "muebles de oficina Bogotá"] },
  { path: "/puestos-de-trabajo-modulares", keywords: ["puestos de trabajo modulares", "estaciones colaborativas"] },
  { path: "/diseno-de-oficinas-corporativas", keywords: ["diseño de oficinas corporativas Bogotá", "optimización de espacios"] },
  { path: "/sillas-ergonomicas-bogota", keywords: ["sillas ergonómicas para oficina Bogotá", "ergonomía corporativa"] },
  { path: "/adecuacion-de-oficinas", keywords: ["adecuación de oficinas Bogotá", "proyectos llave en mano"] },
];

const steps = [
  "Diagnóstico gratuito con visita o videollamada en Bogotá",
  "Render 3D, layout y propuesta económica optimizada por productividad",
  "Fabricación local, logística y montaje coordinado con tu calendario",
  "Entrega llave en mano, ajustes finales y mantenimiento programado",
];

export const Home = () => {
  const [formValues, setFormValues] = useState({
    company: "",
    contact: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const apiBase =
    import.meta.env.VITE_API_URL?.replace(/\/$/, "") || `${window.location.origin.replace(/\/$/, "")}`;

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

      <section className="hero hero-overlay">
        <div className="hero-text">
          <p className="eyebrow">Especialistas en soluciones corporativas</p>
          <h1>Mobiliario Empresarial en Bogotá para Oficinas Productivas y Modernas</h1>
          <p className="subtitle">
            Transformamos tus espacios de trabajo con soluciones modulares, ergonómicas y corporativas diseñadas para
            aumentar la productividad de tu empresa.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto">
              Cotiza tu proyecto sin compromiso
            </a>
            <a className="btn ghost" href="#contacto">
              Diagnóstico de oficina gratuito
            </a>
          </div>
          <div className="hero-meta">
            <span>+70% de empresas atendidas en Bogotá</span>
            <span>Oficinas listas en 15 días</span>
            <span>Instalación y soporte postventa</span>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <img src={heroImage} alt="Oficina moderna en Bogotá" />
            <div className="hero-card-content">
              <p>Proveedor integral: diseño, fabricación e instalación</p>
              <span>Listo para Google Ads y SEO local</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-header">
          <p className="eyebrow">Servicios premium</p>
          <h2>Soluciones que integran diseño, fabricación e instalación</h2>
          <p className="section-desc">
            Ofrecemos soluciones completas que integran diseño, fabricación, instalación y optimización de espacios para empresas
            que buscan eficiencia, comodidad y una imagen corporativa moderna.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <a key={service.slug} href={`/servicios/${service.slug}`} className="card" itemScope itemType="https://schema.org/Service">
              <div className="card-top">
                <p className="card-eyebrow">
                  {Array.isArray(service.keywords) ? service.keywords.join(" · ") : service.keywords}
                </p>
                <h3 itemProp="name">{service.title}</h3>
                <p className="card-desc" itemProp="description">
                  {service.summary || service.heroSubtitle || service.metaDescription}
                </p>
              </div>
              <div className="card-footer">
                <span className="link">Ver detalles</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section products" id="productos">
        <div className="section-header">
          <p className="eyebrow">Productos estrella</p>
          <h2>Mobiliario empresarial listo para crecer</h2>
          <p className="section-desc">
            Nuestros puestos de trabajo modulares se adaptan al crecimiento de tu empresa, optimizando el espacio y aumentando el rendimiento de tus equipos.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.title} className="product-card" itemScope itemType="https://schema.org/Product">
              <div className="product-image">
                <img src={product.image} alt={product.title} loading="lazy" itemProp="image" />
              </div>
              <div className="product-body">
                <p className="card-eyebrow">{product.keywords.join(" · ")}</p>
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
          <h2>Más que muebles, diseñamos espacios empresariales inteligentes</h2>
          <p className="section-desc">
            Convertimos tus oficinas en lugares productivos, saludables y alineados con la imagen corporativa de tu negocio.
          </p>
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

      <section className="section stats" id="margen">
        <div className="stat-card">
          <h3>Proceso claro y medible</h3>
          <ul>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="stat-card secondary">
          <h3>SEO local y conversiones</h3>
          <ul>
            {seoTargets.map((target) => (
              <li key={target.path}>
                <strong>{target.path}</strong>
                <span>{target.keywords.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section projects" id="proyectos">
        <div className="section-header">
          <p className="eyebrow">Proyectos realizados</p>
          <h2>Empresas que ya confían en Linares Modulares</h2>
          <p className="section-desc">Casos reales con mobiliario modular, ergonomía y montaje express en Bogotá.</p>
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
          <h2>Lo que dicen nuestros clientes corporativos</h2>
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
          <h2>Solicita tu diagnóstico gratuito de oficina</h2>
          <p className="section-desc">Recibe una propuesta personalizada sin costo y acelera tu proyecto corporativo.</p>
          <div className="contact-list">
            <span><strong>Teléfono:</strong> <a href="tel:+573193014722">+57 319 301 4722</a></span>
            <span>
              <strong>Email:</strong> <a href="mailto:contacto@linaresmodulares.com">contacto@linaresmodulares.com</a>
            </span>
            <span><strong>Ubicación:</strong> Bogotá, Colombia</span>
          </div>
          <div className="map-wrapper" aria-label="Mapa de Linares Modulares en Bogotá">
            <iframe
              title="Mapa Linares Modulares"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9075710514245!2d-74.1019719!3d4.6286383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99c2b1e466d7%3A0x9f0a219c2f478255!2sBogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
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
                placeholder="Cuéntanos sobre tu proyecto, metraje, fechas y necesidades de mobiliario"
              />
            </label>
          </div>
          {formError && <p className="form-error">{formError}</p>}
          {formStatus === "success" && <p className="form-success">¡Recibimos tu mensaje! Te contactaremos muy pronto.</p>}
          <button className="btn primary" type="submit" disabled={formStatus === "loading"}>
            {formStatus === "loading" ? "Enviando..." : "Solicitar diagnóstico gratuito"}
          </button>
          <p className="form-note">Recibe una propuesta personalizada sin costo.</p>
        </form>
      </section>
    </div>
  );
};
