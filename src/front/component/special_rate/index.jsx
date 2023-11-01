import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './special_rate.css';
import company from '../../img/company.jpg';
function SpecialRate() {
    return (

        <div className="card text-bg-dark">
        <img src={company} className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title">tarifas especiales para empresas</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
}

export default SpecialRate;