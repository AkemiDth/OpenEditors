// Object Literal enhacement

const band = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master or puppets', 'Seek & Destroy', 'Enter Sandman']

//Forma anterior
// const metallica = {
//     banda: banda,
//    genero: genero,
//   canciones: canciones,
//}

//forma nueva

const metallica = { banda, genero, canciones }
console.log(metallica)
