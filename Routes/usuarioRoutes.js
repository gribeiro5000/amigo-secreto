const express = require('express')
const usuarioRouter = express.Router()
const UsuarioController = require('../Controllers/usuarioController.js')
const returnError = require('../Error_Handler/errorHandler.js')
const verificaCamposMiddleware = require('../Error_Handler/verificaCamposMiddleware.js')
const authorization = require('../Controllers/authorizationController.js')



usuarioRouter.get("/usuarios", authorization.logado, UsuarioController.readAll)
usuarioRouter.get("/usuarios/:id", authorization.logado, UsuarioController.readOne)
usuarioRouter.post("/usuarios", verificaCamposMiddleware("nome", "email", "senha"), UsuarioController.insert)
usuarioRouter.put("/usuarios/:id", authorization.logado, UsuarioController.update)
usuarioRouter.delete("/usuarios/:id", authorization.logado, UsuarioController.delete)

usuarioRouter.use(returnError)


module.exports = usuarioRouter

