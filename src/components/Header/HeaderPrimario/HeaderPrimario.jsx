import React from 'react'
import './Headerprim.css'
import logonaranja from '/imagenes/logo-naranja.png'
import { Link } from 'react-router-dom'

export const HeaderPrimario = () => {
    return (
        <div className='header-prim'>
            <img className='logo-prim' src={logonaranja} alt="Logo de la empresa" />
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/cursos">Cursos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
            <div className="redes-sociales">
                <a href="https://www.instagram.com/" target="_blank"><i className="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i className="bi bi-facebook"></i></a>
            </div>
        </div>
    )
}
