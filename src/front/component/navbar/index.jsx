import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcCallback } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import './navbar.css';



function Navbar() {


  return (

    <div className="navbar-container">
      <div className="bg-gray-200 p-3 flex justify-between items-center ">
        <div className="flex items-center space-x-2 ">
          <img src="ruta/a/tu/logo.png" alt="Logo" className="h-6 w-6" />
          <Link to="/" className="text-blue-800 hover:text-blue-500 transition-all duration-200 hover:underline hover:shadow-md font-semibold">DavidRiPhones</Link>
        </div>
        <div className="flex space-x-2">
          <a href="tel:692982400"><FcCallback className='h-5 w-5' /></a>
          <a href="tel:692982400" className="ml-1 text-sm text-gray-500 d-none dark:text-white hover:underline d-md-block">(34) 692 982 400</a>

          {/* Enlace para abrir WhatsApp */}
          <a href="https://wa.me/34692982400" target="_blank" rel="noopener noreferrer" className='flex'>
            <span className=' h-5 w-5  text-green-600'><RiWhatsappFill /></span>
            <p className="ml-2 text-sm text-gray-500 d-none dark:text-white hover:underline d-md-block">WhatsApp</p>
          </a>

          {/* Enlace de correo electrónico */}
          <a href="mailto:info@davidriphones.com"><MdEmail className='h-5 w-5 text-gray-700' /></a>
          <a href="mailto:info@davidriphones.com" className="ml-1 text-sm text-gray-500  d-none dark:text-white hover:underline d-md-block">Correo</a>

          {/* Enlaces de redes sociales */}
          <a href='https://www.instagram.com/davidriphones/' target='_blank' rel="noopener noreferrer" >
            <GrInstagram className='h-5 w-5 text-pink-900' />
          </a>
          <a href="https://www.instagram.com/davidriphones/" className='ml-1 text-sm text-gray-500 d-none dark:text-white hover:underline d-md-block' target='_blank' rel="noopener noreferrer">Instagram</a>

          {/* Enlaces de navegación */}
          <Link to='/faq'><FaPersonCircleQuestion className='h-5 w-5 text-yellow-500 ' /></Link>
          <Link to="/faq" className="ml-1 text-sm text-gray-500 d-none dark:text-white hover:underline d-md-block">FAQ</Link>
          <Link to="/nosotros" className="ml-1 text-sm text-gray-500 dark:text-white hover:underline d-md-block">Nosotros</Link>
        </div>
      </div>
      <nav className="bg-gradient-to-r from-gray-400 to-blue-500 p-2 text-sm sm:text-lg tracking-tighter">
  <ul className="flex flex-wrap justify-center space-x-4 font-bold">
    <li><Link to="/tarifas" className="text-black hover:text-blue-500">TARIFAS PARA EMPRESAS</Link></li>
    <li><Link to="/recuperaciondedatos" className="text-black hover:text-blue-500">RECUPERACION DE DATOS</Link></li>
    <li><Link to="/reparaciondemcbook" className="text-black hover:text-blue-500">REPARAR MACBOOK</Link></li>
    <li><Link to="/reparaciondeiphone" className="text-black hover:text-blue-500">REPARAR IPHONE</Link></li>
    <li><Link to="/actualizaciondesoftware" className="text-black hover:text-blue-500">ACTUALIZACION</Link></li>
  </ul>
</nav>
    </div>
  );
}

export default Navbar;


