import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavReact from "./components/common/NavReact";
import Footer from "./components/common/Footer";
import QuieroVender from "./components/QuieroVender";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <HashRouter>
        <NavReact />
        <QuieroVender />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
