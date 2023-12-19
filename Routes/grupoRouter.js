const express = require("express");
const grupoRouter = express.Router();
const GrupoController = require("../Controllers/grupoController.js");
const grupoController = require("../Controllers/grupoController.js");
const verificaCamposMiddleware = require("../Error_Handler/verificaCamposMiddleware.js");

grupoRouter.get("/grupo", GrupoController.readAll);
grupoRouter.get("/grupo/:id", GrupoController.readOne);
grupoRouter.post(
  "/grupo",
  verificaCamposMiddleware("nome"),
  GrupoController.create,
);
grupoRouter.put("/grupo/:id", GrupoController.update);
grupoRouter.delete("/grupo/:id", grupoController.delete);

module.exports = grupoRouter;
