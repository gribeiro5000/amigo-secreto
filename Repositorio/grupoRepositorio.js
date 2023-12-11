const Grupo = require("../Models/grupos")

class GrupoRepositorio {
    getAll() {
        const response = Grupo.findAll()
        .then((data) => {
            return data
        }).catch((error) => {
            return error
        })
        return response
    }

    get(id) {
        const response = Grupo.findOne({
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
        const response = Grupo.create({
            nome: data.nome,
            local: data.local,
            precoMax: data.precoMax,
            prexoMin: data.precoMin,
            dataSorteio: data.dataSorteio,
            observacao: data.observacao
        }).then((response) => {
            return response
        }).catch((error) => {
            return error
        })
        return response
    }

    update(data, id) {
        const response = Grupo.update(data, {
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
        const response = Grupo.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return "grupo deletado com sucesso"
        }).catch(error => {
            return error
        })
        return response
    }
}

module.exports = new GrupoRepositorio