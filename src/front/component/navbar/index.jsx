import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';





function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid mx-auto mb-2 mt-2">
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
              <a className="nav-link active text-white" aria-current="page" href="services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="mailto:info@davidriphones.com">
              <MdEmail className="me-2" size={24} />
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="tel:692982400">
              <FaPhone className="me-2" size={24} />
                (+34) 692 982 400
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
        <div className="d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control small"
                placeholder="Reparación por modelo"
                aria-label="Reparación por modelo"
              />
            </div>
          </div>
          <FontAwesomeIcon icon={faUser} className='d-flex m-2 align-items-center'/>
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
