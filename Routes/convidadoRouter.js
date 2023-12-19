const express = require("express");
const convidadoRouter = express.Router();
const convidadoController = require("../Controllers/convidadoController.js");
const verificaCamposMiddleware = require("../Error_Handler/verificaCamposMiddleware.js");

convidadoRouter.get("/convidado", convidadoController.readAll);
convidadoRouter.get("/convidado/:id", convidadoController.readOne);
convidadoRouter.post(
  "/convidado",
  verificaCamposMiddleware("UsuarioId", "GrupoId"),
  convidadoController.create,
);
convidadoRouter.put("/convidado/:id", convidadoController.update);
convidadoRouter.delete("/convidado/:id", convidadoController.delete);

module.exports = convidadoRouter;
