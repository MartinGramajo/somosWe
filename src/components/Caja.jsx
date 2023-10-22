import { Image } from "react-bootstrap";
import caja from "../assets/img/caja.png";
import plan from "../assets/img/planificacion.png";

const Caja = () => {
  return (
    <div className="color-blanco-oscuro-fondo py-5 my-5">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-sm-12 text-center d-flex align-items-center justify-content-center">
            <Image className="caja-imagen-banner" src={caja} alt="caja" fluid />
          </div>

          <div className="col-lg-6 col-sm-12 pt-lg-5 pt-0 px-5 pb-5  d-flex flex-column justify-content-center text-center">
            <div className=" d-flex align-items-center justify-content-center">
              <Image className="w-25" src={plan} alt="planificacion" fluid />
            </div>
            <h3 className=" mx-5 pt-4" style={{ zIndex: 2 }}>
              CON NUESTROS SERVICIOS DE PLAN CREAR:
            </h3>
            <h5 className=" py-5 ">
              Podrás despejarte de todas las dudas posibles, cada situación en
              la que te encuentres Estaremos para brindarte el mejor
              asesoramiento. Además, si quieres comprar la vivienda con nosotros
              tenemos una amplia variedad de opciones.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caja;
