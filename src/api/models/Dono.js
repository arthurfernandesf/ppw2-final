const mongoose = require('../data/index.js')

let donoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: Object,
    },
    cpf: String,
    nascimento: Date,
    telefone: String

}, {timestamps : true})

let Dono = mongoose.model('Dono', donoSchema)

module.exports = Dono
