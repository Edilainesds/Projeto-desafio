const CadastroSchema = require("../models/cadastroSchema")
const mongoose = require("mongoose")

const getAll = async(req,res)=>{

    try {
      const cadastros = await cadastroSchema.find();
      res.status(200).json({
        message: " Usuário encontrado com sucesso",
        cadastros
      
      }) 
    } catch (error){
        res.status(500).json({
            message : error.message
        }
        )}
  }

const createConta = async (request, response) => {
    try {

        const { nome, email, password, confirmpassword, cpf, endereco, bairro, celular, pais, terms_of_use } = request.body
        
        if (!nome) {
            return response.status(406).json({
                message: "O Campo nome é obrigatório"
            })
        }

        if (!email) {
            return response.status(406).json({
                message: "O campo  email é obrigatório"
            })
        }

        if (!password) {
            return response.status(406).json({
                message: " O campo senha é obrigatória"
            })
        }

        if (!password !== confirmpassword) {
            return response.status(406).json({
                message: "As senhas não correspondem a senha precisa ser igual"
            })
        }

        if (!cpf && cpf == 11) {
            return response.status(406).json({
                message: " O campo cpf é obrigatório, e precisa ter 11 números"
            })
        }

        if (!endereco) {
            return response.status(406).json({
                message: " O campo endereço é obrigatório"
            })
        }

        if (!bairro) {
            return response.status(406).json({
                message: " O campo bairro é obrigatório"
            })
        }

        if (!celular) {
            return response.status(406).json({
                message: " O campo celular é obrigatório"
            })
        }

        if (!pais) {
            return response.status(406).json({
                message: " O campo Pais é obrigatório"
            })
        }

        const ContaExiste = await CadastroSchema.findOne({ email: email })
        if (ContaExiste) {
            return response.status(406).json({
                message: "email já está sendo utilizado"
            })
        }

        const newConta = new CadastroSchema({
            _id: new mongoose.Types.ObjectId(),
            nome: request.body.nome,
            email: request.body.email,
            password: request.body.password,
            cpf: request.body.cpf,
            endereco: request.body.endereco,
            bairro: request.body.bairro,
            celular: request.body.celular,
            pais: request.body.pais,
            terms_of_use: request.body.terms_of_use
        })

        if (!terms_of_use) {
            return res.status(406).json({
                message:
                    "E necessário aceitar nossos termos para concluir cadastro",
            })
        }

        const contaSalva = await newConta.save()
        response.status(201).json({
            message: "cadastro concluido com sucesso",
            contaSalva
        })
    } catch (error) {
        response.status(404).json({
            mensagem: error.message,
        })
    }

} 

module.exports = {
    getAll,
    createConta
}