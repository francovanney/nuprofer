import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/icono_links.jpg";
import "./Contacto.scss";
import ubicacion from "../../assets/ubicacion.jpg";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        nombre: Yup.string().required("Nombre es requerido"),
        email: Yup.string().email("Email inválido").required("Email es requerido"),
        telefono: Yup.string().required("Teléfono es requerido"),
        ciudadPais: Yup.string().required("Ciudad/País es requerido"),
        empresa: Yup.string().required("Empresa es requerida"),
        mensaje: Yup.string().required("Mensaje es requerido"),
    });

    const sendEmail = (values, { setSubmitting }) => {
        emailjs
            .send(
                "service_u02fm36",
                "template_0mm79om",
                values,
                "user_kSw3r88rUTBSk2tQWOdl4"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    swal({
                        title: "¡Bien hecho!",
                        text: "El mensaje fue enviado con éxito. Muchas gracias.",
                        icon: "success",
                        button: "Finalizar",
                    }).then(() => {
                        navigate("/");
                    });
                },
                (error) => {
                    console.error(error.text);
                    swal({
                        title: "Error",
                        text: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
                        icon: "error",
                        button: "Volver",
                    });
                }
            )
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <Container>
            <h3 className="text-white">Contacto</h3>
            <Formik
                initialValues={{
                    nombre: "",
                    email: "",
                    telefono: "",
                    ciudadPais: "",
                    empresa: "",
                    mensaje: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("valores: ", values)
                    sendEmail(values, { setSubmitting });
                }}
            >
                {({ handleSubmit, isSubmitting }) => (
                    <>
                        <Container className="d-flex justify-content-center mb-5 mt-4">
                            <Image src={ubicacion} alt="Ubicación" className="img-fluid" />
                        </Container>

                        <Form onSubmit={handleSubmit} className="mx-4 mb-5">
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formNombre" className="my-3">
                                        <Field
                                            name="nombre"
                                            type="text"
                                            as={Form.Control}
                                            className="form-control"
                                            placeholder="Nombre"
                                        />
                                        <ErrorMessage
                                            name="nombre"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className="my-3">
                                        <Field
                                            name="email"
                                            type="email"
                                            as={Form.Control}
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formTelefono" className="my-3">
                                        <Field
                                            name="telefono"
                                            type="text"
                                            as={Form.Control}
                                            className="form-control"
                                            placeholder="Teléfono"
                                        />
                                        <ErrorMessage
                                            name="telefono"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formCiudadPais" className="my-3">
                                        <Field
                                            name="ciudadPais"
                                            type="text"
                                            as={Form.Control}
                                            className="form-control"
                                            placeholder="Ciudad/País"
                                        />
                                        <ErrorMessage
                                            name="ciudadPais"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEmpresa" className="my-3">
                                        <Field
                                            name="empresa"
                                            type="text"
                                            as={Form.Control}
                                            placeholder="Empresa"
                                        />
                                        <ErrorMessage
                                            name="empresa"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group controlId="formMensaje">
                                        <Field
                                            name="mensaje"
                                            as="textarea"
                                            rows={10}
                                            className="form-control"
                                            placeholder="Mensaje"
                                        />
                                        <ErrorMessage
                                            name="mensaje"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Container className="d-flex justify-content-end mb-2 mt-2">
                                <Button type="submit" disabled={isSubmitting}>
                                    <img
                                        src={Logo}
                                        alt="Enviar"
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    />
                                    Enviar
                                </Button>
                            </Container>
                        </Form>
                    </>
                )}
            </Formik>
        </Container>
    );
};

export default Contacto;
