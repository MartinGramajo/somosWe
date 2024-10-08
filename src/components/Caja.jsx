import { Image } from "react-bootstrap";
import caja from "../assets/img/caja.png";

const Caja = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-6 col-sm-12 text-center d-flex align-items-center justify-content-center">
            <Image className="" src={caja} alt="caja" fluid />
          </div>

          <div className="col-lg-6 col-sm-12 pt-lg-5 pt-0 px-5 pb-5  d-flex flex-column justify-content-center text-center">
            <h2
              className="texto-nuestros-servicios mx-5 my-4"
              style={{ zIndex: 2 }}
            >
              CON NUESTROS SERVICIOS DE PLAN CREAR:
            </h2>
            <div className="d-md-none d-block">
              <h5 className="text-white">
                Podrás despejarte de todas las dudas posibles, cada situación en
                la que te encuentres Estaremos para brindarte el mejor
                asesoramiento. Además, si quieres comprar la vivienda con
                nosotros tenemos una amplia variedad de opciones.
              </h5>
            </div>
            <div className="d-none d-md-block">
              <h4 className="text-white">
                Podrás despejarte de todas las dudas posibles, cada situación en
                la que te encuentres Estaremos para brindarte el mejor
                asesoramiento. Además, si quieres comprar la vivienda con
                nosotros tenemos una amplia variedad de opciones.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caja;
