const sequelize = require("../Database/connection.js");
const dataTypes = require("sequelize");
const Usuario = require("./usuario.js");
const Grupos = require("./grupos.js");

const Convidado = sequelize.define("Convidado", {
  id: {
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  adm: {
    type: dataTypes.BOOLEAN,
    allowNull: false,
  },
  amigoSecretoId: {
    type: dataTypes.INTEGER,
  },
});

Convidado.belongsTo(Usuario);
Convidado.belongsTo(Grupos);

module.exports = Convidado;
