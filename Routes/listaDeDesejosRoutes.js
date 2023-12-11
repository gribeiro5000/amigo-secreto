const express = require('express')
const listaDeDesejosController = require('../Controllers/listaDeDesejosController')
const listaDeDesejosRouter = express.Router()

listaDeDesejosRouter.get('/listadedesejos', listaDeDesejosController.readAll)
listaDeDesejosRouter.get('/listadedesejos/:id', listaDeDesejosController.readOne)
listaDeDesejosRouter.post('/listadedesejos', listaDeDesejosController.create)
listaDeDesejosRouter.put('/listadedesejos/:id', listaDeDesejosController.update)
listaDeDesejosRouter.delete('/listadedesejos/:id', listaDeDesejosController.delete)

module.exports = listaDeDesejosRouter