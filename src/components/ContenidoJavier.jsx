import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import javier from "../assets/img/Javier.png";

const ContenidoJavier = () => {
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
          src={javier}
          fluid
          roundedCircle
          alt="Javier Pastor Cobos"
        />
      </div>
      <article className="text-black text-center container">
        <div>
          <h3>JAVIER PASTOR COBOS</h3>
          <h5> Puesto</h5>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem hic
            error possimus, cumque iste magni vitae. Impedit adipisci numquam
            laborum, iste accusamus alias autem tempore ipsum voluptate repellat
            hic repellendus.
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
              <span className="text-black"> JAVIER@WEREAL.ES</span>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoJavier;
