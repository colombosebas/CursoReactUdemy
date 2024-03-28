export function App() {
    //documento.createElement.....
    return (<h1>Hola Mundo!!!!</h1>);
}

//Otra forma de hacerlo
/*
export const App = () => {
    return(<h1>Hola Mundo!!!!</h1>);
}
*/

//Otra forma de hacerlo
/*
export const App = () => (<h1>Hola Mundo!!!!</h1>);
*/

export const App2 = () => {
    return(<h2>Soy Sebastián Colombo</h2>);
}

//si quiero poner dos cosas lo puedo hacer así (no es la mejor forma):
export const App3 = () => {
    return(
    <div>
        <h3>App3</h3>
        <p>Primera forma</p>
    </div>
    );
}

//Esta forma es mejor
import {Fragment} from 'react'
export const App4 = () => {
    return(
    <Fragment>
        <h3>App4</h3>
        <p>Segunda Forma</p>
    </Fragment>
    );
}

//Pero esta forma es la mejormejor
export const App5 = () => {
    return(
    <>
        <h3>App5</h3>
        <p>Tercera Forma</p>
    </>
    );
}