import { Card, Image } from "react-bootstrap";
import ahorros from "../assets/img/ahorros.png";
import conocimientos from "../assets/img/conocimiento.png";
import financiar from "../assets/img/financiar.png";

export default function Cartas() {
  return (
    <div className="py-5 container ">
      <div className="cartas">
        <Card className="carta">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title className="text-center">
              <Image className="w-25" src={ahorros} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="text-center">
              Con nuestro servicio ahorraras mucho dinero a largo plazo
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="carta">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title className="text-center">
              <Image
                className="w-25"
                src={conocimientos}
                fluid
                alt="icono okay"
              />
            </Card.Title>
            <Card.Subtitle className="text-center">
              No tendrás porque visitar diferentes bancos para buscar opciones
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="carta">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title className="text-center">
              <Image className="w-25" src={financiar} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="text-center">
              Además, te educamos financieramente
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
