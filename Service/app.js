const express = require('express')
const app = express()
const createDatabase = require('../Database/create.js')
const modelSync = require('../Models/modelSync.js')
const router = require('../Routes/routes.js')


app.use(express.json())
createDatabase()
modelSync()

app.use(router)




module.exports = app