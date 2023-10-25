import Caja from "../components/Caja";
import CanalYoutube from "../components/CanalYoutube";
import Cartas from "../components/Cartas";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import FormContacto from "../components/FormContacto";
import Inmoadal from "../components/Inmoadal";
import QuieroVender from "../components/QuieroVender";
import SliderEquipo from "../components/SliderEquipo";
import SliderHome from "../components/SliderHome";
import Wsp from "../components/Wsp";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <QuieroVender />
      <Cartas />
      <Caja />
      <SliderEquipo />
      <DondeEncontrarnos />
      <CanalYoutube />
      <FormContacto />
      <Wsp />
      <Inmoadal />
    </div>
  );
};

export default Home;
