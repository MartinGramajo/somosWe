import { Button, Image } from "react-bootstrap";
import perfil from "../assets/img/perfil.png";
import { Link } from "react-router-dom";

const ContenidoAndres = () => {
  return (
    <div>
      <div className="text-center">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/000/382/435/non_2x/abstract-technology-banner-template-vector.jpg"
          alt="asdasd"
          fluid
        />
      </div>
      <div className="text-center ">
        <Image
          className="icono-perfil icono-perfil-margin "
          src={perfil}
          fluid
          roundedCircle
        />
      </div>
      <article className="text-white text-center container">
        <div>
          <h3>ANDRÉS BROULLÓN</h3>
          <h5> Fundador</h5>
          <h6>
            Una persona dinámica, empática, profesional y muy trabajadora, y
            sobre todo siempre con una sonrisa para ofrecer. También me
            considero altamente exigente, trabajando codo a codo con nuestro
            equipo de trabajo, para contagiar esta dinámica del inconformismo y
            conseguir los mejores resultados posibles
          </h6>
        </div>
      </article>
      <div className="my-4">
        <article className="bg-secondary py-3">
          <div className="d-flex justify-content-center ">
            <Button
              as={Link}
              to="/"
              className="p-2 border-0 btn-enviar "
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black"> 965362858</span>
            </Button>
          </div>
        </article>
        <article className="bg-secondary  py-3">
          <div className="d-flex justify-content-center ">
            <Button
              as={Link}
              to="/"
              className="p-2 border-0 btn-enviar "
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black"> ANDRES@WEREAL.ES</span>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoAndres;
