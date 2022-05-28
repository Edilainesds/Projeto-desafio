const express = require("express")
const cors = require("cors")

const saldoUsuarioRoutes = require("./routes/saldoUsuarioRoutes")

const contaUsuarioRoutes = require("./routes/contaUsuarioRoutes")

const app = express() 

app.use(cors())
app.use(express.json())

app.use("/investimentos",saldoUsuarioRoutes)
app.use("/registro", contaUsuarioRoutes)







module.exports = app