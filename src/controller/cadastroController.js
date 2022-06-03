const Cadastro = require("../models/cadastroSchema")
const mongoose = require("mongoose")


const criarConta = async (request, response) => {

    const cadastro = new Cadastro({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        email: request.body.email,
        senha: request.body.senha,
        cpf: request.body.cpf,
        endereco: request.body.endereco,
        bairro: request.body.bairro,
        celular: request.body.celular,
        pais: request.body.pais,
        criadoEm: request.body.criadoEm
    })

    const cadastroJaExiste = await Cadastro.findOne({
        email: request.body.email
    })
    if (cadastroJaExiste) {
        return response.status(409).json({
            error: "Usuário já cadastrado"
        })
    }

    try {
        const novoCadastro = await cadastro.save()
        response.status(201).json(novoCadastro)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })

    }
}
const mostraCadastro = async (request, response) => {


    try {
        const cadastros = await Cadastro.find()
        response.status(200).json(cadastros)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })

    }
}
const atualizaCadastros = async (request, response) => {
    const encontraCadastro = await Cadastro.findById(request.params.id)
    if (encontraCadastro == null) {
        return response.status(404).json({
            message: 'Cadastro não encontrado'
        })

    }
    if (request.body.email != null) {
        encontraCadastro.email = request.body.email
    }

    if (request.body.senha != null) {
        encontraCadastro.senha = request.body.senha
    }

    if (request.body.endereco != null) {
        encontraCadastro.endereco = request.body.endereco
    }
    if (request.body.bairro != null) {
        encontraCadastro.bairro = request.body.bairro
    }

    if (request.body.celular != null) {
        encontraCadastro.celular = request.body.celular
    }

    if (request.body.pais != null) {
        encontraCadastro.pais = request.body.pais
    }


    try {

        const cadastroAtualizado = await encontraCadastro.save()
        response.status(200).json(cadastroAtualizado)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })

    }
}






module.exports = {
    criarConta,
    mostraCadastro,
    atualizaCadastros
}