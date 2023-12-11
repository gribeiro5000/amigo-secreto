const ListaDeDesejos = require('./listaDeDesejos.js')
const Usuario = require('./usuario.js')

function modelSync(){
    Usuario.sync()
    ListaDeDesejos.sync()
}

module.exports = modelSync