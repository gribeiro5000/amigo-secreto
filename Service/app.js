const express = require('express')
const app = express()
const createDatabase = require('../Database/create.js')
const modelSync = require('../Models/modelSync.js')
const router = require('../Routes/routes.js')
const listaDeDesejosRouter = require('../Routes/listaDeDesejosRoutes.js')


app.use(express.json())
createDatabase()
modelSync()

app.use(router)
app.use(listaDeDesejosRouter)




module.exports = app