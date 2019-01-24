// hacer una funcion que convirtiera en grados c a f
// hacer una funcion que muestre la tabla de multiplicar de x numero
// funcion que pida N cantidad de parametros, devuelva cuantos parametros recibio
// leer arreglos *sacar promedio *sacar la media
// guardar los primeros 20 numeros pares e imprimirlos de manera inversar
// obetener los primeros 10 primos
// una funcion que sume todos los numeros entre 1 y N * N es un valor que se recibe como parametro

function grados (c){
    //var c = 30;
    var f = ((c * 9/5) + 32);
    var r = f;
    console.log(r); 
}
grados(9)

 //function multiplicar(x){
 //   for(x = 0; x < 10; x++);
   //  console.log(`${x}`);
//}
//multiplicar(3)

function multi(n){
    for(let x = 1; x <= 10; x++){
        console.log(`${x} * ${n} = ${x*n}`)
    }
}
multi(2)

let arrInt = [1,2,3,4,5,6];
//promedio
let promedio = 0;
for(let i=0; i<arrInt.length; i++){
    //promedio += arrInt[i]
    promedio = promedio + arrInt[i]
}

promedio = promedio / arrInt.length
console.log('promedio =',promedio);

let mediana = (arrInt[0] + arrInt[arrInt.length-1])/2
console.log('mediana',mediana);


let arrPares = []

for(let n=0; arrPares.length<20; n++){
    if(n % 2 === 0){
    // es par
    console.log('encontramos un par', n);
    arrPares.push(n)
    }
}
console.log(arrPares);

 //console.log(arrPares.reverse);

 function invertArrray (input){
     let rev = arryInv = [];
     for (let i = input.length-1; i >= 0; i--){
         rev.push(input[i]);
     }
     console.log(rev);
 }

 console.log(invertArrray(arrPares));

var c = 25;
var j = 2;
var numerosPrimos = [];

for(; j < c; j++){

    if (primo(j)) {
        numerosPrimos.push(j);
    }
  }

console.log(numerosPrimos);

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
return numero !==1;
}

function sumaNumeros (n){
    for (let x = 1; )

}
