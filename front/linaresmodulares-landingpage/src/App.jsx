import "./App.css";
import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Service } from "./pages/Service.jsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:slug" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}
