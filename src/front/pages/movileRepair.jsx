import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import iphonr13 from '../images/iphone13.png';
import { FaMobileAlt } from "react-icons/fa";
import { MdBrokenImage } from "react-icons/md";
import iphone13 from '../img/iphone13.png'


function MovileRepair() {
    return (
        <div>
            <div className=" d-flex">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <h3>DavidRiPhones</h3>
                        <h1><FaMobileAlt /><MdBrokenImage /></h1>
                        <h1>Tu centro de reparacion de confianza</h1>
              

                    </div>
                    <div className="col-6">
                        <img src={iphone13} alt="iphone13" className="w-100" />
                    </div>
                    <div className="col-6">
                    <h5>Tu movil merece una segunda oportunidad.</h5>
                        <h5>Confia en nosotros para su reparacion!</h5>
                    </div>
                    <div className="col-6 ">
                        <button type="button" class="btn btn-secondary">Consulta con nosotros</button>
                    </div>
                </div>
                
            </div>
            <div className=" d-flex">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <h3>DavidRiPhones</h3>
                        <h1><FaMobileAlt /><MdBrokenImage /></h1>
                        <h1>Tu centro de reparacion de confianza</h1>
              

                    </div>
                    <div className="col-6">
                        <img src={iphone13} alt="iphone13" className="w-100" />
                    </div>
                    <div className="col-6">
                    <h5>Tu movil merece una segunda oportunidad.</h5>
                        <h5>Confia en nosotros para su reparacion!</h5>
                    </div>
                    <div className="col-6 ">
                        <button type="button" class="btn btn-secondary">Consulta con nosotros</button>
                    </div>
                </div>
                
            </div>

        </div>

    );
}

export default MovileRepair;