const ListaDeDesejos = require('./listaDeDesejos.js')
const Usuario = require('./usuario.js')
const Grupo = require('./grupos.js')
const Convidado = require("./convidado.js")

function modelSync(){
    Usuario.sync()
    Grupo.sync()
    ListaDeDesejos.sync()
    Convidado.sync()
}

module.exports = modelSync