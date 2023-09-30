import { Image } from "react-bootstrap";
import perfil from "../assets/img/perfil.png";
import perfilMujer from "../assets/img/perfil-mujer.png";
import { Link } from "react-router-dom";

const ContenidoEquipo = () => {
  return (
    <div>
      <article className="container bg-secondary py-5">
        <Link className="text-decoration-none " to={"/Andres-Broullon"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={perfil}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white ">
                <h6>
                  Andrés Broullón <span className="ocultar ">Velázquez</span>{" "}
                </h6>
                <h6 className="pill-btn">Presentación</h6>
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-white py-5">
        <Link className="text-decoration-none " to={"/Andres-Broullon"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={perfil}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-black ">
                <h6>Victor Dabat Aracil</h6>
                <h6 className="pill-btn">Presentación</h6>
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-secondary py-5">
        <Link className="text-decoration-none " to={"/Andres-Broullon"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={perfilMujer}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white">
                <h6>Mónica Porchetto Velázquez</h6>
                <h6 className="pill-btn">Presentación</h6>
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-white py-5">
        <Link className="text-decoration-none " to={"/Andres-Broullon"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={perfilMujer}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-black">
                <h6>Josy Ribeiro Da Silva</h6>
                <h6 className="pill-btn">Presentación</h6>
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-secondary py-5">
        <Link className="text-decoration-none " to={"/Andres-Broullon"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={perfil}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white ">
                <h6>Victor Dabat Aracil</h6>
                <h6 className="pill-btn">Presentación</h6>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default ContenidoEquipo;
