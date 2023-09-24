import { Image } from "react-bootstrap";
import donde from "../assets/img/donde.png";

const DondeEncontrarnos = () => {
  return (
    <div className="py-5">
      <div className="text-center text-white">
        <h1>¿DÓNDE ENCONTRARNOS?</h1>
      </div>
      <div>
        <a
          className="text-decoration-none"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com.ar/maps/place/La+Estancia+Gastrohome/@38.0007523,-1.1374315,17z/data=!3m2!4b1!5s0xd6382275ff1ba93:0x4e8fbdd0c1ec1393!4m5!3m4!1s0xd63836b00d41277:0xe97ccfb5b1fef97b!8m2!3d38.0007523!4d-1.1352428"
        >
          <Image className="w-100" src={donde} alt=" google maps" />
        </a>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
