const express = require('express')
const app = express()

const verificaCamposMiddleware = (req, res, next) => {
    const { campo1, campo2, campo3 } = req.body;

    if (!campo1 && !campo2 && !campo3) {
        return res.status(400).json({ mensagem: `nome, email e senha são obrigatórios` });
    }else{
        if(!campo1){
            return res.status(400).json({ mensagem: `nome é obrigatório` });
        }
        if(!campo2){
            return res.status(400).json({ mensagem: `email é obrigatório` });
        }
        if(!campo3){
            return res.status(400).json({ mensagem: `senha é obrigatório` });
        }

        next()
    }

}

module.exports = verificaCamposMiddleware