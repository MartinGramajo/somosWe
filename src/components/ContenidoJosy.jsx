import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import josy from "../assets/img/jasy.png";
import banner from "../assets/img/presen-banner.png";

const ContenidoJosy = () => {
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
          src={josy}
          alt="JOSY RIBEIRO DA SILVA"
          fluid
          roundedCircle
        />
      </div>
      <article className="text-black text-center container">
        <div>
          <h3>JOSY RIBEIRO DA SILVA</h3>
          <h4> Coordinadora</h4>
          <h6>
            En el corazón de WeReal, encontramos a JOSY RIBEIRO DA SILVA , una
            inspiración que nos demuestra que la constancia y la pasión son la
            clave para alcanzar nuestros sueños. <br />
            Originaria de Brasil, Josy dió un gran salto de fé al mudarse a
            España en busca de un futuro mejor. Desde entonces, ha forjado un
            camino lleno de logros y aprendizajes que hoy la convierte en una
            pieza fundamental de nuestro equipo. <br />
            Josy es una verdadera polifacética, con una amplia gama de
            profesiones y experiencia en su haber. Es la personificación de la
            perseverancia y la dedicación. <br /> En WeReal, estamos agradecidos
            por tenerla como coordinadora, y esperamos con ansias lo que el
            futuro le depare a esta talentosa y apasionada profesional.
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
              <span className="text-black"> JOSY@WEREAL.ES</span>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoJosy;
