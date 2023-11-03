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

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" class="flex items-center">
             <img src="https://images.vexels.com/media/users/3/140965/isolated/preview/a945eef28564ae85fff5ac18adf637d9-icono-de-telefono-redondo.png" class="h-8 mr-3" alt="..." /> 
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DavidRiphones</span>
          </Link>
          <div class="flex items-center mt-3">
            <a href="tel:692982400" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(34) 692 982 400</a>
            <a href="mailto:info@davidriphones.com" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">Correo</a>
            <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-600 ">
        <div class="max-w-screen-xl px- py-4  mx-auto">
          <div class="flex items-center ">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Servicios</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline">Recuperacion de datos</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline">Tarifas especiales</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>


  );
}

export default Navbar;




{/* <nav className="navbar navbar-expand-lg fixed-top ">
<div className="container-fluid mx-auto me-3 ms-3 mt-2">
  <Link to="/" className="navbar-brand text-white" href="/">DavidRiphones</Link>
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
        <a className="nav-link active text-white" aria-current="page" href="/">
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
</nav> */}
