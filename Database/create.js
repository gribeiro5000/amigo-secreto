const mysql = require('mysql2/promise');
require('dotenv').config();
async function createDatabase() {
  //ABRE CONEXÃO COM MYSQL SERVER
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  //cria banco de dados
  await connection.execute('CREATE DATABASE IF NOT EXISTS amigoSecreto');

  connection.end();
}

module.exports = createDatabase;
