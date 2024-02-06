import { Link } from "react-router-dom";

export function Services(props) {
  return (
    <>
      <section id="servicios" className="servicios">
        <h1
          style={{ textAlign: "center", paddingBottom: "3rem" }}
          className="big-title2"
        >
          Nuestros Servicios
          <hr />
        </h1>

        <div className="contenido-seccion">
          {props.contexto.services.map((service, key) => (
            <div className="galeria" key={key}>
              <Link to={`/servicio/${service.title}`}>
                <div className="servicio">
                  <img src={service.url} alt="Error_png" />
                  <p style={{ textAlign: "center" }}>{service.body}</p>
                  <div className="overLay">
                    <h3 style={{ margin: "30px" ,fontSize:'1.35rem'}}>{service.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
