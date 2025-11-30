import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logoB.png";
import { servicesList } from "../data/services";

const navItems = servicesList
  .filter((service) => service.navLabel)
  .map((service) => ({ label: service.navLabel, slug: service.slug }));

const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Mobiliario Empresarial", href: "/#productos" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`lm-header ${scrolled ? "lm-header--scrolled" : ""}`}>
      <div className="lm-header__top">
        <p>Proveedor integral de mobiliario empresarial en Bogotá</p>
        <div className="lm-header__top-actions">
          <a href="tel:+573193014722">+57 319 301 4722</a>
          <a href="mailto:contacto@linaresmodulares.com">contacto@linaresmodulares.com</a>
          <a href="#contacto" className="text-link">
            Agenda tu diagnóstico
          </a>
        </div>
      </div>

      <div className="lm-header__bar">
        <div className="lm-header__brand">
          <NavLink to="/" aria-label="Linares Modulares">
            <img src={logo} alt="Linares Modulares" className="lm-header__logo" />
          </NavLink>
          <span className="lm-header__tagline">Diseño • Fabricación • Instalación</span>
        </div>

        <button
          className="lm-header__toggle"
          aria-label="Abrir o cerrar menú"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`lm-header__nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegación principal">
          {mainNav.map((item) => (
            <a
              key={item.href}
              className="lm-header__link"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="lm-header__cta" href="#contacto" onClick={() => setMenuOpen(false)}>
            Solicita diagnóstico gratuito
          </a>
        </nav>
      </div>

      <div className="lm-header__subnav" aria-label="Servicios destacados">
        {navItems.map((item) => (
          <NavLink key={item.slug} to={`/servicios/${item.slug}`} className="lm-header__pill">
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
