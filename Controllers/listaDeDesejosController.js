const Api404Error = require('../Error_Handler/Api404Error.js');
const listaDeDesejosRepositorio = require('../Repositorio/listaDeDesejosRepositorio.js');

class ListaDeDesejosController {
  async readAll(req, res, next) {
    try {
      const rows = await listaDeDesejosRepositorio.getAll();
      if (rows.length > 0) {
        res.status(200).send(rows);
      } else {
        throw new Api404Error('nenhuma lista encontrada');
      }
    } catch (error) {
      next(error);
    }
  }

  async readOne(req, res, next) {
    try {
      const row = await listaDeDesejosRepositorio.get(req.params.id);
      if (row) {
        res.status(200).send(row);
      } else {
        throw new Api404Error(`lista de id: ${req.params.id} não encontrada`);
      }
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const row = await listaDeDesejosRepositorio.insert(req.body);
      res.status(200).send('lista de desejos criada com sucesso!');
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const row = await listaDeDesejosRepositorio.update(
        req.body,
        req.params.id,
      );
      if (row[0] == 1) {
        res.status(200).send('lista atualizada com sucesso');
      } else {
        throw new Api404Error(`lista de id: ${req.params.id} não encontrada`);
      }
    } catch (erro) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const row = await listaDeDesejosRepositorio.delete(req.params.id);
      if (row) {
        res.status(200).send('lista excluida com sucesso');
      } else {
        throw new Api404Error(`lista de id: ${req.params.id} não encontrada`);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ListaDeDesejosController();
