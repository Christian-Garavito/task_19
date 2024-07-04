const map = function (arr, fn) {
    const newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = fn(arr[i], i)
    }
    return newarr

};

// funcion que duplica cada elemento
const doble = function (elemento) {
    return elemento * 2;
};

const arr = [1, 2, 3, 4];
const resultado = map(arr, doble);
console.log(resultado);

// funcion para sumar el idice a elemento
const addIndex = function (elemento, index) {
    return elemento + index;
};

const resultadoConIdex = map(arr, addIndex);
console.log(resultadoConIdex);