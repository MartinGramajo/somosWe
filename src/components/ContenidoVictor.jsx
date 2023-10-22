import { Button, Image } from "react-bootstrap";
import victor from "../assets/img/victor.png";
import { Link } from "react-router-dom";
import banner from "../assets/img/presen-banner.png";

const ContenidoVictor = () => {
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
          src={victor}
          fluid
          roundedCircle
          alt="Victor Dabat Aracil"
        />
      </div>
      <article className="text-black text-center container">
        <div>
          <h3>VICTOR DABAT ARACIL </h3>
          <h5> Asesor Inmobiliario - Ventas</h5>
          <h6>
            El benjamin del equipo y me definiría como una persona alegre,
            extrovertida, inquieta y con muchas ganas de aprender dìa a dìa para
            crecer tanto a nivel personal como profesional. <br /> Soy también
            una persona muy familiar, con muy buenas amistades y amante a los
            animales. El bienestar de los mìos y de la gente que quiero es lo
            màs en mi vida. <br />
            De la misma manera me preocupo por los intereses de mis clientes, de
            su bienestar y de ayudarles de la manera màs profesional posible
            para que puedan llevar a cabo sus proyectos y objetivos.
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
              <span className="text-black"> 644817221</span>
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
              <span className="text-black"> VICTOR@WEREAL.ES</span>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoVictor;
