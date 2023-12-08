const UsuarioRepositorio = require('../Repositorio/usuarioRepositorio.js')

class UsuarioController {

    async readAll(req, res){
        const rows = await UsuarioRepositorio.getAll()
        res.status(200).send(rows)
    }

}

module.exports = new UsuarioController