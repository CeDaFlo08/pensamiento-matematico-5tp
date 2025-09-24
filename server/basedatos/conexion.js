const mongoose = require("mongoose");
const { __esModule } = require("validator/lib/isFloat");

const conexion = async () => {
    try {

        await mongoose.connect ("mongodb://localhost:27017/pensamiento_matematico_5to");
        console.log("CONECTADO A LA BASE DE DATOS");

    }catch (error) { 
        console.log("CONECTADO A LA BASE DE DATOS");
        throw new Error ("NO SE HA CONECTADO A LA BASE DE DATOS");
    }

}

module.exports  = {
    conexion
}
