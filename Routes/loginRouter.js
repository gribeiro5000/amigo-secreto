const express = require('express')
const loginRouter = express.Router()
const loginController = require('../Controllers/loginController')

loginRouter.get("/login", loginController.login)

module.exports = loginRouter