const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LibroSchema = new Schema({
    titulo:{type:String, required: true}, // campo obligatorio
    autor: String,
    anio: Number
})

//module.exports = mongoose.model(collection, schema)
module.exports = mongoose.model('Libro', LibroSchema)