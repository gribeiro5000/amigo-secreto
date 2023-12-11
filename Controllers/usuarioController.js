const UsuarioRepositorio = require('../Repositorio/usuarioRepositorio.js')
const usuario = require('../Models/usuario.js');
const usuarioRepositorio = require('../Repositorio/usuarioRepositorio.js');

class UsuarioController {

    async readAll(req, res){
        const rows = await UsuarioRepositorio.getAll()
        res.status(200).send(rows)
    }

    async readOne(req, res) {
        const rows = await UsuarioRepositorio.getOne(req.params.id)
        if(rows){
            res.status(200).send(rows)
        }else{
            res.status(404).send("não encontrado")
        }   
    }

    async insert(req, res){
        const rows = await UsuarioRepositorio.createUser(req.body)

        if(rows){
            res.status(200).send(rows)
        }else{
            res.status(404).send("Erro! verifique os campos: nome, email e senha")
        } 
    }

    async update(req, res){
        await usuarioRepositorio.updateUser(req.body, req.params.id)
        res.status(404).send("Usuario atualizado com sucesso!")
    }

    async delete(req, res){
        const rows = await usuarioRepositorio.deleteUser(req.params.id)
        if (rows) {
            res.status(200).send("Usuário deletado com sucesso");
        } else {
            res.status(404).send("Erro! Usuário não encontrado");
        }

    }
}



module.exports = new UsuarioController