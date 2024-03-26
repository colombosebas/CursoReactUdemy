//Desestructuración o asignación desestructurante

const persona = {
    nombre:'Tony',
    edad:45,
    clave: 'IronMan',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre, edad} = persona
console.log(nombre);
console.log(edad);

//Esta es otra forma de hacerlo
const {nombre:nombre2} = persona
console.log(nombre2);

//Acá desestructura automaticamente
const retornaPersona = (nombre, edad) => {
    console.log(nombre, edad)
}

retornaPersona(persona)

const usarContext = ({clave, nombre, edad}) =>{
    return{
        nombreClave:clave,
        anios:edad,
        lating:{
            lat:132131,
            ing:9879879,
        },    
    };
}

const avenger = usarContext(persona);
console.log(avenger);
const {nombreClave, anios, lating:{lat, ing}} = avenger;
console.log(nombreClave);
console.log(anios);
console.log(lat);
