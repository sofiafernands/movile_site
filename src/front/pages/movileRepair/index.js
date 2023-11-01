import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMobileAlt } from "react-icons/fa";
import { MdBrokenImage } from "react-icons/md";
import iphone13 from '../../img/iphone13.png'
import ButtomInformation from "../../component/buttomInformation";
import React from "react";
import './movileRepair.css';



function MovileRepair() {
    return (
        <div className='d-inline-flex p-2 col-12'>
            <div className=" d-flex">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <h3>DavidRiPhones</h3>
                        <h1><FaMobileAlt /><MdBrokenImage /></h1>
                        <h1 className='text-warning mt-5'>Tu centro de reparacion de confianza</h1>

                    </div>
                    <div className="col-6">
                        <img src={iphone13} alt="iphone13" className="w-100" />
                    </div>
                    <div className="col-6">
                        <h5>Tu movil merece una segunda oportunidad.</h5>
                        <h5>Confia en nosotros para su reparacion!</h5>
                    </div>
                    <div className="col-6 ">
                        < ButtomInformation />  
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MovileRepair;