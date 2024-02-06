import { Home } from "./pages/Home.jsx";
import "./stylies/styles.css";
//!ESTILOS NAVBAR
import "./stylies/NAVBAR_MENU.css";
//!ESTILOS NAVBAR
import "./stylies/BUTTOM.css";
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
