const express = require("express")
const router = express.Router()
const controller = require('../controller/contaController')



router.get("/saldo", controller.contaSaldo)
router.post("/deposito", controller.atualizaConta)
router.patch("/:id", controller.mostraConta)



module.exports = router
