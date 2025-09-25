import React from 'react';
import './estilospaginas.css';

export const TrabajosComponente = () => {

    //trabajo1
    function abrirPapelote() {
        window.open(
            '/papelote',                // Ruta definida en App.jsx
            '_blank',                   // Nueva ventana/pestaña
            'width=500,height=800,scrollbars=yes'
        );
    }
    
    //trabajo2
    function abrirSubeyBaja() {
        window.open(
            '/subeYbaja',                // Ruta definida en App.jsx
            '_blank',                   // Nueva ventana/pestaña
            'width=500,height=800,scrollbars=yes'
        );
    }


    return (
        <section id='TrabajosSECCION'>
            <h1 className='titulos'>TRABAJOS REALIZADOS</h1>
            <div className='trabajosSeccionLinks'>

                <button onClick={abrirPapelote}>PAPELOTE</button>
                <button onClick={abrirSubeyBaja}>SUBE Y BAJA</button>
            </div>
        </section>
    );
};
