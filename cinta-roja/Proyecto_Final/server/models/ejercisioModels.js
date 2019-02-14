const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ejercisioSchema = new Schema({
    nombreEjercisio:{type:String, required: true}, // campo obligatorio
    categoria: String,
    id: {type:Number, required: true}
})

//module.exports = mongoose.model(collection, schema)
module.exports = mongoose.model('ejercisio', ejercisioSchema)