const request = require('request')

let printPkmnInfo = (pokemon) => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/' + pokemon

  request.get(URL, (error, response, body) => {
    console.log(`== POKEMON INFO ==`);
    let pkmnInfo = JSON.parse(body)

    // Get information
    let pkmnTypes =  pkmnInfo.types.map(tipo => tipo.type.name)
    let pkmnMoves =  pkmnInfo.moves.map(ataque => ataque.move.name)

    // Output
    console.log(`
      Mi nombre es ${pkmnInfo.name}. Soy de tipo ${pkmnTypes.join(' / ')}
      Puedo aprender ${pkmnInfo.moves.length} movimiento(s): ${pkmnMoves.join(', ')}
      `);
  })
}

printPkmnInfo('charmander')
printPkmnInfo('greninja')
printPkmnInfo('ditto')