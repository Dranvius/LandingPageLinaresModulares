import { NavLink } from "react-router-dom";
import logo from "../img/logoB.png";
import { servicesList } from "../data/services";

const navItems = servicesList
  .filter((service) => service.navLabel)
  .map((service) => ({ label: service.navLabel, slug: service.slug }));

export function Header() {
  return (
    <header className="lm-header">
      <div className="lm-header__brand">
        <NavLink to="/" aria-label="Linares Modulares">
          <img src={logo} alt="Linares Modulares" className="lm-header__logo" />
        </NavLink>
      </div>
      <nav className="lm-header__nav" aria-label="Servicios principales">
        {navItems.map((item) => (
          <NavLink key={item.slug} to={`/servicios/${item.slug}`} className="lm-header__link">
            {item.label}
          </NavLink>
        ))}
        <a className="lm-header__cta" href="#contacto">
          Solicita diagnóstico gratuito
        </a>
      </nav>
    </header>
  );
}
