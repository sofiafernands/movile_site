import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";

function FormClient() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [state, setState] = useState("");
    const navigate = useNavigate();

    const modelList = {
        "Iphone": ["Iphone 14", "Iphone 14 Plus", "Iphone 14 ProMax", "Iphone 14 Pro", "Iphone 13", "Iphone 13 Pro", "Iphone 13 ProMax",
            "Iphone 13 Mini", "Iphone 12", "Iphone 12 Mini", "Iphone 12 ProMax", "Iphone 12 Pro", "Iphone 11", "Iphone 11 Pro", "Iphone 11 ProMax",
            "Iphone X", "Iphone Xs", "Iphone Xs Max", "Iphone Xr", "Iphone SE", "Iphone 8", "Iphone 8 Plus", "Iphone 7", "Iphone 7 Plus",
            "Iphone 6", "Iphone 6Plus", "Iphone 5"],
        "MacBook": ["MacBook Pro", "MacBook Air", "MacBook"],
        "Samsung": ["Samsung Galaxy S20", "Samsung Galaxy S10", "Samsung Galaxy S9", "Samsung Galaxy S8", "Samsung Galaxy S7", "Samsung Galaxy S6", "Samsung Galaxy S5"],
        "Appel Watch": ["Appel Watch Series 6", "Appel Watch Series 5", "Appel Watch Series 4", "Appel Watch Series 3", "Appel Watch Series 2", "Appel Watch Series 1"],
        "Otros": ["Otros"]
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, email, brand, model, state });

        setName("");
        setEmail("");
        setBrand("");
        setModel("");
        setState("");
    };

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <section className="bg-white dark:bg-gray-900 mt-5 py-5">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl mt-5">¿Necesitas saber cuánto costará la reparación de tu móvil? Estamos aquí para ayudarte. Completa nuestro formulario y recibirás un presupuesto personalizado en breve. Confía en nosotros para una solución asequible y eficaz</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="name"
                                required="" value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email contacto</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="email"
                                required=""
                            />
                        </div>
                        <div>
                            {/* label asociado mediate htmlFor con menu desplegable "brand" */}
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                            <select id="brand"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={brand}
                                onChange={e => setBrand(e.target.value)}>
                                <option value="">Selecciona un marca</option>
                                {/* iteracion sobre las claves "brand" del objeto "modelList" utilizando Object.keys(modeList).map(brand) para obtener un array que contiene todas las claves (propiedades) del objeto llamado "modelList'*/}
                                {Object.keys(modelList).map((brand) => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            {/* select con un mapeo en opciones segun la eleccion de "modelList" */}
                            <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modelo</label>
                            <select id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value={model}
                                onChange={e => setModel(e.target.value)}>
                                <option value="">Selecciona un modelo</option>
                                {modelList[brand]?.map((model) => (
                                    <option key={model} value={model}>{model}</option>
                                ))}
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado del equipo</label>
                            <textarea id="state" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="state del equipo" value={state} onChange={e => setState(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Enviar
                    </button>
                    <button
                        onClick={handleCancel}
                        className="py-2.5 px-5 ml-4 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Cancelar
                    </button>
                </form>
            </div>
        </section>
    );
}

export default FormClient;