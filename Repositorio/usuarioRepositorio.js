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
}

module.exports = new UsuarioRepositorio