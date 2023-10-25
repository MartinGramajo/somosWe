import { Image } from "react-bootstrap";
import logo from "../assets/img/logo-caser.png";
import CartasServicios from "./CartasServicios";

const CajaServicios = () => {
  return (
    <div className="container" id="seguros">
      <article>
        <h3 className=" text-center pt-5" style={{ zIndex: 2 }}>
          INNOVAMOS EN LO QUE REALMENTE NECESITAS
        </h3>
        <article className="d-flex justify-content-center">
          <Image className="my-2" src={logo} alt="banner servicios" fluid />
        </article>
        <h4 className=" text-center " style={{ zIndex: 2 }}>
          AGENTES EXCLUSIVOS DE CASER SEGUROS
        </h4>
      </article>
      <article className="text-center">
        <h5>
          Caser es un grupo asegurador que nació hace más de 75 años. Su
          propósito nos une:{" "}
          <b>Ofrecer un producto de valor y un excelente servicio</b> <br />
          En 1942 comenzaron dando cobertura a la Asociación de Agricultores.
          Poco a poco, fueron incorporando productos para particulares y
          empresas. De esta forma, fueron creciendo hasta convertirse en un
          grupo <b>asegurador multirramo</b> y especialista en servicio. <br />
          Procuran conocer en detalle las necesidades de los clientes y
          anticiparse con seguros y servicios innovadores.
        </h5>
      </article>
      <CartasServicios />
    </div>
  );
};

export default CajaServicios;
