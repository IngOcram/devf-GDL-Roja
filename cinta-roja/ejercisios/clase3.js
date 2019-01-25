// que es un callback
//una funcion que es enviada a otra como parametro

function imprimirNombre(name){
    console.log(`Hola me llamo ${name}`);
}

let imprimiendoApellido = (lastName) => {
    console.log(`Hola mi apeido es ${lastName}`);
}

//valor es un string, callback es una funcion
function recibeCallback(valor, callback){
    //ejecutar el callback recibido
    //Mandar un correo
    //Cambiar la pagina que estas mostrando
    //meter un log de errores la falla
    callback(valor)
}

//aqui empieza mi ejecucion
recibeCallback('Marco', imprimirNombre)
recibeCallback('Flores', imprimiendoApellido)
