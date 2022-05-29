
const controller = require("../controller/CadastroContaUsuarioController")

const express = require("express")

const router = express.Router()

router.post("/criar", controller.createConta)



module.exports = router