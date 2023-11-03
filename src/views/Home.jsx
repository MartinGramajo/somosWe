import BannerNew from "../components/BannerNew";
import Caja from "../components/Caja";
import CanalYoutube from "../components/CanalYoutube";
import Cartas from "../components/Cartas";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import FormContacto from "../components/FormContacto";
import Inmoadal from "../components/Inmoadal";
import QuieroVender from "../components/QuieroVender";
import Situaciones from "../components/Situaciones";
import SliderEquipo from "../components/SliderEquipo";
import Wsp from "../components/Wsp";

const Home = () => {
  return (
    <div>
      <BannerNew />
      <QuieroVender />
      <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
        <h1 style={{ fontSize: "60" }}>
          INTERMEDIACIÓN FINANCIERA - HIPOTECAS
        </h1>
      </div>
      <Cartas />
      <Situaciones />
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
