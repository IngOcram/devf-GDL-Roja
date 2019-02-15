const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejercisioModels = require('../models/ejercisioModels.js')
router.use(bodyParser.json())

router.get('/', (req, res) => {
    //Regresar todos los libros de la BD
    console.log("Estamos en el GET de Usuarios");
    ejercisioModels.find((error,ejercisio) => {
        if (error) {
            console.log(`hubo un error con el GET a la raiz ${error}`)
            res.send(400)
        }
        res.send(ejercisio)
    })
  })

  module.exports = router