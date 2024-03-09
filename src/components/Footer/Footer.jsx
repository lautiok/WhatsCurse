import React from 'react'
import './FooterModule.css'
import logoblanco from '../../../public/imagenes/logo-blanco.png'

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <img src={logoblanco} alt="footer" />
            </div>
            <div className='footer-reservados'>
                <p>© 2024 WhatsCurse. Todos los derechos reservados, design by: <a href="https://nahuelguerra.com.ar" target="_blank">Nahuel Guerra</a></p>
            </div>
        </footer>
    )
}
