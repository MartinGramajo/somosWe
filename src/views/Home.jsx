import DondeEncontrarnos from "../components/DondeEncontrarnos";
import Financiamiento from "../components/Financiamiento";
import FormContacto from "../components/FormContacto";
import SliderHome from "../components/SliderHome";
import Wsp from "../components/Wsp";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <Financiamiento />
      <DondeEncontrarnos />
      <FormContacto />
      <Wsp />
    </div>
  );
};

export default Home;
