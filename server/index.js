const { conexion } = require ("./basedatos/conexion.js");
const express = require("express");  //mandamos llamar la libreria de express
const cors = require("cors");
const path = require("path");



console.log ("APP de node arrancada,") ;

conexion();

//app es el nombre de la variable donde se va a guardar la ejecucion del programador
const app = express();
const puerto = 3900;

// Servir archivos de la carpeta uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//configuracion del cors
app.use(cors());

//convertir body a objeto js
app.use(express.json()); //recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})); //recibo de datos por from-urlencoded

//crear rutas
const rutas_articulo = require ("./rutas/articulo.js");
//cargo las rutas
app.use ("/api",rutas_articulo);
app.use ("/probando",(req, res) => {
    console.log("se ha ejecutado el log probando. ");
    return res.status(200).send({
        clase : "Bases de datos no relacionales",
        profe : "Demetrio Candelaria",
        url : "demetrioCandelaria.es/clases"
    })
});


//crear un servidor y escuchar peticiones 
app.listen (puerto, () => {
    console.log("servidor corriendo en el puerto: " + puerto);
});