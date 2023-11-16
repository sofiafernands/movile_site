import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




function FormCompany() {
    const [email, setEmail] = useState("");
    const [nameCompany, setNameCompany] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ email, nameCompany, message });

        setEmail("");
        setNameCompany("");
        setMessage("");
    };
 
    const handleCancel = () => {
        navigate("/");
    };
    return (
        <section className="bg-white dark:bg-gray-900 mt-5">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mt-5 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Tarifas especiales</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">¡Bienvenido! Estamos encantados de que estés interesado en nuestras tarifas especiales de reparaciones exclusivas para empresas. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo a la mayor brevedad posible para proporcionarte toda la información que necesitas.</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="correo electronico"
                            required />
                    </div>
                    <div>
                        <label htmlFor="nameCompany" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de empresa</label>
                        <input 
                        type="text" 
                        id="nameCompany" 
                        value={nameCompany}
                        onChange={(e) => setNameCompany(e.target.value)}
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                         placeholder="nombre o NIF" 
                         required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Algo que quieras comentarnos?</label>
                        <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message" 
                        rows="6" 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Alguna pregunta especifica?"></textarea>
                    </div>
                    <button
                        type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-dark sm:w-fit hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-800">Enviar</button>
                    <button
                        onClick={handleCancel}
                        className="py-3 px-5 ml-4 text-sm font-medium text-center text-white rounded-lg bg-dark sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Cancelar
                    </button>

                </form>
            </div>
        </section>

    )
}

export default FormCompany;