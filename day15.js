const cancellable = function(fn, args, t) {
    fn(...args)
    let timer = setInterval(()=>{
        fn(...args)
    },t)

    let cancleFn = ()=> clearInterval(timer)
    return cancleFn
    
};

// funcion a ejecutar 
function mifuncion(mensaje) {
    console.log(mensaje);
}

// argumetos para la funcion 
const args = ["Hola, Mundo!"];

// tiempo de espera para la funcion 
const espera = 1000;

// funcion de cancelacion 
const cancelar = cancellable(mifuncion, args, espera);

// prueba 
setTimeout(()=>{
    console.log("Cancelado despues de 5 s")
    cancelar();
},5000);
