import React from 'react'
import'./estilosTrabajos.css' 
import cancion from './Archivos/cancionEquipos.mp3'
import imagen from './Archivos/papeloteImagen.jpeg'

export const Papelote = () => {
    return (
    <div>
        <h1 className='titulosTRABAJO'>ATRAPADOS EN LA OBRERA</h1>
        <br />
        <h2>PAPELOTE</h2>

        <div className='TRABAJOSCUERPO'>
            
            <p>En esta actividad trabajamos en equipo para realizar una cartulina en la que debíamos incluir el nombre de nuestro grupo. Decidimos ponerle un nombre cómico, como si fuera una banda: “Atrapados en la Obrera”, lo que nos permitió divertirnos desde el inicio y reflejar nuestro sentido del humor.

    Además de la cartulina, creamos una canción que expresara los sentimientos que experimentamos durante la actividad. La canción siguió un estilo avanzada regia, lo que hizo la actividad más creativa y entretenida.

    Aunque fue un reto, especialmente porque solo tuvimos dos días para completarla, la experiencia resultó muy divertida y enriquecedora. La combinación de trabajo en equipo, creatividad y música hizo que la actividad fuera dinámica y memorable para todos los integrantes.

    Conclusión: Trabajar en equipo permite combinar habilidades y creatividad, y aunque el tiempo fue limitado, logramos cumplir con la actividad y disfrutar el proceso.</p>

            <img src={imagen} alt="Trabajo en quipo" />
            <br />
            <audio controls src={cancion}> </audio>
            
        </div>    
    </div>
    )
}
