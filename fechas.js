var fecha = new Date();  //EN BLANCO ES LA FECHA DEL SISTEMA

console.log(fecha);

fecha.getHours();
fecha.getMinutes();
fecha.getSeconds();

fecha.getDay(); //desde cero Domingo, Lunes ...
fecha.getDate();
fecha.getMonth(); //desde cero
fecha.getFullYear();


const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
//console.log(fecha.toLocaleDateString('es-AR', dateOptions));