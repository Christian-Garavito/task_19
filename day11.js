function memoize(fn) {
    let cache = {}
    return function (...args) {
        let n = JSON.stringify(args)
        if (n in cache) {
            return cache[n]
        } else {
            let result = fn.apply(this, args)
            cache[n] = result
            return result
        }

    }
}

// funcion para factorizar numeros 
function factoriarnumero(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factoriarnumero(n - 1);
}

const memorisarfactorial = memoize(factoriarnumero);

console.log(memorisarfactorial(5));
console.log(memorisarfactorial(5));