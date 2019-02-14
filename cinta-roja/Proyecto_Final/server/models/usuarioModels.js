const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    usuario:{type:String, required: true}, // campo obligatorio
    telefono: String,
    myID: {type:Number, required: true}
})

//module.exports = mongoose.model(collection, schema)
module.exports = mongoose.model('Usuario', usuarioSchema)