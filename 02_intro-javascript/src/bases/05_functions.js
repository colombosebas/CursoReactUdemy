//Functions

//No es una buena forma de defnir una funcion
/*
function saludar (nombre){
    return `Hola ${nombre}`
}
*/

//Así es mejor definir una función
const saludar = function (nombre){
    return `Hola ${nombre}`;
}

console.log(saludar('Goku'));

const saludar2 = (nombre) =>`Hola ${nombre}`;
const saludar3 = () =>`Hola mundo`;

console.log(saludar2('Vegetta'));
console.log(saludar3());


const getUser = ()=> {
    return{
        uid:'ABC',
        username:'ching',
    }
}

const getUser2 = ()=> ({
        uid:'ABCD',
        username:'chingo',
})

console.log(getUser());
console.log(getUser2());

function userActivo(nombre){
    return {
        uid: 'ABC4646',
        username: nombre
    }   
}

const usuarioActivo = userActivo('Sebastian')
console.log(usuarioActivo);

const userActivo2 = (nombre) => ({
    uid: 'ABC4646',
    username: nombre
})

const usuarioActivo2 = userActivo2('Sebastian')
console.log(usuarioActivo);