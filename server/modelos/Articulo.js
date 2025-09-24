//DEEFINIMOS EL ESQUEMA DE LA db
const { Schema, model } = require ("mongoose");

//aqui crearemos nuestra esquema
const ArticuloSchema = Schema ({

titulo: {
    type: String,
    required: true
},

contenido : {
    type: String,
    required: true
},

fecha : {
    type: Date,
    default: Date.now
},

evidencia : [{
    nombreArchivo: String,
    tipo: String,
    url: String
}]
});

module.exports = model ( "Articulo" , ArticuloSchema , "articles" );
