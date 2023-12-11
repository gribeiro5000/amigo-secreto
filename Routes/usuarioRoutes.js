const express = require('express')
const usuarioRouter = express.Router()
const UsuarioController = require('../Controllers/usuarioController.js')



usuarioRouter.get("/usuarios", UsuarioController.readAll)
usuarioRouter.get("/usuarios/:id", UsuarioController.readOne)
usuarioRouter.post("/usuarios", UsuarioController.insert)
usuarioRouter.put("/usuarios/:id", UsuarioController.update)
usuarioRouter.delete("/usuarios/:id", UsuarioController.delete)



module.exports = usuarioRouter

