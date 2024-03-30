//!Responsive Function 
// import {sizeCondition} from "../src/responsive/functions.js"; 
// sizeCondition(window.innerWidth);

//!Componente principal
import { Home } from "./pages/Home.jsx";
//!Estilos generales
// import "./stylies/styles.css";
// //!ESTILOS NAVBAR
// import (`./stylies/dinamic_css/nav_bar_css/${sizeCondition(window.innerWidth)}.css`);
// //!ESTILOS BOTON
// import "./stylies/BUTTOM.css";
// //!ESTILOS PART_TOP
// import "./stylies/TOP_PART.css";
// //!WHO US
import "./stylies/who_us.css";
// //!FOOTER
// import (`./stylies/dinamic_css/footer_css/${sizeCondition(window.innerWidth)}.css`);
// //!Formulario
// import "./stylies/FORMULARIO.css";
// //!Carrousel
// import (`./stylies/dinamic_css/carrousel_part_css/${sizeCondition(window.innerWidth)}.css`);
// // //!Service_Linares_Modulares
// // import "./stylies/SERVICE_LINARES_MODULARES.css";
// //!SERVICIOS
// import "./stylies/SERVICIOS.css";
// //!Clientes satisfechos
// import "./stylies/clientes_satisfechos.css";
// //!TOP PART
// import "./stylies/TOP_PART.css";


//!Pagina dinamica para cada servicio
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Service } from "./pages/Service.jsx";

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/servicio/:servicio" element={<Service/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
