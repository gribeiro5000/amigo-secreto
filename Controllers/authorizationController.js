const jwt = require('jsonwebtoken')

const authorization = {

   async logado(req, res, next){

    const token = await req.header('authorization-token')
    if(!token){
        res.status(401).send("acesso negado: faça login primeiro")
    }
    next()
    }

}

module.exports = authorization