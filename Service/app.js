const express = require('express')
const app = express()
const createDatabase = require('../Database/create.js')
const modelSync = require('../Models/modelSync.js')
const usuarioRouter = require('../Routes/usuarioRoutes.js')
const grupoRouter = require('../Routes/grupoRouter.js')
const listaDeDesejosRouter = require('../Routes/listaDeDesejosRoutes.js')


app.use(express.json())

createDatabase().then(() => {
    modelSync()
})

app.use(usuarioRouter)
app.use(grupoRouter)
app.use(listaDeDesejosRouter)




module.exports = app