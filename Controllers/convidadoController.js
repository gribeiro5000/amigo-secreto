const convidadoRepositorio = require('../Repositorio/convidadoRepositorio.js');
const usuarioRepositorio = require('../Repositorio/usuarioRepositorio.js');
const grupoRepositorio = require('../Repositorio/convidadoRepositorio.js');
const Api404Error = require('../Error_Handler/Api404Error.js');

class ConvidadoController {
  async readAll(req, res, next) {
    try {
      const rows = await convidadoRepositorio.getAll();
      if (rows.length > 0) {
        res.status(200).send(rows);
      } else {
        throw new Api404Error('nenhum convidado encontrado');
      }
    } catch (error) {
      next(error);
    }
  }

  async readOne(req, res, next) {
    try {
      const row = await convidadoRepositorio.get(req.params.id);
      if (row) {
        res.status(200).send(row);
      } else {
        throw new Api404Error(
          `convidado do id: ${req.params.id} não encontrado`,
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const row = await convidadoRepositorio.insert(req.body);
      res.status(200).send('convidado criado com sucesso!');
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const row = await convidadoRepositorio.update(req.body, req.params.id);
      if (row[0] == 1) {
        res.status(200).send('convidado atualizado com sucesso');
      } else {
        throw new Api404Error(
          `convidado do id: ${req.params.id} não encontrado`,
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const row = await convidadoRepositorio.delete(req.params.id);
      if (row) {
        res.status(200).send('convidado excluído com sucesso');
      } else {
        throw new Api404Error(
          `convidado do id: ${req.params.id} não encontrado`,
        );
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ConvidadoController();
