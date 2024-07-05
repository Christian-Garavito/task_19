const cancellable = function (fn, args, t) {

    const cancelFn = function () {
        clearTimeout(timer)
    }

    const timer = setTimeout(() => {
        fn(...args)
    }, t)

    return cancelFn
};

// funcion a ejecutar 
function mifuncion(mensaje) {
    console.log(mensaje);
}

// argumetos para la funcion 
const args = ["Hola, Mundo!"];

// tiempo de espera para la funcion 
const espera = 3000;

// funcion de cancelacion 
const cancelar = cancellable(mifuncion, args, espera);

// prueba 
setTimeout(()=>{
    console.log("Cancelado despues de 5 s")
    cancelar();
},5000);