import { getHeroeById } from "./bases/08_imp_exp";

/*
const promesa = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        const heroe = getHeroeById(2)
        resolve(heroe);
    }, 2000)
});

promesa.then((hero)=>{
    console.log('Héroe ', hero)
})
.catch(err => console.warn(err));
*/

const getHeoreByIdAsync = (id) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const heroe = getHeroeById(id)
            if (heroe){
                resolve(heroe);
            }
            else{
                reject('No se encontró el héroe')
            }
        }, 2000)
    });
}

/*
getHeoreByIdAsync(8)
    .then(heroe => console.log('Héroe: ', heroe))
    .catch(err => console.warn(err))
*/
getHeoreByIdAsync(5)
    .then(console.log)
    .catch(console.warn)