// parametros por default en lñas funciones

const actividad = function (
 nombre = 'Walter White',
 actividad = 'Enseñar Quimica'
) {
 console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}

actividad('Juan', 'Aprender JavaScript')
actividad('Pedro', 'Creando un sitio web')
actividad('Antonio')
