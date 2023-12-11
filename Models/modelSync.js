const ListaDeDesejos = require('./listaDeDesejos.js')
const Usuario = require('./usuario.js')
const Grupo = require('./grupos.js')

function modelSync(){
    Usuario.sync()
    Grupo.sync()
    ListaDeDesejos.sync()
}

module.exports = modelSync