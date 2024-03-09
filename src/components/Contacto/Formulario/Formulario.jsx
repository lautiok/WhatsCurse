import React, { useState } from 'react'
import './FormModule.css'
export const Formulario = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP o realizar cualquier otra acción que desees con los datos.
        console.log(formData);
        // Luego puedes reiniciar el estado del formulario si lo necesitas
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };


    return (
        <div className="container">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
