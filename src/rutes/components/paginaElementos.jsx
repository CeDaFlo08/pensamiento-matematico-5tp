import React from 'react'
import'./estilospaginas.css'
import FotoEquipo from '../components/EQUIPO.jpg'


//BARRA DE NAVEGACION 
export function BarraNav() {
    return (
        <div className='barra'>
            <div className='titulos'>
                <h1>Atrapados en la obrera</h1>
                <br />
                <h4>Pensamiento Metematico</h4>
            </div>
            
            <div>
                <a href="#NosotrosSomos">Nosotros somos...</a>
                <a href="#integrantesID">Integrantes</a>
                <a href="#ObjetivosSeccion">Objetivos</a>
                <a href="">Trabajos</a>
            </div>
        </div>
    );
}

//NOSOTROS SOMOS... 
export function AboutUs () {
    return (
        <div id='NosotrosSomos' >
            <div className='textoContenido'> 
            <h1>Nosotros somos...</h1>
            <br />
            <p>Un grupo de jóvenes motivados a usar el pensamiento lógico y matemático como herramienta principal para enfrentar y resolver múltiples problemas de la vida cotidiana. Creemos que las matemáticas no solo se limitan al aula, sino que son una parte esencial de nuestro entorno, y que aplicándolas de manera correcta podemos comprender mejor el mundo que nos rodea.

A través del método científico buscamos poner a prueba nuestras habilidades, fortalecer nuestros conocimientos y desarrollar nuevas formas de razonar. De esta manera, cada reto que enfrentamos se convierte en una oportunidad de aprendizaje que nos permite crecer tanto académica como personalmente durante el curso.</p>
            </div>

        </div>
    )

}

//INTEGRANTES
export function Integrantes (){
    return (
        <div id='integrantesID' className='textos'>
            <div>
            <h1>Integrantes:</h1>
            <ul>
                <li>Cesar David Flores Moreno</li>
                <li>Arinda Danae Rosales Solis</li>
                <li>Allison Jaquelyne Venegas Blanco</li>
                <li>Santiago Navarro Nuñez</li>
                <li>Dibanhi Nuñez Camacho </li>
            </ul>
            </div>
                        <div className='imagenEquipo'>
                <img src={FotoEquipo} alt="EquipoIntegrantes"  />
            </div>

        </div>

    )

}

//objetivos
export function Objetivos () {
    return (
        <div id='ObjetivosSeccion'>
            <div className='textoContenido'> 
            <h1>Objetivos</h1>
            <br />
                <p>
                    Tenemos como objetivo cumplir todos nuestras actividades mediante el metodolo cientifico.
                    Las cuales nos dejaran aprendizaje y comprobaremos teorias las cuales podremos apreciar tanto en formulas como en la vida real.              </p>
            </div>

        </div>
    )

}
