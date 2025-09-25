import React from 'react'
import { BarraNav } from './components/paginaElementos';
import { AboutUs } from './components/paginaElementos';
import { Objetivos } from './components/paginaElementos';
import { Integrantes } from './components/paginaElementos';
import { TrabajosComponente } from './components/trabajosComponente';

export default function Inicio() {
    return (
        <div>
            <BarraNav />
            <AboutUs />
            <Integrantes/>
            <Objetivos />
            <TrabajosComponente/>

        </div>

    );
}
