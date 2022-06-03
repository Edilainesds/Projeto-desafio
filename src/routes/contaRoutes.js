const express = require("express")
const routes = express.Router()
const controller = require('../controller/contaController')



routes.get("/saldo", controller.contaSaldo)
routes.post("/deposito", controller.atualizaConta)
routes.patch("/:id", controller.mostraConta)



module.exports = routes
