// src/components/Productos.js
import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import productData from "./../../utils/productData"; // datos simulados para los productos

function Productos() {
  return (
    <div className="container mt-4">
      <Row>
        {productData.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.logo} />
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>{product.descripcion}</Card.Text>
                <Button href={product.marbetes} variant="link">
                  Ver marbete
                </Button>
                <Button href={product.hojaSeguridad} variant="link">
                  Ver hoja de seguridad
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Productos;
