const mongoose = require('mongoose')

const MONGODB_URI ="mongodb+srv://edilainesds22:1JXkGSBnDFC9EFdd@cluster0.zhoz2.mongodb.net/test"



const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado :)")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}