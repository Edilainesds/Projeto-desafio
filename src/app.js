const express = require("express")
const cors = require("cors")

const saldoUsuarioRoutes = require("./routes/saldoUsuarioRoutes")

const cadastroUsuarioRoutes = require("./routes/cadastroContaUsuarioRoutes")

const loginUsuariosRoutes = require("./routes/loginRoutes")

const transferenciaEntreContas = require("./routes/transferenciaEntreContasRoutes")
const retiradaRoutes = require("./routes/retiradaRoutes")

const depositoRoutes = require("./routes/depositoRoutes")
const extratoRoutes = require("./routes/extratoRoutes")

const app = express() 

app.use(cors())
app.use(express.json())

app.use("/investimentos",saldoUsuarioRoutes)
app.use("/registro", cadastroUsuarioRoutes)
app.use("/loginUser", loginUsuariosRoutes)
app.use("/transferencia", transferenciaEntreContas)
app.use("/saque", retiradaRoutes)
app.use("/depositos", depositoRoutes)
app.use("/extratos", extratoRoutes)










module.exports = app