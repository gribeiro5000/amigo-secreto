const express = require("express");
const grupoRouter = express.Router();
const GrupoController = require("../Controllers/grupoController.js");
const grupoController = require("../Controllers/grupoController.js");
const verificaCamposMiddleware = require("../Error_Handler/verificaCamposMiddleware.js");
const Auth = require("../Auth/autenticacao.js");

grupoRouter.get(
  "/grupos/:id",
  Auth.autenticacao,
  Auth.permissao,
  GrupoController.readAll,
);
grupoRouter.get("/grupo/:grupoId", Auth.autenticacao, GrupoController.readOne);
grupoRouter.post(
  "/grupo",
  Auth.autenticacao,
  verificaCamposMiddleware("nome"),
  GrupoController.create,
);
grupoRouter.put("/grupo/:id", Auth.autenticacao, GrupoController.update);
grupoRouter.delete("/grupo/:id", Auth.autenticacao, grupoController.delete);

module.exports = grupoRouter;
