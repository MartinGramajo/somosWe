import DondeEncontrarnos from "../components/DondeEncontrarnos";
import Financiamiento from "../components/Financiamiento";
import FormContacto from "../components/FormContacto";
import SliderHome from "../components/SliderHome";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <Financiamiento />
      <DondeEncontrarnos />
      <FormContacto />
    </div>
  );
};

export default Home;
