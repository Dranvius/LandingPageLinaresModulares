import { CardProyect } from "./CardProyect";
import { useContext } from "react";
import { Context } from "./Context.jsx";

export const Proyects = () => {
  const contexto = useContext(Context);

  return (
    <>
      <div id="Proyecto_Container">
        <div id="top_proyects">
          <h2 className="big-title2">Clientes satisfechos</h2>
          <hr />
          <div id="container-logos">
            <ul id="list-logos">
              <li>
                <img
                  src="../src/img/ClubMilitar.png"
                  alt="err"
                  style={{ height: "5rem" }}
                />
                <p>Club Militar</p>
              </li>
              <li>
                <img
                  src="../src/img/logo-cpalerm.png"
                  alt="err"
                  style={{ width: "7rem" }}
                />
                <p>Clinica palermo</p>
              </li>
              <li>
                <img
                  src="../src/img/HospitalSimonBolivar.svg"
                  alt="err"
                  style={{ height: "5rem", width: "5rem" }}
                />
                <p>Hospital simón bolívar</p>
              </li>
              <li>
                <img
                  src="../src/img/cesap.png"
                  alt="err"
                  style={{ width: "13rem" }}
                />
                <p>Centro social de agentes y patrulleros</p>
              </li>
              <li>
                <img
                  src="../src/img/educacion.webp"
                  alt="err"
                  style={{ width: "13rem", marginTop: "2rem" }}
                />
                <p>Centro social de agentes y patrulleros</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
