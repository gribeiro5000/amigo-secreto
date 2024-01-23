const express = require("express");
const app = express();
const createDatabase = require("../Database/create.js");
const modelSync = require("../Models/modelSync.js");
const usuarioRouter = require("../Routes/usuarioRoutes.js");
const grupoRouter = require("../Routes/grupoRouter.js");
const listaDeDesejosRouter = require("../Routes/listaDeDesejosRoutes.js");
const convidadoRouter = require("../Routes/convidadoRouter.js");
const loginRouter = require("../Routes/loginRouter.js");
const authorization = require("../Auth/autenticacao.js");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

createDatabase().then(() => {
  modelSync();
});

app.use(
  cors({
    origin: process.env.FRONT_END_URL,
    methods: "GET, POST, PUT, DELETE",
  }),
);
app.use(loginRouter);
app.use(usuarioRouter);
app.use(grupoRouter);
app.use(listaDeDesejosRouter);
app.use(convidadoRouter);

module.exports = app;
