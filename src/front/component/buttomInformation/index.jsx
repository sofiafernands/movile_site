import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buttomInformation.css';


function ButtomInformation() {
    return (
< Link to="/formclient">
        <button type="button"
            className="buttomInformation btn btn-secondary"
            title="solicita informacion">
            Consulta con nosotros
        </button>
</Link>
    )
}

export default ButtomInformation;


