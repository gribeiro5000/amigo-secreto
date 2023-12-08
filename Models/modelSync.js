const Usuario = require('./usuario.js')

function modelSync(){
    Usuario.sync()
}

module.exports = modelSync