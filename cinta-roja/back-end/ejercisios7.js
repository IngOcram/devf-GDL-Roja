//Hacer 3 point distintos sin parametros
// de esos endpoint tomar 1 y agregarle params
// tomar otro y agregarle query

const express = require('express') // aqui vive el modulo completo de express
let ejercisio = express()                // app es el servidor


ejercisio.get('/', function(request, response){
    console.log('se supone que estoy haciendo una peticion a raiz')
    response.send('<h1>Hola mundo</h1>')
})

ejercisio.get('/principal', (req, res) => {
    console.log('estamos en la ruta principal')
    console.log(req)
    res.send('principal')
    
} ) 

ejercisio.get('/secundario', (req, res) => {
    console.log('estamos en la ruta secundario')
    console.log(req)
    res.send('secundario')
})

ejercisio.get('/principal/:idropa', (req, res) => {
    console.log('estamos en la ruta secundario con parametro')
    let idropa = req.param.idropa
    res.send(`<h1>Hola ${idropa}</h1>`)
})

ejercisio.get('/secundario', (req, res) => {
    console.log('estamos en la ruta secundario ropa')
    let ropa = req.query.ropa
    let material = req.query.material
    if(ropa){
    res.send(`hola ${req.query.ropa} ${req.query.material}`)
    }else{
        res.send(`hola ${ropa} Snow`)
    }

})

//sumatoria
ejercisio.get('/sumatoria', (req, res) => {
    console.log(req)
    let num1 = req.query.num1
    let num2 = req.query.num2
    let suma = parseInt(num1) + parseInt(num2)
    res.send(`el resultado es ${suma}`)
})



ejercisio.listen(3000, () =>{
    console.log('estamos corriendo un server en el puerto 3000')
} )


//hacer un endpoint suma que reciba 2 numero y regrese la sumatoria de estos
//hacer un endpoint a raiz (/) utilizando el metodo 'post'




//hacer un endpoint sw que reciba un argumento y con este van hacer una peticional API
// de star wars que utilizamos anteriormente --¿ swapi.co
// el argumento debe ser un ID de personaje 
// regresar un JSON de la siguiente manera
// {
// numerosPeliculas: int
// lastaPeliculas: Array     
//}