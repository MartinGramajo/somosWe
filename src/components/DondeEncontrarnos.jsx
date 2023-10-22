import { Image } from "react-bootstrap";
import donde from "../assets/img/donde.png";

const DondeEncontrarnos = () => {
  return (
    <div className="py-5">
      <div className="text-center text-white">
        <h1>¿DÓNDE ENCONTRARNOS?</h1>
      </div>
      <div className="bg-white">
        <a
          className="text-decoration-none d-flex justify-content-center py-5"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/WeReal+Grupo+Inmobiliario/@38.3416743,-0.4959143,17z/data=!4m6!3m5!1s0xd6237e52d1b22ef:0x2891174fc0f679e2!8m2!3d38.3416743!4d-0.4933394!16s%2Fg%2F11jxd905wr?entry=ttu"
        >
          <Image className="donde-map" src={donde} alt=" google maps" />
        </a>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
