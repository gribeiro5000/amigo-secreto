const grupoRepositorio = require("../Repositorio/grupoRepositorio")

class GrupoController {
    async readAll(req, res) {
        const rows = await grupoRepositorio.getAll()
        res.status(200).send(rows)
    }

    async readOne(req, res) {
        const row = await grupoRepositorio.get(req.params.id)
        res.status(200).send(row)
    }

    async create(req, res) {
        try {
            const row = await grupoRepositorio.insert(req.body)
            res.status(201).send(row)
        }
        catch(error) {
            console.log(error)
        }
    }

    async update(req, res) {
        const row = await grupoRepositorio.update(req.body, req.params.id)
        res.status(200).send(row)
    }

    async delete(req, res) {
        const row = await grupoRepositorio.delete(req.params.id)
        res.status(200).send(row)
    }
}

module.exports = new GrupoController