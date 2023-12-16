const express = require('express')
const loginRouter = express.Router()
const usuarioController = require('../Controllers/usuarioController')

loginRouter.post("/login", usuarioController.login)

module.exports = loginRouter