import React from "react";
import ButtomInformation from "../buttomInformation";
import { Link } from 'react-router-dom';



function DataRecovery() { 
    return (
        <section className="bg-dark-900 dark:bg-gray-900">
 <section className="bg-dark-900 dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Expertos en Recuperación de Datos Móviles: Tu Solución Confiable</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Confía en nuestra experiencia para recuperar tus datos móviles perdidos. Con años de conocimiento en la industria, estamos preparados para ayudarte a restaurar tus archivos importantes. Recupera tus datos con nosotros hoy mismo</p>
            <Link to="formClient" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Necesitas recuperar tu informacion?
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
           < ButtomInformation />
        </div>
        <div className="mt-3 lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>   
                     
    </div>
</section>
</section>
    )
}
export default DataRecovery;