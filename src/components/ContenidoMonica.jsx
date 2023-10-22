import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import monica from "../assets/img/monica.png";
import banner from "../assets/img/presen-banner.png";

const ContenidoMonica = () => {
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
          src={monica}
          fluid
          roundedCircle
        />
      </div>
      <article className="text-black text-center container">
        <div>
          <h3>MÓNICA PORCHETO VELÀZQUEZ</h3>
          <h5> Asesora Inmobiliaria - Capacitación</h5>
          <h6>
            Me considero una persona pro-activa y con un alto nivel de
            autoexigencia, esta característica me lleva a querer aprender todos
            los días algo nuevo. Es para mi una satisfacción finalizar mi ida
            habiendo aprendido <b> algo nuevo</b> ya sea en lo personal como en
            lo profesional y cada cosa que aprendo la desarrollo para que roce
            la perfección. Soy una Honesta, valores que traigo de familia, ese
            rasgo ha hecho que transmita confianza por lo que pretendo que
            sientas que puedes confiar en mi y que harè todo lo que estè a mi
            alcance para ayudar a realizar los objetivos.
          </h6>
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
              <span className="text-black"> 663737335</span>
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
              <span className="text-black"> MONICA@WEREAL.ES</span>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoMonica;
