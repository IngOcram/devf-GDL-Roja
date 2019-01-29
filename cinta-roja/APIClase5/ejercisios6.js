// 2.- A partir del siguiente arreglo de mascotas:
//     const mascotas = [
//         { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
//         { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
//         { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
//         { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
//         { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
//     ];
//     Genera un nuevo arreglo que contenga los nombres de todas 
//     las mascotas. 

const mascotas = [
             { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
             { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
             { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
             { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
             { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
         ];

         let arregloNombre = mascotas.map(function(nombre){
            return nombre.nombre;
         }
         ) 

         let arregloComida = mascotas.map(mascota => mascota.comidasFavoritas)

     
         let arregloTortillas = mascotas.map(function(tortillas){
             return tortillas.especie;
         })

         console.log(arregloNombre);
         console.log(arregloComida.join(',').split(','));
         console.log(arregloTortillas);





