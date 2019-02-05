const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

let libros = ['la tregua', 'el principito']


router.get('/', (req, res) => {
    //Regresar todos los libros de la BD
    console.log("Estamos en el GET de libros");
    res.send(libros)
  })

router.get('/:id', (req, res) => {
    //Regresar SOLO el libro con el ID recibido
    let id = req.params.id
    console.log("Estamos en el GET especifico");
    res.send(libros[id])
  })



router.post('/', (req,res) => {
    //Parsear informacion recibida
    let nuevoLibro = req.body
    //guardarla en la BD
    libros.push(nuevoLibro)
    //Responder con un mensaje de error o de success
    console.log("estamos en el post de libros");
    res.send(`nuevo libro ${nuevoLibro.titulo}agregado`)
} )


router.put('/:idlibro', (req,res) => {
    // actualizar la informacion almacenada
    let updateLibro = req.body
    //actualizar la informacion del libro
    
    console.log("estamos en el put de libros");
    res.send(200)
})

router.delete('/:idlibro', (req,res) => {
    console.log("estamos en el delete de libros");
    res.send(200)
})

module.exports = router
