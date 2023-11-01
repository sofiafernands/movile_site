import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function FormClient() {
    return (
        <div className="container mt-5 ">
            <form className="row g-3"> 
                <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" />
                <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" />
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                <ul className="list-group list-group-flush"> 
                    
                </ul>

            </form>



        </div>
    );
    }
export default FormClient;