const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let servidor = express()
const rutaUsuarios = require('./rutas/gymRutas')
const rutaEjercisio = require('./rutas/gymEjercisios')
const rutaRutinas = require('./rutas/gymRutinas')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/gym')


servidor.use(cors())
servidor.use(bodyParser.json())
servidor.use('/gym', rutaUsuarios)
servidor.use('/ejercisio', rutaEjercisio)
servidor.use('/rutinas', rutaRutinas)

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
servidor.listen(process.env.PORT || 5000, () => {
    if(process.env.PORT)
    console.log(`Estoy corriendo en el puerto ${process.env.PORT}`)
    else
    console.log(`Estoy corriendo en el puerto 5000`)
}
)
