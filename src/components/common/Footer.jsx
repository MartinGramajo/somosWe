import { Image } from "react-bootstrap";
import dkz from "../../assets/img/logodkz.png";

const Footer = () => {
  return (
    <div className="mt-auto bg-warning">
      <div className="text-center">
        <h6>Prod by</h6>
        <Image className="icono-footer" src={dkz} alt="logo dkz" />
      </div>
    </div>
  );
};

export default Footer;
