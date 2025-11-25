import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { servicesMap, servicesList } from "../data/services";

const process = [
  "Diagnóstico gratuito con visita o videollamada en Bogotá",
  "Propuesta con renders y cronograma de instalación",
  "Fabricación, logística y montaje coordinado",
  "Ajustes finales, capacitación y postventa",
];

const serviceFaqs = {
  "diseno-oficinas-corporativas": [
    {
      q: "¿Entregan renders y planos para aprobación?",
      a: "Sí, incluimos renders 3D, moodboard de acabados y planos listos para comité de compras.",
    },
    {
      q: "¿Cómo optimizan por productividad?",
      a: "Diseñamos según flujos de trabajo, áreas silenciosas y colaborativas con métricas de ocupación.",
    },
  ],
  "adecuacion-de-oficinas": [
    { q: "¿Coordinan obra liviana?", a: "Nos encargamos de cielo raso, pisos, cableado y mobiliario en un solo frente." },
    {
      q: "¿Cómo minimizan interrupciones?",
      a: "Planificamos por fases y horarios para no frenar operaciones; reportamos avances diarios.",
    },
  ],
  "consultoria-ergonomia": [
    { q: "¿Qué certificaciones manejan?", a: "Sillas y accesorios con normas ANSI/BIFMA y recomendaciones de postura." },
    {
      q: "¿Incluye capacitación?",
      a: "Sí, realizamos charlas cortas y guías prácticas para el equipo." },
  ],
  "mantenimiento-mobiliario": [
    {
      q: "¿Pueden atender urgencias?",
      a: "Establecemos SLA y visitas programadas en Bogotá para garantizar continuidad operativa.",
    },
    { q: "¿Actualizan módulos existentes?", a: "Reacondicionamos superficies, herrajes y archivos sin reemplazar toda la estación." },
  ],
  "proyectos-llave-en-mano": [
    {
      q: "¿Qué incluye el servicio llave en mano?",
      a: "Diseño, fabricación, instalación, audiovisuales básicos y postventa en 15 días calendario.",
    },
    { q: "¿Trabajan con cronogramas corporativos?", a: "Sí, alineamos hitos con dirección de proyectos y compras." },
  ],
  "puestos-de-trabajo-modulares": [
    { q: "¿Se pueden ampliar los puestos luego?", a: "El sistema modular permite agregar estaciones sin cambiar el diseño base." },
    { q: "¿Incluye divisiones acústicas?", a: "Ofrecemos paneles fonoabsorbentes y privacidad según cada área." },
  ],
  "sillas-oficina": [
    { q: "¿Las sillas están certificadas?", a: "Sí, contamos con estándares ANSI/BIFMA y soportes garantizados." },
    { q: "¿Ofrecen mantenimiento?", a: "Incluimos ajustes y limpieza técnica para extender la vida útil." },
  ],
  "archivadores-corporativos": [
    { q: "¿El archivo rodante es seguro?", a: "Instalamos cerraduras y anclajes para proteger la documentación." },
    { q: "¿Pueden aumentar la capacidad?", a: "Diseñamos módulos adicionales sin reemplazar toda la línea." },
  ],
  "estanteria-oficina": [
    { q: "¿Resiste peso?", a: "Calculamos la carga por nivel y usamos refuerzos según el uso." },
    { q: "¿Se integra con lockers?", a: "Sí, configuramos bloques mixtos para equipos híbridos." },
  ],
  "tableros-acrilicos": [
    { q: "¿Instalan los tableros?", a: "Incluimos fijación, nivelación y kit de accesorios." },
    { q: "¿Hay opciones móviles?", a: "Sí, tableros doble cara con ruedas y frenos para training." },
  ],
};

export function Service() {
  const { slug } = useParams();
  const [activeSlide, setActiveSlide] = useState(0);

  const service = useMemo(() => {
    return servicesMap[slug] || servicesMap["sillas-oficina"];
  }, [slug]);

  const relatedServices = useMemo(() => {
    return servicesList.filter((item) => item.slug !== slug).slice(0, 3);
  }, [slug]);

  useEffect(() => {
    setActiveSlide(0);
  }, [slug]);

  useEffect(() => {
    document.title = `${service.title} | Linares Modulares Bogotá`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = service.metaDescription;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      areaServed: "Bogotá",
      provider: {
        "@type": "LocalBusiness",
        name: "Linares Modulares",
        telephone: "+573193014722",
      },
      description: service.metaDescription,
      offers: {
        "@type": "Offer",
        areaServed: "Bogotá",
        availability: "https://schema.org/InStock",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [service]);

  return (
    <div className="landing service-page">
      <Header />

      <section className="hero service-hero hero-overlay">
        <div className="hero-copy">
          <div className="badges">
            <span className="badge">Bogotá y alrededores</span>
            <span className="badge">Especialistas corporativos</span>
            <span className="badge">CTA listo para Ads</span>
          </div>
          <p className="breadcrumb">Servicio / {service.title}</p>
          <h1>{service.heroTitle || service.title}</h1>
          <p className="lead">{service.heroSubtitle || service.metaDescription}</p>
          <div className="tag-list">
            {service.focusLines?.map((line) => (
              <span className="tag" key={line}>
                {line}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn primary" href="#contacto" data-ads-conversion="service-cta">
              Solicitar diagnóstico
            </a>
            <a className="btn secondary" href="/">
              Volver al inicio
            </a>
          </div>
        </div>
        <div className="hero-figure" aria-hidden="true">
          <img src={service.heroImage} alt={service.title} loading="lazy" />
        </div>
      </section>

      <section className="section" id="entregables">
        <h2>Lo que incluye este servicio</h2>
        <p className="lead">Entregables claros, listos para aprobación de compras y dirección.</p>
        <div className="grid-split">
          <div className="cards">
            <article className="card">
              <h3>Beneficios principales</h3>
              <ul>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>Entregables</h3>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="highlight">
            <h3>Enfoque Bogotá</h3>
            <p>Coordinamos visitas, planos y montaje de acuerdo con cronogramas corporativos locales.</p>
            <ul>
              <li>Visita técnica sin costo</li>
              <li>Reportes diarios y actas de entrega</li>
              <li>Integración de marketing: etiquetas de conversión y SEO local</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section carousel-block" id="productos">
        <div className="section-header">
          <p className="eyebrow">Productos destacados</p>
          <h2>Catálogo recomendado para {service.title}</h2>
          <p className="lead">
            Seleccionamos las referencias con mayor conversión para este servicio, listas para SEO y llamados a la acción.
          </p>
        </div>
        <div className="carousel">
          <button
            className="carousel-btn"
            aria-label="Producto anterior"
            onClick={() => setActiveSlide((prev) => (prev === 0 ? (service.featuredProducts?.length || 1) - 1 : prev - 1))}
          >
            ‹
          </button>
          {service.featuredProducts?.length ? (
            <div className="carousel-card" key={service.featuredProducts[activeSlide]?.name}>
              <div className="carousel-media">
                <img
                  src={service.featuredProducts[activeSlide].image}
                  alt={service.featuredProducts[activeSlide].name}
                  loading="lazy"
                />
              </div>
              <div className="carousel-body">
                <p className="card-eyebrow">{service.featuredProducts[activeSlide].keywords.join(" · ")}</p>
                <h3>{service.featuredProducts[activeSlide].name}</h3>
                <p>{service.featuredProducts[activeSlide].description}</p>
                <div className="tag-list">
                  {service.keywords?.map((kw) => (
                    <span className="tag" key={kw}>
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="hero-actions">
                  <a className="btn primary" href="#contacto" data-ads-conversion="producto-cta">
                    Cotizar este producto
                  </a>
                  <a className="btn ghost" href="#seo">
                    Ver optimización SEO
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          <button
            className="carousel-btn"
            aria-label="Producto siguiente"
            onClick={() =>
              setActiveSlide((prev) =>
                prev === (service.featuredProducts?.length || 1) - 1 ? 0 : prev + 1
              )
            }
          >
            ›
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Proceso rápido y medible</h2>
        <p className="lead">Seguimos pasos claros con responsables y fechas para acelerar aprobación y montaje.</p>
        <div className="process">
          {process.map((step, index) => (
            <div className="process-step" key={step}>
              <strong>Paso {index + 1}</strong>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="seo">
        <h2>SEO y pauta lista para activar</h2>
        <p className="lead">Keywords priorizadas para Google Ads y posicionamiento orgánico en Bogotá.</p>
        <div className="cards">
          {service.keywords.map((keyword) => (
            <article className="card" key={keyword}>
              <h3>{keyword}</h3>
              <p>Optimizado con CTAs de llamada y WhatsApp para medir conversiones.</p>
            </article>
          ))}
          <article className="card">
            <h3>Contenido recomendado</h3>
            <ul>
              <li>Casos de éxito con fotos profesionales</li>
              <li>FAQs sobre tiempos y garantías</li>
              <li>Checklist descargable de requerimientos</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="faq">
        <h2>Preguntas frecuentes del servicio</h2>
        <p className="lead">Información rápida para aprobar el proyecto y activar la instalación.</p>
        <div className="faq-grid">
          {(serviceFaqs[slug] || serviceFaqs["diseno-oficinas-corporativas"]).map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Servicios relacionados</h2>
        <p className="lead">Complementa tu proyecto con acompañamiento integral de mobiliario y adecuación.</p>
        <div className="cards">
          {relatedServices.map((item) => (
            <article className="card" key={item.slug}>
              <h3>{item.title}</h3>
              <p>{item.subtitle || item.description}</p>
              <div className="meta-row">
                <span className="tag">Bogotá</span>
                <a className="text-link" href={`/servicios/${item.slug}`}>
                  Ver detalle
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="cta-panel">
          <div>
            <h2>Agenda tu diagnóstico gratuito</h2>
            <p>Coordinamos visita o videollamada y dejamos el formulario listo para Google Ads.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <strong>WhatsApp inmediato</strong>
              <p>
                <a href="https://wa.me/573193014722" target="_blank" rel="noreferrer" data-ads-conversion="whatsapp">
                  +57 319 301 4722
                </a>
              </p>
            </div>
            <div className="contact-card">
              <strong>Teléfono</strong>
              <p>
                <a href="tel:+573193014722">+57 319 301 4722</a>
              </p>
            </div>
            <div className="contact-card">
              <strong>Email</strong>
              <p>
                <a href="mailto:contacto@linaresmodulares.com">contacto@linaresmodulares.com</a>
              </p>
            </div>
            <div className="contact-card">
              <strong>Entrega de propuesta</strong>
              <p>Layout + presupuesto en 24 horas con cronograma y alcance definidos.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-note">
        Linares Modulares: puestos modulares, sillas ergonómicas, coworking, salas de juntas y archivo rodante. Atendemos Bogotá y alrededores.
      </div>
    </div>
  );
}

