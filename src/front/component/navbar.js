import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DavidRiphones</a>

        <div className="input-group">
            <input type="text" className="form-control-sm" placeholder="buscar marca o modelo" aria-label="tex" aria-describedby="login"/>
            <button className="btn btn-outline-secondary" type="submit" id="login">Button</button>
        </div>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tlf</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Correo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Direccion</a>
              </li>
            </ul>
            <input classNameName='login' type='button' value='Login' />
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
