const nombre = 'Sebastian';
const apellido = 'Colombo';

const nombreCompleto = nombre + ' ' + apellido
const comillasRaras = `${nombre} ${apellido} `

console.log(nombreCompleto)
console.log(comillasRaras)

function getSaludo(){
    return 'Hola Mundo';
}

console.log(`Este es el texto ${getSaludo()}`)