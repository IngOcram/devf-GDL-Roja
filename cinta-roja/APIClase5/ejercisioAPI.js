// https://pokeapi.co/
// traer un pokemon y mostrar de que tipo es y el nombre

//const request = require ('request')

//const URL = 'https://pokeapi.co/api/v2/pokemon/squirtle/'

//request.get(URL, (error, response, body) => {
    //console.log('error', error);
    //console.log('response', response);
    //console.log('body =', body)
    //let nombre = JSON.parse(body);
    //console.log(nombre)
    //console.log(nombre.name)
    //console.log(nombre.types[0].type.name)
    

//}
//)

//http://openlibrary.org/search.jason?q=1+robot
//* buscar un libro y mostrar autores

const request = require ('request')

const URL = 'http://openlibrary.org/search.json?q=the+lord+of+the+rings'

request.get(URL, (error, response, body) => {
    //console.log('error', error);
    //console.log('response', response);
    console.log('body =', body)
    let nombre = JSON.parse(body);
    //console.log(nombre)
    console.log(nombre.title);
    //console.log(nombre.author_name[0])
    }
    )

//Usar el API de chistes de papa
//*traer 7 chistes de perros