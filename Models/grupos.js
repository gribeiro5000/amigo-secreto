const sequelize = require('../Database/connection.js');
const dataTypes = require('sequelize');

const Grupo = sequelize.define('Grupo', {
  id: {
    type: dataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: dataTypes.STRING(80),
    allowNull: false,
  },
  local: {
    type: dataTypes.STRING(255),
  },
  precoMax: {
    type: dataTypes.FLOAT,
  },
  precoMin: {
    type: dataTypes.FLOAT,
  },
  dataSorteio: {
    type: dataTypes.DATE,
  },
  observacao: {
    type: dataTypes.STRING(255),
  },
});

module.exports = Grupo;
