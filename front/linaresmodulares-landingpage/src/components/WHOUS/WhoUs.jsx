import {
  faUsersGear,
  faHandHoldingDollar,
  faClock,
  faCheckDouble,
  faGlobe,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./whous.css";

export function WhoUs() {
  return (
    <>
      <div id="containerUs">
        <div id="whySelUs">
          <div id="textoQuienes">
            {
            /*
            ^TEXTO QUIENES SOMOS
            */
            }

            <div className="text-quienesSomos">
              <h1 className="big-title2"> ¿Por Qué Elegirnos?</h1>
              <hr id="center-hr" />
              <p>
                Nuestra especialidad es brindar soluciones a nuetros clientes
                sobre su mobiliario empresarial,tanto en el montaje
                mantenimiento o reparacion.Valoramos la importancia de crear
                espacios que fomenten la productividad y el bienestar.
              </p>
            </div>
          </div>
          {
          /*
          ^ICONOS PORQUE PREFERIRNOS ICONOS
          */
          }
          <div className="ico-why-select">
            {/**Icono  de servicio personalizado **/}
            <div className="icoselect">
              <FontAwesomeIcon className="iconWs" icon={faUsersGear} />
              <p>
                <strong>Personalizado</strong>
              </p>
              <hr className="center-hr" />
            </div>

            {/*Icono economia*/}
            <div className="icoselect">
              <FontAwesomeIcon className="iconWs" icon={faHandHoldingDollar} />

              <strong><p>Economía</p></strong>
              <hr className="center-hr" />
            </div>

            {/*Icono rapidez*/}
            <div className="icoselect">
              <FontAwesomeIcon className="iconWs" icon={faClock} />
              <p>
                <strong><p>Rapidez</p></strong>
              </p>
              <hr className="center-hr" />
            </div>

            {/*Icono calidad*/}
            <div className="icoselect">
              <FontAwesomeIcon className="iconWs" icon={faCheckDouble} />

              <strong><p>Calidad</p></strong>
              <hr className="center-hr" />
            </div>

            {/*Icono Funcionalidad*/}
            <div className="icoselect">
              <FontAwesomeIcon className="iconWs" icon={faGlobe} />
              <strong><p>Funcionalidad</p></strong>
              <hr className="center-hr" />
            </div>

            {/*Icono de revitalizacion*/}
            <div className="icoselect">
              <FontAwesomeIcon className="iconWs" icon={faRecycle} />
              <strong><p>Sostenibilidad</p></strong>
              <hr className="center-hr" />
            </div>
          </div>
        </div>

        {/*imagenes de vectores*/}
      </div>
    </>
  );
}
