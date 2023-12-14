const express = require('express')
const listaDeDesejosController = require('../Controllers/listaDeDesejosController')
const verificaCamposMiddleware = require('../Error_Handler/verificaCamposMiddleware.js')
const listaDeDesejosRouter = express.Router()

listaDeDesejosRouter.get('/listadedesejos', listaDeDesejosController.readAll)
listaDeDesejosRouter.get('/listadedesejos/:id', listaDeDesejosController.readOne)
listaDeDesejosRouter.post('/listadedesejos', verificaCamposMiddleware("nome"),listaDeDesejosController.create)
listaDeDesejosRouter.put('/listadedesejos/:id', listaDeDesejosController.update)
listaDeDesejosRouter.delete('/listadedesejos/:id', listaDeDesejosController.delete)

module.exports = listaDeDesejosRouter