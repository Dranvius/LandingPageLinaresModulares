import { Header } from "../components/Header";
import { InicioService } from "../components/InicioService";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
import { ServicesDescripction } from "../components/ServicesDescripction";

export function Service() {
  let param = useParams();

  return (
    <>
      <Header />
      <InicioService servicio={param} />
      <ServicesDescripction servicio={param} />
      <Footer />
    </>
  );
}
