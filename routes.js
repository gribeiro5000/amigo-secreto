const express = require('express')
const router = express.Router()

const test = {
    nome:"Nathan",
    idade:25

}

router.get("/usuario", (req, res)=>{
    res.send(test)
})




module.exports = router

