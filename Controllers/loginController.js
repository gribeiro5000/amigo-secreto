const bcrypt = require('bcryptjs/dist/bcrypt.js')
const usuario = require('../Models/usuario.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()


let loginController = {
    async login(req, res){

          let veriEmail = await usuario.findOne({where: { email: req.body.email }})
  
          if(veriEmail){
              let senha = await bcrypt.compare(req.body.senha, veriEmail.senha)
  
              if(!senha){
                  return res.send("email ou senha errados")
              }else{

                  let token = jwt.sign({id: veriEmail.id}, process.env.TOKEN_SECRET)  
                  res.header("authorization-token", token)
                  return res.send("logado")

              }
          }else{
              return res.send("email ou senha errados")
          }
      }
  }
module.exports = loginController
