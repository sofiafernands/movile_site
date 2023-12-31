import React from "react";
import './special_rate.css';
import company from '../../img/company.jpg';
import { Link } from "react-router-dom";
import ButtomCompany from "../buttomCompany";

function SpecialRate() {
    return (
        <section className="bg-gradient-to-r from-black to-gray-700  ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-2 mb-2">
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={company} alt="mockup" className="rounded-5 max-w-full"/>
                </div>   
                <div className="mx-auto place-self-center lg:col-span-7">
                    <h1 className="animate-pulse mt-4 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Tarifas especiales para empresas</h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Beneficiate de tarifas especiales para tu empresa, contactanos o solicita nuestras tarifas unicamente para empresas</p>
                    <Link to="formCompany" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                        ¿Eres empresa?
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    <ButtomCompany />
                </div>
            </div>
        </section>
    )
}

export default SpecialRate;