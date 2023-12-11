const express = require('express')
const grupoRouter = express.Router()
const GrupoController = require('../Controllers/grupoController.js')
const grupoController = require('../Controllers/grupoController.js')

grupoRouter.get('/grupo', GrupoController.readAll)
grupoRouter.get('/grupo/:id', GrupoController.readOne)
grupoRouter.post('/grupo', GrupoController.create)
grupoRouter.put('/grupo/:id', GrupoController.update)
grupoRouter.delete('/grupo/:id', grupoController.delete)

module.exports = grupoRouter