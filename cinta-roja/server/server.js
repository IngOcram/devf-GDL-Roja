const express = require('express')
const bodyParser = require('body-parser')
let servidor = express()
const rutaLibros = require('./rutas/books.js')


servidor.use(bodyParser.json())
servidor.use('/libros', rutaLibros)

servidor.get('/', (req,res) => {
    console.log(req)
    res.send("Hola")
})

//proccess.env contiene las variables del proceso
servidor.listen(process.env.PORT || 5000, () => {
    if(process.env.PORT)
    console.log(`Estoy corriendo en el puerto ${process.env.PORT}`)
    else
    console.log(`Estoy corriendo en el puerto 5000`)
}
)

//API DE LIBROS
/*
-Vamos a crear endpoint para tener un CRUD completo
*Archivo por separado
-hacer una conexion a la BD
-crear una coleccion en nuestra BD para alumacenar toda la informacion
*schema
-regresar un codigo ademas de la informacion 
*/

