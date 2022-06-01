
const mongoose = require("mongoose")

const CadastroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
        
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    cpf: {
        type: Number,
        required: true,
        unique: true,
    },
    endereco: {
        type: String,
        required: true,
    },

    bairro: {
        type: String,
        required: true,
    },
   
    celular: {
        type: Number,
       required: true, 
    },

   pais: {
       type: String,
       required: true,
    },
    terms_of_use: {
        type: Boolean,
        required: true,
     },

    criadoEm: {
        type: Date,
        default: new Date()
    }

    },
    { timestamps: true }
)
  
module.exports = mongoose.model("Conta", CadastroSchema)