import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/icono_links.jpg";
import "./Contacto.scss";

const Contacto = () => {
  const validationSchema = Yup.object({
    nombre: Yup.string().required("Nombre es requerido"),
    email: Yup.string().email("Email inválido").required("Email es requerido"),
    telefono: Yup.string().required("Teléfono es requerido"),
    ciudadPais: Yup.string().required("Ciudad/País es requerido"),
    empresa: Yup.string().required("Empresa es requerida"),
    mensaje: Yup.string().required("Mensaje es requerido"),
  });

  return (
    <Container>
      <h3>Contacto</h3>
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
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formNombre" className="my-3">
                  <Field
                    name="nombre"
                    type="text"
                    as={Form.Control}
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
              <Button onClick={handleSubmit}>
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
        )}
      </Formik>
    </Container>
  );
};

export default Contacto;
