import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">DavidRiphones</a>
        <button
          className="navbar-toggler mb-2"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <section className="d-flex">
          <input type='text' className='me-2 rounded small ' placeholder='reparacion por modelo' />
          <button className="btn btn btn-dark me-2" type="submit">
            Iniciar sesión
          </button>
          <button className="btn btn-secondary" type="submit">
            Registrarse
          </button>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
