//function suma (a,b){
//    return a + b
//}

//let miSuma = suma(4, 5)

//function resta (a, b){
//    return a - b
//}

//let miResta = resta(20, 15)

//function multiplicar (a, b){
//    return a * b
//}

//let miMultiplicador = multiplicar(5, 8)

//function divisor (a, b){
//    return a / b
//}

//let miDivisor = divisor(4,2)

//function recibeCallback (resultado, callback){
//    callback(resultado)
//}

//recibeCallback(miSuma)
//recibeCallback(miResta)
//recibeCallback(miMultiplicador)

// //function calc (num1, num2, operacion){
//     console.log('Bienvenidos a su calculadora');
//     return operacion(num1, num2)
// }

// let suma = (n1, n2) => n1 + n2 
// let resta = (n1, n2) => n1 - n2
// let multiplicar = (n1, n2) => n1 * n2
// let divisor =  (n1, n2) => n1 / n2

// console.log(calc(2, 7, suma))
// console.log(calc(98, 20, resta))
// console.log(calc(2, 7, multiplicar))
// console.log(calc(10, 5, divisor))

//function palabra (word, callback){
//    console.log(`Mi palabra es ${word}`)
//    return callback(word)
//}

//let mayusculas = (word) => word.toUppercase()
//let minusculas = (word) => word.toLowercase()

//console.log(palabra())

function cambiarPalabra(word, metodo){
    console.log(metodo(word))
}

let mayusculas = (palabra) => palabra.toUpperCase()
let minusculas = (palabra) => palabra.toLowerCase()
let primera = (palabra) => {
    let p = palabra.toLowerCase()
    return p.charAt(0).toUpperCase() + p.slice(1)
}


cambiarPalabra('Marco', mayusculas)
cambiarPalabra('MARCO', minusculas)
cambiarPalabra('MARCO', primera)