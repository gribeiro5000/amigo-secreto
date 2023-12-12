const Convidado = require("../Models/convidado.js")

class ConvidadoRepositorio {
    getAll() {
        const response = Convidado.findAll()
        .then((data) => {
            return data
        }).catch((error) => {
            return error
        })
        return response
    }

    get(id) {
        const response = Convidado.findOne({
            where: {
                id: id
            }
        }).then(data => {
            return data
        }).catch(error => {
            return error
        })
        return response
    }

    insert(data) {
        const response = Convidado.create({
            UsuarioId: data.UsuarioId,
            GrupoId: data.GrupoId
        }).then((response) => {
            return response
        }).catch((error) => {
            return error
        })
        return response
    }

    update(data, id) {
        const response = Convidado.update(data, {
            where: {
                id: id
            }
        }).then(result => {
            return result
        }).catch(error => {
            return error
        })
        return response
    }

    delete(id) {
        const response = Convidado.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return "Convidado deletado com sucesso"
        }).catch(error => {
            return error
        })
        return response
    }
}

module.exports = new ConvidadoRepositorio