import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




function FormCompany() {
    const [email, setEmail] = useState("");
    const [nameCompany, setNameCompany] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



        if (email.trim() === "") tempErrors.email = "El campo email es obligatorio";
        if (!emailRegex.test(email)) tempErrors.email = "Por favor, introduce un correo electrónico válido.";
        if (nameCompany.trim() === "") tempErrors.nameCompany = "El campo nombre de empresa es obligatorio";
        if (nameCompany.length < 3) tempErrors.nameCompany = "El nombre debe tener al menos 3 caracteres";  
        if (nameCompany.length > 40) tempErrors.nameCompany = "El nombre no puede tener más de 50 caracteres";  
        if (message.length > 500) tempErrors.message = "El mensaje no puede tener más de 500 caracteres";

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) { 
             console.log({ email, nameCompany, message })
      

        setEmail("");
        setNameCompany("");
        setMessage("");
        setSuccessMessage("¡Gracias por tu confianza, en breve te contactaremos!");
        setIsSubmitted(true); //una vez que se envia el formulario, se cambia el estado de isSubmitted a true "volver a inicio "


        console.log(successMessage)

        }
    };
 
    const handleCancel = () => {
        navigate("/");
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mt-3 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Tarifas especiales</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">¡Bienvenido! Estamos encantados de que estés interesado en nuestras tarifas especiales de reparaciones exclusivas para empresas. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo a la mayor brevedad posible para proporcionarte toda la información que necesitas.</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                {successMessage && <div className="success text-blue-800 font-bold">{successMessage} </div>}
                {isSubmitted && (
                <button
                    onClick={() => navigate("/")}
                    className="inline-flex justify-center items-center px-4 py-2 mt-4 mb-5 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
                >
                    Volver a la página principal
                </button>
            )}
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
                            {errors.email && <div className="error flex flex-row mb-3"><p className="text-red-600 text-xs flex">{errors.email} </p></div>}  
                    </div>
                    <div>
                        <label htmlFor="nameCompany" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de empresa</label>
                        <input 
                        type="text" 
                        id="nameCompany" 
                        value={nameCompany}
                        onChange={(e) => setNameCompany(e.target.value)}
                        className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                         placeholder="nombre o NIF" 
                         required />
                         {errors.nameCompany && <div className="error flex flex-row mb-3"><p className="text-red-600 text-xs flex">{errors.nameCompany} </p></div>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-gray-400">Algo que quieras comentarnos?</label>
                        <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message" 
                        rows="6" 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Comentanos aqui"></textarea>
                        {errors.message && <div className="error flex flex-row mb-3"><p className="text-red-600 text-xs flex">{errors.message} </p></div>}
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