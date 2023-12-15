const express = require('express')
const usuarioRouter = express.Router()
const UsuarioController = require('../Controllers/usuarioController.js')
const returnError = require('../Error_Handler/errorHandler.js')
const verificaCamposMiddleware = require('../Error_Handler/verificaCamposMiddleware.js')
const autenticacao = require('../Auth/autenticacao.js')



usuarioRouter.get("/usuarios", autenticacao.autenticacao, UsuarioController.readAll)
usuarioRouter.get("/usuarios/:id", autenticacao.autenticacao, UsuarioController.readOne)
usuarioRouter.post("/usuarios", verificaCamposMiddleware("nome", "email", "senha"), UsuarioController.insert)
usuarioRouter.put("/usuarios/:id", autenticacao.autenticacao, UsuarioController.update)
usuarioRouter.delete("/usuarios/:id", autenticacao.autenticacao, UsuarioController.delete)

usuarioRouter.use(returnError)


module.exports = usuarioRouter

