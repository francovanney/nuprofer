// LogoCarousel.js
import "./header.scss"; // Archivo CSS que contiene la animación
import Maiz from "../../assets/logo_maiz.png";
import Soja from "../../assets/logo_soja.png";
import Trigo from "../../assets/logo_trigo.png";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import AMINOPLUS from "../../assets/logoMiniaturas/AMINOPLUS.png";
import BIOACTIVE from "../../assets/logoMiniaturas/BIOACTIVE.png";
import NUPROACTIVE from "../../assets/logoMiniaturas/NUPR0ACTIVE.png";
import NUPROSPRAY_SC from "../../assets/logoMiniaturas/NUPROSPRAY.png";
import SPECIALOIL from "../../assets/logoMiniaturas/SPECIALOIL.png";
import SPRAY_OIL from "../../assets/logoMiniaturas/SPRAY_OIL.png";
import SPRAYOIL_M from "../../assets/logoMiniaturas/SPRAYOIL_M.png";
import SPRAYTOP_MEZCLA from "../../assets/logoMiniaturas/SPRAYTOP_MEZCLAS.png";
import SULFAPLUS from "../../assets/logoMiniaturas/SULFAPLUS.png";
import SULFATEC from "../../assets/logoMiniaturas/SULFATEC.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const imgWidth = 200; // Tamaño uniforme para todas las imágenes
    const [showEmpresaInfo, setShowEmpresaInfo] = useState(false);

    const handleNavigateToContact = () => {
        navigate("/contacto"); // Usamos navigate() para ir a /contacto
    };

    const handleEmpresaClick = () => {
        setShowEmpresaInfo(!showEmpresaInfo);
    };

    const handleProductosClick = () => {
        navigate("/");
        setShowEmpresaInfo(false);
    };

    const handleContactoClick = () => {
        handleNavigateToContact();
        setShowEmpresaInfo(false);
    };

    const isSmallScreen = useMediaQuery({ query: "(min-width: 1000px)" });

    return (
        <Container className="page-section">
            <header className="d-flex align-items-center justify-content-center mx-2 mt-5">
                <Container className="logo-carousel-container">
                    {/* Menú de navegación sobre el carrusel en pantallas grandes */}
                    {!isSmallScreen && (
                        <Nav className="nav">
                            <Nav.Link
                                as={"button"}
                                className="text-black"
                                onClick={handleEmpresaClick}
                            >
                                Empresa
                            </Nav.Link>
                            <Nav.Link
                                as={"button"}
                                className="text-black"
                                onClick={handleProductosClick}
                            >
                                Productos
                            </Nav.Link>
                            <Nav.Link
                                className="text-black"
                                as={"button"}
                                onClick={handleContactoClick}
                            >
                                Contacto
                            </Nav.Link>
                        </Nav>
                    )}

                    {/* Carrusel de imágenes */}
                    <div className="logo-carousel">
                        <img src={Maiz} alt="Logo Maíz" className="carousel-image" />
                        <img src={Soja} alt="Logo Soja" className="carousel-image" />
                        <img src={Trigo} alt="Logo Trigo" className="carousel-image" />
                    </div>

                    {/* Menú de navegación debajo del carrusel en pantallas pequeñas */}
                    {isSmallScreen && (
                        <Nav className="nav-small">
                            <Nav.Link
                                as={"button"}
                                className="text-black"
                                onClick={handleEmpresaClick}
                            >
                                Empresa
                            </Nav.Link>
                            <Nav.Link
                                as={"button"}
                                className="text-black"
                                onClick={handleProductosClick}
                            >
                                Productos
                            </Nav.Link>
                            <Nav.Link
                                className="text-black"
                                as={"button"}
                                onClick={handleContactoClick}
                            >
                                Contacto
                            </Nav.Link>
                        </Nav>
                    )}
                </Container>
            </header>
            {showEmpresaInfo && (
                <>
                    <Container className="d-flex justify-content-center">
                        <div className="empresa mb-4 ">
                            Desde el año 2005 <strong>Nuprofer</strong> presenta una
                            calificada línea de productos con máximos niveles de calidad y
                            rendimiento, respondiendo a los mayores lineamientos que rigen en
                            materia de seguridad, salud y medio ambiente. Sus marcas y
                            productos acompañan la continua dinámica que la innovación del
                            campo argentino genera temporada tras temporada.{" "}
                            <strong>Nuprofer</strong> inició su actividad en la región más
                            significativa de la pampa húmeda, expandiendo su cobertura en un
                            amplio radio agrícola argentino.
                        </div>
                    </Container>
                </>
            )}
            <p className="text-center subtitle mt-4">
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
