import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { MdEmail } from 'react-icons/md';
//import { FaPhone } from 'react-icons/fa';





function Navbar() {

  return (

    <div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
             <img src="https://images.vexels.com/media/users/3/140965/isolated/preview/a945eef28564ae85fff5ac18adf637d9-icono-de-telefono-redondo.png" className="h-8 mr-3" alt="..." /> 
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DavidRiphones</span>
          </Link>
          <div className="flex items-center mt-3">
            <a href="tel:692982400" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(34) 692 982 400</a>
            <a href="mailto:info@davidriphones.com" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Correo</a>
            <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-600 ">
        <div className="max-w-screen-xl px- py-4  mx-auto">
          <div className="flex items-center ">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Servicios</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Recuperacion de datos</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Tarifas especiales</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>


  );
}

export default Navbar;




{/* <nav classNameName="navbar navbar-expand-lg fixed-top ">
<div classNameName="container-fluid mx-auto me-3 ms-3 mt-2">
  <Link to="/" classNameName="navbar-brand text-white" href="/">DavidRiphones</Link>
  <button
    classNameName="navbar-toggler mb-2"
    type="button"
    onClick={() => setExpanded(!expanded)}
    aria-label="Toggle navigation"
  >
    <span classNameName="navbar-toggler-icon"></span>
  </button>
  <div classNameName={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
    <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0 text-white">
      <li classNameName="nav-item">
        <a classNameName="nav-link active text-white" aria-current="page" href="/">
          Servicios
        </a>
      </li>
      <li classNameName="nav-item">
        <a classNameName="nav-link text-white" href="mailto:info@davidriphones.com">
        <MdEmail classNameName="me-2" size={24} />
          Contacto
        </a>
      </li>
      <li classNameName="nav-item">
        <a classNameName="nav-link text-white" href="tel:692982400">
        <FaPhone classNameName="me-2" size={24} />
          (+34) 692 982 400
        </a>
      </li>
      <li classNameName="nav-item">
        <a classNameName="nav-link text-white" href="#">
          Blog
        </a>
      </li>
    </ul>
  </div>
  <section classNameName="d-flex">
  <div classNameName="d-flex align-items-center">
      <div classNameName="input-group">
        <span classNameName="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          classNameName="form-control small"
          placeholder="Reparación por modelo"
          aria-label="Reparación por modelo"
        />
      </div>
    </div>
    <FontAwesomeIcon icon={faUser} classNameName='d-flex m-2 align-items-center'/>
    <button classNameName="btn btn btn-dark me-2" type="submit">
      Iniciar sesión
    </button>
    <button classNameName="btn btn-secondary" type="submit">
      Registrarse
    </button>
  </section>
</div>
</nav> */}
