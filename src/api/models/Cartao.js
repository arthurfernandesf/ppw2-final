const mongoose = require('../data/index.js')

let cartaoSchema = new mongoose.Schema({
    bin: {
        type: String,
        required: true
    },
    validade: Date,
    cvv: String,
    nome: String,
    marca: String,
    dono: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Dono', 
        required: true
    }
    
}, {timestamps : true})

let Cartao = mongoose.model('Cartao', cartaoSchema)

module.exports = Cartao