const express = require('express')
const app = express()
const createDatabase = require('../Database/create.js')
const modelSync = require('../Models/modelSync.js')
const usuarioRouter = require('../Routes/usuarioRoutes.js')


app.use(express.json())
createDatabase()
modelSync()

app.use(usuarioRouter)




module.exports = app