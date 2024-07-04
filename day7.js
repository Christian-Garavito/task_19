const reduce = function (nums, fn, init) {
    let total = init
    for (let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i])
    }
    return total
}

// funcion para sumar todos los numeros de un arry
const suma = function (acumulado, valorActual) {
    return acumulado + valorActual;
};

const nums = [1, 2, 3, 4];
const sumarNums = reduce(nums, suma, 0);
console.log(sumarNums);

// funcion multiplicar elementos
const multiplicarElementos = function (acumulado, valorActual) {
    return acumulado * valorActual;
};

const resultMul = reduce(nums, multiplicarElementos, 1);
console.log(resultMul);