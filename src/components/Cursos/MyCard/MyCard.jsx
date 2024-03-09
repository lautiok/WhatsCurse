import React, { useState, useEffect } from 'react';
import cursosData from '../../../data/curso.json';
import './MyCardModule.css';

export const MyCard = () => {
    const [cursos, setCursos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

    useEffect(() => {
        setCursos(cursosData);
    }, []);

    const handleCategoriaChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    const filtrarCursosPorCategoria = () => {
        if (categoriaSeleccionada === 'Todos') {
            return cursos;
        } else {
            return cursos.filter(curso => curso.categoria === categoriaSeleccionada);
        }
    };

    return (
        <div className="cursos-container">
            <h2>Cursos</h2>
            <div className="categorias">
                <button onClick={() => handleCategoriaChange('Todos')}>Todos</button>
                <button onClick={() => handleCategoriaChange('programacion')}>Programación</button>
                <button onClick={() => handleCategoriaChange('marketing y publicidad')}>Marketing y publicidad</button>
                <button onClick={() => handleCategoriaChange('ofimatica')}>Ofimática</button>
                <button onClick={() => handleCategoriaChange('salud y belleza')}>Salud y belleza</button>
                <button onClick={() => handleCategoriaChange('mucho mas')}>Mucho más</button>
            </div>
            <div className="cursos">
                {filtrarCursosPorCategoria().map(curso => (
                    <div key={curso.id} className="card">
                        <img src={curso.imagen} alt={curso.nombre} />
                        <h3>{curso.nombre}</h3>
                        <a href={curso.url} target="_blank" rel="noopener noreferrer">Más información</a>
                    </div>
                ))}
            </div>
        </div>
    );
};
