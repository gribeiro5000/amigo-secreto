const convidadoRepositorio = require("../Repositorio/convidadoRepositorio.js")

class ConvidadoController {
    async readAll(req, res) {
        const rows = await convidadoRepositorio.getAll()
        res.status(200).send(rows)
    }

    async readOne(req, res) {
        const row = await convidadoRepositorio.get(req.params.id)
        res.status(200).send(row)
    }

    async create(req, res) {
        try {
            const row = await convidadoRepositorio.insert(req.body)
            res.status(201).send(row)
        }
        catch(error) {
            console.log(error)
        }
    }

    async update(req, res) {
        const row = await convidadoRepositorio.update(req.body, req.params.id)
        res.status(200).send(row)
    }

    async delete(req, res) {
        const row = await convidadoRepositorio.delete(req.params.id)
        res.status(200).send(row)
    }
}

module.exports = new ConvidadoController