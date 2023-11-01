import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function FormClient() {
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [estadoEquipo, setEstadoEquipo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ marca, modelo, nombre, apellido, correo, estadoEquipo });
    }

    return (
        <div className="container mt-5 col-6">
            <h2 className="text-center">Formulario de Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="marca" className="form-label">Marca</label>
                    <select className="form-select" id="marca" aria-label="Default select example" value={marca} onChange={(e) => setMarca(e.target.value)}>
                        <option defaultValue>Selecciona una marca</option>
                        <option value="1">Marca 1</option>
                        <option value="2">Marca 2</option>
                        <option value="3">Marca 3</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="modelo" className="form-label">Modelo</label>
                    <select className="form-select" id="modelo" aria-label="Default select example" value={modelo} onChange={(e) => setModelo(e.target.value)}>
                        <option defaultValue>Selecciona un modelo</option>
                        <option value="1">Modelo 1</option>
                        <option value="2">Modelo 2</option>
                        <option value="3">Modelo 3</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="correo" placeholder="nombre@ejemplo.com" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="estadoEquipo" className="form-label">Estado del equipo</label>
                    <textarea className="form-control" id="estadoEquipo" rows="5" value={estadoEquipo} onChange={(e) => setEstadoEquipo(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default FormClient;