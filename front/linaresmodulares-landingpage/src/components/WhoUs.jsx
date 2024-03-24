import {
  faUsersGear,
  faHandHoldingDollar,
  faClock,
  faCheckDouble,
  faGlobe,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function WhoUs() {
  return (
    <>
      <div id="containerUs">
        <div id="whySelUs">
          <div id="imagenesQuienes">
            {/*TEXTO QUIENES SOMOS*/}
            <div className="text-quienesSomos">
              <br />
              <h1 className="big-title2"> ¿Por qué elegirnos? </h1>
              <br />
              <hr id="center-hr" />
              <br />
              <br />
              <p>
                Nuestra especialidad es brindar soluciones a nuetros clientes
                sobre su mobiliario empresarial,tanto en el montaje
                mantenimiento o reparacion.Valoramos la importancia de crear
                espacios que fomenten la productividad y el bienestar.
              </p>
              <br />
            </div>

            {/*ICONOS PORQUE PREFERIRNOS*/}
            <div className="ico-why-select">
              {/**Icono  de servicio personalizado **/}
              <div className="icoselect">
                <FontAwesomeIcon className="iconWs" icon={faUsersGear} />
                <br />
                <br />
                <p>
                  <strong>Servicio personalizado</strong>
                </p>
                <hr className="center-hr" />
              </div>

              {/*Icono economia*/}
              <div className="icoselect">
                <FontAwesomeIcon
                  className="iconWs"
                  icon={faHandHoldingDollar}
                />
                <br />
                <br />
                <p>Economía</p>
                <hr className="center-hr" />
              </div>

              {/*Icono rapidez*/}
              <div className="icoselect">
                <FontAwesomeIcon className="iconWs" icon={faClock} />

                <br />
                <br />
                <p>
                  <strong>Rapidez</strong>
                </p>
                <hr className="center-hr" />
              </div>

              {/*Icono calidad*/}
              <div className="icoselect">
                <FontAwesomeIcon className="iconWs" icon={faCheckDouble} />
                <br />
                <br />
                <p>Calidad</p>
                <hr className="center-hr" />
              </div>

              {/*Icono Funcionalidad*/}
              <div className="icoselect">
                <FontAwesomeIcon className="iconWs" icon={faGlobe} />
                <br />
                <br />
                <p>Funcionalidad</p>
                <hr className="center-hr" />
              </div>

              {/*Icono de revitalizacion*/}
              <div className="icoselect">
                <FontAwesomeIcon className="iconWs" icon={faRecycle} />
                <br />
                <br />
                <p>Sostenibilidad</p>
                <hr className="center-hr" />
              </div>
            </div>
          </div>
        </div>

        {/*imagenes de vectores*/}
        

      </div>
    </>
  );
}