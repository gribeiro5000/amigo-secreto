const Usuario = require('./usuario.js')
const Grupo = require('./grupos.js')

function modelSync(){
    Usuario.sync()
    Grupo.sync()
}

module.exports = modelSync