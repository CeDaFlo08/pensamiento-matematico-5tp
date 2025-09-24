const validator= require("validator");
const Articulo = require("../modelos/Articulo")
import multer from "multer";
import path from "path";

//MULTER PARA GUARDAR ARCHIVOS PRUEBAS
    const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads"); // carpeta del servidor
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
    });

const upload = multer({ storage: storage });


const prueba = (req, res) => {

    return res.status(200).send({
        mensaje: "Mensaje de prueba"
    });
};

const curso = (req, res) => {
    return res.status(200).send({
        clase: "Bases de datos no relacionales",
        profe: "Demetrio Candelaria",
        url: "demetrioCandelaria.es/clases"
    });
};

const crear = async (req, res) => {
    let parametros = req.body;

    // Manejar archivos subidos con multer
    let archivosSubidos = [];
    if (req.files) {
        archivosSubidos = req.files.map(file => ({
            nombre: file.originalname,
            ruta: `/uploads/${file.filename}`  // Ruta accesible desde el navegador
        }));
    }

    try {
        // Validaciones
        let validar_titulo = !validator.isEmpty(parametros.titulo) 
                            && validator.isLength(parametros.titulo, { min: 5 });
        let validar_contenido = !validator.isEmpty(parametros.contenido);
        let validar_archivos = !validator.isEmpty(parametros.archivos);

        if (!validar_titulo || !validar_contenido) {
            throw new Error("No se ha validado la información");
        }

        // Crear objeto artículo
        const articulo = new Articulo({
            titulo: parametros.titulo,
            contenido: parametros.contenido,
            archivos: archivosSubidos
        });

        const articuloGuardado = await articulo.save();

        return res.status(200).json({
            status: "completado",
            articulo: articuloGuardado,
            mensaje: "Artículo creado con éxito"
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({
            status: "error",
            mensaje: "No se ha guardado el artículo",
            error: error.message
        });
    }
};


const listar =  async (req, res) => {
    try{

    const articulos = await Articulo.find({}).exec(); 
    const cantidadArticulos = await Articulo.countDocuments({});

    if (!articulos || articulos.length === 0 ) {
        return res.status(404).json({
            status: "Error",
            mensaje: "No se ha encontrado ningun articulo"
        });
    }



    return res.status(200).json({
            status: "Estos son tus articulos :D",
            status: "------- SE HAN ENCONTRADO: " + cantidadArticulos + " ARTICULO / S -----------",
            articulos
    });
} catch (error) {
    console.error(error);
    return res.status(500).json ({
        status:"error",
        mensaje: "ERROR al obtener los articulos",
        error: error.message
        });
    }
};

const listarOrden =  async (req, res) => {
    //SACADO DE APUNTES EL DEL 8 DE ABRIL DE 2025 EN LA PARTE DE OPERACIONES DE CONSULTA
    try{
    const cantidadArticulos = await Articulo.countDocuments({});
    const OrdenAZ = await Articulo.find({}).sort({ titulo: 1 }).exec(); 
    const OrdenZA = await Articulo.find({}).sort({ titulo: -1 }).exec(); 
    const OrdenViejoANuevo = await Articulo.find({}).sort({ fecha: 1 }).exec(); 
    const OrdenNuevoAViejo = await Articulo.find({}).sort({ fecha: -1 }).exec(); 

    if (!OrdenAZ || OrdenAZ.length === 0 ) {
        return res.status(404).json({
            status: "Error",
            mensaje: "No se ha encontrado ningun articulo yiii troste :c "
        });
    }



    return res.status(200).json({

            status:"------ENCONTRADOS------",
            status: "Estos son tus articulos :D",
            status: "------- SE HAN ENCONTRADO: " + cantidadArticulos + " ARTICULO / S -----------",
            orden1: "--------|| Nuevo a Viejo ||---------",
            OrdenNuevoAViejo,
            orden2: "--------|| Viejo a Nuevo ||--------",
            OrdenViejoANuevo,
            orden3: "--------|| A - Z ||---------",
            OrdenAZ,
            orden4: "--------|| Z - A ||--------",
            OrdenZA

    });
} catch (error) {
    console.error(error);
    return res.status(500).json ({
        status:"error",
        mensaje: "ERROR al obtener los articulos",
        error: error.message
        });
    }
};

const eliminar = async (req, res)  => {
    try {
        let parametros = req.body;
        console.log("Datos recibidos:", parametros);


        let validar_filtro  = !validator.isEmpty(parametros.filtro);
        let validar_texto  = !validator.isEmpty(parametros.texto);

        if (!validar_filtro || !validar_texto ) {
            throw new Error ("No se ha validado la informacion !!");
            }

        const filtro = {  [parametros.filtro] : parametros.texto }


        const articulos = await Articulo.deleteOne(
            filtro
        ); 

    if(articulos.deletedCount === 0) {
            return res.status(404).json({
                status: "error",
                mensaje: "No se encontró el artículo con ese filtro"
            });
        }

        return res.status(200).json({

            mensaje: "----------|| ENCONTRADO ||-----------",
            status: "Eliminado correctamente",
            filtro_Usado: filtro
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json ({
        status:"error",
        status:"no encontre nadota",
        mensaje: "ERROR al obtener el articulo yiii troste :c",
        error: error.message
        });
    }
};

//BETA todavia tiene errores 
const update = async (req, res) => {
    let parametros = req.body;
    console.log("Datos recibidos:", parametros); 
//validar datos
    try{
            let validar_filtro_titulo_contenido  = !validator.isEmpty(parametros.filtro);
            let validar_dato = !validator.isEmpty(parametros.encontrar);
            let validar_Nuevo_dato  = !validator.isEmpty(parametros.Nuevo);
            let validar_filtro_actualizar  = !validator.isEmpty(parametros.filtroActualizar);
            
            if (!validar_filtro_titulo_contenido || !validar_dato   || !validar_Nuevo_dato || !validar_filtro_actualizar) {
                throw new Error ("No se ha validado la informacion !!");
            }
    //creo objetos para usarlos en mi UpdateOne
    const filtro = { [parametros.filtro]: parametros.encontrar };
    const nuevosDatos = { [parametros.filtroActualizar]: parametros.Nuevo };
//COMPRUEBA QUE EN CASO DE QUE SE USE FILTRO DE TITULO TENGA MINIMO 5 CARACTERES 
    if (parametros.filtroActualizar === "titulo" ) {
        
        const titulo_valido = validator.isLength(parametros.Nuevo, {min: 5, max: undefined});

            if (!titulo_valido) {
                return res.status(400).json({
                    status: "error",
                    ERROR : "Se detecto que estas usando el parametro: " + filtroActualizar ,
                    status: "continene menos de 5 caracteres"
                });
            }
    }
    const articuloActualizado = await Articulo.updateOne(
        filtro ,
        nuevosDatos,
        {new: true}

    ); 
    console.log("Parametros recibidos:",parametros)
    console.log("Validacion del filtro:",validar_filtro_titulo_contenido)
    console.log("Validacion del dato:",validar_dato)
    console.log("Validacion del nuevo dato",validar_Nuevo_dato)

    return res.status(200).json({
            status1: "completado",
            status2: "EXCELENTE !!!",
            mensaje: parametros.filtroActualizar + " : " + parametros.Nuevo,
            status3: "Actualizado con EXITO!! :D"
    });
} catch (error) {
    console.error(error);
    return res.status(400).json ({
        status:"error",
        mensaje: "No se ha actualizado el articulo",
        error: error.message
        });
    }
};

module.exports = {
    crear,
    listar,
    listarOrden,
    eliminar,
    update,
    upload 
};