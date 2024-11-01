// src/components/Productos.js
import "./Productos.scss";
import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import productData from "./../../utils/productData"; // datos simulados para los productos

function Productos() {
    return (
        <div className="container mt-4">
            <Row>
                {productData.map((product) => (
                    <Col md={6} key={product.id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.logo} />
                            <Card.Body>
                                <Card.Text>{product.descripcion}</Card.Text>
                                <div className="mt-3">
                                    <Row>
                                        <Col md={4}>
                                            {product.beneficios.map((beneficio, index) => (
                                                <li key={index}> {beneficio}</li>
                                            ))}
                                        </Col>
                                        <Col md={4}>
                                            <Button href={product.marbetes} variant="link">
                                                Ver marbete
                                            </Button>
                                            <Button href={product.hojaSeguridad} variant="link">
                                                Ver hoja de seguridad
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                <Card.Title>Presentación:</Card.Title>
                                <Card.Text>{product.presentacion}</Card.Text>
                                <Card.Title>Dosis:</Card.Title>
                                <Card.Text>{product.dosis}</Card.Text>
                                <Card.Title>Características:</Card.Title>
                                <Card.Text>{product.caracteristicas}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Productos;
