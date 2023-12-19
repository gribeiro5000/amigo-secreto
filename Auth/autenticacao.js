const jwt = require('jsonwebtoken');
const Api500Error = require('../Error_Handler/Api500Error');
require('dotenv').config();

class Auth {
  autenticacao(req, res, next) {
    const token = req.header('authorization-token');
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) {
          throw new Api500Error(err);
        } else {
          req.id = decoded.id;
        }
      });
    } else {
      res.status(401).send('acesso negado: Faça login primeiro');
    }
    next();
  }

  permissao(req, res, next) {
    if (req.id == req.params.id) {
      next();
    } else {
      res.send('Esse usuário não pode acessar essa rota');
    }
  }
}

module.exports = new Auth();
