import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/circuloLogoPrueba.png";

const NavReact = () => {
  return (
    <div className="my-5">
      <Navbar expand="lg" variant="light" sticky="top" className="bg-light">
        <Container>
          <Navbar.Brand href="/">
            <div>
              <Image className="logo " src={logo} alt="logo" fluid />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto mt-2 mt-sm-0">
              <Nav.Link
                to="/"
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                INICIO
              </Nav.Link>

              <Nav.Link
                to="/servicios"
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                to="/equipo"
                as={NavLink}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                EQUIPO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavReact;
