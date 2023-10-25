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
      <article>
        <h3 className="text-center">Entre nuestros seguros destacados</h3>
        <div className="row  text-center my-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <div className="my-2">
                <h5>
                  <b>Seguro de impago de alquiler:</b> <br /> Te ayudamos a
                  elegir a tu inquilino y te pagamos el alquiler en caso de
                  impago de renta. Y además, te indemnizamos frente a posibles
                  destrozos en tu vivienda.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <div className="my-2">
                <h5>
                  <b>Planes de Pensiones:</b> <br /> Aseguro tu futuro. Disfruta
                  de tu jubilación. Elige tu plan de pensiones por edad,
                  categoría de inversión o autor. Y ahora, si traes tu plan a
                  Caser te llevas un 3% del importe.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
            <div>
              <div className="my-2">
                <h5>
                  <b>Seguros para móviles:</b> <br /> Para todas las marcas y
                  sin importar la antigüedad de tu smartphone. Reparamos tu
                  móvil frente a los daños más habituales y te lo reponemos
                  cuando no sea posible o te lo roben.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CajaServicios;
