import React from "react";
import { Link } from 'react-router-dom';


function ButtomCompany () {
    return(
        < Link to="formCompany">
        <button type="button"
            className="bg-blue-300 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            title="solicita informacion">
            Consulta con nosotros
        </button>
        </Link>
    )
}

export default ButtomCompany;