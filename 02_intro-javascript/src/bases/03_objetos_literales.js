const persona =  {
    nombre: 'Sebastian',
    apellido: 'Colombo',
    edad:38,
    direccion:{
        ciudad: 'Montevideo',
        zip: 12900,
    }
};

console.log(persona);

const persona2 = persona;//No crea un objeto nuevo, apunta a la referencia.

console.log(persona2);

persona2.nombre = 'Juan';

console.log(persona);
console.log(persona2);

const persona3 = {...persona}

persona2.nombre = 'Josefina';

console.log(persona);
console.log(persona3);