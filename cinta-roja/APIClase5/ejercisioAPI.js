// https://pokeapi.co/
// traer un pokemon y mostrar de que tipo es y el nombre

const request = require ('request')

const URL = 'https://pokeapi.co/api/v2/pokemon/squirtle/'

request.get(URL, (error, response, body) => {
    //console.log('error', error);
    //console.log('response', response);
    //console.log('body =', body)
    let nombre = JSON.parse(body);
    //console.log(nombre)
    console.log(nombre.name)
    console.log(nombre.types[0].type.name)
    

}
)




//http://opernlibrary.org/search.jason?q=1+robot
//* buscar un libro y mostrar autores


//Usar el API de chistes de papa
//*traer 7 chistes de perros