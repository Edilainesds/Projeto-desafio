const mongoose = require("mongoose")
const Conta = require("../models/contaSchema")

const contaSaldo = async (request, response) => {

    const saldo = new Conta({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        saldo: request.body.saldo,
        extrato: request.body.extrato
       
    })
    try {
        const novoSaldo = await saldo.save()
        response.status(201).json(novoSaldo)
           
    } catch (error) { 
        response.status(500).json({ message: error.message })
    
       }
}


const mostraConta= async (request, response) => {

    try {
        const conta = await contaSaldo.find()
        response.status(200).json(conta)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })

    }
}
const atualizaConta = async (request, response) => {
    const encontraConta = await Conta.findOne({ saldo: request.body.saldo })
    try {
        const contaAtualizada = await encontraConta.save()
        response.status(200).json(contaAtualizada)
    
    } catch (error) {
        response.status(500).json({message: error.message})
     }
      
    
}






module.exports = {
    contaSaldo,
    mostraConta,
    atualizaConta
}