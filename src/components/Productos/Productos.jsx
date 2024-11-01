// src/components/Productos.js
import "./Productos.scss";
import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import productData from "./../../utils/productData";
import logo from "./../../assets/icono_links.jpg";

function Productos() {
  return (
    <Container className="page-section mt-4 d-flex justify-content-center">
      <Row>
        {productData.map((product) => (
          <Col md={6} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.logo} />
              <Card.Body className="px-10">
                <Card.Text>{product.descripcion}</Card.Text>
                <div className="mt-3">
                  <Row>
                    <Col md={6}>
                      <ul className="benefits-list">
                        {product.beneficios.map((beneficio, index) => (
                          <li key={index}> {beneficio}</li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul className="hojas-list">
                        <Button href={product.marbetes} variant="link">
                          <img
                            src={logo}
                            alt="icono"
                            className="icono-link me-2"
                          />
                          Ver marbete
                        </Button>
                        <Button href={product.hojaSeguridad} variant="link">
                          <img
                            src={logo}
                            alt="icono"
                            className="icono-link me-2"
                          />
                          Ver reglas de seguridad
                        </Button>
                        <Button href={product.hojaSeguridad} variant="link">
                          <img
                            src={logo}
                            alt="icono"
                            className="icono-link me-2"
                          />
                          Ver imagen
                        </Button>
                      </ul>
                    </Col>
                  </Row>
                </div>
                <Card.Title>Presentación:</Card.Title>
                <Card.Text>{product.presentacion}</Card.Text>
                <Card.Title>Dosis:</Card.Title>
                <Card.Text>{product.dosis}</Card.Text>
                <Card.Title className="caracteristics">
                  Características:
                </Card.Title>
                <Card.Text>{product.caracteristicas}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;
