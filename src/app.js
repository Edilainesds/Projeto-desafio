const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

require("dotenv-safe").config()
//const swagger = require("swagger-ui-express")
const db = require("./database/mongoConfig")

const app = express() 


const cadastroRoutes = require("./routes/cadastroRoutes")
const loginUsuariosRoutes = require("./routes/loginRoutes")


db.connect()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/registro", cadastroRoutes)
app.use("/loginUser", loginUsuariosRoutes)










module.exports = app