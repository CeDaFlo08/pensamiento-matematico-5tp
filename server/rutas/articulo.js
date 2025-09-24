const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const ArticuloControlador = require("../controladores/articulo.js");

// Configuración de multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });


// Revisa que esto imprima funciones
console.log("ArticuloControlador:", ArticuloControlador);

//router.get("/ruta-de-prueba", ArticuloControlador.prueba);
router.post("/crear", upload.array("archivos", 5), ArticuloControlador.crear);

router.get("/ListarOrden", ArticuloControlador.listarOrden);
router.get("/Listar", ArticuloControlador.listar);
router.post("/eliminar", ArticuloControlador.eliminar);
router.post("/update",ArticuloControlador.update);

module.exports = router;
