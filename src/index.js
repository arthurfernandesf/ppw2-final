const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const rotasCartao =  require ('./api/routes/cartao')
const rotasDono =  require ('./api/routes/dono')

app.use('/cartoes', rotasCartao)
app.use('/donos', rotasDono)

app.use((err,req,res,next) => {
    if(res.statusCode == 200){
        res.statusCode = 500
        res.json({erro: err.message})
    }
    else {
        res.send()
    }
})

app.listen(PORT, () =>{
    console.log('Servidor iniciado na porta '+ PORT)
})