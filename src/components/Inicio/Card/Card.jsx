import { useState, useEffect } from 'react';
import cursosData from '../../../data/curso.json';
import './cardModule.css';

export const Card = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const sortedCursos = cursosData.sort((a, b) => b.id - a.id);
        const ultimosCursos = sortedCursos.slice(0, 6);
        setCursos(ultimosCursos);
    }, []);

    return (
        <div className="cursos-container">
            <h2>Últimos Cursos</h2>
            <div className='cursos'>
                {cursos.map(curso => (
                    <div key={curso.id} className="card">
                        <img src={curso.imagen} alt={curso.nombre} />
                        <h3>{curso.nombre}</h3>
                        <a href={curso.url} target="_blank">Más información</a>
                    </div>
                ))}
            </div>
        </div>
    );
};
