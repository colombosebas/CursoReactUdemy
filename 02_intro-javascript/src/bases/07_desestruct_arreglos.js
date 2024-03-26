//desestructurando arreglos
const personajes = ['Goku', 'Vegetta', 'Gohan']

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;
console.log(p1)
const [,p2] = personajes;
console.log(p2)
const [,,p3] = personajes;
console.log(p3)

const retornaArreglo = () => {return ['ABC', 123]}

const arr = retornaArreglo();
const[letras, numeros] = retornaArreglo();
console.log(letras, numeros)

const usarEstado = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}];
};

const arreglo = usarEstado('Goku');
console.log(arreglo);

const [nombre, setNombre] = usarEstado('Goku');
console.log(nombre);
setNombre();