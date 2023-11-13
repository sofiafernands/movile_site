import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className=' bg-white'>   
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 py-5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto  max-w-screen-xl mt-2 bg-white">
          <Link to="/" className="flex items-center">
            <img src="https://images.vexels.com/media/users/3/140965/isolated/preview/a945eef28564ae85fff5ac18adf637d9-icono-de-telefono-redondo.png" className="h-8 mr-3" alt="Phone Icon" /> 
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DavidRiphones</span>
          </Link>
          <div className="flex items-center mt-3 bg-white">
            <a href="tel:692982400" className="ml-3 mr-6 text-sm text-gray-500 dark:text-white hover:underline">(34) 692 982 400</a>
            <a href="mailto:info@davidriphones.com" className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">Correo</a>
            <a href="#" className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">Blog</a>
            <Link to="/faq" className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">FAQ</Link>
            <Link to='/' className="mr-6 text-sm text-gray-500 dark:text-white hover:underline">Nosotros</Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-600 fixed w-full z-10 top-15 ">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
          <div className="flex items-center ">
            <ul className="flex flex-row font-medium mt-0 space-x-3 text-sm">
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">REPARAR IPHONE</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline">REPARAR MACBOOK</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-900 dark:text-white hover:underline">RECUPERACION DE DATOS</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-900 me-5 dark:text-white hover:underline">TARIFAS PARA EMPRESAS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
