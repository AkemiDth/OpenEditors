
const nombreTarea = 'Pasear al perro';
const tarea = 'tarea';
export default {
    nombre: nombreTarea,
    tarea : tarea
}



//Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        return `${this.nombre} tiene una prioridad de ${this.prioridad} y la cantidad de ${this.cantidad}`;
    }
}
// crear los objetos 

let tarea1 = new Tarea('Aprender JavaScript', 'Alta')
let tarea2 = new Tarea('Preparar cafe', 'Alta')
let tarea3 = new Tarea('Pasear al perro', 'media')
let tarea4 = new Tarea('Conocer a los suegros', 'baja')

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

//compras 

let compra1 = new ComprasPendientes('Jabon', ' Urgente', 3);
compra1.mostrar() ;
