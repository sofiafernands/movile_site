import React from "react";
import "./faq.css";


const Faq = () => {
    return (
        <section className="bg-white dark:bg-gray-900 text-black ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
            <div className=" mb-8 lg:mb-16 flex flex-col ">
                <h2 className="animate-jump-in mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-3">Preguntas frecuentes</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">En nuestro servicio de reparaciones móviles, nos especializamos en ofrecer soluciones rápidas y efectivas para los problemas más comunes. Ya sea que tu dispositivo tenga problemas de pantalla, batería o cualquier otro inconveniente, estamos aquí para ayudarte a recuperar la funcionalidad de tu móvil. Descubre las respuestas a las preguntas más frecuentes a continuación.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Cuánto tiempo de garantía ofrece en las reparaciones?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Trabajan con todas las marcas y modelos de teléfonos?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Qué métodos de pago aceptan?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                </div>
                <div>
                    <h3 className=" mb-2 text-xl font-bold dark:text-white">¿Cómo puedo eliminar información personal de mi dispositivo antes de llevarlo para reparación?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Cuáles son las medidas de seguridad adoptadas para proteger la privacidad de mis datos?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿El diagnóstico es gratuito?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Cuánto tiempo lleva una reparación en promedio?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Es necesario pedir cita previa?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">¿Hay solución para un móvil mojado?</h3>
                    <p className="text-gray-500 dark:text-gray-400">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                </div>
            </div>
        </div>
      </section>


    );
};  

export default Faq;