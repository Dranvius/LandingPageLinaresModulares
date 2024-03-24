import { Link, animateScroll as scroll } from "react-scroll";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  faHouse,  
  faGears,
  faHammer,
  faClipboardUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Header = () => {
  return (
    <>
      <header id="Encabezado">
        <div id="contenedor_desplegable">
          <nav id="navBar-container">
            <ul id="navBar">
              <li id="contenedor_flex">
                <img
                  id="logo_linares_modulares"
                  src="../src/img/logoB.png"
                  alt="logo_pic_error_404"
                />
                <p id="logo_text">Linares Modulares</p>
              </li>
              <li>

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
              <li>
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
              <li>
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
              <li>
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
            </ul>
          </nav>
        </div>
      </header>
      <div className="container-body">
        <ParallaxBanner
          layers={[
            { image: "../src/img/oficina_background.jpg", speed: 20 },
            {
              speed: 20,
              children: (
                <div className="">
                  <h1 className="text">INSTALACIÓN DE OFICCINAS</h1>
                </div>
              ),
            },
          ]}
          className="bg-container"
        >
          <div className="bg-container">
            <h1 className="">Instalación Empresarial</h1>
            <h5 className="">Solicita asesoría</h5>
          </div>
          <div className="bg-container">
            <button id="buttom_parte_top">
            <img
                    id="facebook"
                    src="../src/img/icons/navbar/icons8-whatsapp.svg"
                    alt="logo-facebook"
                  />
            </button>
          </div>

        </ParallaxBanner>
        <img src="../src/img/oficce.jpg" alt="error_pic" id="principalImgTopImage" />
      </div>
    </>
  );
};
