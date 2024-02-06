//!Componente Dinamico
import { useContext, useState, useEffect } from "react";
import { Context } from "../components/Context";

export const InicioService = (props) => {
  let servicios = useContext(Context);
  let [datos, setDatos] = useState([]);

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
  }, []);

  return (
    <>
      <div id="Contenedor-top-service">
        <div id="Text-contenedor-top-service">
          <h1 className="big-title2">{datos.titleText}</h1>

          <p className="big-title">
            Instalación de mobiliario empresarial <br />
            Profesional{" "}
          </p>
        </div>

        <div id="imgane-contenedor-top-service">
          <img id="mancha-service-unidad" src="../src/img/ENDBACK.png" alt="Mancha" />

          <img id="principalImgService" src={datos.URLIMAGE} alt="404" />
        </div>
      </div>
    </>
  );
};
