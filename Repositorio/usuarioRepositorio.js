const usuario = require('../Models/usuario.js')

class UsuarioRepositorio {
    getAll(){
        const response = usuario.findAll().then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })
        
        return response
    }

    getOne(req, res) {
        let id = req.params.id
        const response = usuario.findOne({where: { id: id }}).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })

        return response
    }

    createUser(req, res){
        let novo_usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            celular: req.body.celular,
        }

        const response = usuario.create(novo_usuario).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })

        return response
    }

    updateUser(req, res){
        let id = req.params.id

        let updatedUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            celular: req.body.celular,
        };

        const response = usuario.update(updatedUsuario, {where: { id: id }}).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })

    }

    deleteUser(req, res){
        let id = req.params.id

        const response = usuario.destroy({where: {id: id}}).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })
        return response
    }
    
    }


module.exports = new UsuarioRepositorio