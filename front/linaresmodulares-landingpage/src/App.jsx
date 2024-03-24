import { Home } from "./pages/Home.jsx";
import "./stylies/styles.css";
//!ESTILOS NAVBAR
import "./stylies/NAVBAR_MENU.css";
//!ESTILOS BOTON
import "./stylies/BUTTOM.css";
//!ESTILOS PART_TOP
import "./stylies/TOP_PART.css";
//!WHO US
import "./stylies/who_us.css";
//!WHO US
import "./stylies/FOOTER.css";
//!Formulario
import "./stylies/FORMULARIO.css";
//!Carrousel
import "./stylies/Carrousel.css";
//!Service_Linares_Modulares
import "./stylies/SERVICE_LINARES_MODULARES.css";
//!SERVICIOS
import "./stylies/SERVICIOS.css";
//!Clientes satisfechos
import "./stylies/clientes_satisfechos.css";
//!TOP PART
import "./stylies/TOP_PART.css";
//DEFAULT
import "./stylies/styles.css";


//!Pagina dinamica para cada servicio
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Service } from "./pages/Service.jsx";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicio/:servicio" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
