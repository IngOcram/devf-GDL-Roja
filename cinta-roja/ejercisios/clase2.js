// Tipos de objetos
//- literales
//- clases

//literales
//let perro = {
//    raza: 'chihuahua',
//    edad: 5,
 //   color: 'cafe',
//    tamano: 'pequeno',
//    atacar: function ataque(){console.log('el perro ataca')}
//}

//console.log(perro);
//console.log('raza =', perro['raza']);
//console.log('color =', perro.color);
//perro.atacar()

//clases
//class perrol{
    //constructor
//    constructor(raza, edad, color){
//        this.edad = edad,
//        this.raza = raza,
//        this.color = color

//    }

//    atacar(persona){
//        console.log(`Me llamo ${this.nombre} y estoy atacando a ${persona}`);
//    }

//    comer(comida){
//        console.log('comiendo', comida);
//    }
//}

//let ayudanteDeSanta = new perrol('chihuahua', 10, 'cafe')
//let firulais = new perrol('poodle', 2, 'blanco')

//ayudanteDeSanta.atacar('charly')
//firulais.atacar('charly')

//console.log(firulais.color);
//console.log(ayudanteDeSanta.color);


//herencia
class Animal {
    //constructor
    constructor(raza, edad, color, nombre) {
        this.raza = raza
        this.edad = edad
        this.color = color
        this.nombre = nombre
    }
    comer(comida){
        console.log(`soy un ${this.raza} y estoy comiendo ${comida}`)
    }
}

class Perro1 extends Animal{
    constructor(raza, edad, color, nombre, dueno){
        super(raza, edad, color, nombre)
        // mandar todos los atributos que queremos a la clase padre
        this.dueno = dueno
    }
   atacar(persona){
       console.log(`Me llamo ${this.nombre} y estoy atacando a ${persona}`)
   }
}

let miAvestruz = new Animal('avestruz', 5, 'negro', 'pepe')
let miPerro = new Animal('french', 4, 'cafe', 'perrito', 'marco')

miAvestruz.comer('gusanos')
miPerro.comer('croquetas')
