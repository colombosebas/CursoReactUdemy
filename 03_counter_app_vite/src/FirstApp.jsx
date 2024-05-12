 import PropTypes from 'prop-types';

const newMessage = 'Sebastián Colombo'
const newObject = {
    message: 'Hola mundo',
    subject: 'Terricola'
};

 const funcion = () => 'Mi función';

export const AppFirst = ({title,subTitle}) => {
    return(
        <>
            <h1 data-testid='test-title'>{title}</h1>
            <h2>Sabías {newMessage}</h2>
            <h3>{subTitle}</h3>
        </>
    );
}

AppFirst.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

AppFirst.defaultProps = {
    title: 'No hay título',
    subTitle: 123
}

//Esto da error, no se pueden imprimir objetos
// export const AppFirst2 = () => {
//     return(<h2>{newObject}</h2>);
// }

// Así si funciona la impresión de objetos
export const AppFirst2 = () => {
    return(<h2>{JSON.stringify(newObject)}</h2>);
}


// //Acá llamo a una función, ojo que no puede ser una función asíncrona
export const AppFirst3 = () => {
    return(<h3>{funcion()}</h3>);
}