import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavReact from "./components/common/NavReact";
import Footer from "./components/common/Footer";
import Servicios from "./views/Servicios";
import Andres from "./views/Andres";
import Equipo from "./views/Equipo";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <HashRouter>
        <NavReact />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/equipo" element={<Equipo />} />
          <Route exact path="/Andres-Broullon" element={<Andres />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
