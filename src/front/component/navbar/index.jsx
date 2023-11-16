import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcCallback } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";




function Navbar() {
  return (


    <><div className="bg-gray-200 p-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="ruta/a/tu/logo.png" alt="Logo" className="h-6 w-6" />
        <Link to="/" className="text-blue-700 hover:text-blue-500 transition-all duration-200 hover:underline hover:shadow-md font-semibold">DavidRiPhones</Link>
      </div>
      <div className="flex space-x-2">
        <a href="tel:692982400"><FcCallback className='h-5 w-5' /></a>
        <a href="tel:692982400" className="ml-1 d-none text-sm text-gray-500 dark:text-white hover:underline  d-md-block">(34) 692 982 400</a>
        <a href="mailto:info@davidriphones.com">< MdEmail className='h-5 w-5' /></a>
        <a href="mailto:info@davidriphones.com" className="d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline  d-md-block">Correo</a>
        <GrInstagram className='h-5 w-5' />
        <a href="https://www.instagram.com/davidriphones/" className='d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline  d-md-block'> Instagram </a>
        <FaPersonCircleQuestion className='h-5 w-5' />
        <Link to="/faq" className="d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline d-md-block">FAQ</Link>

        <Link to="/faq" className="d-none ml-1 text-sm text-gray-500 dark:text-white hover:underline d-md-block">Nosotros</Link>
      </div>
    </div><nav className="bg-gray-300 p-3">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="text-blue-700 hover:text-blue-500">Inicio</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-500">Servicios</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-500">Productos</a></li>
          <li><a href="#" className="text-blue-700 hover:text-blue-500">Contacto</a></li>
        </ul>
      </nav></>
  );
}

export default Navbar;


//  {/*  <div className='bg-white'>
//      Top Navbar */}
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 top-0 py-4">
//         <div className="container mx-auto max-w-screen-xl">
//           <div className="flex  items-center">
//             <div className="flex mr-5">
//             <Link to="/" className="flex items-center">
//               <img src="https://images.vexels.com/media/users/3/140965/isolated/preview/a945eef28564ae85fff5ac18adf637d9-icono-de-telefono-redondo.png" className="h-8 mr-3" alt="Phone Icon" />
//               <span className="text-2xl font-semibold">DavidRiphones</span>
//             </Link>
//             </div>
//             <div className="flex items-center">
//               <FcCallback className='h-5 w-5' />
//               <a href="tel:692982400" className="ml-1 d-none text-sm text-gray-500 dark:text-white hover:underline  d-md-block">(34) 692 982 400</a>
//               <a href="mailto:info@davidriphones.com" className="ml-1 text-sm text-gray-500 dark:text-white hover:underline  d-md-block">Correo</a>
//               <Link to="/faq" className="ml-1 text-sm text-gray-500 dark:text-white hover:underline">FAQ</Link>
//               <Link to="/faq" className="ml-1 text-sm text-gray-500 dark:text-white hover:underline">Nosotros</Link>

//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Bottom Navbar */}
//       <nav className="bg-gray-50 dark:bg-gray-600 fixed w-full z-10 top-20">
//         <div className="container mx-auto">
//           <ul className="flex font-medium mt-0 space-x-3 text-sm justify-center">
//             <li><Link to="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">REPARAR IPHONE</Link></li>
//             <li><Link to="#" className="text-gray-900 dark:text-white hover:underline">REPARAR MACBOOK</Link></li>
//             <li><Link to="#" className="text-gray-900 dark:text-white hover:underline">RECUPERACION DE DATOS</Link></li>
//             <li><Link to="#" className="text-gray-900 dark:text-white hover:underline">TARIFAS PARA EMPRESAS</Link></li>
//           </ul>
//         </div>
//       </nav>
//     </div> */}

