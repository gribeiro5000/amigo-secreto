const sequelize = require("../Database/connection.js");
const dataTypes = require("sequelize");
const Usuario = require("./usuario.js");

const ListaDeDesejos = sequelize.define("listaDeDesejos", {
  id: {
    type: dataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: dataTypes.STRING(80),
    allowNull: false,
  },
  precoEstimado: {
    type: dataTypes.FLOAT,
  },
});

ListaDeDesejos.belongsTo(Usuario);

module.exports = ListaDeDesejos;
