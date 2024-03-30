import { Link, animateScroll as scroll } from "react-scroll";
import {
  faHouse,
  faGears,
  faHammer,
  faClipboardUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="contenedor">
        <div className="navbar">
          <div className="nav_logo">
            <img
              id="logo_linares_modulares"
              src="../src/img/logoB.png"
              alt="logo_pic_error_404"
            />
            <p>Linares Modulares</p>
          </div>

          <div className={`nav_items ${isOpen && "open"}`}>

            <a href="#" className="items_links">
            <FontAwesomeIcon icon={faHouse} />
              Inicio
            </a>

            <a href="#" className="items_links">
              <FontAwesomeIcon icon={faGears} />
              Servicio
            </a>

            <a href="#" className="items_links">
              <FontAwesomeIcon icon={faHammer} />
              Proyectos
            </a>

            <a href="#" className="items_links">
              <FontAwesomeIcon icon={faClipboardUser} />
              Nosotros
            </a>
          </div>

          <div
            className={`nav_toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* <header id="Encabezado">
        <div id="contenedor_desplegable">
          <nav id="navBar-container">
            <ul id="navBar" className={`nav_items ${isOpen && "open"}`}>
              <li id="contenedor_flex">
                <img
                  id="logo_linares_modulares"
                  src="../src/img/logoB.png"
                  alt="logo_pic_error_404"
                />
                <p id="logo_text">Linares Modulares</p>
              </li>
              <li className="nav_items">
                <FontAwesomeIcon icon={faHouse} />
                <Link
                  className="a"
                  activeClass="active"
                  to="Contenedor-top"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav_items">
                <FontAwesomeIcon icon={faGears} />
                <Link
                  className="a"
                  activeClass="active"
                  to="servicios"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Servicios
                </Link>
              </li>
              <li className="nav_items">
                <FontAwesomeIcon icon={faHammer} />
                <Link
                  className="a"
                  activeClass="active"
                  to="quienesSomos"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav_items">
                <FontAwesomeIcon icon={faClipboardUser} />
                <Link
                  className="a"
                  activeClass="active"
                  to="carrusel"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Nosotros
                </Link>
              </li>
              <div
                className={`nav_toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </ul>
          </nav>
        </div>
      </header> */}
    </>
  );
};
