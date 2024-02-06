export function WhoUs() {
  return (
    <>
      <div id="containerUs">
        <div id="quienesSomos">
          <div id="imagenesQuienes">
          <img
              src="./src/img/Vectorlineas.svg"
              alt="imagen_quien_somos"
              id="linea2"
            />
          </div>

          <img
            src="./src/img/DoorOficce.jpg"
            alt="imagen_quien_somos"
            id="img-whoAreWe"
          />

          {/*Posiblemnete hay que cambiarlo*/}

          <div className="text-quienesSomos">
            <h1 className="big-title2">¿ Quienes Somos ?</h1>
            <hr />
            <p>
              Somos LM una empresa dedicada a brindar soluciones de mobiliario
              empresarial de calidad para satisfacer las necesidades de nuestros
              clientes. Nuestro equipo de profesionales altamente capacitados
              está comprometido en ofrecerte opciones de mobiliario funcionales
              y estéticas que se adapten a tu entorno de trabajo. Valoramos la
              importancia de crear espacios que fomenten la productividad y el
              bienestar de tu equipo. Permítenos colaborar contigo para
              encontrar las mejores soluciones que se ajusten a tus
              requerimientos y crear un entorno laboral cómodo y eficiente.
            </p>
          </div>
        </div>

        <div id="quehacemos">
          <div id="imagenesQuehacemos">
            <img
              src="./src/img/Vectorlineas.svg"
              alt="imagen_quien_somos"
              id="linea2"
            />

            <img
              src="./src/img/DesktopOfficce.jpg"
              alt="imagen_quien_somos"
              id="img-whatDoUS"
            />
          </div>

          {/*Posiblemnete hay que cambiarlo*/}

          <div className="text-queHacemos">
            <h1 className="big-title2">¿ Qué realizamos ?</h1>
            <hr/>
            <p>
              En LM nos especializamos en ofrecer servicios de mobiliario
              empresarial que se adaptan a tus necesidades específicas. Nuestro
              equipo de profesionales altamente capacitados se encarga de
              proporcionarte soluciones de diseño y mobiliario de alta calidad
              para optimizar tus espacios de trabajo. Nos enorgullece ofrecer
              una amplia gama de productos ergonómicos y funcionales, desde
              sillas y escritorios hasta sistemas de almacenamiento y áreas de
              colaboración. Trabajamos estrechamente contigo para asegurarnos de
              que obtengas los resultados deseados y creemos espacios de trabajo
              que mejoren la productividad y el bienestar de tus empleados
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
