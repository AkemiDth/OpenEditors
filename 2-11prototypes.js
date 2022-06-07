//Obejtos

function mostrarInformacionTarea(tarea, prioridad) {
 return `La tarea ${tarea} tiene una prioridad de ${prioridad}`
}

// Object literal

const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador Web',
 edad: 500,
}

// console.log(persona)
// const mostrarCliente = mostrarInformacionTarea(persona.tarea, persona.profesion)
// console.log(mostrarCliente)

// object Constructor

function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}

// Agregar un Prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
 return `La tarea ${this.tarea} tiene una prioridad de ${this.urgencia}`
}

// crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y react', 'Urgente')
const tarea2 = new Tarea('Pasear al perro', '   Media')
console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea())
console.log(tarea2)
console.log(tarea2.mostrarInformacionTarea())

// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)
// console.log(tarea1)
// console.log(tarea);
// console.log(mostrarInfo)
