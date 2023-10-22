import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import andres from "../assets/img/andres.png";
import banner from "../assets/img/presen-banner.png";

const ContenidoAndres = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="banner-content">
          <Image className="" src={banner} alt="banner" fluid />
        </div>
      </div>
      <div className="text-center ">
        <Image
          className="icono-perfil icono-perfil-margin "
          src={andres}
          fluid
          roundedCircle
        />
      </div>
      <article className="text-black text-center container">
        <div>
          <h3>ANDRÉS BROULLÓN</h3>
          <h4> Fundador</h4>
          <h5 className="py-5">
            Una persona dinámica, empática, profesional y muy trabajadora, y
            sobre todo siempre con una sonrisa para ofrecer. También me
            considero altamente exigente, trabajando codo a codo con nuestro
            equipo de trabajo, para contagiar esta dinámica del inconformismo y
            conseguir los mejores resultados posibles
          </h5>
        </div>
      </article>
      <div className="my-4">
        <article className="bg-gris py-3">
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
        <article className="bg-gris  py-3">
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
