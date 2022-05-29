const conta = require("../models/cadastroContaUsuario.Json")



const createConta = (request, response)=>{
    let body = request.body

    let novoCadastro = {
        id: (conta.length)+1,
        name: body.name,
        mail: body.mail,
        senha:body.senha

    }

    conta.push(novoCadastro)

    response.status(201).json(
        [
            {
                "mensagem":"cadastro feito  com sucesso",
                novoCadastro
            }
        ]
    )

}



module.exports = {
    createConta
}