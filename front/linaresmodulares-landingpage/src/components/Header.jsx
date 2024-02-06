import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const Header = () => {
  return (
    <>
      <header id="Encabezado">
        <nav id="navBar-container">
          <ul id="navBar">
            <li id="contenedor_flex">
              <img
                id="logo_linares_modulares"
                src="../src/img/logo.png"
                alt="logo_pic_error_404"
              />
              <p id="logo_text">Linares Modulares</p>
            </li>
            <li>
            <img
                  id="navbar-icon"
                  src="..\src\img\icons\navbar\home.svg"
                  alt="logo-comunicate"
                />
              <Link
                className="a"
                activeClass="active"
                to="Contenedor-top"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                inicio
              </Link>
            </li>
            <li>
            <img
                  id="navbar-icon"
                  src="..\src\img\icons\navbar\service.svg"
                  alt="logo-comunicate"
                />
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
            <img
                  id="navbar-icon"
                  src="..\src\img\icons\navbar\how_us.svg"
                  alt="logo-comunicate"
                />
              <Link
                className="a"
                activeClass="active"
                to="quienesSomos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                ¿Quienés somos?
              </Link>
            </li>
            <li>
            <img
                  id="navbar-icon"
                  src="..\src\img\icons\navbar\QUE_HACEMOS.svg"
                  alt="logo-comunicate"
                />
              
              <Link
                className="a"
                activeClass="active"
                to="quehacemos"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                ¿Qué hacemos?
              </Link>
            </li>

            <li>
            <img
                  id="navbar-icon"
                  src="..\src\img\icons\navbar\proyectos_2.svg"
                  alt="logo-comunicate"
                />
              <Link
                className="a"
                activeClass="active"
                to="carrusel"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Proyectos
              </Link>
            </li>
            <li>
            <img
                  id="navbar-icon"
                  src="..\src\img\icons\navbar\cvs-svgrepo-com.svg"
                  alt="logo-comunicate"
                />
              <Link
                className="a"
                activeClass="active"
                to="Proyecto_Container"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Clientes satisfechos
              </Link>
            </li>
            <li id="contenedor_facebook">
              <a id='whatsapp' href="https://www.facebook.com/icon_whatsapp_white.png">
                <img
                  id="facebook"
                  src="../src/img/icons/navbar/icons8-whatsapp.svg"
                  alt="logo-facebook"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
