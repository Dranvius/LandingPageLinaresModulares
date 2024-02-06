import { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";

export function ServicesDescripction(props) {
  const servicios = useContext(Context);
  const [datos, setDatos] = useState([]);

  function establecerDatos(servicio) {
    switch (servicio) {
      case "Construcción y arquitectura empresarial":
        setDatos(servicios.serviciosRealizados[0]);
        break;
      case "Diseño e instalación de oficinas modulares":
        setDatos(servicios.serviciosRealizados[1]);
        break;
      case "Instalación de sistemas CCTV":
        setDatos(servicios.serviciosRealizados[2]);
        break;
      case "Trabajos de obra civil":
        setDatos(servicios.serviciosRealizados[3]);
        break;
      case "Mantenimiento correctivo y preventivo de sillas de oficina":
        setDatos(servicios.serviciosRealizados[4]);
        break;
      case "Instalación y mantenimineto de archivos rodantes":
        setDatos(servicios.serviciosRealizados[5]);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    establecerDatos(props.servicio.servicio);
  }, [props.servicio.servicio]);

  return (
    <>
      <div id="servicio-containerUs">
        <div id="quienesSomos">
          <div id="imagenesQuienes">
            <img
              src="../src/img/Vectorlineas.svg"
              alt="imagen_quien_somos"
              id="linea1"
            />
          </div>

          <img
            src="../src/img/DoorOficce.jpg"
            alt="imagen_quien_somos"
            id="img-whoAreWe"
          />

          <div className="text-quienesSomos">
            <h1 className="big-title2">¿Qué comprende el servicio?</h1>
            {datos && <p>{datos.bodyText}</p>}
          </div>
        </div>

        <div id="quehacemos">
          <div id="imagenesQuehacemos">
            <img
              src="../src/img/Vectorlineas.svg"
              alt="imagen_quien_somos"
              id="linea2"
            />

            <img
              src="../src/img/DesktopOfficce.jpg"
              alt="imagen_quien_somos"
              id="img-whatDoUS"
            />
          </div>

          <div className="text-queHacemos">
            <h1 className="big-title2">¿ Servicios puntuales ?</h1>

            {datos && datos.list && (
              <ul>
                {datos.list.map((valor, key) => (
                  <li key={key}>{valor}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
