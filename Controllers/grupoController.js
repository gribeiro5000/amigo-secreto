const grupoRepositorio = require("../Repositorio/grupoRepositorio")
const Api404Error = require("../Error_Handler/Api404Error.js")

class GrupoController {
    async readAll(req, res, next) {       
        try{
            const rows = await grupoRepositorio.getAll()
            if(rows.length > 0) {
                res.status(200).send(rows)
            }else {
                throw new Api404Error('nenhum grupo encontrado')
            }
        }catch(error){
            next(error)
        }
    }

    async readOne(req, res, next) {
        try{
            const row = await grupoRepositorio.get(req.params.id)
            if(row){
                res.status(200).send(row)
            } else {
                throw new Api404Error(`grupo do id: ${req.params.id} não encontrado`)
            }
        }catch(error){
            next(error)
        }     
    }

    async create(req, res, next) {
        try {
            const row = await grupoRepositorio.insert(req.body)
            res.status(200).send('grupo criado com sucesso!')
        }
        catch(error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try{
            const row = await grupoRepositorio.update(req.body, req.params.id)
            if(row[0] == 1){
                res.status(200).send('grupo atualizado com sucesso')
            } else {
                throw new Api404Error(`grupo do id: ${req.params.id} não encontrado`)
            }
        }catch(error){
            next(error)
        }
    }

    async delete(req, res, next) {
        try{
            const row = await grupoRepositorio.delete(req.params.id)
            if(row) {
                res.status(200).send('grupo excluído com sucesso')
            } else {
                throw new Api404Error(`grupo do id: ${req.params.id} não encontrado`)
            }
        }catch(error){
            next(error)
        }
    }
}

module.exports = new GrupoController