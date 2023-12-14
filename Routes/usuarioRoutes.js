const express = require('express')
const usuarioRouter = express.Router()
const UsuarioController = require('../Controllers/usuarioController.js')
const returnError = require('../Error_Handler/errorHandler.js')
const verificaCamposMiddleware = require('../Error_Handler/verificaCamposMiddleware.js')



usuarioRouter.get("/usuarios", UsuarioController.readAll)
usuarioRouter.get("/usuarios/:id", UsuarioController.readOne)
usuarioRouter.post("/usuarios", verificaCamposMiddleware("nome", "email", "senha"), UsuarioController.insert)
usuarioRouter.put("/usuarios/:id", UsuarioController.update)
usuarioRouter.delete("/usuarios/:id", UsuarioController.delete)

usuarioRouter.use(returnError)


module.exports = usuarioRouter

