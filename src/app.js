const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cadastroRoutes = require("./routes/cadastroRoutes")
const contaRoutes = require("./routes/contaRoutes")
require("dotenv-safe").config()

const db = require("./database/mongoConfig")
db.connect()


const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use("/registro", cadastroRoutes)
app.use("/conta", contaRoutes)

module.exports = app