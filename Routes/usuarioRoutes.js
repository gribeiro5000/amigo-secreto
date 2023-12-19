const express = require("express");
const usuarioRouter = express.Router();
const UsuarioController = require("../Controllers/usuarioController.js");
const returnError = require("../Error_Handler/errorHandler.js");
const verificaCamposMiddleware = require("../Error_Handler/verificaCamposMiddleware.js");
const Auth = require("../Auth/autenticacao.js");

usuarioRouter.get("/usuarios", Auth.autenticacao, UsuarioController.readAll);
usuarioRouter.get(
  "/usuarios/:id",
  Auth.autenticacao,
  Auth.permissao,
  UsuarioController.readOne,
);
usuarioRouter.post(
  "/usuarios",
  verificaCamposMiddleware("nome", "email", "senha"),
  UsuarioController.insert,
);
usuarioRouter.put(
  "/usuarios/:id",
  Auth.autenticacao,
  Auth.permissao,
  UsuarioController.update,
);
usuarioRouter.delete(
  "/usuarios/:id",
  Auth.autenticacao,
  Auth.permissao,
  UsuarioController.delete,
);

usuarioRouter.use(returnError);

module.exports = usuarioRouter;
