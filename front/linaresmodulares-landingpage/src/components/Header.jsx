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
  return (
    <header className="lm-header">
      <div className="lm-header__brand">
        <NavLink to="/" aria-label="Linares Modulares">
          <img src={logo} alt="Linares Modulares" className="lm-header__logo" />
        </NavLink>
      </div>
      <nav className="lm-header__nav" aria-label="Navegación principal">
        {mainNav.map((item) => (
          <a key={item.href} className="lm-header__link" href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="lm-header__cta" href="#contacto">
          Solicita diagnóstico gratuito
        </a>
      </nav>

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
