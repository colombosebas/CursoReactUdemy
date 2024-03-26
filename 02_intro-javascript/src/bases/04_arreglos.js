//Arreglos en JS

const arreglo = new Array();
const arreglo100 = new Array(100);
arreglo.push(1);

console.log(arreglo);

const arregloBien = [];
arregloBien.push(1);
arregloBien.push(2);
arregloBien.push(3);

console.log(arregloBien);

const arregloBien2 = [1, 2, 3];
console.log(arregloBien2);

let arreglo2 = [...arregloBien2, 5];
console.log(arreglo2);

const arreglo3 = arreglo2.map(function(numero) {return numero * 2;});
console.log(arreglo3);