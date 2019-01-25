//class persona {
//    constructor(edad, peso, estatura, nombre, color){
//        this.edad = edad,
//        this.peso = peso,
//        this.estatura = estatura,
//        this.nombre = nombre,
//       this.color = color
//  }
//    imc(persona){
//        var imc = peso / (estatura * estatura)
//        console.log(imc);
//    }
//    minombre(nombre){
//        console.log('mi nombre es', minombre)
//    }
//    
//    mayorEdad(edad){
//        if (edad >= 18){
//            console.log('eres mayor de edad');
//        }
        
//    }
//}

//let persona1 = persona(29, 70, marco, moreno)
//let persona2 = persona(16, 68, luis, blanco)

//console.log(persona1.imc);
//console.log(persona2.mayorEdad);


//class personaI {
//    constructor(nombre, edad, peso, altura){
//        this.nombre = nombre
//        this.edad = edad
//        this.peso = peso
//        this.altura = altura
//    }
//    calcularIMC(){
//        return this.peso / (this.altura ** 2)
//    }
//    esMayor(){
//        return this.edad >= 33 ? 'si' : 'no'
//    }
//    complirAnos(){
//        this.edad += 1
//    }
//}

//let marco = new personaI('marco', 17, 70, 1.70)
//console.log(marco.calcularIMC());
//console.log(`marco es mayor de edad? ${marco.esMayor()}`);
//marco.complirAnos()

class Figura {
    constructor(ladob, ladoa){
        this.ladob = ladob
        this.ladoa = ladoa
    

    }
}

class Cuadrado extends Figura{
    constructor(ladoa, ladob){
        super(ladoa, ladob)
    }
    area(){
        return this.ladoa * this.ladob
    }
    perimetro(){
        return this.ladoa * 4
    }
    
}

class rectangulo extends Figura{
    constructor(ladoa, ladob){
        super(ladoa, ladob)
    }
    areaRect(){
        return this.ladoa * ladob
    }
    perimetroRect(){
        return 2 * (this.ladoa + this.ladob)
    }
}

class triangulo extends Figura{
    constructor(ladoa, ladob){
        super(ladoa, ladob)
    }
    
}

