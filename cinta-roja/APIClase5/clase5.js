const request = require ('request')

const URL = 'https://swapi.co/api/people/2/'

request.get(URL, (error, response, body) => {
   // console.log('response', response);
   // console.log('error', error);
   //console.log('body =', body)
    let informacion = JSON.parse(body)

    console.log(informacion);
}
)

