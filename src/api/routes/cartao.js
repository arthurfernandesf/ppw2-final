const { Router } = require('express')
const express = require('express')
const route = express.Router()
const Cartao = require('../models/Cartao')

route.use(express.json())

route.get('/', async function(req, res, next){
    try {
        let filter = {}
        if (req.query.bin){
            filter.bin = req.query.bin
        }
        
        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        
        let cartoes = []

        cartoes = await Cartao.find(filter).limit(limit).skip(skip).populate("dono")

        if(!cartoes.length){
            res.statusCode = 204
            throw new Error()
        }

        res.json(cartoes) 
    } catch (error) {
        next(error)
    }
})

route.get('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        let cartao = await Cartao.findById(id).populate("dono")
        if(!cartao){
            res.statusCode = 404
            throw new Error ("Nenhum cartao com este id encontrado")
        }
        res.json(cartao)
    } catch (error) {
        next(error)
    }
})

route.post('/', async(req,res,next) => {
    try {
        const cartao =  new Cartao(req.body)
        const resultado = await cartao.save()
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.put('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        const cartao = req.body
        const resultado = await Cartao.findByIdAndUpdate(id,cartao)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.delete('/:id', async (req,res,next) =>{
    try{
        const id = req.params.id
        const resultado = await Cartao.findByIdAndDelete(id)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

module.exports = route