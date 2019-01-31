// importamos el modulo express para poder utilizar sus propiedades en este archivo

const express = require('express') // aqui vive el modulo completo de express
let app = express()                // app es el servidor


//app.<method>(<ruta>, <cb>)
app.get('/', function(request, response) {
    console.log('hicieron una peticion get a la raiz')
    response.send('<h1>Hola Desde el servidor</h1>')

})

app.get('/persona', (req, res) => {
    console.log('Estamos en la ruta persona');
    console.log(req);
    res.send('persona')
} )


//params
app.get('/persona/:idpersona', (req, res) => {
    console.log('Estamos en la ruta persona con parametro');
    let idpersona = req.params.idpersona
    res.send(`<h1>Hola ${idpersona}</h1>`)
} )


//query
app.get('/buscar', (req, res) => {
    console.log('Estamos en la ruta buscar')
    let nombre = req.query.nombre
    let apellido = req.query.apellido
    if(apellido){
    res.send(`hola ${req.query.nombre} ${req.query.apellido}`)
    }else{
        res.send(`hola ${nombre} Snow`)
    }
} )




//puerto donde escuchamos las peticiones
app.listen(5000, () =>{
    console.log('estamos corriendo un server en el puerto 5000')
} )

