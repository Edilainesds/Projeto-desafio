
const controller = require("../controller/contaUsuarioController")

const express = require("express")

const router = express.Router()

router.post("/criar", controller.createConta)



module.exports = router