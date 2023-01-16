import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="info-landing">
        <div className="container">
          <h1 className="tituloLanding">
            Maximiza tu Experiencia de Juego con Nuestros Productos.
          </h1>

          <p className="bienvenido">
            ¡Bienvenido a la mejor tienda de juegos del mundo! Aquí en nuestra
            tienda hemos trabajado incansablemente para ofrecerle los mejores
            productos del campo de los juegos. Tenemos todos los accesorios,
            consolas y juegos que necesitas para que tu experiencia de juego sea
            excelente.”
          </p>
          <NavLink to="/home">
            <button class="cssbuttons-io">
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  
                </svg>{" "}
                Productos
              </span>
            </button>
          </NavLink>

          {/* <div className="img-control-container"></div> */}

          {/* LOGIN 👦🏻 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;