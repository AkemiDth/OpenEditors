//creando una función

function saludar(nombre) {
 console.log('Bienvenido' + nombre)
}

saludar()

// function expression

const cliente = function (nombreCliente) {
 console.log('Mostrando datos del cliente:' + nombreCliente)
}
cliente('Juan')
