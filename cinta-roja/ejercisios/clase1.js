// Variables
var miVariable = "marco";
console.log(miVariable);

// let
// const

if(1){
    let miVariableIF = 1
    console.log(miVariableIF);
}

//console.log(miVariableIF);

//condicionales
// operadores logicos
// if - else

// >==
// <==
// == //compara que sean iguales
// === comparacion estricta
// 8 == '8'
// !=

if (miVariable === 'juan'){
    console.log('te llamas juan');
}else{
    console.log(`Tu nombre NO es Juan ${miVariable}`);
    //console.log('Tu nombre NO es Juan es:', miVariable);
}

if(8 === '8'){
   console.log('son iguales') 
}else{
    console.log('son diferentes');

}

(1 > 3) ? console.log("si es mayor") : console.log("es menor");
// ? if
// : else


//Ciclos
/*
for
do-while
while
foreach
for in
for of
*/

// for(declaracion; condicion ; incrementos)

for(let contador = 0; contador < 10; contador++){
    console.log(`${contador} - Estoy ciclado :(`);
}
// Arreglos

let cadena = 'estos es una variable'
let arreglo =[2,3,5,7]
console.log(arreglo);
console.log(arreglo[0], arreglo[4]);
console.log(arreglo[20]);

arreglo[2] = 'cambio'
//arreglo[20] = 20
console.log(arreglo);

//Push, pop

arreglo.push('pusheado!!')
let x = arreglo.pop()
arreglo.pop()
arreglo.pop()
console.log(arreglo);
console.log('x = ' + x);

//funciones

function suma (x,y){
    return x+y
}
let suma2 = (x,y) => {x,y};


function saludo() {
    consoleg.log('holis');
}

//arrow function

let adios = () => {
    console.log('adios')
}

saludo()
saludo()
saludo()
saludo()
saludo()
adios()
