import React from "react";
import courses from '../../img/courses.jpg';
import { Link } from 'react-router-dom';  


function RepairCourses() {
    return (

        <section className="bg-gradient-to-r from-black to-gray-700  dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={courses} alt="office content 2"/>
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="animate-pulse mb-4 mt-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Forma tu Futuro en la Reparación Móvil con Nuestros Cursos Especializados en Microsoldadura</h2>
            <p className="mb-4 text-white">¿Deseas forjar una carrera exitosa en la industria de la reparación móvil? ¡Has llegado al lugar adecuado! En nuestros Cursos de Microsoldadura, te convertirás en un experto en reparación móvil, adquiriendo las habilidades necesarias para destacar en esta apasionante industria en constante crecimiento.</p>
            <p className="text-white">Nuestros cursos personalizados te permitirán dominar la microsoldadura y te prepararán para una carrera en reparación móvil, donde la demanda de expertos en reparación móvil está en constante aumento.</p>
            <Link to="/">
                <button type="button"
                    className="bg-blue-300 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                    title="informacion para cliente particular">
                    Conoce nuestros niveles y programas
                </button>
            </Link>
        </div>
    </div>
</section>
        


    )
}
 
export default RepairCourses;
