import React from "react";
import { useEffect } from "react";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './front/component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormClient from "./front/pages/formClient";
import Home from "./front/pages/home";
import FormCompany from "./front/pages/formCompany";
import { useLocation } from "react-router-dom";
import Footer  from "./front/component/footer";


function ScrollToTop () {
  const { pathname } = useLocation();     
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
      {/* utilizamos scrolltotop para subir el scrol en cada iteracion entre componentes */}
      < ScrollToTop /> 
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/formclient" element={<FormClient />} />
            <Route path="/formcompany" element={<FormCompany />} />
          </Routes>
          < Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;