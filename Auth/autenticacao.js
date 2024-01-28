const jwt = require("jsonwebtoken");
const Api500Error = require("../Error_Handler/Api500Error");
const Api401Error = require("../Error_Handler/Api401Error");
const convidadoRepositorio = require("../Repositorio/convidadoRepositorio");
const listaDeDesejosRepositorio = require("../Repositorio/listaDeDesejosRepositorio");
require("dotenv").config();

class Auth {
  autenticacao(req, res, next) {
    const token = req.header("authorization-token");
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) {
          throw new Api500Error(err);
        } else {
          req.id = decoded.id;
        }
      });
    } else {
      res.status(401).send("acesso negado: Faça login primeiro");
    }
    next();
  }

  permissao(req, res, next) {
    if (req.id == req.params.id) {
      next();
    } else {
      res.send("Esse usuário não pode acessar essa rota");
    }
  }

  async pertenceAoGrupo(req, res, next) {
    try {
      const convidado = await convidadoRepositorio.getByGrupoId(
        req.params.grupoId,
      );
      let result = false;
      for (let i = 0; i < convidado.length; i++) {
        if (convidado[i].UsuarioId == req.id) {
          req.convidado = convidado[i];
          result = true;
          break;
        }
      }
      if (result) {
        next();
      } else {
        throw new Api401Error(`O usuário não pertence a este grupo`);
      }
    } catch (error) {
      next(error);
    }
  }

  async proprietarioListaDeDesejos(req, res, next) {
    try {
      const row = await listaDeDesejosRepositorio.get(req.params.id);
      if (row.UsuarioId == req.id) {
        next();
      } else {
        throw new Api401Error(
          `Essa lista de desejos não pertence a esse usuário`,
        );
      }
    } catch (error) {
      next(error);
    }
  }

  isAdm(req, res, next) {
    try {
      if (req.convidado.adm) {
        next();
      } else {
        throw new Api401Error(`Este usuário não é adm`);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Auth();
