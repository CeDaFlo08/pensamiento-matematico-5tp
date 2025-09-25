import React from 'react'
import'./estilosTrabajos.css' 
import captura from './Archivos/CAPTURAweb.png'


export const Proyectoweb = () => {
    return (
    <div>
        <h1 className='titulosTRABAJO'>ATRAPADOS EN LA OBRERA</h1>
        <br />
        <h2>ProyectoWeb</h2>

        <div className='TRABAJOSCUERPO'>
            
            <p>Como parte de las actividades en equipo, decidimos crear una página web llamada “Atrapados en la Obrera”, que tiene como propósito almacenar y mostrar los trabajos que vamos realizando durante el curso.

La idea surgió de la necesidad de tener un espacio organizado y accesible donde podamos recopilar nuestras actividades, reportes, canciones, videos e imágenes, de manera que no solo quede como evidencia de lo trabajado, sino también como un proyecto creativo y colaborativo.

La página está diseñada con un estilo dinámico y sencillo de navegar, con secciones que permiten visualizar cada uno de los proyectos de forma clara. Además, incluye recursos multimedia como imágenes, audio y video, lo que hace que la experiencia sea más interactiva y atractiva.

Aunque fue un reto estructurarla, especialmente porque tuvimos que aprender a integrar varios elementos (texto, estilos, multimedia y rutas en React), la experiencia resultó enriquecedora. Nos permitió aplicar creatividad, aprender nuevas herramientas tecnológicas y fortalecer el trabajo en equipo.

Conclusión:
La creación de esta página no solo funciona como un repositorio digital de nuestros trabajos, sino también como un ejemplo del esfuerzo y la colaboración del equipo. “Atrapados en la Obrera” refleja nuestra capacidad para organizarnos, adaptarnos y darle un toque divertido y original a nuestras actividades escolares.</p>

            <img src={captura} alt="Trabajo en quipo" />
            <br />
            
        </div>    
    </div>
    )
}