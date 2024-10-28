// LogoCarousel.js
import "./Header.css"; // Archivo CSS que contiene la animación
import Maiz from "../../assets/logo_maiz.png";
import Soja from "../../assets/logo_soja.png";
import Trigo from "../../assets/logo_trigo.png";
import { Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-center">
      <div className="logo-carousel">
        <Nav className="nav">
          <Nav.Link>Empresa</Nav.Link>
          <Nav.Link>Productos</Nav.Link>
          <Nav.Link>Contacto</Nav.Link>
        </Nav>
        <img src={Maiz} alt="Logo Maíz" />
        <img src={Soja} alt="Logo Soja" />
        <img src={Trigo} alt="Logo Trigo" />
      </div>
    </header>
  );
};

export default Header;
