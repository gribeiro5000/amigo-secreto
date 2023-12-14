const UsuarioRepositorio = require('../Repositorio/usuarioRepositorio.js')
const Api404Error = require('../Error_Handler/Api404Error.js');

class UsuarioController {

    async readAll(req, res, next){
        try {
            const rows = await UsuarioRepositorio.getAll()
            if(rows.length > 0){
                res.status(200).send(rows)   
            } else {
                throw new Api404Error('usuários não encontrado')
            }
        }catch(error) {
            next(error)
        }
    }

    async readOne(req, res, next) {
        try {
            const rows = await UsuarioRepositorio.getOne(req.params.id)
            if(rows){
                res.status(200).send(rows)
            }else{
                throw new Api404Error('Usuário não encontrado')
            }
        } catch(error) {
            next(error)
        } 
    }

    async insert(req, res, next){
        try{
            const rows = await UsuarioRepositorio.createUser(req.body)
            res.status(200).send(rows)
        }catch(error) {
            next(error)
        }
    }

    async update(req, res, next){
        try{
            const row = await UsuarioRepositorio.updateUser(req.body, req.params.id)
            if(row[0] == 1){
                res.status(404).send("Usuario atualizado com sucesso!")
            } else {
                throw new Api404Error('Usuário não encontrado')
            }
        }catch(error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try{
            const row = await UsuarioRepositorio.deleteUser(req.params.id)
            if (row) {
                res.status(200).send("Usuário deletado com sucesso");
            } else {
                throw new Api404Error('usuário não encontrado')
            }
        }catch(error) {
            next(error)
        }
    }
}



module.exports = new UsuarioController