import { Image } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/img/circuloLogoPrueba.png";

export default function QuieroVender() {
  const [navbarPosition, setNavbarPosition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 450) {
      setNavbarPosition(true);
    } else {
      setNavbarPosition(false);
    }
    // console.log(window.scrollY); //Para ver en el medidor de scroll
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="d-flex justify-content-center">
      <div className="navbar-bordes">
        <a
          className=""
          href="https://res.cloudinary.com/ddhhafebk/image/upload/v1675976284/media-pagina-web/reservaboton2.3c68cec5229ef200b3d9_wqtb7m_cxjb6g.png"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={
              navbarPosition
                ? "icono-reserva fixed-top ms-auto margen-reserva me-2"
                : "icono-reserva fixed-top ms-auto me-2 margen-reserva2"
            }
            src={logo}
            alt="wsp"
            fluid
          />
        </a>
      </div>
    </div>
  );
}
