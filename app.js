const express = require('express')
const app = express()
const createDatabase = require('./create.js')
const router = require('./routes.js')


createDatabase()

app.use(router)




module.exports = app