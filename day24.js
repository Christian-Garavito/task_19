const sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))

};

// ejemplo 

const numeros = [5, -3, 2, -8, 9, -1];

// obtener el valor absoluto
const getValorAbsoluto = num => Math.abs(num);

// obtener el orden 
const ordenar = sortBy(numeros, getValorAbsoluto);

console.log(ordenar);