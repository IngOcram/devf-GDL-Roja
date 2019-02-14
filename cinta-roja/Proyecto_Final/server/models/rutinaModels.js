const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rutinaSchema = new Schema({
    Persona:Number, // campo obligatorio
    Dias: [ {dia: String,
            ejercisio: [ Number]
    }],
    ID: Number
})

//module.exports = mongoose.model(collection, schema)
module.exports = mongoose.model('rutina', rutinaSchema)