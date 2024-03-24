import { Carousel, BImg } from "bootstrap-4-react";

export function Carrousel() {
  const first_src = "../src/img/deskside.jpg";
  const second_src = "../src/img/deskdarkside.jpg";
  const third_src = "../src/img/oficcecomplete.jpg";

  return (
    <>
      <div id="container-carusel">


        <img
          src="./src/img/mancha2.png"
          alt="imagen_quien_somos"
          id="mancha2"
        />

        <div id="carrusel">
          <h2 className="big-title2">Nuestros Proyectos</h2>
          <hr />
          <Carousel w="10" h="20" id="carouselExampleCaptions">
            <Carousel.Indicators>
              <Carousel.Indicator
                target="#carouselExampleCaptions"
                to="0"
                active
              />
              <Carousel.Indicator target="#carouselExampleCaptions" to="1" />
              <Carousel.Indicator target="#carouselExampleCaptions" to="2" />
            </Carousel.Indicators>
            <Carousel.Inner>
              <Carousel.Item active>
                <BImg display="block" w="100" src={first_src} />
                <Carousel.Caption display="none md-block">
                  <h5 style={{ color: '#0c1f54' }}>Escritorios para ministerios de educación</h5>
                  <p style={{ color: '#0c1f54' }}>Escritorios adaptados para entornos laborales</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <BImg display="block" w="100" src={second_src} />
                <Carousel.Caption display="none md-block">
                  <h5>Oficinas Modulares para club Militar</h5>
                  <p>Diseño e instalación de oficinas</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <BImg display="block" w="100" src={third_src} />
                <Carousel.Caption display="none md-block">
                  <h5 style={{ color: '#0c1f54' }}>Recepciones y oficinas para hospital simon bolivar</h5>
                  <p style={{ color: '#0c1f54' }}>Servicios economicos de instalación de oficinas</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel.Inner>
            <Carousel.Prev href="#carouselExampleCaptions">
              <Carousel.Prev.Icon />
            </Carousel.Prev>
            <Carousel.Next href="#carouselExampleCaptions">
              <Carousel.Next.Icon />
            </Carousel.Next>
          </Carousel>
        </div>
      </div>
    </>
  );
}
