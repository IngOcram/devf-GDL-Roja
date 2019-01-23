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

console.log(arrPares.reverse);

