const express = require('express')
const router = express.Router()
const UsuarioController = require('../Controllers/usuarioController.js')



router.get("/usuario", UsuarioController.readAll)




module.exports = router

