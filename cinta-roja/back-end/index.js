// importamos el modulo express para poder utilizar sus propiedades en este archivo

const express = require('express') // aqui vive el modulo completo de express
let app = express()                // app es el servidor


//app.<method>(<ruta>, <cb>)
app.get('/', function(request, response) {
    console.log('hicieron una peticion get a la raiz')
    response.send('<h1>Hola Desde el servidor</h1>')

})

//puerto donde escuchamos las peticiones
app.listen(5000, () =>{
    console.log('estamos corriendo un server en el puerto 5000')
} )

