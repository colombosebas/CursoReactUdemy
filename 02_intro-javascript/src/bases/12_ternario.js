const activo = true;
let mensaje = '';
if (activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}
const mensaje2 = (activo) ? 'Activo' : 'Inactivo';
const mensaje3 = activo && 'Activo';
