const sequelize = require('../Database/connection.js')
const dataTypes = require('sequelize')

const Usuario = sequelize.define("Usuario", {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: dataTypes.STRING(80),
        allowNull: false,
    },
    email:{
        type: dataTypes.STRING(80),
        allowNull:false
    },
    senha:{
        type: dataTypes.STRING(100),
        allowNull: false
    },
    celular:{
        type: dataTypes.STRING(14)
    }
})

module.exports = Usuario