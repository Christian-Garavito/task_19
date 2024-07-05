const debounce = function (fn, t) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)

    }
};

// ejemplo antirebote
function cargarMensaje(msg) {
    console.log(msg);
}

// llamar la funcion 
const antireboteCargarMensaje = debounce(cargarMensaje,2000)

antireboteCargarMensaje("hola");
antireboteCargarMensaje("hola de nuevo");
antireboteCargarMensaje("hola una vez mas");
