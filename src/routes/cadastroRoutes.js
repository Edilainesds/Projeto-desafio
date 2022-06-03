const express = require("express")
const router = express.Router()
const controller = require("../controller/cadastroController")




router.post("/criar",controller.criarConta)
router.get("/usuario", controller.mostraCadastro)
router.patch("/:id", controller.atualizaCadastros)



module.exports = router