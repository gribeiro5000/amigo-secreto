const BaseError = require('../Error_Handler/BaseError.js')
const httpStatusCode = require('../Error_Handler/httpStatusCode.js')
const express = require('express')
const app = express()

const verificaCamposMiddleware = (req, res, next) => {
    const { nome, email, senha } = req.body;
    try{
        if (!nome || !email || !senha) {
            throw new BaseError(
                'bad request', 
                httpStatusCode.BAD_REQUEST, 
                true,
                'nome, email e senha são obrigatórios'
                )
        }
    }catch(error) {
        next(error)
    }
        
    next()
}

module.exports = verificaCamposMiddleware