import emailjs from "@emailjs/browser";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormContacto() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      emailjs
        .sendForm(
          "service_rg18144",
          "template_httqo6d",
          e.target,
          "user_Stg5159fb3qxm0lYluqAN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="container ">
      <Form
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
        className="mx-auto form mb-5 p-2 text-white "
      >
        <div>
          <div className="card-body">
            <Row className="mb-2">
              <Form.Group
                className=""
                as={Col}
                md="12"
                controlId="validationCustom03"
              >
                <Form.Label className="text-white tamaño-medio">
                  Nombre*
                </Form.Label>
                <Form.Control type="text" required name="name" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su nombre completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" controlId="validationCustom04">
                <Form.Label className="text-white mt-2 tamaño-medio">
                  Whatsapp*
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  type="text"
                  required
                  name="cel"
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su número de whatsapp completo por favor.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-white mt-2 tamaño-medio">
                  Email*
                </Form.Label>
                <Form.Control type="email" required name="email" />
                <Form.Control.Feedback type="invalid">
                  Ingrese su Email por favor.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label className="text-white mt-2  tamaño-medio">
                  Mensaje
                </Form.Label>
                <InputGroup>
                  <Form.Control className="mb-2" as="textarea" name="msj" />
                </InputGroup>
                <span className="mt-1 text-white tamaño-medio">
                  * Campos obligatorios
                </span>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  label="Comprar"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  label="Vender"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  label="Financiación"
                />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  label="Otra consulta"
                />
              </Form.Group>
            </Row>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Button
            className="w-25 p-2 border-0 text-white color-rojo-fondo"
            size="sm"
            type="submit"
            value="Send"
          >
            <span className=""> ENVIAR</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}
