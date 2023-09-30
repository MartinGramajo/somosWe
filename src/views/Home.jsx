import DondeEncontrarnos from "../components/DondeEncontrarnos";
import Financiamiento from "../components/Financiamiento";
import FormContacto from "../components/FormContacto";
import Inmoadal from "../components/Inmoadal";
import QuieroVender from "../components/QuieroVender";
import SliderHome from "../components/SliderHome";
import Wsp from "../components/Wsp";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <QuieroVender />
      <Financiamiento />
      <DondeEncontrarnos />
      <FormContacto />
      <Wsp />
      <Inmoadal />
    </div>
  );
};

export default Home;
