const express = require("express");
const listaDeDesejosController = require("../Controllers/listaDeDesejosController");
const verificaCamposMiddleware = require("../Error_Handler/verificaCamposMiddleware.js");
const listaDeDesejosRouter = express.Router();
const Auth = require("../Auth/autenticacao.js");

//listaDeDesejosRouter.get("/listadedesejos", listaDeDesejosController.readAll);
listaDeDesejosRouter.get(
  "/listadedesejos/:id",
  listaDeDesejosController.readOne,
);
//listaDeDesejosRouter.post(
//  "/listadedesejos",
//  Auth.autenticacao,
//  (req, res, next) => {
//    req.params.grupoId = req.body.GrupoId;
//    next();
//  },
//  Auth.pertenceAoGrupo,
//  verificaCamposMiddleware("nome"),
//  listaDeDesejosController.create,
//);
listaDeDesejosRouter.put(
  "/listadedesejos/:id",
  Auth.autenticacao,
  Auth.proprietarioListaDeDesejos,
  listaDeDesejosController.update,
);
//listaDeDesejosRouter.delete(
//  "/listadedesejos/:id",
//  listaDeDesejosController.delete,
//);

module.exports = listaDeDesejosRouter;
