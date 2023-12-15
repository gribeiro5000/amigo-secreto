const express = require('express')
const app = express()
const createDatabase = require('../Database/create.js')
const modelSync = require('../Models/modelSync.js')
const usuarioRouter = require('../Routes/usuarioRoutes.js')
const grupoRouter = require('../Routes/grupoRouter.js')
const listaDeDesejosRouter = require('../Routes/listaDeDesejosRoutes.js')
const convidadoRouter = require('../Routes/convidadoRouter.js')
const loginRouter = require('../Routes/loginRouter.js')
const authorization = require('../Controllers/authorizationController.js')


app.use(express.json())

createDatabase().then(() => {
    modelSync()
})

app.use(loginRouter)
app.use(usuarioRouter)
app.use(authorization.logado,grupoRouter)
app.use(authorization.logado, listaDeDesejosRouter)
app.use(authorization.logado,convidadoRouter)





module.exports = app