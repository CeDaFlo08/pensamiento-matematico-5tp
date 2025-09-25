import React from 'react'
import'./estilosTrabajos.css' 
import cancion from './Archivos/cancionEquipos.mp3'
import imagen from './Archivos/papeloteImagen.jpeg'
import video from './Archivos/videosube.mp4'


export const Subebaja = () => {
    return (
    <div>
        <h1 className='titulosTRABAJO'>ATRAPADOS EN LA OBRERA</h1>
        <br />
        <h2>SUBE Y BAJA</h2>

        <div className='TRABAJOSCUERPO'>
            
            <p>Tanto el borrador como el triángulo que sostiene el sube y baja funcionan como un eje, cuya función principal es soportar el peso. La regla, al igual que el tubo de metal, sirve para colocar objetos pesados en cada extremo con el objetivo de encontrar un punto de equilibrio.

Como podemos observar en la imagen, hay dos personas en cada extremo del tubo de metal, y la barra está apoyada en el centro sobre un tubo que actúa como punto de estabilización. Cuando se colocan dos pesos, ya sean iguales o diferentes, el tubo de metal se inclina hacia el lado con mayor peso. Si los pesos son iguales, el tubo de metal queda perfectamente balanceado.

En esta actividad replicamos la misma situación del sube y baja, pero utilizando una regla. En esta ocasión, el punto de apoyo fue un borrador, y en cada extremo de la regla colocamos monedas de diferentes denominaciones hasta lograr que la regla se equilibrara correctamente.

Una vez balanceada la regla, probamos diferentes maneras de mantener el equilibrio. Por ejemplo, colocamos las monedas a distintas distancias del punto de apoyo y observamos que también es posible balancear la regla aunque los pesos de los extremos sean diferentes o estén distribuidos a distintas distancias, como se aprecia en la imagen.

Conclusión: cualquier objeto puede ser balanceado, siempre y cuando se encuentre la distancia correcta respecto al punto de apoyo para lograr el equilibrio.

Referencia: video que muestra cómo se logra balancear la regla con pesos diferentes en cada extremo.</p>
        <video className="videoTrabajo" controls>
                <source src={video} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>    
    </div>
    )
}
