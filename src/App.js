import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './front/component/navbar';
import MovileRepair from './front/pages/movileRepair';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Routes >
            <Route path="/" element={<MovileRepair />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;