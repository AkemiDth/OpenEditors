// Template strings

const nombre = 'Juan'
const trabajo = 'Desarrollador web'

// concatenar javascript
console.log('Nombre: ' + nombre + ',Trabajo:' + trabajo)
console.log('Nombre:  ${nombre}, Trabajo: ${trabajo}')

//concatenar con múltiples lienas
const contenedorApp = document.querySelector('#app')
// let html = '<ul>' +
//               '<li> Nombre' + nombre + '</li>'+
//               '<li> Trabajo' + trabajo + '</li>'+
//            '</ul>'

let html = `
          <ul>
              <li>Nombre: ${nombre}</li>
              <li>Trabajo: ${trabajo}</li>
          </ul>
`

contenedorApp.innerHTML = html

import nombreTarea from './tareas.js';

console.log(nombreTarea);

const tarea1 = crearTarea(' Pasear al erro', 'Media ');

console.log(tarea1);
tareaCompletada();

