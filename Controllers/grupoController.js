const grupoRepositorio = require("../Repositorio/grupoRepositorio");
const Api404Error = require("../Error_Handler/Api404Error.js");
const convidadoRepositorio = require("../Repositorio/convidadoRepositorio.js");
const Api401Error = require("../Error_Handler/Api401Error.js");

class GrupoController {
  async readAll(req, res, next) {
    try {
      const gruposConvidado = await convidadoRepositorio.getByUserId(
        req.params.id,
      );
      if (gruposConvidado.length < 1) {
        throw new Api404Error("Nenhum grupo encontrado");
      }
      const grupos = [];
      for (let i = 0; i < gruposConvidado.length; i++) {
        grupos.push(await grupoRepositorio.get(gruposConvidado[i].GrupoId));
      }
      if (grupos.length > 0) {
        res.status(200).send(grupos);
      } else {
        throw new Api404Error("nenhum grupo encontrado");
      }
    } catch (error) {
      next(error);
    }
  }

  async readOne(req, res, next) {
    try {
      const row = await grupoRepositorio.get(req.params.grupoId);
      if (row) {
        res.status(200).send(row);
      } else {
        throw new Api404Error(`grupo do id: ${req.params.id} não encontrado`);
      }
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const row = await grupoRepositorio.insert(req.body);
      res.status(200).send("grupo criado com sucesso!");
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const row = await grupoRepositorio.update(req.body, req.params.id);
      if (row[0] == 1) {
        res.status(200).send("grupo atualizado com sucesso");
      } else {
        throw new Api404Error(`grupo do id: ${req.params.id} não encontrado`);
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const row = await grupoRepositorio.delete(req.params.id);
      if (row) {
        res.status(200).send("grupo excluído com sucesso");
      } else {
        throw new Api404Error(`grupo do id: ${req.params.id} não encontrado`);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GrupoController();
