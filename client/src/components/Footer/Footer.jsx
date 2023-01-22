import React from 'react';
import './Footer.css';
import comprarSinM from "../Assets/comprarSinM.svg"
import venderSinP from "../Assets/venderSinP.svg"
import Contactos from "../Assets/Contactos.svg"
import logoOriginal1 from "../Assets/logoOriginal1.svg"


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">

        <div>
          <h3></h3>
          <img src={logoOriginal1} alt="" />
        </div>

      <div className='contenedores'>
        {/* <img src={comprarSinM} title="compra sin problema" className="fotoComprar" /> */}
        <h2 className="titulo2">Compra sin moverte</h2>
        {/* <p className="parrafo1 p1">Encuentra lo que necesitas, y coordina el pago y la entrega con el vendedor. Es fácil y rápido. ¡Todos podemos hacerlo!</p> */}
        <a href="/home" className="link1">Tu perfil</a>
        <a href="/home" className="link1">Productos</a>
 
      </div>
      {/*  */}
      <div className='conocenos'>
        {/* <img src={Contactos} title="Contactos" className="fotoContacto" /> */}
        <h2 className="titulo2">Conocenos</h2>
        {/* <p className="parrafo1 p2">¡Dale un vistazo a los perfiles de Linkedin y GitHub!</p> */}
        <a href="/contacto" className="link1">Contacto</a>
        <a href="/contacto" className="link1">Sobre Nosotros</a>
        <a href="/contacto" className="link1">GitHub</a>
        
      </div>
      {/*  */}
      
    </footer>
    );
  }
}

export default Footer;




