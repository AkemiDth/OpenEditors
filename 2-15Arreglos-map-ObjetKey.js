// Arreglos y .map

const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

console.log(carrito)

const appContenedor = document.querySelector('#app')

// let html = ''
// carrito.forEach((producto) => {
// html += `<li>${producto}</li>`
// })

carrito.map((producto) => {
 return 'El producto es ' + producto
})

const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollador web',
 edad: 500,
}

// Dilema
const { nombre } = persona
console.log(nombre)

// Solucion y abreviacion
//la key dice en una sola el objeto, da el nombre, la profesion y la edad, la key convierte la const en un objeto.
console.log(Object.keys(persona))
