import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './front/component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormClient from "./front/pages/formClient";
import Home from "./front/pages/home";
import FormCompany from "./front/pages/formCompany";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/formclient" element={<FormClient />} />
            <Route path="/formcompany" element={<FormCompany />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;