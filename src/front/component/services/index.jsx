import React, { useState } from "react";
import { BiNoSignal } from "react-icons/bi";
import { BsBatteryCharging } from "react-icons/bs";
import { IoMdPower } from "react-icons/io";
import { BsCpu } from "react-icons/bs";
import { LuScanFace } from "react-icons/lu";
import ServiceItem from "./items_services";
import "./services.css";

function Services() {
    const [openItem, setOpenItem] = useState(null);

    const services = [
        { title: "FACE ID", Icon: LuScanFace, description: "es un sistema de reconocimiento facial implementado en modelos de iPhone más recientes. Face ID utiliza tecnología de sensores y cámaras para escanear y reconocer la cara del usuario, permitiendo así el desbloqueo del teléfono, autorización de pagos y otras funciones de seguridad. " },
        { title: "CPU", Icon: BsCpu, description: "es un sistema de reconocimiento facial implementado en modelos de iPhone más recientes. Face ID utiliza tecnología de sensores y cámaras para escanear y reconocer la cara del usuario, permitiendo así el desbloqueo del teléfono, autorización de pagos y otras funciones de seguridad." },
        { title: "COBERTURA", Icon: BiNoSignal, description: "es un sistema de reconocimiento facial implementado en modelos de iPhone más recientes. Face ID utiliza tecnología de sensores y cámaras para escanear y reconocer la cara del usuario, permitiendo así el desbloqueo del teléfono, autorización de pagos y otras funciones de seguridad." },
        { title: "NO CARGA", Icon: BsBatteryCharging, description: "es un sistema de reconocimiento facial implementado en modelos de iPhone más recientes. Face ID utiliza tecnología de sensores y cámaras para escanear y reconocer la cara del usuario, permitiendo así el desbloqueo del teléfono, autorización de pagos y otras funciones de seguridad." },
        { title: "NO ENCIENDE", Icon: IoMdPower, description: "es un sistema de reconocimiento facial implementado en modelos de iPhone más recientes. Face ID utiliza tecnología de sensores y cámaras para escanear y reconocer la cara del usuario, permitiendo así el desbloqueo del teléfono, autorización de pagos y otras funciones de seguridad." },
    ];

    return (
        <section className=" bg-gradient-to-r from-black to-gray-700 dark:from-gray-300 dark:to-gray-900 ">
            <div className="serviceItem py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16">
                <h1 className="animate-fade-right mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Nuestros servicios de reparacion</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In totam ut sapiente architecto blanditiis asperiores neque dicta illo soluta modi magnam fugiat, tempora tenetur at officiis expedita qui, est quas.</p>
                <div className="flex flex-col  space-y-2 lg:flex-row sm:flex-col sm:justify-center sm:space-y-2 ">
                    {services.map(service =>
                        <ServiceItem
                            key={service.title}
                            title={service.title}
                            Icon={service.Icon}
                            description={service.description}
                            isOpen={openItem === service.title}
                            onOpen={() => openItem === service.title ? setOpenItem(null) : setOpenItem(service.title)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Services;