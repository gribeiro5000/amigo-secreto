const express = require('express')
const app = express()

const verificaCamposMiddleware = (req, res, next) => {
    const { nome, email, senha } = req.body;

    if (!nome && !email && !senha) {
        return res.status(400).json({ mensagem: `nome, email e senha são obrigatórios` });
    }else{
        if(!nome){
            return res.status(400).json({ mensagem: `nome é obrigatório` });
        }
        if(!email){
            return res.status(400).json({ mensagem: `email é obrigatório` });
        }
        if(!senha){
            return res.status(400).json({ mensagem: `senha é obrigatório` });
        }

        next()
    }

}

module.exports = verificaCamposMiddleware