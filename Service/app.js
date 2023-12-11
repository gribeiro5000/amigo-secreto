const express = require('express')
const app = express()
const createDatabase = require('../Database/create.js')
const modelSync = require('../Models/modelSync.js')
const router = require('../Routes/routes.js')
const grupoRouter = require('../Routes/grupoRouter.js')


app.use(express.json())

createDatabase().then(() => {
    modelSync()
})

app.use(router)
app.use(grupoRouter)




module.exports = app