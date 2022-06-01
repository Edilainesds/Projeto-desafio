
const controller = require("../controller/cadastroController")

const express = require("express")

const routes = express.Router()
routes.get("/contasCadastradas",controller.getAll)
routes.post("/criar", controller.createConta)



module.exports = routes