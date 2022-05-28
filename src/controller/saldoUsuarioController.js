const saldoJson = require("../models/saldoUsuario.Json")

const getbyId = (request, response) => {
    let idRequest = request.params.id
    let idEncontrado = saldoJson.find(saldos=> saldos.id == idRequest)
    response.status(200).send(idEncontrado)
        
    }


    module.exports = {
        getbyId
    }