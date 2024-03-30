//!CONTEXTO
import { useContext } from "react";
//!Components
import { Context } from "../components/Context";
import { Header } from "../components/Header";
import { Principal } from "../components/Principal";
import { Proyects } from "../components/Proyects";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { AboutUs } from "../components/AboutUs";
// import { WhoUs } from "../components/WhoUs";
import { Carrousel } from "../components/Carrousel";
import {Navbar} from "../components/NAVBAR/Navbar";
import { Topimage } from "../components/TOPIMAGE/Topimage";
import {WhoUs} from "../components/WhoUs/WhoUs";

//!Función que determina el tamañao responsive

export const Home = () => {
  const contexto = useContext(Context);

  return (
    <>
      <Navbar/>
      <Topimage/>
      {/* <Header/> */}
      <WhoUs />
      {/* 
      <Services contexto={contexto} sizeQueries={window.innerWidth}/>
      <Carrousel />
      <Proyects />
      <AboutUs />
      <Footer /> */}
    </>
  );
};


