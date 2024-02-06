//!CONTEXTO
import { useContext } from "react";
import { Context } from "../components/Context";
import { Header } from "../components/Header";
import { Principal } from "../components/Principal";
import { Proyects } from "../components/Proyects";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { AboutUs } from "../components/AboutUs";
import { WhoUs } from "../components/WhoUs";
import { Carrousel } from "../components/Carrousel";

export const Home = () => {
  const contexto = useContext(Context);

  return (
    <>
      <Header />
      <Principal />
      <Services contexto={contexto} />
      <WhoUs />
      <Carrousel />
      <Proyects />
      <AboutUs />
      <Footer />
    </>
  );
};
