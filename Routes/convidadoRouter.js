const express = require('express')
const convidadoRouter = express.Router()
const convidadoController = require('../Controllers/convidadoController.js')


convidadoRouter.get('/convidado', convidadoController.readAll)
convidadoRouter.get('/convidado/:id', convidadoController.readOne)
convidadoRouter.post('/convidado', convidadoController.create)
convidadoRouter.put('/convidado/:id', convidadoController.update)
convidadoRouter.delete('/convidado/:id', convidadoController.delete)

module.exports = convidadoRouter