import React from "react";
import courses from '../../img/courses.jpg';
import { Link } from 'react-router-dom';  


function RepairCourses() {
    return (
        
<div className=" max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg object-cover" src={courses} alt="" style={{height: '400px', width:'100%' }} />
    </a>
    <div className="p-5">
            <h1 className="mb-5 text-4x2 font-extrabold  text-white dark:text-white"> Forma tu Futuro en la Reparación Móvil con Nuestros Cursos Especializados en Microsoldadura</h1>
        <p className="mb-3 font-light text-white dark:text-gray-400">¿Deseas forjar una carrera exitosa en la industria de la reparación móvil? ¡Has llegado al lugar adecuado! En nuestros Cursos de Microsoldadura, te convertirás en un experto en reparación móvil, adquiriendo las habilidades necesarias para destacar en esta apasionante industria en constante crecimiento.</p>
        < Link to="/">
        <button type="button"
            className="bg-blue-300 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            title="informacion para cliente particular">
            Conoce nuestros niveles y programas
        </button>
</Link>
    </div>
</div>

    )
}
 
export default RepairCourses;

<h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Tarifas especiales para empresas</h1>
