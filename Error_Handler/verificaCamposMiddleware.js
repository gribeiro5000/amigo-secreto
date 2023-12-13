const httpStatusCode = require('../Error_Handler/httpStatusCode.js')
const express = require('express')
const Api400Error = require('./Api400Error.js')
const app = express()

const verificaCamposMiddleware = (req, res, next) => {
    const { nome, email, senha } = req.body;
    try{
        if (!nome || !email || !senha) {
            throw new Api400Error('nome, email e senha são obrigatórios')
        }
    }catch(error) {
        next(error)
    }  
    next()
}

module.exports = verificaCamposMiddleware