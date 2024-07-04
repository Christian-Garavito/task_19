const filter = function (arr, fn) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newarr.push(arr[i]);
        }
    }
    return newarr
};

// ejemplo

// filtar los numeros pares
const esPar = function (elemento) {
    return elemento % 2 === 0;
}

const arr = [1,2,3,4,5,6];
const filtrarpares = filter(arr,esPar);
console.log(filtrarpares);


// filtar si es mayor a 3

const mayor3 = function(elemento){
    return elemento > 3;
};
const filtrar3 = filter(arr,mayor3);
console.log(filtrar3);