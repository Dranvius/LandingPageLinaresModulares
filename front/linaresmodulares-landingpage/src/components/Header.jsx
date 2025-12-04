import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../img/logoB.png";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#propuesta" },
  { label: "Portafolio", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.hash === href.replace("/", "");
    if (href.includes("servicios") && location.pathname.startsWith("/servicios")) return true;
    return false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [leftNav, rightNav] = useMemo(() => {
    const left = navItems.slice(0, 2);
    const right = navItems.slice(2);
    return [left, right];
  }, []);

  return (
    <header className={`lm-header apart-header ${menuOpen ? "is-open" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <div className="lm-header__content">
        <nav className="apart-nav apart-nav--left" aria-label="Navegación principal izquierda">
          {leftNav.map((item) => (
            <a
              key={item.href}
              className={`apart-link ${isActive(item.href) ? "is-active" : ""}`}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="lm-header__brand apart-brand">
        <NavLink to="/" aria-label="Linares Modulares">
          <img src={logo} alt="Linares Modulares" className="lm-header__logo" />
          <span className="apart-word">ment.Q</span>
        </NavLink>
      </div>

        <nav className="apart-nav apart-nav--right" aria-label="Navegación principal derecha">
          {rightNav.map((item) => (
            <a
              key={item.href}
              className={`apart-link ${isActive(item.href) ? "is-active" : ""}`}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="lm-header__toggle"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={toggleMenu}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav id="main-nav" className="apart-nav apart-nav--mobile" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={`apart-link ${isActive(item.href) ? "is-active" : ""}`}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-hidden={!menuOpen}
        className={`nav-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
}
