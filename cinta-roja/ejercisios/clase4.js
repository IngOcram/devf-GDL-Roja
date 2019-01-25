console.log("inicio")

setTimeout( () =>{
    console.log('estamos dentro del setTimeout')
}, 3000)

console.log("medio")


setTimeout( () =>{
    console.log('estamos dentro del segundo setTimeout')
}, 10)

for(let i = 0; i<10000; i++) { }


console.log("final")


/*
inicio
estamos dentro del STO
final

*/
