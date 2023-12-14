const httpStatusCode = require('../Error_Handler/httpStatusCode.js')
const express = require('express')
const Api400Error = require('./Api400Error.js')
const app = express()

const verificaCamposMiddleware = (...camposObrigatorios) => (req, res, next) => {
    try {
        for (const campo of camposObrigatorios) {
            if (!req.body[campo]) { 
                throw new Api400Error(`${campo} é obrigatório`);
            }
        }
    } catch (error) {
        return next(error);
    }
    next();
};

module.exports = verificaCamposMiddleware