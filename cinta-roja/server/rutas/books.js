const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const LibroModel = require('../models/libroModel.js')
router.use(bodyParser.json())

let libros = [
    {titulo: 'la tregua'}, 
    {titulo: 'el principito'}
 ]


router.get('/', (req, res) => {
    //Regresar todos los libros de la BD
    console.log("Estamos en el GET de libros");
    LibroModel.find((error,libros) => {
        if (error) {
            console.log(`hubo un error con el GET a la raiz ${error}`)
            res.send(400)
        }
        res.send(libros)
    })
  })

router.get('/:id', (req, res) => {
    //Regresar SOLO el libro con el ID recibido
    let id = req.params.id
    console.log("Estamos en el GET especifico");
    res.send(libros[id])
  })



router.post('/', (req,res) => {
    //Parsear informacion recibida
    //guardarla en la BD
    //libros.push(nuevoLibro)
    //const libro = mongoose.model('libro', {titulo: String});
    //const nuevoLibro = new libro(req.body);
    //nuevoLibro.save().then(() => console.log('meow'));
    //Responder con un mensaje de error o de success
    console.log("estamos en el post de libros");
    let nuevoLibro = new LibroModel(req.body)
    nuevoLibro.save()
    .then(() =>{console.log('Libro Agregado')})
    .catch(() => {console.log('No se puede guardar')})
    res.send(nuevoLibro)
} )
// Parametros que se le envian a las callback de las promesas

router.put('/:idlibro', (req,res) => {
    console.log("estamos en el put de libros");
    //let id = req.params.idlibro
    //let miLibro = libros[id]
    //for(let key in req.body){
        //console.log(key)
    //    miLibro[key] = req.body[key]
    //}
    //libors[id] = miLibro
   // libros[id] = req.body
   let idRecibido = req.params.idlibro
  // let LibroPut = new LibroModel(req.params.idlibro)
   LibroModel.findOneAndUpdate(
       {_id: idRecibido},       //query, las condiciones a revisar para saber que elemento se modificara
       req.body,                // nuevo valor de ese documento (registro) 
       {new: true},              //opciones
        (err,doc, raw) => {     //cb, opcional en caso de querer realizar alguna accion adicional
            if (err)
            console.log('error', err);
            else
            console.log("No hay error")
    }
    )
   LibroModel.find((error,libros) => {
    if (error) {
        console.log(`hubo un error con el GET a la raiz ${error}`)
        res.send(400)
    }
    res.send(libros)
})
})

router.delete('/:idlibro', (req,res) => {
    console.log("estamos en el delete de libros");
    let id = req.params.idlibro
    libros.splice(id, 1)
    res.send(200)
})

module.exports = router
