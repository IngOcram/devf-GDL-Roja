const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const usuarioModels = require('../models/libroModels.js')
router.use(bodyParser.json())

router.get('/', (req, res) => {
    //Regresar todos los libros de la BD
    console.log("Estamos en el GET de Usuariossssss");
    
    usuarioModels.find((error,Usuarios) => {
        console.log(error)
        if (error) {
            console.log(`hubo un error con el GET a la raiz ${error}`)
            res.send(400)
        }
        console.log(Usuarios)
        res.send(202)
    })
  })

  module.exports = router