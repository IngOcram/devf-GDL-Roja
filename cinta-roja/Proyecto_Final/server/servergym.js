const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let servidor = express()
const rutaUsuarios = require('./rutas/books.js')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gym')


servidor.use(cors())
servidor.use(bodyParser.json())
servidor.use('/gym', rutaUsuarios)

mongoose.connection.once('open', () =>{
    console.log("si me puedo conectar la DB");
}).on('error', () => {
    console.log("No me puedo conectar a la DB")
})

servidor.get('/', (req,res) => {
    console.log(req)
    res.send("Hola")
})

//proccess.env contiene las variables del proceso
servidor.listen(process.env.PORT || 6000, () => {
    if(process.env.PORT)
    console.log(`Estoy corriendo en el puerto ${process.env.PORT}`)
    else
    console.log(`Estoy corriendo en el puerto 6000`)
}
)
