import CajaServicios from "../components/CajaServicios";
import ContenidoServicios from "../components/ContenidoServicios";
import QuieroVender from "../components/QuieroVender";
import Wsp from "../components/Wsp";

const Servicios = () => {
  return (
    <div>
      <QuieroVender />
      <ContenidoServicios />
      <CajaServicios />
      <Wsp />
    </div>
  );
};

export default Servicios;
