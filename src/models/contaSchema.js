const mongoose = require("mongoose")

const ContaSaldochema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conta",
        required: true,
        
    },

    saldo: {
        type: Number,
        required: true,
    },

    extrato: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("contaSaldo", ContaSaldochema)

