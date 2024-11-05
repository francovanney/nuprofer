// LogoCarousel.js
import "./header.scss"; // Archivo CSS que contiene la animación
import Maiz from "../../assets/logo_maiz.png";
import Soja from "../../assets/logo_soja.png";
import Trigo from "../../assets/logo_trigo.png";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import AMINOPLUS from "../../assets/logoProductos/AMINOPLUS.png";
import BIOACTIVE from "../../assets/logoProductos/BIOACTIVE.png";
import NUPROACTIVE from "../../assets/logoProductos/NUPROACTIVE.png";
import NUPROSPRAY_SC from "../../assets/logoProductos/NUPROSPRAY_SC.png";
import SPECIALOIL from "../../assets/logoProductos/SPECIALOIL.png";
import SPRAY_OIL from "../../assets/logoProductos/SPRAY_OIL.png";
import SPRAYOIL_M from "../../assets/logoProductos/SPRAYOIL_M.png";
import SPRAYTOP_MEZCLA from "../../assets/logoProductos/SPRAYTOP_MEZCLAS.png";
import SULFAPLUS from "../../assets/logoProductos/SULFAPLUS.png";
import SULFATEC from "../../assets/logoProductos/SULFATEC.png";

const Header = () => {
    const imgWidth = 200; // Tamaño uniforme para todas las imágenes

    return (
        <Container className="page-section">
            <header className="d-flex align-items-center justify-content-center mb-2">
                <div className="logo-carousel-container position-relative">
                    {/* Menú de navegación sobre el carrusel */}
                    <Nav className="nav">
                        <Nav.Link href="/empresa">Empresa</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>

                    {/* Carrusel de imágenes */}
                    <div className="logo-carousel">
                        <img src={Maiz} alt="Logo Maíz" className="carousel-image" />
                        <img src={Soja} alt="Logo Soja" className="carousel-image" />
                        <img src={Trigo} alt="Logo Trigo" className="carousel-image" />
                    </div>
                </div>
            </header>
            <p className="text-center subtitle">
                Investigación y desarrollo por una aplicación eficiente
            </p>

            {/* Sección de productos */}
            <Container className="product-gallery my-4">
                <Row className="row">
                    {[NUPROACTIVE, NUPROSPRAY_SC, SPRAYOIL_M, SPRAY_OIL, SPECIALOIL].map(
                        (product, index) => (
                            <Col
                                key={index}
                                xs={6}
                                md={2}
                                className="d-flex justify-content-center mb-4"
                            >
                                <Image
                                    src={product}
                                    width={imgWidth}
                                    height={imgWidth}
                                    className="product-image"
                                />
                            </Col>
                        )
                    )}
                </Row>
                <Row className="row">
                    {[SPRAYTOP_MEZCLA, SULFAPLUS, SULFATEC, AMINOPLUS, BIOACTIVE].map(
                        (product, index) => (
                            <Col
                                key={index}
                                xs={6}
                                md={2}
                                className="d-flex justify-content-center mb-4"
                            >
                                <Image
                                    src={product}
                                    width={imgWidth}
                                    height={imgWidth}
                                    className="product-image"
                                />
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </Container>
    );
};

export default Header;
