import { transformWithEsbuild } from "vite";
// // import PropTypes from 'prop-types';

const newMessage = 'Sebastián Colombo'
// const newObject = {
//     message: 'Hola mundo',
//     subject: 'Terricola'
// };

// const funcion = () => 'Mi función';

export const AppFirst = () => {
    return(
        <h1>Soy {newMessage}</h1>
    );
}

// // AppFirst.propTypes ={
// //     title: PropTypes.string
// // }

// //Esto da error, no se pueden imprimir objetos
// // export const AppFirst2 = () => {
// //     return(<h2>{newObject}</h2>);
// // }

// //Así si funciona la impresión de objetos
// export const AppFirst2 = () => {
//     return(<h2>{JSON.stringify(newObject)}</h2>);
// }


// //Acá llamo a una función, ojo que no puede ser una función asíncrona
// export const AppFirst3 = () => {
//     return(<h3>{funcion()}</h3>);
// }