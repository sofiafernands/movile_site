import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import { FaMobileAlt } from "react-icons/fa";
//import { MdBrokenImage } from "react-icons/md";
import iphone13 from '../../img/iphone13.png'
import ButtomInformation from "../buttomInformation";
import React from "react";
import { Link } from "react-router-dom";
import {TbBrandApple} from "react-icons/tb";



function MobileRepair() {
    return (
        <section className="bg-dark-900 p-0 mt-5 sm:mt-5">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="animate-pulse max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Tu centro de reparacion de confianza </h1> 
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Tu movil merece una segunda oportunidad, confia en nosotros para su reparacion, visitanos o solicita tu presupuesto</p>
                <Link to="formClient" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Tarifas Reparacion
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
                    < ButtomInformation />
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                <img src={iphone13}/>
            </div>                
        </div>
    </section>
    );
}

export default MobileRepair;