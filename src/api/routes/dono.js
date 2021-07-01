const { Router } = require('express')
const express = require('express')
const route = express.Router()
const Dono = require('../models/Dono')
const axios = require('axios')

route.use(express.json())

route.get('/', async function(req, res, next){
    try {
        let filter = {}
        if (req.query.nome){
            filter.nome = req.query.nome
        }

        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        
        let donos = []

        donos = await Dono.find(filter).limit(limit).skip(skip)

        if(!donos.length){
            res.statusCode = 204
            throw new Error()
        }
        res.json(donos) 
    } catch (error) {
        next(error)
    }
})

route.get('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        let dono = await Dono.findById(id)
        if(!dono){
            res.statusCode = 404
            throw new Error ("Nenhum dono com este id encontrado")
        }

        
        if(dono.endereco && req.query.mostrar==="true") {            
            try {
                var endereco = await axios.get('http://localhost:3001/enderecos/'+dono.endereco)
                if(endereco.status === 200) {
                    dono.endereco = endereco.data  
                }    
            } catch (error) {
                console.log('f')
            }           
        }

        res.json(dono)
    } catch (error) {
        next(error)
    }
})

route.post('/', async(req,res,next) => {
    try {
        const dono =  new Dono(req.body)
        const resultado = await dono.save()
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.put('/:id', async(req,res,next) => {
    try {
        const id = req.params.id
        const dono = req.body
        const resultado = await Dono.findByIdAndUpdate(id,dono)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

route.delete('/:id', async (req,res,next) =>{
    try{
        const id = req.params.id
        const resultado = await Dono.findByIdAndDelete(id)
        res.json(resultado)
    } catch (error) {
        next(error)
    }
})

module.exports = route