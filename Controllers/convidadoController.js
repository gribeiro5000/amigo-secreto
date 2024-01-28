const convidadoRepositorio = require("../Repositorio/convidadoRepositorio.js");
const usuarioRepositorio = require("../Repositorio/usuarioRepositorio.js");
const grupoRepositorio = require("../Repositorio/grupoRepositorio.js");
const Api404Error = require("../Error_Handler/Api404Error.js");
const Api401Error = require("../Error_Handler/Api401Error.js");

class ConvidadoController {
  async readAll(req, res, next) {
    try {
      const rows = await convidadoRepositorio.getAll();
      if (rows.length > 0) {
        res.status(200).send(rows);
      } else {
        throw new Api404Error("nenhum convidado encontrado");
      }
    } catch (error) {
      next(error);
    }
  }

  async readOne(req, res, next) {
    try {
      const row = await convidadoRepositorio.get(req.params.convidadoId);
      if (row) {
        if (row.UsuarioId == req.id) {
          res.status(200).send(row);
        } else {
          throw new Api401Error(`Este usuário não pode acessar essa rota`);
        }
      } else {
        throw new Api404Error(
          `convidado do id: ${req.params.convidadoId} não encontrado`,
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const row = await convidadoRepositorio.insert(req.body);
      res.status(200).send("convidado criado com sucesso!");
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const row = await convidadoRepositorio.update(req.body, req.params.id);
      if (row[0] == 1) {
        res.status(200).send("convidado atualizado com sucesso");
      } else {
        throw new Api404Error(
          `convidado do id: ${req.params.id} não encontrado`,
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async sorteio(req, res, next) {
    try {
      //busca todos os convidados no banco
      const rows = await convidadoRepositorio.getByGrupoId(req.params.grupoId);

      if (rows.length == 1) {
        res.status(401).send("Esse grupo não tem convidados o suficiente");
      }

      //embaralha lista de convidados
      for (let i = rows.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = rows[i];
        rows[i] = rows[j];
        rows[j] = temp;
      }

      //amigo secreto será o próximo convidado da lista, o amigo do último será o primeiro da lista
      for (let i = 0; i < rows.length; i++) {
        if (i == rows.length - 1) {
          rows[i].amigoSecretoId = rows[0].UsuarioId;
        } else {
          rows[i].amigoSecretoId = rows[i + 1].UsuarioId;
        }
      }

      //salva sorteio no banco
      for (let i = 0; i < rows.length; i++) {
        await convidadoRepositorio.update(
          {amigoSecretoId: rows[i].amigoSecretoId},
          rows[i].id,
        );
      }

      const row = await grupoRepositorio.update(
        {sorteado: true},
        rows[0].GrupoId,
      );

      res.status(200).send("Sorteio feito com sucesso");
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const row = await convidadoRepositorio.delete(req.params.convidadoId);
      if (row) {
        if (row.adm) {
          res.status(200).send("convidado excluído com sucesso");
        } else {
          throw new Api401Error(`Esse usuário não é adm`);
        }
      } else {
        throw new Api404Error(
          `convidado do id: ${req.params.convidadoId} não encontrado`,
        );
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ConvidadoController();
