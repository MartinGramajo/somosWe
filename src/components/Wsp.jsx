import { Image } from "react-bootstrap";
import wsp from "../assets/svg/wasa.svg";

const Wsp = () => {
  return (
    <div className="d-flex justify-content-center text-white py-5">
      <Image className="" src={wsp} alt="wsp" fluid />
    </div>
  );
};

export default Wsp;
