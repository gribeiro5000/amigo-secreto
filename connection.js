const { Sequelize } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize('amigoSecreto', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });

  async function teste (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  teste()

  

  module.exports = sequelize