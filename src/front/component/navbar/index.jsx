import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcCallback } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";




function Navbar() {
  return (


    <div className="navbar-container">
    <div className="bg-gray-200 p-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="ruta/a/tu/logo.png" alt="Logo" className="h-6 w-6" />
        <Link to="/" className="text-black hover:text-blue-500 transition-all duration-200 hover:underline hover:shadow-md font-semibold">ServicesCompany</Link>
      </div>
      <div className="flex space-x-2">
        <a href="tel:692982400"><FcCallback className='h-5 w-5' /></a>
        <a href="tel:692982400" className="ml-1 d-none text-sm text-gray-500 dark:text-white hover:underline  d-md-block">(34) 692 982 400</a>
        <a href="mailto:info@davidriphones.com">< MdEmail className='h-5 w-5 text-gray-700' /></a>
        <a href="mailto:info@davidriphones.com" className="d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline d-md-block">Correo</a>
        <a href='https://www.instagram.com/davidriphones/' target='_blank' rel="noopener noreferrer"> <GrInstagram className='h-5 w-5 text-pink-900' /> </a>
        <a href="https://www.instagram.com/davidriphones/" className='d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline  d-md-block' target='_blank' rel="noopener noreferrer"> Instagram </a>        <Link to= '/faq'> <FaPersonCircleQuestion className='h-5 w-5 text-yellow-500' /> </Link>
        <Link to="/faq" className="d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline d-md-block">FAQ</Link>
        <Link to="/faq" className=" ml-1 text-sm text-gray-500 dark:text-white hover:underline d-md-block">Nosotros</Link>
      </div>
    </div><nav className="bg-gray-400 p-3">
    <ul className="flex flex-wrap justify-center space-x-4 ">
          <li><a href="#" className="text-black hover:text-blue-500">TARIFAS PARA EMPRESAS</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">RECUPERACION DE DATOS</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">REPARAR MACBOOK</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">REPARAR IPHONE</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">ACTUALIZACION</a></li>

        </ul>
      </nav>
      </div>
  );
}

export default Navbar;


