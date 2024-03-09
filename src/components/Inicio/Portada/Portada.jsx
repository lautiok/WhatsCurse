import React from 'react'
import './PortadaModule.css'
import logoblanco from '/imagenes/logo-blanco.png'

export const Portada = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <img src={logoblanco} alt="logo de la empresa" />
                <h1>WhatsCurse</h1>
            </div>
        </div>
    )
}
