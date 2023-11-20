import React, { useState } from "react";
import { BiNoSignal } from "react-icons/bi";
import {BsBatteryCharging } from "react-icons/bs";
import {IoMdPower} from "react-icons/io";
import { BsCpu } from "react-icons/bs";
import {LuScanFace} from "react-icons/lu";
import ServiceItem from "./items_services";

function Services() {
    const [openItem, setOpenItem] = useState(null);

    const services = [
        { title: "FACE ID", Icon: LuScanFace, description: "Descricion de Face ID" },
        { title: "CPU", Icon: BsCpu, description: "Descripcion de CPU" },
        { title: "COBERTURA", Icon: BiNoSignal, description: "Descripción COBERTURA" },
        { title: "NO CARGA", Icon: BsBatteryCharging, description: "Descripción de NO CARGA" },
        { title: "NO ENCIENDE", Icon: IoMdPower, description: "Descripcion de no enciende" },
    ];

    return (
        <section className="bg-gradient-to-r from-black to-gray-700 dark:from-gray-300 dark:to-gray-900">
            <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16">
                <h1 className="animate-fade-right mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Nuestros servicios de reparacion</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In totam ut sapiente architecto blanditiis asperiores neque dicta illo soluta modi magnam fugiat, tempora tenetur at officiis expedita qui, est quas.</p>
                <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 ">
                    {services.map(service => 
                        <ServiceItem 
                            key={service.title}
                            title={service.title} 
                            Icon={service.Icon} 
                            description={service.description} 
                            isOpen={openItem === service.title}
                            onOpen={() => setOpenItem(service.title)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;