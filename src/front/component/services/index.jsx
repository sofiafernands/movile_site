import React from "react";
import {FcCamera } from "react-icons/fc";
import { BiNoSignal } from "react-icons/bi";
import {BsBatteryCharging } from "react-icons/bs";
import {IoMdPower} from "react-icons/io";
import { BsCpu } from "react-icons/bs";
import {LuScanFace} from "react-icons/lu";




function Services ( ) {
    return (
        <section className="bg-gradient-to-r from-black to-gray-700 p-0 dark:from-gray-300 dark:to-gray-900 mt-5">
            <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16">
                <h1 className="animate-fade-right mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Nuestros servicios de reparacion</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In totam ut sapiente architecto blanditiis asperiores neque dicta illo soluta modi magnam fugiat, tempora tenetur at officiis expedita qui, est quas.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 ">
                    <a href="#" className=" ml-3 inline-flex justify-center mr-5 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-green-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        FACE ID <LuScanFace className="ml-1 h-5" />    
                    </a>  
                    <a href="#" className="ml-3 inline-flex justify-center mr-5 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-green-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        CPU  < BsCpu className="ml-1 h-5" />
                    </a>  
                    <a href="#" className="ml-3 inline-flex justify-center mr-5 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-green-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        COBERTURA  < BiNoSignal className="ml-1 h-5" />
                    </a>  
                    <a href="#" className="ml-3 inline-flex justify-center mr-5 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-green-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        NO CARGA  < BsBatteryCharging className="ml-1 h-5" />
                    </a>  
                    <a href="#" className="ml-3 inline-flex justify-center mr-5 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-green-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        NO ENCIENDE  < IoMdPower className="ml-1 h-5" />
                    </a>  
                </div>
            </div>
        </section>
    )
}

export default Services;