const express = require('express')
const router = express.Router()
const UsuarioController = require('../Controllers/usuarioController.js')
const usuarioController = require('../Controllers/usuarioController.js')



router.get("/usuarios", UsuarioController.readAll)
router.get("/usuarios/:id", UsuarioController.readOne)

router.post("/usuarios", UsuarioController.insert)

router.put("/usuarios/:id", usuarioController.update)

router.delete("/usuarios/:id", usuarioController.delete)



module.exports = router

