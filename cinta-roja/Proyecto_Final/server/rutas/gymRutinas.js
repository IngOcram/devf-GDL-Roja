const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const rutinaModels = require('../models/rutinaModels')
router.use(bodyParser.json())

router.get('/', (req, res) => {
    //Regresar todos los libros de la BD
    console.log("Estamos en el GET de Rutinas");
    rutinaModels.find((error,rutina) => {
        if (error) {
            console.log(`hubo un error con el GET a la raiz ${error}`)
            res.send(400)
        }
        res.send(rutina)
    })
  })

  module.exports = router