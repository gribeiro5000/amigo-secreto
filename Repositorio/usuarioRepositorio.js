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

    getOne(id) {
        const response = usuario.findOne({where: { id: id }}).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })

        return response
    }

    createUser(body){
        let novo_usuario = {
            nome: body.nome,
            email: body.email,
            senha: body.senha,
            celular: body.celular,
        }

        const response = usuario.create(novo_usuario).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })

        return response
    }

    updateUser(data, id){
        let updatedUsuario = {
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            celular: data.celular,
        };

        const response = usuario.update(updatedUsuario, {where: { id: id }}).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })

        return response
    }

    deleteUser(id){
        const response = usuario.destroy({where: {id: id}}).then(data =>{
            return data
        }).catch(err =>{
            console.log(err)
        })
        return response
    }
    }


module.exports = new UsuarioRepositorio