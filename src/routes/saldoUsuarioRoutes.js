const controller = require("../controller/saldoUsuarioController")
const express = require("express")


const router = express.Router()



router.get("/saldo/:id", controller.getbyId)

module.exports = router 