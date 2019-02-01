const express = require('express')
const bodyParser = require('body-parser')
let servidor = express()


servidor.use(bodyParser.json())


servidor.get('/', (req,res) => {
    console.log(req)
    res.send("Hola")
})

servidor.post('/libros', (req,res) => {
    //Parsear informacion recibida
    //guardarla en la BD
    //Responder con un mensaje de error o de success
    console.log("estamos en el post de libros");
    res.send(200)
} )

servidor.get('/libros', (req,res) => {
    //Regresar todos los libros a la base de datos
    console.log("estamos en el post de libros");
    res.send(200)
} )

servidor.get('/libros/:id', (req,res) => {
    //regresar solo el libro con el id recibido
    console.log("estamos en el GET especifico")
    res.send(200)
})

servidor.put('/libros/:idlibro', (req,res) => {
    console.log("estamos en el put de libros");
    res.send(200)
})

servidor.delete('/libros/:idlibro', (req,res) => {
    console.log("estamos en el delete de libros");
    res.send(200)
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

