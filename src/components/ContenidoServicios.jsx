import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContenidoServicios = () => {
  return (
    <div className="">
      <article className="bg-secondary container">
        <h1 className="py-2">
          INTERMEDIACIÓN <br /> FINANCIERA
        </h1>
        <h6 className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi
          doloremque, vero earum nihil pariatur a ullam quo quisquam nam
          necessitatibus rem ipsum distinctio rerum beatae corporis eveniet
          voluptatem quidem?
        </h6>
      </article>
      <article className="container">
        <h1 className="py-2">
          VENTA <br /> DE SEGUROS
        </h1>
        <h6 className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi
          doloremque, vero earum nihil pariatur a ullam quo quisquam nam
          necessitatibus rem ipsum distinctio rerum beatae corporis eveniet
          voluptatem quidem?
        </h6>
      </article>
      <article className="bg-secondary container py-3">
        <div className="d-flex justify-content-center ">
          <Button
            as={Link}
            to="/"
            className="p-2 border-0 btn-enviar "
            size="sm"
            type="submit"
            value="Send"
          >
            <span className="text-black"> CONTACTANOS</span>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default ContenidoServicios;
