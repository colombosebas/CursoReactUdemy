//Esto importa el archivo completo
//import {} from './data/heroes'; 

//Esto importa la estructura heroe
/*
import {heroes} from './data/heroes';
console.log(heroes)
*/

//Otra forma de imoprtar
import heroes, {owners} from "../data/heroes";//Es mejor importar así, poniendo el js de esa manera
//import heroes2 from "./data/heroes2";//Esta manera no es la mejor
console.log(heroes)

/*Es una forma de hacerlo
const getHeroeById = (id) => {
    return heroes.find((heroe)=>{
        if(heroe.id == id){return true;}
        else{return false}
    })
};
*/
//Otra forma de hacerlo
export const getHeroeById = (id) => {return heroes.find((heroe)=>heroe.id === id)}

//Otra forma de hacerlo
const getHeroeById2 = (id) => heroes.find((heroe)=>heroe.id === id)

console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) => heroes.filter((heroe)=>heroe.owner === owner)
console.log(getHeroesByOwner('DC'))