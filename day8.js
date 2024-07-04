const compose = function (functions) {

    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
        }
        return x
    };
};

// ejemplo con funciones matematicas 

const sumar1 = x => x + 1;
const multiplicar2 = x => x * 2;
const restar3 = x => x - 3;

const funcionesMatematicas = [sumar1, multiplicar2, restar3];
const resultadoMat = compose(funcionesMatematicas);
console.log(resultadoMat(5));

// ejemplo con strings

const addAmiracion = str => str + "!"
const dejarTodoMayuscula = str => str.toUpperCase();
const agregarContenido = str => "Hello, " + str;

const funcionesString = [addAmiracion, dejarTodoMayuscula, agregarContenido];
const oracion = compose(funcionesString);
console.log(oracion("word"));