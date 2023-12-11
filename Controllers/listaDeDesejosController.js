const listaDeDesejosRepositorio = require("../Repositorio/listaDeDesejosRepositorio")

class ListaDeDesejosController {
    async readAll(req, res) {
        const rows = await listaDeDesejosRepositorio.getAll()
        res.status(200).send(rows)
    }

    async readOne(req, res) {
        const row = await listaDeDesejosRepositorio.get(req.params.id)
        res.status(200).send(row)
    }

    async create(req, res) {
        const row = await listaDeDesejosRepositorio.insert(req.body)
        res.status(200).send('lista de desejos criada com sucesso!')
    }

    async update(req, res) {
        const row = await listaDeDesejosRepositorio.update(req.body, req.params.id)
        res.status(200).send('lista atualizada com sucesso')
    }

    async delete(req, res) {
        const row = await listaDeDesejosRepositorio.delete(req.params.id)
        res.status(200).send('lista excluida com sucesso')
    }
}

module.exports = new ListaDeDesejosController