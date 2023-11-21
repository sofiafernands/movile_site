import React from "react";
import { useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './front/component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormClient from "./front/pages/formClient";
import Home from "./front/pages/home";
import FormCompany from "./front/pages/formCompany";
import { useLocation } from "react-router-dom";
import Footer from "./front/component/footer";
import Faq from "./front/pages/faq";
import PriceCompanyInfo from "./front/pages/tarifas";
import DataRecoveryInfo from "./front/pages/recuperacion-de-datos";
import MacbookRepairInfo from "./front/pages/reparacion-de-macbook";
import IphoneRepairInfo from "./front/pages/reparacion-de-iphone";
import SoftwareUpdateInfo from "./front/pages/actualizacion-de-software";


 

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formclient" element={<FormClient />} />
            <Route path="/formcompany" element={<FormCompany />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/tarifas" element={< PriceCompanyInfo /> } />
            <Route path="/recuperaciondedatos" element={< DataRecoveryInfo />} />
            <Route path="/reparaciondemcbook" element={< MacbookRepairInfo />} />
            <Route path="/reparaciondeiphone" element={< IphoneRepairInfo />} />
            <Route path="/actualizaciondesoftware" element={< SoftwareUpdateInfo />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;