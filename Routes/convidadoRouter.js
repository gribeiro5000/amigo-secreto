const express = require("express");
const convidadoRouter = express.Router();
const convidadoController = require("../Controllers/convidadoController.js");
const verificaCamposMiddleware = require("../Error_Handler/verificaCamposMiddleware.js");
const Auth = require("../Auth/autenticacao.js");

//convidadoRouter.get("/convidado", convidadoController.readAll);
convidadoRouter.get(
  "/convidado/:convidadoId",
  Auth.autenticacao,
  convidadoController.readOne,
);
convidadoRouter.post(
  "/convidado",
  Auth.autenticacao,
  verificaCamposMiddleware("UsuarioId", "GrupoId"),
  convidadoController.create,
);
//convidadoRouter.put("/convidado/:id", convidadoController.update);
convidadoRouter.put(
  "/sorteio/:grupoId",
  Auth.autenticacao,
  Auth.isAdm,
  convidadoController.sorteio,
);
convidadoRouter.delete(
  "/convidado/:convidadoId",
  Auth.autenticacao,
  convidadoController.delete,
);

module.exports = convidadoRouter;
